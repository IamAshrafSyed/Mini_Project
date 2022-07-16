import React from "react";
import Navbar from "./Navbar";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import { Routes, Route } from "react-router-dom";

function App() {
	return (
		<>
			<Navbar />
			<div class="container">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/Home" element={<Home />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/About" element={<About />} />
				</Routes>
			</div>
		</>
	);
}

export default App;
