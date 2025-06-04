import "./faqSection.css";
import AccordionGroup from "../../../../components/accordion/AccordionGroup";
import Animate from "../../../../components/animationComponent/Animate";

function FAQSection() {
    return(
        <div className="faqSection">
            <Animate animation="animate__bounceInUp">
                <div className="faqContent">
                    <h1 className="faqTitle">Häufige Fragen</h1>
                    <div className="faqList">
                        <AccordionGroup />
                    </div>
                </div>
            </Animate>
        </div>
    );
}

export default FAQSection;
