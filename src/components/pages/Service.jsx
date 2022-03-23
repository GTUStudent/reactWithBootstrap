import Card from "../UI/Card/Card";
import ServiceCard from "../ServiceCard/ServiceCard";

const services = [
	{
		title: "web development",
		id: Math.random(),
	},
	{
		title: "app development",
		id: Math.random(),
	},
	{
		title: "software development",
		id: Math.random(),
	},
	{
		title: "api development",
		id: Math.random(),
	},
	{
		title: "android development",
		id: Math.random(),
	},
	{
		title: "digital marketing",
		id: Math.random(),
	},
];

const Service = () => {
	return (
		<div className="my-5">
			<h2 className="text-center mb-4">Our Services</h2>
			<Card>
				<div className="row mb-5 gy-4 px-md-3 px-sm-4">
					{services.map((service) => (
						<ServiceCard
							className="service-card"
							title={service.title}
							key={service.id}
						/>
					))}
				</div>
			</Card>
		</div>
	);
};

export default Service;
