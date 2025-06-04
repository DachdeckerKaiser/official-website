import "./darumSection.css";
import Animate from "../../../../components/animationComponent/Animate";

function DarumSection() {
    return(
        <>
            <div className="darumSection">
                <Animate animation="animate__bounceInUp">
                    <div className="darumContent">
                        <h1 className="darumHeadline">Darum wir</h1>
                        <span className="darumPoints">
                            <span>•  Familiär & Nah – Wir leben und arbeiten in Markkleeberg <br/></span>
                            <span>•  Ehrlich & Transparent – Wir beraten ohne Druck und mit fairen Preisen <br/></span>
                            <span>•  Langjährige Kompetenz – Unsere Erfahrung reicht über Generationen</span>
                        </span>
                    </div>
                </Animate>
            </div>
        </>
    );
}

export default DarumSection;