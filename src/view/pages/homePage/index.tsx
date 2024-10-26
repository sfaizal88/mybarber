import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {MainSlider, Intro, AvailableTime, ServiceOffered, ClientProduct} from '../../organisms';

const HomePage = () => {
    const location = useLocation();

    useEffect(() => {
        // Access the sectionId from the location state
        const sectionId = location.state?.sectionId;

        // If sectionId exists, scroll to the corresponding element
        if (sectionId) {
            const element = document.getElementById(sectionId); // Use sectionId directly
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
        <>
            <MainSlider/>
            <Intro/>
            <AvailableTime/>
            <ServiceOffered/>
            <ClientProduct/>
        </>
    )
}

export default HomePage;