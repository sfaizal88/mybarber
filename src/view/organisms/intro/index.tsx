import toolsImage from '../../../assets/img/main/tools.jpg';
import aboutImage from '../../../assets/img/main/about-1.jpg';

type IntroType = {
    hideExtra?: boolean;
};

const Intro = ({
    hideExtra
}: IntroType) => {

    return (
        <>
            <section className="about section-padding" data-scroll-index="1">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 mb-30" style={{textAlign: 'left'}}>
                            <div className="section-head mb-20">
                                <div className="section-subtitle">Since 2021</div>
                                <div className="section-title">The Socio Barber</div>
                            </div>
                            <p>Welcome to Socio Barber: Where style meets inclusivity. We're driven by a passion for inclusivity, beauty, and self-discovery. Founded by Sandeep Kumar in 2021, our mission is to make top-notch grooming services accessible for all. Socio Barber believes in affordability without compromising excellence.</p>
                            <p>Here, everyone deserves to look and feel their best. Feel yourself in the serene ambiance inside our salon, where the buzz of clippers blends with the laughter and happiness of our clientele. It is more than just a haircut, it's an experience you need to relive in person.</p>
                            <ul className="about-list list-unstyled mb-30">
                                <li>
                                    <div className="about-list-icon"> <span className="ti-check"></span> </div>
                                    <div className="about-list-text">
                                        <p>Professional barbers, certified and skilled for you.</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="about-list-icon"> <span className="ti-check"></span> </div>
                                    <div className="about-list-text">
                                        <p>Perfect looks with quality grooming products.</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="about-list-icon"> <span className="ti-check"></span> </div>
                                    <div className="about-list-text">
                                        <p>Your satisfaction matters the most. We truly care!</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="about-list-icon"> <span className="ti-check"></span> </div>
                                    <div className="about-list-text">
                                        <p>Quick and skilled: No compromise on excellence.</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="about-list-icon"> <span className="ti-check"></span> </div>
                                    <div className="about-list-text">
                                        <p>Stay fresh with the latest, trendsetting styles.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="col col-md-3 animate-box" data-animate-effect="fadeInUp"> 
                            <img  src={toolsImage} alt="" className="mt-90 mb-30" width={200} height={83}/> 
                        </div>
                        <div className="col col-md-3 animate-box" data-animate-effect="fadeInUp"> 
                            <img  src={aboutImage} alt="" width={200} height={83}/> 
                        </div>
                    </div>
                </div>
            </section>
            {!hideExtra && <section className="services-box section-padding pt-0">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="item"> <span className="icon icon icon-icon-1-6"></span>
                                <div className="cont">
                                    <h5>Cuts</h5>
                                    <p>Snip, snip, hooray! At Socio Barber, we're changing the game with fabulous cuts. Step in for transformation that will leave you turning heads wherever you go. Fall in awe, everytime.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="item"> <span className="icon icon-icon-1-3"></span>
                                <div className="cont">
                                    <h5>Fades</h5>
                                    <p>Fade in, standout! Elevate your style at Socio Barber. Our fades are designed to make you look sharp and on-point. Walk in for a style that wins hearts. You’ll love yourself even more.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="item"> <span className="icon icon-icon-1-1"></span>
                                <div className="cont">
                                    <h5>Shaves</h5>
                                    <p>Clean shaves, sharp vibes. Let your face do the talking. We craft shaves that speak volumes. Your journey to a clean and stylish look starts here, starts now.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>}
        </>
    )
}

export default Intro;