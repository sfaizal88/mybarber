import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {pricingList} from './constants';

const PricingPlan = () => {
    const location = useLocation();
    
    useEffect(() => {
        // Access the productId from the location state
        const productId = location.state?.productId;

        // If productId exists, scroll to the corresponding element
        if (productId) {
            const element = document.getElementById(productId); // Use productId directly
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
                // Adjust scroll position to account for extra margin
                const offset = 100; // Set your desired offset here (e.g., 100px)
                const elementPosition = element.getBoundingClientRect().top + window.scrollY;
                const offsetPosition = elementPosition - offset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        }
    }, [location]);

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
                <div key={`price-title-${index}`} style={{marginTop: index === 0 ? 0 : '50px'}} id={item.id}>
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