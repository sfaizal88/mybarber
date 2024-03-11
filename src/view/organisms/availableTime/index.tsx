import './style.css';

const AvailableTime = () => {

    const times = [
        {day: 'MON', time: '7 am to 9 pm'},
        {day: 'TUE', time: '7 am to 9 pm'},
        {day: 'WED', time: '7 am to 9 pm'},
        {day: 'THU', time: '7 am to 9 pm'},
        {day: 'FRI', time: '7 am to 9 pm'},
        {day: 'SAT', time: '7 am to 9 pm'},
        {day: 'SUN', time: '7 am to 9 pm'},
    ]
    return (
        <section className="section-padding video-wrapper video bg-img bg-fixed" data-overlay-dark="4" style={{backgroundImage: `url('/img/main/slider/side-slider-2.jpg')`}}>
            <div className="container">
                
                <div className="row">
                    <div className="col-md-12 text-center">
                        {times.map((item, index) => (
                        <div className="available-item" key={`available-time-${index}`}> 
                            <div className='available-item-title'>{item.day}</div> 
                            <div className='available-item-info'>{item.time}</div> 
                        </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AvailableTime;