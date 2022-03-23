import { NavLink } from "react-router-dom";

const ServiceCard = (props) => {
	return (
		<div className="col-md-4 col-10 mx-auto">
			<div className="card">
				<img
					src={`https://source.unsplash.com/1600x900/?${props.title}`}
					className="card-img-top"
					alt="serviceimage"
				/>
				<div className="card-body">
					<h5
						className="card-title text-center"
						style={{ textTransform: "capitalize" }}
					>
						{props.title}
					</h5>
					<NavLink
						to="/service"
						className="btn btn-outline-dark w-100 my-3"
					>
						{props.btnText || "Get more info..."}
					</NavLink>
				</div>
			</div>
		</div>
	);
};

export default ServiceCard;
