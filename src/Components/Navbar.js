import {Link } from 'react-router-dom';
function Navbar(){
return (
    <nav>
    <Link to='/' className="logo">Harman</Link>
    <div className='links'>
        <Link  to='/about' className='main'>About me</Link>
        <Link  to='/projects' className='main'>Projects</Link>
        <Link  to='/contact' className="contact-me">Contact me</Link>

    </div>
    </nav>
)
}
export default Navbar;