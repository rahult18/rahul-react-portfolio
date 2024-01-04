import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { FiDownload } from "react-icons/fi";
import { Link } from 'react-router-dom';



const LandingPage = () => {
    const [ text ] = useTypewriter({
        words: ['CS Graduate', 'Full Stack Developer', 'Data Alchemist', 'Technophile'],
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
                        <Link to="https://drive.google.com/file/d/1iFuEeoXRrTZJlVF5l_kJJK5Jf6L4JKur/view?usp=sharing" className="button" target="_blank">
                            <FiDownload className="icon"/>
                            {' '}Download CV
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default LandingPage;
