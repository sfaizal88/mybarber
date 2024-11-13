/**
 * 
 * App Routes
 * @author - NA 
 * 
 */
// GENERIC IMPORT
import { Route, Routes } from 'react-router-dom';
import {Box} from '@mui/material';

// ROUTER IMPORT
import * as PATH from './constants';

// COMMON PAGE IMPORT 
import Header from '../common/header';
import Footer from '../common/footer';

// PAGES 
import HomePage from '../pages/homePage';
import AboutPage from '../pages/about';
import ContactPage from '../pages/contact';
import PricePage from '../pages/pricing';
import ServicesPage from '../pages/services';
import FranchisePage from '../pages/franchise';

// STYLE IMPORT
import useStyles from './styles';

const AppRoutes = () => {
    // STYLE DECLARE
    const classes = useStyles();
    
    // RENDER HTML
    return (
        <Box className={classes.app}>
            <Header/>
            <Routes>
                <Route path={PATH.HOME_PATH} element={<HomePage />}/>
                <Route path={PATH.ABOUT_PATH} element={<AboutPage />}/>
                <Route path={PATH.CONTACT_PATH} element={<ContactPage />}/>
                <Route path={PATH.PRICING_PATH} element={<PricePage />}/>
                <Route path={PATH.SERVICES_PATH} element={<ServicesPage />}/>
                <Route path={PATH.FRANCHISE} element={<FranchisePage />}/>
            </Routes>
            <Footer/>
        </Box>
    );
};

export default AppRoutes;