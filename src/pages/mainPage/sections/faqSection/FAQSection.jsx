import "./faqSection.css";
import AccordionGroup from "../../../../components/accordion/AccordionGroup";

function FAQSection() {
    return(
        <div className="faqSection">
                <div className="faqContent">
                    <h1 className="faqTitle">Häufige Fragen</h1>
                    <div className="faqList">
                        <AccordionGroup />
                    </div>
                </div>
        </div>
    );
}

export default FAQSection;
