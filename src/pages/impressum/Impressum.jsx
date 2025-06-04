import "./impressum.css";
import Header from "../../components/header/Header.jsx";
import Footer from "../../components/footer/Footer.jsx";

function Impressum() {
    return (
        <>
            <Header />
            <div className="mainContainerImpressum">
                <div className="impressumBox">
                    <h1 className="impressumTitle">Impressum</h1>
                    <h2 className="headline">Angaben gemäß § 5 TMG:</h2>
                    <h3 className="impressumSubTitle">Dachdeckerfachbetrieb Kaiser</h3>
                    <p className="impressumDescription">
                        Städtelner Str. 28A<br/>
                        04416 Markkleeberg<br/>
                        Deutschland<br/>
                        <br/>
                        <strong>Vertreten durch:</strong><br/>
                        <strong>Enrico Kaiser (Geschäftsführer)</strong><br/>
                        <br/>
                        Tel: <a className="link" href="tel:+491774821477">+49 177 4821477</a><br/>
                        E-Mail: <a className="link" href="mailto:e.kaiser@dachdecker-kaiser.de">e.kaiser@dachdecker-kaiser.de</a><br/>
                    </p>
                    <p className="tech">
                        <strong>Technische umsetzung der Website:</strong><br/>
                        <a href="https://www.flowefy.de" target="_blank" className="flowefyLink">flowefy. <i className="bi bi-box-arrow-up-right"></i></a>
                    </p>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Impressum;