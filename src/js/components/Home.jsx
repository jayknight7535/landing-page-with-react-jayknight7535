
import Card from "./Card"
import TitleCard from "./TitleCard";
import Navbar from "./Navbar";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
	<>
	  <div>
		<Navbar />
	  </div>
	  <div>
		<TitleCard />
	  </div>
	 <div className="d-flex flex-row mb-4">
		<Card />
		<Card url="https://i.pinimg.com/originals/e0/02/cf/e002cfc6b9f7ab672e715db79a0e362b.jpg" cardtitle="cakpop"/>
		<Card url="https://i.pinimg.com/originals/cf/f3/39/cff33913e60801952c3630e7e8ee79b3.jpg" cardtitle="cake"/>
		<Card url="https://i.redd.it/l69k8t3php751.jpg" cardtitle="macaroons"/>
	  </div>
	</>
	  
	  
	 
	);
};

export default Home;