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
                <HeroSection />
                <Animate animation="animate__bounceInLeft">
                    <ServiceSection />
                </Animate>
                <Animate animation="animate__bounceIn">
                    <VisionSection />
                </Animate>
                <Animate animation="animate__bounceInRight">
                    <TimelineSection />
                </Animate>
                <Animate animation="animate__bounceInUp">
                    <DarumSection />
                </Animate>
                <Animate animation="animate__bounceInRight">
                    <ContactSection />
                </Animate>
                <Animate animation="animate__bounceInUp">
                    <FAQSection />
                </Animate>
                
                
                
                
                
                
                
                <Footer />
            </div>
        </>
    );
}

export default MainPage;