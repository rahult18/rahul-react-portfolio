//importing the router dependencies
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import LandingPage from './components/LandingPage';
import AboutPage from './components/AboutPage';
import ExperiencePage from './components/ExperiencePage';
import ProjectsPage from './components/ProjectsPage';
import SkillsPage from './components/SkillsPage';
import InterestsPage from './components/InterestsPage';
import ContactMePage from './components/ContactMePage';
import '../src/app.scss';

const appRouter = createBrowserRouter(
    createRoutesFromElements(
        //defining the base route i.e '/'
        // we have to wrap the route inside the base route
        <Route path='/' element={ <RootLayout/> }>
            {/* index element means it's the default route */}
            <Route index element = { <LandingPage /> } />
            <Route path='about' element = { <AboutPage /> } />
            <Route path='experience' element = { <ExperiencePage /> } />
            <Route path='projects' element = { <ProjectsPage /> } />
            <Route path='skills' element = { <SkillsPage /> } />
            <Route path='interests' element = { <InterestsPage /> } />
            <Route path='contact-me' element = { <ContactMePage /> } />
        </Route>
    )
)

const App = () => {
    return(
        //initialising the router here
        <RouterProvider router={appRouter} />
    );
}

export default App;