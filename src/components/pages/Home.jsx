import Common from "../Common/Common";
import web from "../../images/web.svg";

const Home = () => {
	return (
		<Common
			name="Grow your business with"
			imgsrc={web}
			visit="/about"
			btname="Get Started"
		/>
	);
};

export default Home;
