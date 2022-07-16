import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
	return (
		<nav class="navbar navbar-expand-lg ">
			<div class="container-fluid">
				<Link class="navbar-brand" to="/">
					<h1>Smart Tender</h1>
				</Link>
				<button
					class="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbarNav">
					<ul class="navbar-nav">
						<li class="nav-item">
							<Link class="nav-link active" aria-current="page" to="/Home">
								<h5>Home</h5>
							</Link>
						</li>
						<li class="nav-item">
							<Link class="nav-link" to="/About">
								<h5>About</h5>
							</Link>
						</li>
						<li class="nav-item">
							<Link class="nav-link" to="/Contact">
								<h5>Contact</h5>
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
