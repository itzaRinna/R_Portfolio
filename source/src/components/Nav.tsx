const Nav = () => {
  return (
    <header className="w-full fixed top-0 left-0 z-50 block">
         <nav className="h-12 flex justify-around items-center font-semibold mx-4">
                <div>
                    <a href="#" className="glow-on-hover md:text-lg lg:text-xl sm:text-xs">Le Convervoir.Co</a>
                </div>

                <div className="nav__menu" id="nav-menu">
                    <ul className="justify-center items-center pt-0 md:space-x-12 hidden md:flex">
                        <li className="nav__item hover-underline"><a href="#home" className="nav__link active">Home</a></li>
                        <li className="nav__item hover-underline"><a href="#about" className="nav__link">About</a></li>
                        <li className="nav__item hover-underline"><a href="#skills" className="nav__link">Skills</a></li>
                        <li className="nav__item hover-underline"><a href="#work" className="nav__link">Work</a></li>
                        <li className="nav__item hover-underline"><a href="#contact" className="nav__link">Contact</a></li>
                    </ul>
                </div>


                <div className="nav__toggle" id="nav-toggle">
                    <i className='bx bx-menu'></i>
                </div>
            </nav>
    </header>
  )
}

export default Nav