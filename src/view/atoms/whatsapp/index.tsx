import './style.css';

const WhatsAppWidget = () => {
    const message = encodeURI("Hi! I'd like to book an appointment. Can you please confirm availability?");
    const contactNo = 917010681856;
    const link = `https://wa.me/${contactNo}?text=${message}`;
    

    return (
        <a className='whatsapp-container' href={link} target='_blank'>
            <div className="whatsapp-icon"><i className="fa fa-whatsapp"></i></div>
            <div className="whatsapp-label">Book an Appointment</div>
        </a>
    )
}

export default WhatsAppWidget;