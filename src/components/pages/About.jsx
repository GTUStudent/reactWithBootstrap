import Common from "../Common/Common";
import service from "../../images/work.svg";

const About = () => {
	return (
		<Common
			name="Welcom to service page."
			imgsrc={service}
			visit="/contact"
			btname="Contact Us"
		/>
	);
};

export default About;
