import Nav from "./components/Nav/Nav";
import Home from "./pages/Home/Home";
import SignIn from "./pages/SignIn/SignIn";
import User from "./pages/User/User";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import HomeComponent from "./components/HomeComponent/HomeComponent";
import SignInComponent from "./components/SignInComponent/SignInComponent";
import UserComponent from "./components/UserComponent/UserComponent";

export default function AppRouting () {
    return (
        <div className="App">
            {/*<Nav />*/}
            <Routes>
                <Route path="/" element={<HomeComponent />} />
                <Route path="/sign-in" element={<SignInComponent />} />
                <Route path="/user" element={<UserComponent />} />
            </Routes>
            <Footer />
        </div>
    )
}
