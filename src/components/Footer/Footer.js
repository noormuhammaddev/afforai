import Link from '@mui/material/Link';
import Logo from '../../assets/images/logo.jpg'
import { Typography } from '@mui/material';
import productBadge from '../../assets/images/top-post-badge.svg';
import Sputnikatx from '../../assets/images/sputnikatx.png';

import './Footer.scss';

const Footer = () => {
  return(
    <footer className="footer">
      <div className="footer-about">
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>

        <Typography>Afforai is your research tool in to damn near anything. Helping you summarise, translate, and withdraw data from documents.</Typography>
        <Typography>Copyright &copy; 2023 Afforai Inc. All rights reserved.</Typography>

        <img src={productBadge} alt="productBadge"  width="195" />

        <h4>Backed by</h4>
        <img src={Sputnikatx} alt="productBadge" width="137" />
      </div>
      <div className="footer-col">
        <h4>Company</h4>
        <ul>
          <li><Link href="#">Our Story</Link></li>
          <li><Link href="#">Affiliate</Link></li>
          <li><Link href="#">Security</Link></li>
          <li><Link href="#">Roadmap</Link></li>
          <li><Link href="#">Contact Us</Link></li>
        </ul>
      </div>

      <div className="footer-col">
        <h4>Resources</h4>
        <ul>
          <li><Link href="#">Help Center</Link></li>
          <li><Link href="#">API Docs</Link></li>
          <li><Link href="#">Terms of Use</Link></li>
          <li><Link href="#">Privacy Policy</Link></li>
        </ul>
      </div>

      <div className="footer-col">
        <h4>Company</h4>
        <ul>
          <li><Link href="#">Facebook Group</Link></li>
          <li><Link href="#">LinkedIn</Link></li>
          <li><Link href="#">Twitter</Link></li>
          <li><Link href="#">Medium Blog</Link></li>
        </ul>
      </div>

      <div className="footer-col">
        <h4>Language</h4>
        <ul>
          <li><Link href="#">English</Link></li>
          <li><Link href="#">Vietnamese</Link></li>
        </ul>
      </div>
    </footer>
  )
}
export default Footer;