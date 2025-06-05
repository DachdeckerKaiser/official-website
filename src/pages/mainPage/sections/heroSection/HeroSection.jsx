import "./heroSection.css";
import "animate.css";

function HeroSection() {
    function openInquiry() {
        window.open("https://zeeg.me/ekaiser-dachdecker", "_blank");
    }
    
    return(
        <div className="heroSection">
            <div className="heroLeftSide">
                <div className="heroBox animate__animated animate__bounceInLeft">
                    <h1 className="heroHeadline">
                        Herzlich Willkommen
                    </h1>
                    <p className="heroText">
                        Ihr Dachdecker Kaiser in Markkleeberg - Handwerker Familie in der 4. Generation. Wir sind Ihr regionaler Ansprechpartner für Dachdeckerarbeiten, Dachwartung und Dachsanierung in Markkleeberg und Leipzig.
                    </p>
                    <button className="ctaButton" onClick={openInquiry}>
                        Termin Buchen
                    </button>
                </div>
            </div>
            <div className="heroRightSide"></div>
        </div> 
    );
}

export default HeroSection;