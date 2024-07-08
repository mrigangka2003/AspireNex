import express from 'express';
import puppeteer from 'puppeteer';
import dotenv from 'dotenv';
import cors from 'cors'; // Import cors for handling CORS headers

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(express.json()); // Parse JSON bodies
app.use(cors()); // Enable CORS for all routes

// Function to scrape Amazon
async function scrapeAmazon(page) {
    return await page.evaluate(() => {
        const title = document.querySelector('#productTitle, .a-size-large.product-title-word-break')?.innerText.trim();
        const price = document.querySelector('.a-price .a-offscreen, .priceBlockBuyingPriceString')?.innerText;
        const imageUrl = document.querySelector('#imgTagWrapperId img, #landingImage')?.src;
        const rating = document.querySelector('.a-icon-alt')?.innerText;
        const reviews = document.querySelector('#acrCustomerReviewText, .a-size-base.totalReviewCount')?.innerText;
        // Extract specifications from the feature bullets section
        const specs = {};
        const featureBullets = document.querySelectorAll('#feature-bullets .a-list-item');
        featureBullets.forEach((item, index) => {
            specs[`Feature ${index + 1}`] = item.innerText.trim();
        });

        return {
            title,
            price,
            imageUrl,
            rating,
            reviews,
            specs
        };
    });
}

// Function to scrape Flipkart
async function scrapeFlipkart(page) {
    return await page.evaluate(() => {
      const title = document.querySelector('.VU-ZEz')?.innerText.trim(); 
      const price = document.querySelector('.Nx9bqj.CxhGGd')?.innerText.trim();
      const imageUrl = document.querySelector('._8id3KM img.DByuf4')?.src;
  
      const rating = document.querySelector('.col.pPAw9M .ipqd2A')?.innerText.trim();
      const reviews = document.querySelector('._2_R_DZ')?.innerText.trim();
  
      // Extract specifications
      const specs = {};
      document.querySelectorAll('tr').forEach(item => {
        const key = item.querySelector('td:first-child')?.innerText.trim();
        const value = item.querySelector('td:last-child')?.innerText.trim();
        if (key && value) {
          specs[key] = value;
        }
      });
  
      return {
        title,
        price,
        imageUrl,
        rating,
        reviews,
        specs
      };
    });
}

// Function to scrape Myntra
async function scrapeMyntra(page) {
    return await page.evaluate(() => {
        const title = document.querySelector('.pdp-title')?.innerText.trim();
        const price = document.querySelector('.pdp-price')?.innerText.trim();
        const imageUrl = document.querySelector('.pdp-image img')?.src;
        const rating = document.querySelector('.index-overallRating > div:first-child')?.innerText.trim();
        const reviews = document.querySelector('.index-ratingsCount')?.innerText.trim();

        const specs = {};
        document.querySelectorAll('.index-tableContainer .index-row').forEach((row, index) => {
            const key = row.querySelector('.index-rowKey')?.innerText.trim();
            const value = row.querySelector('.index-rowValue')?.innerText.trim();
            if (key && value) {
                specs[`Feature ${index + 1}`] = `${key}: ${value}`;
            } else if (key || value) {
                specs[`Feature ${index + 1}`] = key || value;
            }
        });

        return {
            title,
            price,
            imageUrl,
            rating,
            reviews,
            specs
        };
    });
}

// Function to scrape product based on URL
async function scrapeProduct(url) {
    const browser = await puppeteer.launch({
        headless: true,
        args: [
            '--disable-http2',
            '--no-sandbox',
            '--disable-setuid-sandbox',
        ],
    });
    const page = await browser.newPage();

    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36');
    await page.setViewport({ width: 1280, height: 800 });

    await page.goto(url, { waitUntil: 'networkidle2' });

    let productData;
    if (url.includes('amazon')) {
        productData = await scrapeAmazon(page);
    } else if (url.includes('flipkart')) {
        productData = await scrapeFlipkart(page);
    } else if (url.includes('myntra')) {
        productData = await scrapeMyntra(page);
    } else {
        throw new Error('Unsupported website');
    }

    await browser.close();
    return productData;
}

// Route to scrape product data
app.post('/', async (req, res) => {
    const { url } = req.body;
    if (!url) {
        return res.status(400).json({ error: "URL is required" });
    }

    try {
        const productData = await scrapeProduct(url);
        res.json(productData);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Failed to scrape product data' });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
