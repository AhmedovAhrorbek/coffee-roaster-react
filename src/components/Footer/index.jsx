import { Fragment } from "react";
import './footer.scss';
import LightLogo from '../../assets/images/homeImg/logo-light.png';
import FacebookIcon from '../../assets/icons/HomeIcons/1269914_facebook_social_social media_icon.png';
import TwitterIcon from '../../assets/icons/HomeIcons/5305172_tweet_twitter_twitter logo_icon.png';
import InstagramIcon from '../../assets/icons/HomeIcons/8666297_instagram_square_icon.png';
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <Fragment>
       <div className="container">
          <div className="site__footer">
              <div className="site__footer--logo">
                 <a href="../Home">
                     <img src={LightLogo} alt="ligth logo" width={236} height={26} />
                 </a>
              </div>

              <ul className="site__footer--list">
                 <li className="site__footer--item">
                    <Link to="/home" > HOME </Link>
                 </li>
                 <li className="site__footer--item">
                    <Link to='/about'>ABOUT US</Link>
                 </li>
                 <li className="site__footer--item">
                    <Link to='/createplan'>Create your plan</Link>
                 </li>
              </ul>

              <div className="site__footer--logolist">
                  <a href="https://www.facebook.com/" target="blank">
                      <img src={FacebookIcon} alt="Facebook" width={25} height={25} />
                  </a>
                  <a href="https://twitter.com/i/flow/login" target="blank">
                      <img src={TwitterIcon} alt="Twitter"  width={25} height={25} />
                  </a>
                  <a href="https://www.instagram.com/accounts/login/" target="blank">
                      <img src={InstagramIcon} alt="Instagram"   width={25} height={25}/>
                  </a>
              </div>
          </div>
       </div>
    </Fragment>
  )
}

export default Footer
