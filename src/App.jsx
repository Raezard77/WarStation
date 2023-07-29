import {
    BrowserRouter as Router,
    Routes as Switch,
    Route,
} from "react-router-dom";
import Layout from "@pages/Layout";
import Home from "@pages/Home";
import SignUp from "@pages/SignUp";
import LogIn from "@pages/LogIn";
import Games from "@pages/Games";
import Contact from "@pages/Contact";
import Page404 from "@pages/Page404";
import * as filler from "@site-content";

const App = (_) => {
    return (
        <Router>
            <Switch>
                <Route path={`/${filler.brandName}`} element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="signup" element={<SignUp />} />
                    <Route path="login" element={<LogIn />} />
                    <Route path="games" element={<Games />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="*" element={<Page404 />} />
                </Route>
            </Switch>
        </Router>
    );
};

export default App;
