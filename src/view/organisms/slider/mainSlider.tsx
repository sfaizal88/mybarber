const MainSlider = () => {

    return (
        <header className="header slider-fade">
            <div className="owl-carousel owl-theme">
                <div className="item bg-img" data-overlay-dark="5"  style={{backgroundImage: `url('/img/main/slider/main-slider-1.jpeg')`}}>
                    <div className="v-middle caption">
                    <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-md-8 text-center"> 
                                    <h6>Stay sharp, Look good</h6>
                                    <h1>Not Just A Barbers, But A Lifestyle</h1> 
                                    <h4>27/12A, Thiruvottiyur High Rd, Thangal.</h4> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="item bg-img" data-overlay-dark="5" style={{backgroundImage: `url('/img/main/slider/main-slider-2.jpeg')`}}>
                    <div className="v-middle caption">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-md-8 text-center"> 
                                    <h6>Established 2021</h6>
                                    <h1>Barber Shop You Will Every Need</h1> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default MainSlider;
