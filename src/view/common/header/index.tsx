/**
 * 
 * Menu component
 * @author - NA 
 * 
 */
// GENERIC IMPORT
import {useContext, useState} from 'react';
import {Box} from '@mui/material';
import {useNavigate} from 'react-router-dom';
import LogoImage from '../../../assets/img/logo.png'

// ROUTER IMPORT
import * as PATH from '../../routes/constants';

// CONTEXT
import { menuContext, MENU_ACTION_TYPE } from '../../../contexts/useMenuContext';
import './styles.css';

const Header = () => {
    // NAVBAR
    const navigate = useNavigate();

    // CONTEXTS
    const context = useContext(menuContext);

    // STATE
    const [isMenuOpen, setMenuOpen] = useState(false);

    const onMenuPress = (link: string, id?: string) => {
        setMenuOpen(false)
        if (id) {
            navigate(PATH.HOME_PATH, { state: { sectionId: id } });
            context?.dispatch({ type: MENU_ACTION_TYPE.UPDATE, payload: link });
        } else {
            navigate(link);
            context?.dispatch({ type: MENU_ACTION_TYPE.UPDATE, payload: link });
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    return (
        <>
            <div>
                <div className="preloader-bg"></div>
                <div id="preloader">
                    <div id="preloader-status">
                        <div className="preloader-position loader"> <span></span> </div>
                    </div>
                </div>
                <div className="progress-wrap cursor-pointer">
                    <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
                        <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
                    </svg>
                </div>
                
                <nav className={["navbar", "navbar-expand-lg", isMenuOpen && "mobile-navbar"].join(" ")}>
                    <div className="container">
                        <div className="logo-wrapper">
                            <a className="logo" href="index.html"> 
                                <img src={LogoImage} className='logo-img' alt="Picture of the author" width={200} height={83}/>
                            </a>
                        </div>
                        <button onClick={() => setMenuOpen(prev => !prev)} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation"> 
                            <span className="navbar-toggler-icon">
                                {!isMenuOpen ? <i className="ti-menu"></i> : <i className="ti-close"></i>}
                            </span> 
                        </button>
                        
                        <div className={["collapse", "navbar-collapse", isMenuOpen && "show"].join(" ")} id="navbar">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item"><Box className={["nav-link", context.state.value == PATH.HOME_PATH ? "active" : ''].join(" ").trim()} onClick={() => onMenuPress(PATH.HOME_PATH)}>Home</Box></li>
                                <li className="nav-item"><Box className={["nav-link", context.state.value == PATH.ABOUT_PATH ? "active" : ''].join(" ").trim()} onClick={() => onMenuPress(PATH.ABOUT_PATH)}>About</Box></li>
                                <li className="nav-item"><Box className={["nav-link", context.state.value == PATH.FRANCHISE ? "active" : ''].join(" ").trim()} onClick={() => onMenuPress(PATH.FRANCHISE, 'franchise')}>Franchise</Box></li>
                                <li className="nav-item"><Box className={["nav-link", context.state.value == PATH.SERVICES_PATH ? "active" : ''].join(" ").trim()} onClick={() => onMenuPress(PATH.SERVICES_PATH)}>Services</Box></li>
                                <li className="nav-item"><Box className={["nav-link", context.state.value == PATH.PRICING_PATH ? "active" : ''].join(" ").trim()} onClick={() => onMenuPress(PATH.PRICING_PATH)}>Pricing</Box></li>
                                <li className="nav-item"><Box className={["nav-link", context.state.value == PATH.CONTACT_PATH ? "active" : ''].join(" ").trim()} onClick={() => onMenuPress(PATH.CONTACT_PATH)}>Contact</Box></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Header;