import Card from "../UI/Card/Card";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
const Navbar = () => {
	return (
		<Card>
			<nav className="navbar navbar-expand-md navbar-light" style={{ "background-color": "white" }} >
				<div className="container-fluid">
					<NavLink className="navbar-brand" to="/" exact="true">
						React Devs{" "}
					</NavLink>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div
						className="collapse navbar-collapse"
						id="navbarSupportedContent"
					>
						<ul className="navbar-nav ms-auto mb-2 mb-lg-0">
							<li className="nav-item">
								<NavLink
									to="/"
									exact="true"
									aria-current="page"
									className="nav-link"
								>
									Home
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink
									to="/service"
									exact="true"
									aria-current="page"
									className="nav-link"
								>
									Service
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink
									to="/about"
									exact="true"
									aria-current="page"
									className="nav-link"
								>
									About
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink
									to="/contact"
									exact="true"
									aria-current="page"
									className="nav-link"
								>
									Contact
								</NavLink>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</Card>
	);
};

export default Navbar;
