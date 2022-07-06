import React from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/about";
import History from "./pages/History";

import {
    Routes,
    Route,
} from 'react-router-dom'

function App() {
    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route path="/"  element={<Home/>}/>
                <Route path="/history"  element={<History/>}/>
                <Route path="/about"  element={<About/>}/>
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
