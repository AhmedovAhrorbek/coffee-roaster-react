import './about.scss';
import Header from '../Header';
import Footer from '../../components/Footer';
import LeftSideImg from '../../assets/images/aboutImg/Bitmap (1).jpg';
import RigthSideImf from '../../assets/images/aboutImg/notborder-bitmap.png';
import Location1 from '../../assets/images/aboutImg/Combined Shape (1).png';
import Location2 from '../../assets/images/aboutImg/Combined Shape (2).png';
import Location3 from '../../assets/images/aboutImg/Combined Shape (3).png';
import { Fragment } from 'react';
const About = () => {
  return (
     <Fragment>
           <Header />
           <div className="container">
              <div className="site__about--hero">
                 <h2 className='site__about--hero-title'>About Us</h2> 
                 <p className='site__about--hero-text'>Coffeeroasters began its journey of exotic discovery in 1999, highlighting stories of coffee from around the world. We have since been dedicated to bring the perfect cup - from bean to brew - in every shipment.</p>
              </div>
              <div className='site__commitment'>
                  <div className="site__commitment--start">
                      <img src={LeftSideImg} alt="left side" width={445} height={520} />
                  </div>
                  <div className='site__commitment--end'>
                     <h3 className='site__commitment--end-title'>Our commitment</h3>
                     <p className='site__commitment--end-subtitle'>We’re built on a simple mission and a commitment to doing good along the way. We want to make it easy for you to discover and brew the world’s best coffee at home. It all starts at the source. To locate the specific lots we want to purchase, we travel nearly 60 days a year trying to understand the challenges and opportunities in each of these places. We collaborate with exceptional coffee growers and empower a global community of farmers through with well above fair-trade benchmarks. We also offer training, support farm community initiatives, and invest in coffee plant science. Curating only the finest blends, we roast each lot to highlight tasting profiles distinctive to their native growing region.</p>
                  </div>
              </div>
              <div className="site__quality">
                 <div className="site__quality--leftside">
                    <h2 className='site__quality--leftside-title'>Uncompromising quality</h2>
                    <p className='site__quality--leftside-text' >
                        Although we work with growers who pay close attention to all stages of harvest and processing, we employ, on our end, a rigorous quality control program to avoid over-roasting or baking the coffee dry. Every bag of coffee is tagged with a roast date and batch number. Our goal is to roast consistent, user-friendly coffee, so that brewing is easy and enjoyable.
                    </p>
                 </div>
                 <div className="site__quality--rigthside">
                     <img src={RigthSideImf} alt="rigth side img" width={445}  height={447}/>
                 </div>
              </div>
              <div className='site__location'>
                  <h3 className='visually-hidden'>Our headquarters</h3>
                  <h4 className='site__location-title'>Our headquarters</h4>
                  <div className="site__location--cards">
                       <div className="site__location--card">
                           <img src={Location1} alt="map" width={40} height={49} />
                           <h3 className='site__location--card-title'>United Kingdom</h3>
                           <p  className='site__location--card-text'> 
                              68 Asfordby Rd <br />
                              Alcaston <br />
                              SY6 1YA <br />
                              +44 1241 918425 
                           </p>
                       </div>
                       <div className="site__location--card">
                           <img src={Location2} alt="map" width={51} height={49} />
                           <h3 className='site__location--card-title'>Canada</h3>
                           <p  className='site__location--card-text'> 
                             1528  Eglinton Avenue <br />
                              Toronto <br />
                              Ontario M4P 1A6 <br />
                              +1 416 485 2997
                           </p>
                       </div>
                       <div className="site__location--card">
                           <img src={Location3} alt="map" width={48} height={43} />
                           <h3 className='site__location--card-title'>Australia</h3>
                           <p  className='site__location--card-text'> 
                            36 Swanston Street <br />
                                 Kewell <br />
                                 Victoria <br />
                                 +61 4 9928 3629
                           </p>
                       </div>
                  </div>
              </div>
           </div>
           <Footer />
     </Fragment>
  )
}

export default About
