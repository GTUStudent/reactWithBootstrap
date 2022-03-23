import { useState } from "react";

const ContactUsForm = () => {
	const [inputData, setInputData] = useState({
		name: "",
		phone: "",
		mail: "",
		message: "",
	});
	const inputChangeHandler = (event) => {
		const { name, value } = event.target;
		setInputData((prev) => {
			return {
				...prev,
				[name]: value,
			};
		});
	};

	const formSubkitHandler = (event) => {
		event.preventDefault();
		const { name, mail, phone, message } = inputData;
		alert(
			"Name: " +
				name +
				"\n" +
				"Email: " +
				mail +
				"\n" +
				"Phone:: " +
				phone +
				"\n" +
				"Message: " +
				message +
				"\n"
		);
		setInputData((prev) => {
			return {
				name: "",
				phone: "",
				mail: "",
				message: "",
			};
		});
	};
	return (
		<form autoComplete="off" onSubmit={formSubkitHandler}>
			<div className="mb-3">
				<label htmlFor="name">Name </label>
				<input
					type="text"
					id="name"
					name="name"
					onChange={inputChangeHandler}
					value={inputData.name}
					className="form-control"
					placeholder="Eg. John Stewart"
					required
				/>
			</div>
			<div className="mb-3">
				<label htmlFor="phone">Phone</label>
				<input
					type="tel"
					id="phone"
					name="phone"
					onChange={inputChangeHandler}
					value={inputData.phone}
					pattern="[0-9]{10}"
					className="form-control"
					placeholder="Eg. 9566845856"
					required
				/>
			</div>
			<div className="mb-3">
				<label htmlFor="mail">Email</label>
				<input
					type="email"
					id="mail"
					name="mail"
					onChange={inputChangeHandler}
					value={inputData.mail}
					className="form-control"
					aria-describedby="emailHelp"
					placeholder="Eg. user@mail.com"
					required
				/>
			</div>
			<div className="mb-3">
				<label htmlFor="message" className="form-label">
					Message
				</label>
				<textarea
					className="form-control"
					id="message"
					name="message"
					onChange={inputChangeHandler}
					value={inputData.message}
					rows="3"
					required
					placeholder="Eg. This is the best website I have ever seen."
				></textarea>
			</div>
			<button type="submit" className="btn btn-outline-dark w-100 my-3">
				Submit
			</button>
		</form>
	);
};

export default ContactUsForm;
