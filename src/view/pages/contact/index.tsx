import {ContactSlider} from '../../organisms';
import './style.css';

const ContactPage = () => {

    return (
        <>
            <ContactSlider/>
            <section className="info-box section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="section-head mb-30 text-center">
                                <div className="section-subtitle">Contact Info</div>
                                <div className="section-title mb-20">Get In Touch</div>
                            </div>
                            <div className='contact-list'>
                                <div className="item contact-item"> 
                                    <span className="icon ti-location-pin"></span>
                                    <div className="cont">
                                        <h5>Address</h5>
                                        <p>27/12A, Thiruvottiyur High Rd, Thangal,<br/>
                                        Vasantha Nagar, Tiruchanankuppam, Chennai,<br/>
                                        Tamil Nadu 600019, India</p>
                                    </div>
                                </div>
                                <div className="item contact-item"> 
                                    <span className="icon ti-mobile"></span>
                                    <div className="cont">
                                        <h5>Phone</h5>
                                        <p><a href="tel:+919500162231">+91 95001 62231</a></p>
                                        <p><a href="tel:+917010681856">+91 70106 81856</a></p>
                                    </div>
                                </div>
                                <div className="item contact-item"> 
                                    <span className="icon ti-email"></span>
                                    <div className="cont">
                                        <h5>e-Mail</h5>
                                        <p><a href="mailto:thesociobarber@gmail.com">thesociobarber@gmail.com</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section-padding pb-0 pt-0 bg-darkbrown">
                <div className="full-width">
                    <div className="no-spacing map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.2549410689385!2d80.29493297592578!3d13.146312411022064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526f1260b7d97f%3A0x13f7e4bde3f6fdb3!2sThe%20Socio%20Barber!5e0!3m2!1sen!2ssg!4v1698724311603!5m2!1sen!2ssg" className="google-maps" aria-hidden="false"></iframe>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ContactPage;