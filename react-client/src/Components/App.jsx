import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import HomePage from './HomePage';
import NavBar from './HeaderComponent/NavBar';
import About from "./About";
import Contact from "./Contact";
import Forum from "./Forum";
let backgroundImage = `/../../../resources/shadowlands_sky_bw.jpg`

let sectionStyle = {
    backgroundImage: `url(${backgroundImage})`,
}

class App extends Component {
    render() {
        return (
            <Router>
                <div style={sectionStyle}>
                    <NavBar />
                    <Route name="home" exact path="/" component={HomePage}/>
                    <Route name="about" exact path="/about" component={About}/>
                    <Route name="contact" exact path="/contact" component={Contact}/>
                    <Route name="forum" exact path="/forum" component={Forum}/>
                </div>
            </Router>
        )
    }
}
export default App;