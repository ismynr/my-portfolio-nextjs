import NavbarLink from './NavbarLink';

export default function Navbar() {
  return  (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label  tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul  tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li><NavbarLink url="/" name="About Me"></NavbarLink></li>
            <li><NavbarLink url="/education" name="Education"></NavbarLink></li>
            <li><NavbarLink url="/experience" name="Experience"></NavbarLink></li>
            <li><NavbarLink url="/skills" name="Skills"></NavbarLink></li>
            <li><NavbarLink url="/portfolio" name="Portfolio"></NavbarLink></li>
          </ul>
        </div>
        {/* <NavbarLink url="/" name="Ismi NR" classes="btn btn-ghost normal-case text-xl"></NavbarLink> */}
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2">
          <li><NavbarLink url="/" name="About Me"></NavbarLink></li>
          <li><NavbarLink url="/education" name="Education"></NavbarLink></li>
          <li><NavbarLink url="/experience" name="Experience"></NavbarLink></li>
          <li><NavbarLink url="/skills" name="Skills"></NavbarLink></li>
          <li><NavbarLink url="/portfolio" name="Portfolio"></NavbarLink></li>
        </ul>
      </div>
      <div className="navbar-end">
          {/* <NavbarLink url="/contact" name="Contact" classes="btn"></NavbarLink> */}
      </div>
    </div>
  )
}