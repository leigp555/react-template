import React, {Suspense, lazy, ComponentType} from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Loading from "./components/Loading";
import {
    Routes,
    Route,
} from 'react-router-dom'

const Home = lazy((): Promise<{ default: ComponentType<any> }> => {
    return import('./pages/Home')
})
const About = lazy((): Promise<{ default: ComponentType<any> }> => {
    return import('./pages/About')
})
const History = lazy((): Promise<{ default: ComponentType<any> }> => {
    return import('./pages/History')
})
const NotFound = lazy((): Promise<{ default: ComponentType<any> }> => {
    return import('./pages/NotFound')
})
const Login = lazy((): Promise<{ default: ComponentType<any> }> => {
    return import('./pages/Login')
})
const Register = lazy((): Promise<{ default: ComponentType<any> }> => {
    return import('./pages/Register')
})
const Test = lazy((): Promise<{ default: ComponentType<any> }> => {
    return import('./pages/Test')
})


const App: React.FC<{}> = () => {
    return (
        <React.Fragment>
            <Header/>
            <Suspense fallback={<Loading/>}>
                <main id='main'>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/history" element={<History/>}/>
                        <Route path="/about" element={<About/>}/>
                        <Route path="/test" element={<Test/>}>
                            <Route index element={<Register/>}/>
                            <Route path="login" element={<Login/>}/>
                            <Route path=":id" element={<Register/>}/>
                        </Route>
                        <Route path="*" element={<NotFound/>}/>
                    </Routes>
                </main>
            </Suspense>
            <Footer/>
        </React.Fragment>
    );
}

export default App;
