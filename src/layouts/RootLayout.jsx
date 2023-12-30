import { Outlet, NavLink } from "react-router-dom"; 
import NavBar from "../components/NavBar";

const RootLayout = () => {
    return(
        //displaying the navbar
        <>
            <header>
            {/*     <nav>
                <ul>
                    <li>
                        <NavLink exact to="/" activeClassName="active">
                            Home
                        </NavLink>
                        </li>
                        <li>
                        <NavLink to="/about" activeClassName="active">
                            About
                        </NavLink>
                        </li>
                        <li>
                        <NavLink to="/experience" activeClassName="active">
                            Experience
                        </NavLink>
                        </li>
                        <li>
                        <NavLink to="/projects" activeClassName="active">
                            Projects
                        </NavLink>
                        </li>
                        <li>
                        <NavLink to="/skills" activeClassName="active">
                            Skills
                        </NavLink>
                        </li>
                        <li>
                        <NavLink to="/interests" activeClassName="active">
                            Interests
                        </NavLink>
                        </li>
                        <li>
                        <NavLink to="/contact-me" activeClassName="active">
                            Contact Me
                        </NavLink>
                        </li>
                    </ul>
            </nav> */}
            <NavBar />
            </header>
            <main>
                <Outlet />
            </main>
        </>
    );
};

export default RootLayout;