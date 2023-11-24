import { Component} from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'



   

class Navbar extends Component{

    state = { clicked: false };
    handleClick = () =>{
        this.setState({ clicked: !this.state.clicked})
    }
    render() {
        return (
            <nav className='NavbarItems'>
                {/* <img className='logo' src="https://cdn.vectorstock.com/i/preview-1x/81/22/qr-initial-letter-colorful-logo-icon-design-vector-34578122.jpg" alt="" /> */}
                <img  className="logo" src="./images/qr.png" alt="" />
                <img  className="sm" src="./images/heading.png" alt="" />
            {/* <img className='name'  src="./images/name1.png" alt="" /> */}
    
               

                <div className='menu-icons' onClick={this.handleClick}>
                    <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
                </div>


                <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
                    <li>
                        <Link className='nav-links' to='/'>
                        <i class="fa-solid fa-house-user"></i>Home
                        </Link>
                    </li>
                    <li>
                        <Link  className='nav-links'to='/about'>
                        <i class="fa-solid fa-circle-info"></i>About
                        </Link>
                    </li>
                    
                    <li>
                        <Link className='nav-links' to='/contact'>
                        <i class="fa-solid fa-address-book"></i>Contact
                        </Link>
                    </li>

                    <li>
                        <Link className='nav-links' to='/solutions'>
                        <i class="fa-solid fa-thumbs-up"></i>Solutions
                        </Link>
                    </li>
                    <li>
                        <Link className='nav-links' to='/try'>
                        <i class="fa-solid fa-qrcode"></i>Try it
                        </Link>
                    </li>
                    
                    
                    <li>
                    <Link className='nav-links' to='/Login'>
                        <i class="fa-solid fa-address-book">Login/Signup</i>
                        </Link>
                       
                    </li>
                    
                    
                    
                </ul>
            </nav>
        )
    }
}



export default Navbar;