import React from "react";
import logo from '../assets/images/logo 1.png'
import '../assets/css/App.css'

function SideBan(){
    return(
    <>
        <ul className="navbar-nav sidebar sidebar-dark accordion color_barra " id="accordionSidebar">
			<a className="sidebar-brand d-flex align-items-center justify-content-center color_barra " href="/">
				<div className="sidebar-brand-icon color_barra">
					<br /><img className="w-100 color_barra" src={logo} alt="Grupo_11"/>
				</div>
			</a>
			<br /><br />
			<hr className="sidebar-divider my-0 color_barra"/>
			<li className="nav-item active color_barra">
				<a className="nav-link color_barra" href="/">
					<i className="fas fa-fw fa-tachometer-alt"></i>
					<span>Techtropolis</span></a>
			</li>
			<li className="nav-item color_barra">
				<a className="nav-link color_barra" href="/Users">
					<i className="fas fa-fw fa-table color_barra"></i>
					<span>Tables Users</span></a>
			</li>
			<li className="nav-item color_barra">
				<a className="nav-link color_barra" href="/Producto">
					<i className="fas fa-fw fa-table color_barra"></i>
					<span>Tables Producto</span></a>
			</li>

			
			<hr className="sidebar-divider d-none d-md-block color_barra"/>
		</ul>

		</>

    )

    
}

export default SideBan