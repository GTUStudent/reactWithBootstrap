const Card = (props) => {
	return (
		<div className="container-fluid">
			<div className="row">
				<div className="col-lg-10 col-md-10 mx-auto">
					{props.children}
				</div>
			</div>
		</div>
	);
};

export default Card;
