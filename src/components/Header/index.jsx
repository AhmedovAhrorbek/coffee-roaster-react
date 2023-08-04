import HeaderIcon from '../../assets/icons/HeaderIcons/logo (3).svg';
import {  Link } from 'react-router-dom';
import './header.scss'
const Header = () => {
  return (
     <div className="container">
          <div className="site__header">
               <Link className='site__header--link' to='/home'>
                  <img className='site__header--link-logo' src={HeaderIcon} alt="header icon" width={236} height={26} />
               </Link>
               <ul className="site__header--list">
                  <li className="site__header--item">
                     <Link to="/home">HOME</Link>
                  </li>
                  <li className="site__header--item">
                     <Link to='/about'>ABOUT US</Link>
                  </li>
                  <li className="site__header--item">
                     <Link to='/createplan'>Create your plan</Link>
                  </li>
               </ul>
         </div>
     </div>
  )
}

export default Header
