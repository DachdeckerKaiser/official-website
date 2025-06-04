import "./heroSection.css";

function HeroSection() {
    return(
        <div className="heroSection">
            <div className="heroLeftSide">
                <div className="heroBox">
                    <h1 className="heroHeadline">
                        Herzlich Willkommen
                    </h1>
                    <p className="heroText">
                        Ihr Dachdecker Kaiser in Markkleeberg - Handwerksfamilie in der 4. Generation. Wir sind Ihr regionaler Ansprechpartner für Dachdeckerarbeiten, Dachwartung und Dachsanierung in Markkleeberg und Leipzig.
                    </p>
                    <button className="ctaButton">
                        Termin Buchen
                    </button>
                </div>
            </div>
            <div className="heroRightSide"></div>
        </div> 
    );
}

export default HeroSection;