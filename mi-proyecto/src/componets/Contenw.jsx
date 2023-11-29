import React from "react";
import RomMovies from "./ContentRowMovies"
import Footer from "./footer"
import Topbar from "./Topbar"
import '../assets/css/App.css'

function Contenw() {
    return (
        <><div id="content">

            <nav classname="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
                <Topbar />
            </nav>

            <div className="row">
                <RomMovies />
            </div>

            <footer className="sticky-footer bg-white"><Footer /> </footer>
        </div>
        </>)

}

export default Contenw;