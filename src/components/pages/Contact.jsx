import ContactUsForm from "../ContactUsForm/ContactUsForm";

const Contact = () => {
	return (
		<>
			<div className="my-5">
				<h1 className="text-center">Contact Us</h1>
			</div>
			<div className="container contact_div">
				<div className="row">
					<div className="col-lg-6 log-md-8 col-10 mx-auto">
						<ContactUsForm />
					</div>
				</div>
			</div>
		</>
	);
};

export default Contact;
