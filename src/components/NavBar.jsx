import { useEffect, useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { IoCodeSlashOutline } from "react-icons/io5";
import { HashLink as Link } from 'react-router-hash-link';
import "../navbar.scss";

function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [size, setSize] = useState({
        width: 0,
        height: 0,
    });
    useEffect(() => {
        const handleResize = () => {
            setSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        if (size.width > 768 && menuOpen) {
            setMenuOpen(false);
        }
    }, [size.width, menuOpen]);

    const menuToggleHandler = () => {
        setMenuOpen((p) => !p);
    };

    const closeMenuHandler = () => {
        setMenuOpen(false);
    };

    return (
        <header className="header">
            <div className="header__content">
                <Link to="#home" className="header__content__logo" smooth duration={700}>
                    <IoCodeSlashOutline color="#0984e3" style={{marginTop:"0.6rem"}}/>
                </Link>
                <nav
                    className={`${"header__content__nav"} 
          ${menuOpen && size.width < 768 ? `${"isMenu"}` : ""} 
          }`}
                >
                    <ul>
                    <li>
                            <Link to="#home" smooth duration={600} onClick={closeMenuHandler}>Home</Link>
                        </li>
                        <li>
                            <Link to="#about" smooth duration={600} onClick={closeMenuHandler}>About</Link>
                        </li>
                        <li>
                            <Link to="#experience" smooth duration={600} onClick={closeMenuHandler}>Experience</Link>
                        </li>
                        <li>
                            <Link to="#projects" smooth duration={600} onClick={closeMenuHandler}>Projects</Link>
                        </li>
                        <li>
                            <Link to="#skills" smooth duration={600} onClick={closeMenuHandler}>Skills</Link>
                        </li>
                        <li>
                            <Link to="#education" smooth duration={600} onClick={closeMenuHandler}>Education</Link>
                        </li>
                        <li>
                            <Link to="#interests" smooth duration={600} onClick={closeMenuHandler}>Interests</Link>
                        </li>
                        <li>
                            <Link to="#contact-me" smooth duration={600} onClick={closeMenuHandler}>Contact Me</Link>
                        </li>
                    </ul>
                </nav>
                <div className="header__content__toggle">
                    {!menuOpen ? (
                        <BiMenuAltRight onClick={menuToggleHandler} />
                    ) : (
                        <AiOutlineClose onClick={menuToggleHandler} />
                    )}
                </div>
            </div>
        </header>
    );
}

export default NavBar;