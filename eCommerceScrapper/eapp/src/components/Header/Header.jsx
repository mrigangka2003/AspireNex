const Header = () => {
    return (
      <div className="text-white">
          <header className="py-2 shadow-sm shadow-gray-200/10 sticky top-0 z-50 bg-slate-900">
              <nav className="flex justify-between flex-wrap items-center px-4"> 
                  <div>
                      <h1 className="text-lg">Webwise</h1>
                  </div>
  
                  <ul className="flex justify-center items-center">
                      <li className="px-2 text-sm">
                          Home
                      </li>
                      <li className="px-2 text-sm">
                          Products
                      </li>
                  </ul>
  
              </nav>
          </header>
      </div>
    )
  }
  
  export default Header
  