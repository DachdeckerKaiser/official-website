import "./mainPage.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

function MainPage() {
    return(
        <>
            <Header />
            <div className="mainContent">
                <div className="heroSection">
                    <div className="heroLeftSide">
                        <div className="heroBox">
                            <h1 className="heroHeadline">
                                Herzlich Willkommen
                            </h1>
                            <p className="heroText">
                                Ihr Dachdecker in Markkleeberg - Dachdecker Kaiser mit über 40 Jahren Erfahrung. Wir sind Ihr regionaler Ansprechpartner für Dachdeckerarbeiten, Dachwartung und Dachsanierung in Markkleeberg und Leipzig.
                            </p>
                            <button className="ctaButton">
                                Termin Buchen
                            </button>
                        </div>
                    </div>
                    <div className="heroRightSide"></div>
                </div> 

                <div className="serviceSection">
                    <div className="serviceContent">
                        
                    </div>
                </div> 
            </div>
            <Footer />
        </>
    );
}

export default MainPage;