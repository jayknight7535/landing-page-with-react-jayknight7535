
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
		<Card />
		<Card />
		<Card />
	  </div>
	</>
	  
	  
	 
	);
};

export default Home;