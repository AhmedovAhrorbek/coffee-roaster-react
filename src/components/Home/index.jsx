import { Fragment } from "react"
import Header from "../Header";
import Footer from '../Footer';
import OurCollationBox from '../../assets/images/homeImg/kopi1 copy.svg';
import CoffeIcon from '../../assets/images/homeImg/coffee-bean.png';
import GiftIcon from '../../assets/images/homeImg/gift.png';
import TruckIcon from '../../assets/images/homeImg/truck.png';
import YellowLine from '../../assets/images/homeImg/yellow-line.png';
import './home.scss';
import { Link } from "react-router-dom";
const Home = () => {
  return (
     <Fragment>
          <Header />
          <div className="container">
              <div className="site__hero">
                <h1 className="site__hero--title">Great coffee made simple.</h1>
                <p className="site__hero--subtitle">Start your mornings with the world’s best coffees. Try our expertly curated artisan coffees from our best roasters delivered directly to your door, at your schedule.</p>
                <Link to='/createplan' className="site__hero--btn">Create your plan</Link>
              </div>
              <div className="site__ourcollaction">
                <div className = "site__ourcollaction--cards">             
                  <div className="site__ourcollaction--card">
                      <img className="site__ourcollaction--card-box" src={OurCollationBox} alt="box" width={255} height={193} />
                      <h2  className="visually-hidden">Our Collaction box</h2>
                      <h3 className="site__ourcollaction--card-title">Gran Espresso</h3>
                      <p className="site__ourcollaction--card-text">Light and flavorful blend with cocoa and black pepper for an intense experience.</p>
                  </div>
                  <div className="site__ourcollaction--card">
                      <img className="site__ourcollaction--card-box" src={OurCollationBox} alt="box" width={255} height={193} />
                      <h2  className="visually-hidden">Our Collaction box</h2>
                      <h3 className="site__ourcollaction--card-title">Planalto</h3>
                      <p className="site__ourcollaction--card-text">Brazilian dark roast with rich and velvety body, and hints of fruits and nuts.</p>
                  </div>
                  <div className="site__ourcollaction--card">
                      <img className="site__ourcollaction--card-box" src={OurCollationBox} alt="box" width={255} height={193} />
                      <h2  className="visually-hidden">Our Collaction box</h2>
                      <h3 className="site__ourcollaction--card-title">Piccollo</h3>
                      <p className="site__ourcollaction--card-text">Mild and smooth blend featuring notes of toasted almond and dried cherry.</p>
                  </div>
                  <div className="site__ourcollaction--card">
                      <img className="site__ourcollaction--card-box" src={OurCollationBox} alt="box" width={255} height={193} />
                      <h2  className="visually-hidden">Our Collaction box</h2>
                      <h3 className="site__ourcollaction--card-title">Danche</h3>
                      <p className="site__ourcollaction--card-text">Ethiopian hand-harvested blend densely packed with vibrant fruit notes.</p>
                  </div>
                </div>
              </div>
              <div className="site__questions">
                  <h2 className="site__questions--title">Why choose us?</h2>
                  <p className="site__questions--subtitle">A large part of our role is choosing which particular coffees will be featured 
                       in our range. This means working closely with the best coffee growers to give 
                       you a more impactful experience on every level.
                  </p>
                  <div className="site__questions--cards">
                      <div className="site__questions--card">
                         <img src={CoffeIcon} alt="coffee icon " width={71} height={72} />
                         <h4 className="site__questions--card-title">Best quality</h4>
                         <p className="site__questions--card-text">Discover an endless variety of the world’s best artisan coffee from each of our roasters.</p>
                      </div>
                       <div className="site__questions--card">
                         <img src={GiftIcon} alt="gift icon " width={72} height={72} />
                         <h4 className="site__questions--card-title">Best quality</h4>
                         <p className="site__questions--card-text">Discover an endless variety of the world’s best artisan coffee from each of our roasters.</p>
                      </div>
                       <div className = "site__questions--card" >
                         <img className="site__questions--card-img" src={TruckIcon} alt="truck icon " width={72} height={50} />
                         <h4 className="site__questions--card-title">Best quality</h4>
                         <p className="site__questions--card-text">Discover an endless variety of the world’s best artisan coffee from each of our roasters.</p>
                      </div>
                  </div>
              </div>
              <div className="site__manual">
                 <h5 className="site__manual--question">How it works</h5>
                 <img className="site__manual--line" src={YellowLine} alt="yellow line" />
                 <div className="site__manual--cards">
                    <div className="site__manual--card">
                       <span className="site__manual--card-circle"></span>
                       <span className="site__manual--card-number">01</span>
                       <h3 className="site__manual--card-title">Pick your coffee</h3>
                       <p className="site__manual--card--subtitle">Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out.</p>
                    </div>
                    <div className="site__manual--card">
                       <span className="site__manual--card-circle"></span>
                       <span className="site__manual--card-number">02</span>
                       <h3 className="site__manual--card-title">Choose the frequency</h3>
                       <p className="site__manual--card--subtitle">Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal.</p>
                    </div>
                    <div className="site__manual--card">
                       <span className="site__manual--card-circle"></span>
                       <span className="site__manual--card-number">03</span>
                       <h3 className="site__manual--card-title">Receive and enjoy!</h3>
                       <p className="site__manual--card--subtitle">We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world-class coffees curated to provide a distinct tasting experience.</p>
                    </div>
                 </div>
                 <Link to='/createplan' className="site__manual--btn">Create your plan</Link>
              </div>

          </div>
          <Footer />
     </Fragment>
  )
}

export default Home
