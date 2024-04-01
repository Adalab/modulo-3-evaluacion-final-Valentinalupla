import Logo from "../images/logo.png";
import '../scss/components/Header.scss';


function Header() {
  return (
    <header className='logo'>
       <img src={Logo} alt={Logo}/>
    </header>

  )
}

export default Header;
