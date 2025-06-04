import { useState } from 'react';
import Accordion from './Accordion';

const AccordionGroup = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(prevIndex => (prevIndex === index ? null : index));
  };

  return (
    <div>
        <Accordion isOpen={openIndex === 0} onToggle={() => toggleAccordion(0)} title="Warum sollte ich mein Dach regelmäßig warten oder überprüfen lassen?">
            Ein regelmäßig gewartetes Dach schützt Ihr Zuhause dauerhaft vor Witterungsschäden und teuren Folgereparaturen. Bereits kleine Undichtigkeiten können langfristig große Schäden verursachen – etwa durch eindringende Feuchtigkeit. Durch frühzeitige Erkennung lassen sich solche Risiken vermeiden, und auch Ihr Versicherungsanspruch bleibt im Schadensfall gesichert. Eine regelmäßige Dachinspektion ist also eine sinnvolle Investition in den Werterhalt Ihrer Immobilie.
        </Accordion>
        <Accordion isOpen={openIndex === 0} onToggle={() => toggleAccordion(0)} title="Wie erkenne ich, ob mein Dach saniert werden muss?">
            Typische Anzeichen sind brüchige oder fehlende Ziegel, Moos- oder Algenbewuchs, Risse in der Abdichtung oder Feuchtigkeit im Dachstuhl. Auch erhöhte Heizkosten können auf eine unzureichende Dämmung hinweisen. Unsere Empfehlung: Lassen Sie Ihr Dach regelmäßig durch einen Fachmann prüfen – z. B. mit unserem kostenlosen Dach-Check. So schaffen Sie Klarheit und beugen größeren Schäden vor.
        </Accordion>
        <Accordion isOpen={openIndex === 0} onToggle={() => toggleAccordion(0)} title="Was kostet eine Dachsanierung oder Modernisierung bei Ihnen?">
            Die Kosten hängen vom Zustand Ihres Dachs, der gewünschten Ausstattung und dem Umfang der Arbeiten ab. Nach einer Besichtigung erhalten Sie von uns ein transparentes, faires Angebot – auf Wunsch auch modular aufgebaut. So können Sie die Sanierung flexibel in mehreren Etappen umsetzen. Ob Fördermittel oder Zuschüsse möglich sind, prüfen wir ebenfalls gerne für Sie.
        </Accordion>
        <Accordion isOpen={openIndex === 0} onToggle={() => toggleAccordion(0)} title="Wie ist der Ablauf ab, wenn ich ein Angebot möchte?">
            Ganz unkompliziert: Sie senden uns Fotos Ihres Dachs einfach per <a className="faqLink" href="https://wa.me/1774821477?text=Ich%20bin%20sehr%20an%20einem%20Angebot%20interessiert" target="_blank">WhatsApp</a> oder <a className="faqLink" href="mailto:e.kaiser@dachdecker-kaiser.de">Email</a> zur Angebotsanfrage. Wir melden uns zeitnah mit einer ersten fachlichen Einschätzung – selbstverständlich kostenlos und unverbindlich. Bei Interesse vereinbaren wir einen Vor-Ort-Termin, um alle Details zu besprechen und ein passgenaues Angebot zu erstellen.
        </Accordion>
        <Accordion isOpen={openIndex === 0} onToggle={() => toggleAccordion(0)} title="Was bringt mir ein Balkonkraftwerk – lohnt sich das wirklich?">
            Definitiv! Mit einem Balkonkraftwerk produzieren Sie sofort eigenen Strom, senken Ihre Energiekosten und machen sich unabhängiger von steigenden Strompreisen. Die Anlagen sind kompakt, effizient und lassen sich unkompliziert installieren – auf Wunsch übernehmen wir die Montage und den Service für Sie. So machen Sie den ersten Schritt zur eigenen Energiewende direkt bei sich zuhause.
        </Accordion>
        <Accordion isOpen={openIndex === 0} onToggle={() => toggleAccordion(0)} title="Warum Dachdecker Kaiser? Was unterscheidet Sie von anderen?">
            Wir stehen für echtes Handwerk mit Handschlagqualität – kombiniert mit modernem Denken und individuellem Service. Mit über 30 Jahren Erfahrung bieten wir zuverlässige Lösungen, die nicht nur heute funktionieren, sondern auch für morgen gedacht sind. Energieeffizienz, Zukunftstechnologien und persönliche Beratung sind für uns selbstverständlich – das macht uns zu Ihrem starken Partner rund ums Dach.
        </Accordion>
    </div>
  );
};

export default AccordionGroup;
