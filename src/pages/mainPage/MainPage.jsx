import "./mainPage.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import HeroSection from "./sections/heroSection/HeroSection";
import ServiceSection from "./sections/serviceSection/ServiceSection";
import DarumSection from "./sections/darumSection/DarumSection";

function MainPage() {
    return(
        <>
            <Header />
            <div className="mainContent">
                <HeroSection />
                <ServiceSection />
                <DarumSection />
                <Footer />
            </div>
        </>
    );
}

export default MainPage;