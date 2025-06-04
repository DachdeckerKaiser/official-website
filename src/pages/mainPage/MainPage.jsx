import "./mainPage.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
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
                <ServiceSection />
                <VisionSection />
                <TimelineSection />
                <DarumSection />
                <ContactSection />
                <FAQSection />
                <Footer />
            </div>
        </>
    );
}

export default MainPage;