function Sidebar() {
  return (
    <>
      <nav className='navbar bg-body-tertiary fixed-top'>
        <div className='container-fluid'>
          <button
            className='navbar-toggler ms-0'
            type='button'
            data-bs-toggle='offcanvas'
            data-bs-target='#offcanvasNavbar'
            aria-controls='offcanvasNavbar'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div
            className='offcanvas offcanvas-start'
            tabIndex='-1'
            id='offcanvasNavbar'
            aria-labelledby='offcanvasNavbarLabel'
          >
            <div className='offcanvas-header'>
              <h5 className='offcanvas-title' id='offcanvasNavbarLabel'>
                AIM EDGE APP
              </h5>
              <button type='button' className='btn-close' data-bs-dismiss='offcanvas' aria-label='Close'></button>
            </div>
            <div className='offcanvas-body'>
              <ul className='navbar-nav justify-content-start flex-grow-1 pe-3'>
                <li className='nav-item'>
                  <a className='nav-link active' aria-current='page' href='#'>
                    Home
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='#'>
                    Link
                  </a>
                </li>
                <li className='nav-item dropdown'>
                  <a
                    className='nav-link dropdown-toggle'
                    href='#'
                    role='button'
                    data-bs-toggle='dropdown'
                    aria-expanded='false'
                  >
                    Dropdown
                  </a>
                  <ul className='dropdown-menu'>
                    <li>
                      <a className='dropdown-item' href='#'>
                        Action
                      </a>
                    </li>
                    <li>
                      <a className='dropdown-item' href='#'>
                        Another action
                      </a>
                    </li>
                    <li>
                      <hr className='dropdown-divider' />
                    </li>
                    <li>
                      <a className='dropdown-item' href='#'>
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
              <div className='mt-auto'>
                <a className='btn btn-outline-dark' href='#'>
                  Logout
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export { Sidebar }
