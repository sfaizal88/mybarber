import {pricingList} from './constants';

const PricingPlan = () => {
    
    return (
        <section className="barber-pricing section-padding position-re">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="section-head text-center">
                            <div className="section-subtitle">Pricing Plan</div>
                        <div className="section-title">Our Price List</div>
                        </div>
                    </div>
                </div>
                {pricingList.map((item, index) => (
                <div key={`price-title-${index}`} style={{marginTop: index === 0 ? 0 : '50px'}}>
                    <div className="section-head text-center">
                        <div className="section-title" style={{fontSize: '30px'}}>{item.title}</div>
                    </div>
                    <div className="row">
                        {item.items.map((subItem, subIndex) => (
                            <div className="col-md-6" key={`price-subitem-${subIndex}`}>
                                <div className="menu-list mb-30">
                                    <div className="item">
                                        <div className="flex">
                                            <div className="title">{subItem.title}</div>
                                            <div className="dots"></div>
                                            <div className="price">{subItem.cost}</div>
                                        </div>
                                        <p style={{textAlign: 'left'}}><i>{subItem.info}</i></p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>))}
            </div>
        </section>
    )
}

export default PricingPlan;