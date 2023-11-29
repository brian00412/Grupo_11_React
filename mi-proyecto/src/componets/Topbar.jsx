import React from "react";
import '../assets/css/App.css'
import foto from "../assets/images/jordan-walke.png"

function Topbar() {
	return (
		<>
			<nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
				<button
					id="sidebarToggleTop"
					className="btn btn-link d-md-none rounded-circle mr-3"
				>
					<i className="fa fa-bars" />
				</button>
				<ul className="navbar-nav ml-auto">
					<li className="nav-item dropdown no-arrow mx-1">
						<a className="nav-link dropdown-toggle" href="/" id="alertsDropdown">
							<i className="fas fa-bell fa-fw" />
							<span className="badge badge-danger badge-counter">3+</span>
						</a>
					</li>
					<li className="nav-item dropdown no-arrow mx-1">
						<a className="nav-link dropdown-toggle" href="/" id="messagesDropdown">
							<i className="fas fa-envelope fa-fw" />
							<span clasname="badge badge-danger badge-counter">7</span>
						</a>
					</li>
					<div className="topbar-divider d-none d-sm-block" />
					<li clasname="nav-item dropdown no-arrow">
						<a classname="nav-link dropdown-toggle" href="/" id="userDropdown">
							<span classname="mr-2 d-none d-lg-inline text-gray-600 small">
								Jordan Walke
							</span>
							<img
								classname="img-profile rounded-circle"
								src={foto}
								alt="Jordan Walke - Creador de React"
								width={60}
							/>
						</a>
					</li>
				</ul>
			</nav>
		</>
	)

}

export default Topbar