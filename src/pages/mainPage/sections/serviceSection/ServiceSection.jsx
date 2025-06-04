import "./serviceSection.css";

function ServiceSection() {
    function openInquiry() {
        window.open('https://zeeg.me/ekaiser-dachdecker', '_blank');
    }

    return(
        <div className="serviceSection">
            <div className="serviceContent">
                <div className="serviceHeader">
                    <h1 className="serviceHeadline">Unser Service</h1>
                    <button type="button" className="inquiryButton" id="inquiryButton" onClick={openInquiry}>
                        Anfragen

                        <i class="bi bi-arrow-up-right"></i>
                    </button>
                </div>
                <div className="serviceList">
                    <div className="serviceCard">
                        <h2 className="cardTitle">Dachmodernisierung & -sanierung</h2>
                        <p className="cardDescription">
                            Wir bringen Ihr Dach auf den neuesten Stand – energieeffizient, langlebig und optisch ansprechend. Von Teil- bis Komplettsanierung: alles aus Meisterhand.
                        </p>
                    </div>
                    <div className="serviceCard">
                        <h2 className="cardTitle">Dachreinigung & Wartung</h2>
                        <p className="cardDescription">
                            Regelmäßige Reinigung und Wartung verlängern die Lebensdauer Ihres Dachs und beugen teuren Schäden vor – wir kümmern uns darum zuverlässig und gründlich.
                        </p>
                    </div>
                    <div className="serviceCard">
                        <h2 className="cardTitle">Flachdach & Spenglerarbeiten</h2>
                        <p className="cardDescription">
                            Ob Neubau oder Sanierung: Wir dichten Ihr Flachdach professionell ab und führen alle Spenglerarbeiten fachgerecht und passgenau aus.
                        </p>
                    </div>
                    <div className="serviceCard">
                        <h2 className="cardTitle">Solar- & Balkonkraftwerke</h2>
                        <p className="cardDescription">
                            Nutzen Sie die Kraft der Sonne – wir installieren Photovoltaikanlagen und kompakte Balkonkraftwerke inklusive Montage und Anschluss.
                        </p>
                    </div>
                    <div className="serviceCard">
                        <h2 className="cardTitle">Carports & Pergolen</h2>
                        <p className="cardDescription">
                            Individuell geplant, stabil gebaut: Wir realisieren Carports und Pergolas ganz nach Ihren Wünschen – funktional, stilvoll und wetterfest.
                        </p>
                    </div>
                </div>
                <div className="visionBox">
                    <h1 className="visionHeadline">Unsere Vision</h1>
                    <p className="visionText">
                        "Wir möchten als moderner Dachdeckerbetrieb zur Modernisierung und Erhaltung des Stadtbilds in Markkleeberg und Umgebung beitragen – mit Innovation, Qualität und ehrlicher Handarbeit."
                    </p>
                </div>
            </div>
        </div> 
    );
}

export default ServiceSection;