import "./serviceSection.css";

function ServiceSection() {
    return(
        <div className="serviceSection">
            <div className="serviceContent">
                <div className="serviceHeader">
                    <h1 className="serviceHeadline">Unser Service</h1>
                    <button type="button" className="inquiryButton" id="inquiryButton">
                        Anfragen

                        <i class="bi bi-arrow-up-right"></i>
                    </button>
                </div>
                <div className="serviceList">
                    <div className="serviceCard">
                        <h2 className="cardTitle">Dachmodernisierung & -sanierung</h2>
                        <p className="cardDescription">
                            Durch regelmäßige Reinigung und Wartung schützen wir Ihr Dach langfristig vor Schäden und erhalten seinen Wert.
                        </p>
                    </div>
                    <div className="serviceCard">
                        <h2 className="cardTitle">Dachreinigung & Wartung</h2>
                        <p className="cardDescription">Durch regelmäßige Reinigung und Wartung schützen wir Ihr Dach langfristig vor Schäden und erhalten seinen Wert.</p>
                    </div>
                    <div className="serviceCard">
                        <h2 className="cardTitle">Flachdach & Spenglerarbeiten</h2>
                        <p className="cardDescription">
                            Durch regelmäßige Reinigung und Wartung schützen wir Ihr Dach langfristig vor Schäden und erhalten seinen Wert.
                        </p>
                    </div>
                    <div className="serviceCard">
                        <h2 className="cardTitle">Solar- & Balkonkraftwerke</h2>
                        <p className="cardDescription">
                            Durch regelmäßige Reinigung und Wartung schützen wir Ihr Dach langfristig vor Schäden und erhalten seinen Wert.
                        </p>
                    </div>
                    <div className="serviceCard">
                        <h2 className="cardTitle">Carports & Pergolen</h2>
                        <p className="cardDescription">
                            Durch regelmäßige Reinigung und Wartung schützen wir Ihr Dach langfristig vor Schäden und erhalten seinen Wert.
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