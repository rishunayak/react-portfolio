
import Navbar from '../Navbar/Navbar'
import './Header.css'

function Header  ()  {


  return (
    <header className='header center' id='top'>
      <h3>
     
          <a href="#home" className='link'>
            Expl◉re Me!
          </a>
       
      </h3>
      <Navbar />
    </header>
  )
}

export default Header
