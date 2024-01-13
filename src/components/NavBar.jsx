import { useEffect, useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { IoCodeSlashOutline } from "react-icons/io5";
import { HashLink as Link } from 'react-router-hash-link';
import { motion } from 'framer-motion';  // Import motion from framer-motion
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

    const linkVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    };

    return (
        <header className="header">
            <div className="header__content">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="header__content__logo"
                >
                    <Link to="#home" className="text-heading">
                        <IoCodeSlashOutline color="#0984e3" style={{ marginTop: "0.6rem" }} />
                    </Link>
                </motion.div>
                <nav
                    className={`${"header__content__nav"} 
          ${menuOpen && size.width < 768 ? `${"isMenu"}` : ""} 
          }`}
                >
                    <ul>
                        <motion.li variants={linkVariants} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                            <Link to="#home" smooth duration={750} onClick={closeMenuHandler}>
                                Home
                            </Link>
                        </motion.li>
                        <motion.li variants={linkVariants} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                            <Link to="#about" smooth duration={650} onClick={closeMenuHandler}>
                                About
                            </Link>
                        </motion.li>
                        <motion.li variants={linkVariants} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                            <Link to="#experience" smooth duration={650} onClick={closeMenuHandler}>
                                Experience
                            </Link>
                        </motion.li>
                        <motion.li variants={linkVariants} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                            <Link to="#projects" smooth duration={650} onClick={closeMenuHandler}>
                                Projects
                            </Link>
                        </motion.li>
                        <motion.li variants={linkVariants} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                            <Link to="#skills" smooth duration={650} onClick={closeMenuHandler}>
                                Skills
                            </Link>
                        </motion.li>
                        <motion.li variants={linkVariants} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                            <Link to="#education" smooth duration={700} onClick={closeMenuHandler}>
                                Education
                            </Link>
                        </motion.li>
                        <motion.li variants={linkVariants} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                            <Link to="#contact-me" smooth duration={800} onClick={closeMenuHandler}>
                                Contact Me
                            </Link>
                        </motion.li>
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
