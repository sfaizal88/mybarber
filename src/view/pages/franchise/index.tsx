import {useState} from 'react';
import {FranchiseSlider} from '../../organisms';
import './style.css';

const FranchisePage = () => {
    // STATE
    const [state, setState] = useState({
        name: '', email: '', mobileNo: '', whatsAppNo: '', location: '', message: ''
    });

    const updateState = (value: string, key: string) => {
        setState({...state, [key]: value});
    }

    const onSubmit = async () => {
        // http://thesociobarber.com
        try {
            const response = await fetch('/mail/contact_me.php', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(state),
            });
      
            if (!response.ok) {
              throw new Error('Failed to submit data');
            }
      
            const result = await response.json();
            console.log('Response:', result);
          } catch (error) {
            console.error('Error:', error);
          }
    }

    return (
        <>
            <FranchiseSlider/>
            <section className="info-box section-padding">
                <div className="container">
                    <div className="row ">
                        <div className="col-md-12">
                            <div className="section-head mb-30 text-center">
                                <div className="section-subtitle">Get In Touch</div>
                                <div className="section-title mb-20">Franchise</div>
                            </div>
                            <div className='contact-list mb-block'>
                                <div className="item contact-item"> 
                                    <span className="icon ti-mobile"></span>
                                    <div className="cont">
                                        <h5>Phone</h5>
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

                            <div className="row ">
                                <div className="col-md-6">
                                    <input type='text' placeholder='Name' onChange={(event) => updateState(event.target.value, 'name')}/>
                                </div>
                                <div className="col-md-6">
                                    <input type='text' placeholder='Email' onChange={(event) => updateState(event.target.value, 'email')}/>
                                </div>
                            </div>
                            <div className="row ">
                                <div className="col-md-6">
                                    <input type='text' placeholder='Mobile Number' onChange={(event) => updateState(event.target.value, 'mobileNo')}/>
                                </div>
                                <div className="col-md-6">
                                    <input type='text' placeholder='Whatsapp Number' onChange={(event) => updateState(event.target.value, 'whatsAppNo')}/>
                                </div>
                            </div>
                            <div className="row ">
                                <div className="col-md-12">
                                    <input type='text' placeholder='Preferred Location' onChange={(event) => updateState(event.target.value, 'location')}/>
                                </div>
                            </div>
                            <div className="row ">
                                <div className="col-md-12">
                                    <textarea placeholder='Message...' rows={5} onChange={(event) => updateState(event.target.value, 'message')}></textarea>
                                </div>
                            </div>    
                            <div className="row ">
                                <div className="col-md-12 text-center">
                                    <input type='button' value='Submit' className='primary-btn' onClick={onSubmit}/>
                                </div>
                            </div>   
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default FranchisePage;