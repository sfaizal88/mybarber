import {WhatsAppWidget} from '../../atoms';

const Footer = () => {

    return (
        <footer className="footer">
            <div className="footer-top">
                <div className="container">
                    <div className="row mb-center">
                        <div className="col-md-3">
                            <div className="footer-column footer-explore clearfix">
                                <h3 className="footer-title">The Socio Barber</h3>
                                <div className="row subscribe">
                                    <div className="col-md-12">
                                        <p>From head-turning haircuts and beard sculpting to pampering massages and color transformations, cut with the coolest crew in town. Book your appointment today and let's get socio!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 offset-md-1">
                            <div className="item opening">
                                <h3 className="footer-title">Work Time</h3>
                                <ul>
                                    <li>
                                        <div className="tit">Monday</div>
                                        <div className="dots"></div> <span>07:00 am - 09:00 pm</span>
                                    </li>
                                    <li>
                                        <div className="tit">Tuesday</div>
                                        <div className="dots"></div> <span>07:00 am - 09:00 pm</span>
                                    </li>
                                    <li>
                                        <div className="tit">Wednesday</div>
                                        <div className="dots"></div> <span>07:00 am - 09:00 pm</span>
                                    </li>
                                    <li>
                                        <div className="tit">Thursday</div>
                                        <div className="dots"></div> <span>07:00 am - 09:00 pm</span>
                                    </li>
                                    <li>
                                        <div className="tit">Friday</div>
                                        <div className="dots"></div> <span>07:00 am - 09:00 pm</span>
                                    </li>
                                    <li>
                                        <div className="tit">Saturday</div>
                                        <div className="dots"></div> <span>07:00 am - 09:00 pm</span>
                                    </li>
                                    <li>
                                        <div className="tit">Sunday</div>
                                        <div className="dots"></div> <span>07:00 am - 09:00 pm</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-4 offset-md-1">
                            <div className="footer-column footer-contact">
                                <h3 className="footer-title">Contact</h3>
                                <p className="footer-contact-text mb-center">27/12A, Thiruvottiyur High Rd, Thangal, 
                                    <br/>Vasantha Nagar, Tiruchanankuppam,
                                    <br/>Chennai, Tamil Nadu 600019, India
                                </p>
                                <div className="footer-contact-info">
                                    <p className="footer-contact-phone"><a href="tel:+919500162231">+91 95001 62231</a></p>
                                    <p className="footer-contact-phone"><a href="tel:+917010681856">+91 70106 81856</a></p>
                                    <p className="footer-contact-mail"><a href="mailto:thesociobarber@gmail.com">thesociobarber@gmail.com</a></p>
                                </div>
                                <div className="footer-about-social-list "> 
                                    <a href="https://www.instagram.com/thesociobarber/"><i className="ti-instagram"></i></a> 
                                    <a href="https://www.linkedin.com/company/thesociobarber/"><i className="ti-linkedin"></i></a> 
                                    <a href="https://whatsapp.com/channel/0029Va5AdkmCMY0EIs4Mfh2K"><i className="ti-comment"></i></a> 
                                    <a href="https://www.facebook.com/thesociobarber?mibextid=ZbWKwL"><i className="ti-facebook"></i></a>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="footer-bottom-inner">
                                <p className="footer-bottom-copy-right">{new Date().getFullYear()} © All rights reserved.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <WhatsAppWidget/>
        </footer>
    )
}

export default Footer;