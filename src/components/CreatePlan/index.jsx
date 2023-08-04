import './createplan.scss';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import YellowLine from  '../../assets/images/homeImg/yellow-line.png';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';

const CreatePlan = () => {
  return (
     <Fragment>
         <Header />
         <div className="container">
            <div className="site__createplan--hero">
              <h2 className='site__createplan--hero-title'>Create a plan</h2>
              <p className='site__createplan--hero-subtitle'>Build a subscription plan that best fits your needs. We offer an assortment of the best artisan coffees from around the globe delivered fresh to your door.</p>
            </div>
            <div className="site__createplan--question">
               <img className="site__createplan--question-line" src={YellowLine} alt="yellow line" />
               <div className="site__createplan--question-cards">
                 <div className="site__createplan--question-card">
                    <span className='site__createplan--question-card-circle'></span>
                    <span className='site__createplan--question-card-number'>01</span>
                    <h3 className='site__createplan--question-card-title'>Pick your coffee</h3>
                    <p  className = 'site__createplan--question-card-text' > Select from our evolving range of artisan coffees.Our beans are ethically
                        sourced and we pay fair prices for them. There are new coffees in all profiles 
                        every month for you to try out.</p>
                 </div>
                 <div className="site__createplan--question-card">
                    <span className='site__createplan--question-card-circle'></span>

                    <span className='site__createplan--question-card-number'>02</span>
                    <h3 className='site__createplan--question-card-title'>Choose the frequency</h3>
                    <p  className = 'site__createplan--question-card-text' > Customize your order frequency, quantity, even your roast style and grind type.Pause, skip or cancel your subscription with no commitment through our online portal.
                        </p>
                 </div>
                 <div className="site__createplan--question-card">
                    <span className='site__createplan--question-card-circle'></span>

                    <span className='site__createplan--question-card-number'>03</span>
                    <h3 className='site__createplan--question-card-title'>Receive and enjoy!</h3>
                    <p  className = 'site__createplan--question-card-text' > We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world-class coffees curated to provide a distinct tasting experience. </p>
                 </div>
               </div>
            </div>
            <div className='site__createplan--types '>
               <ul className="site__createplan--types-start">
                  <li> <span className='site__createplan--types-start-span'>01</span> Preferences</li>
                  <li> <span className='site__createplan--types-start-span'>02</span> Bean Type</li>
                  <li><span className='site__createplan--types-start-span'>03</span> Quantity</li>
                  <li><span className='site__createplan--types-start-span'>04</span> Grind Option</li>
                  <li> <span className='site__createplan--types-start-span'>05</span> Deliveries</li>
               </ul>
             <div className="accordion accordion-flush accordion-wrapper"  id="accordionFlushExample">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingTwo">
                      <button className="accordion-button collapsed accordion-wrapper-title mb-3" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                        How do you drink your coffee ?
                      </button>
                    </h2>
                    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                      <div className="accordion-body">
                          <div className="accordion-cards">
                             <div className="accordion-card">
                                <h4 className='accordion-card-title'>Capsule</h4>
                                <p className='accordion-card-text'>Compatible with Nespresso systems and similar brewers</p>
                             </div>
                             <div className="accordion-card">
                                <h4 className='accordion-card-title'>Filter</h4>
                                <p className='accordion-card-text'>For pour over or drip methods like Aeropress, Chemex, and V60</p>
                             </div>
                             <div className="accordion-card">
                                <h4 className='accordion-card-title'>Espresso</h4>
                                <p className='accordion-card-text'>Dense and finely ground beans for an intense, flavorful experience</p>
                             </div>
                          </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingThree">
                      <button className="accordion-button collapsed accordion-wrapper-title mb-3" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                          What type of coffee ?
                      </button>
                    </h2>
                    <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                      <div className="accordion-body">
                            <div className="accordion-cards">
                             <div className="accordion-card">
                                <h4 className='accordion-card-title'>Single Origin</h4>
                                <p className='accordion-card-text'>Distinct, high quality coffee from a specific family-owned farm</p>
                             </div>
                             <div className="accordion-card">
                                <h4 className='accordion-card-title'>Decaf</h4>
                                <p className='accordion-card-text'>Just like regular coffee, except the caffeine has been removed</p>
                             </div>
                             <div className="accordion-card">
                                <h4 className='accordion-card-title'>Blended</h4>
                                <p className='accordion-card-text'>Combination of two or three dark roasted beans of organic coffees</p>
                             </div>
                          </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingThree">
                      <button className="accordion-button collapsed accordion-wrapper-title mb-3" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                        How much would you like ?
                      </button>
                    </h2>
                    <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                      <div className="accordion-body"> 
                          <div className="accordion-cards">
                             <div className="accordion-card">
                                <h4 className='accordion-card-title'>250g</h4>
                                <p className='accordion-card-text'>Perfect for the solo drinker. Yields about 12 delicious cups.</p>
                             </div>
                             <div className="accordion-card">
                                <h4 className='accordion-card-title'>500g</h4>
                                <p className='accordion-card-text'>Perfect option for a couple. Yields about 40 delectable cups.</p>
                             </div>
                             <div className="accordion-card">
                                <h4 className='accordion-card-title'>1000g</h4>
                                <p className='accordion-card-text'>Perfect for offices and events. Yields about 90 delightful cups.</p>
                             </div>
                          </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingThree">
                      <button className="accordion-button collapsed accordion-wrapper-title mb-3" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                      Want us to grind them ?
                      </button>
                    </h2>
                    <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                      <div className="accordion-body">
                            <div className="accordion-cards">
                             <div className="accordion-card">
                                <h4 className='accordion-card-title'>Wholebean</h4>
                                <p className='accordion-card-text'>Best choice if you cherish the full sensory experience</p>
                             </div>
                             <div className="accordion-card">
                                <h4 className='accordion-card-title'>Filter</h4>
                                <p className='accordion-card-text'>For drip or pour-over coffee methods such as V60 or Aeropress</p>
                             </div>
                             <div className="accordion-card">
                                <h4 className='accordion-card-title'>Cafetiére</h4>
                                <p className='accordion-card-text'>Course ground beans specially suited for french press coffee</p>
                             </div>
                          </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingThree">
                      <button className="accordion-button collapsed accordion-wrapper-title  mb-3" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                      How often should we deliver ?
                      </button>
                    </h2>
                    <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                      <div className="accordion-body">
                            <div className="accordion-cards">
                             <div className="accordion-card">
                                <h4 className='accordion-card-title'>Every week</h4>
                                <p className='accordion-card-text'>Best choice if you cherish the full sensory experience</p>
                             </div>
                             <div className="accordion-card">
                                <h4 className='accordion-card-title'> weeks</h4>
                                <p className='accordion-card-text'>For drip or pour-over coffee methods such as V60 or Aeropress</p>
                             </div>
                             <div className="accordion-card">
                                <h4 className='accordion-card-title'>Every month</h4>
                                <p className='accordion-card-text'>Course ground beans specially suited for french press coffee</p>
                             </div>
                          </div>
                      </div>
                    </div>
                  </div>
             </div>
            </div>

            <div  className='site__order'>
               
                  <button type="button" className="site__order--btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Order Summary
                  </button>
                  <p className='site__order-summary'>“I drink my coffee as <span>Filter</span>, with a <span>Decaf</span> type of bean. <span>250g </span> ground ala <span> Cafetiére</span>, sent to me <span>Every Week</span>.”</p>


                    <div  className = "modal fade "
                    id = "exampleModal"
                    tabIndex="-1"
                    aria-labelledby = "exampleModalLabel"
                    aria-hidden = "true" >
                      <div className="modal-dialog">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h5 className="modal-title " id="exampleModalLabel">Order Summary</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                          </div>
                          <div className="modal-body">
                             <p className='site__order-modalsummary'>“I drink my coffee as <span>Filter</span>, with a <span>Decaf</span> type of bean. <span>250g </span> ground ala <span> Cafetiére</span>, sent to me <span>Every Week</span>.”</p>
                             <p className='site__order-modaltext'>Is this correct? You can proceed to checkout or go back to plan selection if something is off. Subscription discount codes can also be redeemed at the checkout. </p>
                          </div>
                          <div className="modal-footer">
                            <button type="button" className='site-modal-close' data-bs-dismiss="modal">$14.00/ mo</button>
                            <button type="button" className="site-modal-btn"  data-bs-dismiss="modal">Checkout</button>
                          </div>
                        </div>
                      </div>
                    </div>
            </div>
            <Link to='/createplan' className='site-createplan-btn'>
                Create my plan!
            </Link>
            <Footer />
          </div>

            
         
     </Fragment>
  )
}

export default CreatePlan
