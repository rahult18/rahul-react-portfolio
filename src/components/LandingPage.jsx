import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { FiDownload } from "react-icons/fi";
import { IoLogoLinkedin, IoMdMail, IoLogoGithub } from "react-icons/io";



const LandingPage = () => {
    const [text] = useTypewriter({
        words: ['Software Developer', 'AI Engineer', 'Data Alchemist', 'Technophile'],
        loop: true,
        typeSpeed: 100,
        deleteSpeed: 70,
    });

    return (
        <>
            <section id="home">
                <div className="home-container">
                    <div className="intro">
                        Heya! <br />
                        I'm Rahul Reddy Talatala <br />
                    </div>
                    <div className="typing-effect">
                        I'm a {' '}
                        <span className="typing-result">
                            {text}
                        </span>
                        <Cursor cursorStyle="|" />
                    </div>
                    <div className="download-cv">
                        <a href="https://drive.google.com/uc?export=download&id=1l2NRhg7u1Ak9m7VW1PxFbXWwC1tQNJV0" className="button" download="Rahul Reddy Talatala Resume.pdf">
                            <FiDownload className="icon" />
                            {' '}Download CV
                        </a>
                    </div>
                    <div className="social-buttons">
                    <a href="https://github.com/rahult18" target="_blank" rel="noreferrer" className="github">
                        < IoLogoGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/rahul-reddy-t/" target="_blank" rel="noreferrer" className="linkedin">
                        <IoLogoLinkedin />
                    </a>
                    <a href="mailto:rahul.talatala@gmail.com" className="gmail">
                        <IoMdMail />
                    </a>
                    </div>
                </div>
            </section>
        </>
    );
};

export default LandingPage;
