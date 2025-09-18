import "../assets/styles/Home.css";
import HomeSection from "../components/common/HomeSection";
import HomeService from "../components/common/HomeService";


const Home = () => {
    return (
        <div className="home__page">
            <HomeSection />
            <HomeService />
        </div>
    );
}

export default Home;