import About from '../pages/About';
import Contact from '../pages/Contact';
import Home from '../pages/home/Home';
import Login from '../pages/Login';
import Services from '../pages/Services';

export const publicRoute = [
    { path: "/", name: "Home", Component: Home },
    { path: "/contact", name: "Contact", Component: Contact },
    { path: "/services", name: "Services", Component: Services },
    { path: "/about", name: "About", Component: About },
    { path: "/login", name: "Login", Component: Login }
];