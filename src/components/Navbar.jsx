
import { Link } from 'react-router-dom'

const Navbar = () => {
 

  return (
    <div className='navbar'>
        <div className="logo">
            Movie App
        </div>
        <div className="menus">
            <ul className='menu'>
            <li>
            <Link to='/'>Home</Link>
            <Link to='/watchlist'>Watchlist</Link>
            <Link to='/contact'>Contact</Link>

            </li>

            </ul>
        </div>
    </div>
  )
}

export default Navbar