import Home from "@pages/Home";
// import SignUp from "@pages/SignUp";
// import LogIn from "@pages/LogIn";
// import Games from "@pages/Games";
// import Contact from "@pages/Contact";
// import Page404 from "@pages/Page404";

const App = (_) => {
    return (
        <>
            <Home />
        </>
    );
};

export default App;

// import {BrowserRouter as Router, Routes as Switch, Route} from 'react-router-dom'
// import Layout from './pages/Layout'
// import Home from './pages/Home'
// import Blogs from './pages/Blogs'
// import Page404 from './pages/Page404'

// const App = _ => {
//     return (
//         <Router>  {/* or u can wrap it around the App component */}
//             <Switch>
//                 <Route path="/" element={<Layout />}>
//                     <Route index element={<Home />} />
//                     <Route path="blogs" element={<Blogs />} />
//                     <Route path="*" element={<Page404 />} />
//                 </Route>
//             </Switch>
//         </Router>
//     )
// }



// import * as React from 'react'
// import { Outlet, Link } from 'react-router-dom'

// const Layout = () => {
//     return (
//         <>  {/* JSX expressions must have one parent element. */}
//         <nav>
//             <ul>
//                 <li> <Link to="/">Home</Link> </li>  {/* Link component enables react to take control of page requests */}
//                 <li> <Link to="blogs">Blogs</Link> </li>
//                 <li> <Link to="contact">Contact</Link> </li>
//             </ul>
//         </nav>
//         <Outlet />  {/* The <Outlet> renders the current route selected */}
//         </>
//     )
// }

// export default Layout