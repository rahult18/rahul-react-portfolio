import { motion } from 'framer-motion';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
// import LocationCityIcon from '@mui/icons-material/LocationCity';
// import EmailIcon from '@mui/icons-material/Email';
import LanguageIcon from '@mui/icons-material/Language';
import Divider from '@mui/material/Divider';
import locationLogo from '../resources/location.svg';
import mailLogo from '../resources/mail.svg';

const ContactMePage = () => {
    return (
        <motion.section
            id="contact-me"
            className="main-container"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'tween', duration: 1, ease: 'easeInOut' }}
        >
            <h3 className="heading">Get in Touch</h3>
            <div className="top-container">
                <div className="item">
                    <div className="icon">
                        <img src={mailLogo} alt="mail" />
                    </div>
                    <Divider orientation="vertical" variant="middle" flexItem />
                    <div className="text">
                        <a href="mailto:rahul.talatala@gmail.com">rahul.talatala@gmail.com</a>
                    </div>
                </div>

                <div className="item">
                    <div className="icon">
                        <img src={locationLogo} alt="location" />
                    </div>
                    <Divider orientation="vertical" variant="middle" flexItem />
                    <div className="text">Buffalo, New York</div>
                </div>
            </div>
            <div className="bottom-container">
                <a href="https://github.com/rahult18" target="_blank" rel="noreferrer" className="github">
                    <GitHubIcon />
                </a>
                <a href="https://www.linkedin.com/in/rahul-reddy-t/" target="_blank" rel="noreferrer" className="linkedin">
                    <LinkedInIcon />
                </a>
                <a href="https://rahultalatala.netlify.app/" target="_blank" rel="noreferrer" className="website">
                    <LanguageIcon />
                </a>
            </div>
        </motion.section>
    );
};

export default ContactMePage;