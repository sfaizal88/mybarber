const PromoVideos = () => {

    return (
        <section className="section-padding video-wrapper video bg-img bg-fixed" data-overlay-dark="4" style={{backgroundImage: `url('img/main/slider/1.jpg')`}}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="section-head text-center">
                            <div className="section-title white">Watch Our The Socio Barber Promo Video</div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 text-center">
                        <a className="vid" href="https://youtu.be/e2x0UXVU2yg">
                            <div className="vid-butn"> <span className="icon"><i className="ti-control-play"></i></span> </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PromoVideos;