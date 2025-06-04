import "./mainPage.css";

import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Animate from "../../components/animationComponent/Animate";

import HeroSection from "./sections/heroSection/HeroSection";
import ServiceSection from "./sections/serviceSection/ServiceSection";
import VisionSection from "./sections/visionSection/VisionSection";
import TimelineSection from "./sections/timelineSection/TimelineSection";
import DarumSection from "./sections/darumSection/DarumSection";
import ContactSection from "./sections/contactSection/ContactSection";
import FAQSection from "./sections/faqSection/FAQSection";

function MainPage() {
    return(
        <>
            <Header />
            <div className="mainContent">
                <Animate animation="animate__bounceIn">
                    <HeroSection />
                </Animate>
                <Animate animation="animate__bounceIn">
                    <ServiceSection />
                </Animate>
                <Animate animation="animate__bounceIn">
                    <VisionSection />
                </Animate>
                <Animate animation="animate__bounceIn">
                    <TimelineSection />
                </Animate>
                <Animate animation="animate__bounceIn">
                    <DarumSection />
                </Animate>
                <Animate animation="animate__bounceIn">
                    <ContactSection />
                </Animate>
                <Animate animation="animate__bounceIn">
                    <FAQSection />
                </Animate>
                
                
                
                
                
                
                
                <Footer />
            </div>
        </>
    );
}

export default MainPage;