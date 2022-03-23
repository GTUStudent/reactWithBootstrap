import Card from "../UI/Card/Card";
import { NavLink } from "react-router-dom";
import "./Common.css";
const Common = (props) => {
	return (
		<>
			<section id="header" className="d-flex align-items-center">
				<Card>
					<div className="row px-md-3 px-sm-4 mb-sm-5">
						<div className="col-md-6 pt-0 pt-lg-5 order-2 order-lg-1 order-md-1 d-flex justify-content-center flex-column align-items-center-sm">
							<h1>
								{props.name}{" "}
								<span className="brand-name">React Devs</span>
							</h1>
							<h2 className="my-3">
								Lorem, ipsum dolor sit amet consectetur
								adipisicing elit.
							</h2>
							<div className="mt-3">
								<NavLink
									to={props.visit}
									exact="true"
									className="btn-get-started"
								>
									{props.btname}
								</NavLink>
							</div>
						</div>
						<div className="col-md-6 pt-lg-5 pb-md-5 order-1 order-lg-1 order-md-1 d-flex justify-content-center flex-column ">
							<img
								src={props.imgsrc}
								className="img-fluid animated header-img"
								alt="home img"
							/>
						</div>
					</div>
				</Card>
			</section>
		</>
	);
};

export default Common;
