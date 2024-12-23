// GENERIC IMPORT
import {useContext} from 'react';
import {useNavigate} from 'react-router-dom';

// ROUTER IMPORT
import * as PATH from '../../routes/constants';

// CONTEXT
import { menuContext, MENU_ACTION_TYPE } from '../../../contexts/useMenuContext';

const ServiceOffered = () => {

    // NAVBAR
    const navigate = useNavigate();

    // CONTEXTS
    const context = useContext(menuContext);

    const openPricePage = (productId: string) => {
        navigate(PATH.PRICING_PATH, { state: { productId } });
        context?.dispatch({ type: MENU_ACTION_TYPE.UPDATE, payload: PATH.PRICING_PATH });
    }

    return (
        <section className="services-1 section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="section-head text-center">
                            <div className="section-subtitle">Our Services</div>
                            <div className="section-title">We Also Offer</div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4" onClick={() => openPricePage('haircut')}>
                        <div className="item">
                            <span className="icon icon-icon-1-22"></span>
                                <h5>Haircut</h5>
                                <p>Need a new haircut but can't decide? Don't sweat it! Our stylists are magic with scissors and will craft the perfect look for your face and mood. Come chat and get a cut!</p>
                                <div className="shape"> <span className="icon icon-icon-1-22"></span> </div>
                            
                        </div>
                    </div>
                    <div className="col-md-4" onClick={() => openPricePage('beard')}>
                        <div className="item">
                            <span className="icon icon-icon-1-3"></span>
                                <h5>Beard</h5>
                                <p>Tame that wild mane of facial hair (we've all been there ) with a beard trim that will instill confidence in the way you feel. Polished beard, polished life is what clicks.</p>
                                <div className="shape"> <span className="icon icon-icon-1-3"></span> </div>
                            
                        </div>
                    </div>
                    <div className="col-md-4" onClick={() => openPricePage('oilMassage')}>
                        <div className="item">
                            <span className="icon icon-icon-1-8"></span>
                                <h5>Oil Massage</h5>
                                <p>Stress melting away like butter on toast? That's what happens with our relaxing oil massages. Escape the daily grind and find your inner zen with our soothing massage.</p>
                                <div className="shape"> <span className="icon icon-icon-1-8"></span> </div>
                            
                        </div>
                    </div>
                    <div className="col-md-4" onClick={() => openPricePage('hairScalpTreatment')}>
                        <div className="item">
                            <span className="icon icon-icon-1-7"></span>
                                <h5>Hair & Scalp treatment</h5>
                                <p>Hair feeling dull and lifeless? Give it some TLC with our nourishing hair and scalp treatment. Get ready for shiny, healthy locks that bounce like nobody's business!</p>
                                <div className="shape"> <span className="icon icon-icon-1-7"></span> </div>
                            
                        </div>
                    </div>
                    <div className="col-md-4" onClick={() => openPricePage('coloring')}>
                        <div className="item">
                            <span className="icon icon-icon-1-10"></span>
                                <h5>Coloring</h5>
                                <p>Tired of boring brown? Spice things up with some sassy highlights, balayage, or even dip your toes into the rainbow! We'll turn your hair into a masterpiece. ‍</p>
                                <div className="shape"> <span className="icon icon-icon-1-10"></span> </div>
                            
                        </div>
                    </div>
                    <div className="col-md-4" onClick={() => openPricePage('bleachDetan')}>
                        <div className="item">
                            <span className="icon icon-icon-1-21"></span>
                                <h5>Bleach / Detan</h5>
                                <p>Brassy blonde got you down? We'll banish those orange tones and have your platinum gleaming like a disco ball. Bye-bye brass, hello bombshell to a new version.</p>
                                <div className="shape"> <span className="icon icon-icon-1-21"></span> </div>
                            
                        </div>
                    </div>
                    <div className="col-md-4" onClick={() => openPricePage('faceCleanup')}>
                        <div className="item">
                            <span className="icon icon-icon-1-20"></span>
                                <h5>Face Cleanup</h5>
                                <p>Feeling the need for a deep clean? Our face cleanup treatment is like a spring cleaning for your pores. Get rid of the gunk and hello, glowing goddess. And look so good. </p>
                                <div className="shape"> <span className="icon icon-icon-1-20"></span> </div>
                            
                        </div>
                    </div>
                    <div className="col-md-4" onClick={() => openPricePage('beautyFacial')}>
                        <div className="item">
                            <span className="icon icon-icon-1-17"></span>
                                <h5>Beauty Facial</h5>
                                <p>Skin feeling dull and tired? Give it a spa day with our rejuvenating facials! We'll pamper your pores with masks, massages, and more. Get ready for that post-facial glow!</p>
                                <div className="shape"> <span className="icon icon-icon-1-17"></span> </div>
                            
                        </div>
                    </div>
                    <div className="col-md-4" onClick={() => openPricePage('chemicalTreatment')}>
                        <div className="item">
                            <span className="icon icon-icon-1-19"></span>
                                <h5>Chemical Treatment</h5>
                                <p>Tame those frizzy flyaways with safe treatments and kiss goodbye to bad hair days forever! Smooth, sleek locks will be your new reality. Trust our guided experts.</p>
                                <div className="shape"> <span className="icon icon-icon-1-19"></span> </div>
                            
                        </div>
                    </div>
                    <div className="col-md-4" onClick={() => openPricePage('makeupHairStyling')}>
                        <div className="item">
                            <span className="icon icon-icon-1-13"></span>
                                <h5>Makeup & Hair styling</h5>
                                <p>Big date or fancy event? Let us transform you from caterpillar to dazzling butterfly with our expert makeup and hair styling. Red carpet, here you come and dazzle every design.</p>
                                <div className="shape"> <span className="icon icon-icon-1-13"></span> </div>
                            
                        </div>
                    </div>
                    <div className="col-md-4" onClick={() => openPricePage('pedicureManicure')}>
                        <div className="item">
                            <span className="icon icon-icon-1-2"></span>
                                <h5>Pedicure & Manicure</h5>
                                <p>From tip to toe, we've got your pampering needs covered with vibrant massages, and flawless finishes. Walk out feeling like a million bucks, fingernail to toenail.</p>
                                <div className="shape"> <span className="icon icon-icon-1-2"></span> </div>
                            
                        </div>
                    </div>
                    <div className="col-md-4" onClick={() => openPricePage('beard')}>
                        <div className="item">
                            <span className="icon icon-icon-1-1"></span>
                                <h5>Moustache Trim</h5>
                                <p>Our trims are like Michelangelo's for moustaches . Channel your inner James Bond with a precision trim that'll leave you looking sharp enough to melt ice with a stare.</p>
                                <div className="shape"> <span className="icon icon-icon-1-1"></span> </div>
                            
                        </div>
                    </div>
                    <div className="col-md-4" onClick={() => openPricePage('combo')}>
                        <div className="item">
                            <span className="icon icon-icon-1-22"></span>
                                <h5>Combo</h5>
                                <p>A variety of grooming packages with haircuts, beard trims, and skin treatments for a fresh look.</p>
                                <div className="shape"> <span className="icon icon-icon-1-1"></span> </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ServiceOffered;