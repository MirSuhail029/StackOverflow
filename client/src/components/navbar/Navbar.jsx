import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/SO logo.png';
import Search from '../../assets/search icon.png'
import Avatar from '../avatar/Avatar'
import './Navbar.css'

const Navbar=()=>{
    let user=null;
    return(
        <nav className='main-nav'>
            <div className='navbar'>
                <Link to='/' className='nav-item nav-btn'>
                    <img src={logo} alt='logo' width='150px' />
                </Link>
                <Link to='/' className='nav-item nav-btn'>About</Link>
                <Link to='/' className='nav-item nav-btn'>Products</Link>
                <Link to='/' className='nav-item nav-btn'>Teams</Link>
                <form >
                    <input type="text" placeholder='Search..' />
                    <img src={Search} alt="Search Icon" width='20px' className='search-icon'/>
                </form>
                {user === null ? 
                    <Link to='/Auth' className='nav-item nav-links' >Log In</Link>:
                    <>
                        <Avatar backgroundColor='#009dff' px='10px' py='7px' borderRadius='50%' color='white' ><Link to="/User" style={{color:'white', textDecoration:'none'}}>M</Link></Avatar>
                        <button className='nav-item nav-links'>Log Out</button>
                    </>
                }
            </div>
        </nav>
    )
}

export default Navbar;