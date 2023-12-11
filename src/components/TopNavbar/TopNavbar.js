import * as React from 'react';
import './TopNavbar.scss';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Logo from '../../assets/images/logo.jpg';
import menuItems from './MenuItems.json';
import LinkButton from '../LinkButton/LinkButton';
import MenuIcon from '@mui/icons-material/Menu';

const TopNavbar = () => {

  const [showMenu, setShowMenu] = React.useState(false);

  return (
    <>
      <Box className={`top-navbar ${showMenu && 'opened'}`}>
        <Box className="logo">
          <Link href="/">
            <img src={Logo} alt="Logo" />
          </Link>
        </Box>

        <Box className="menu-bar">
          <ul>
            {
              menuItems.map((item, index) => (
                <li key={index}><Link href={item.url}>{item.menuItem}</Link></li>
              ))
            }
          </ul>
        </Box>
        <Box className="member-area">
          <LinkButton 
            variant="grey"
            label="Log In"
            url="/login"
          />

          <LinkButton 
            variant="primary"
            label="Try for free"
            url="/try-for-free"
          />

          <div className="hamburger" onClick={() => setShowMenu(!showMenu)}>
            <MenuIcon />
          </div>
        </Box>
      </Box>
    </>
  );
}
export default TopNavbar;