import "./contactSection.css";
import qrcode from "../../../../assets/dachdecker_qr_code.png";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import Animate from "../../../../components/animationComponent/Animate";

function ContactSection() {
    const form = useRef();
    const [statusMessage, setStatusMessage] = useState("");
const [statusType, setStatusType] = useState("");

    function openBooking() {
        window.open('https://zeeg.me/ekaiser-dachdecker', '_blank');
    }

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_qh58c66',
            'template_eptwblc',
            form.current,
            'k_ZJBZuPY5hSDubzr'
        )
        .then(
            (result) => {
                console.log(result.text);
                setStatusMessage("Nachricht erfolgreich gesendet!");
                setStatusType("success");
                form.current.reset();
            },
            (error) => {
                console.log(error.text);
                setStatusMessage("Fehler beim Senden der Nachricht.");
                setStatusType("error");
            }
        );
    };

    return (
        <div className="contactSection">
                <div className="contactContent">
                    <Animate animation="animate__bounceInUp">
                        <div className="contactSectionHeader">
                            <h1 className="contactTitle">Kontaktieren Sie uns gern!</h1>
                            <p className="contactText">Schnell & Einfach ein Einschätzung & Angebot einholen</p>
                        </div>
                    </Animate>
                    <Animate animation="animate__bounceInUp">
                        <div className="contactFormBox">
                            <form ref={form} onSubmit={sendEmail} className="contactForm">
                                <div className="inputField">
                                    <label>Vollständiger Name<span className="requiredStar">*</span></label>
                                    <input type="text" name="fullName" placeholder="Max Mustermann" required />
                                </div>
                                <div className="inputField">
                                    <label>Telefon</label>
                                    <input type="text" name="phone" placeholder="+49 123 45678" />
                                </div>
                                <div className="inputField">
                                    <label>Email<span className="requiredStar">*</span></label>
                                    <input type="email" name="email" placeholder="beispiel@email.de" required />
                                </div>
                                <div className="inputField">
                                    <label>Nachricht<span className="requiredStar">*</span></label>
                                    <textarea className="message" name="message" placeholder="Ihre Nachricht..." required />
                                </div>
                                <p className="privacyText">
                                    Mit dem Senden akzeptieren Sie die <a href="/datenschutz">Datenschutzbestimmungen</a>.
                                </p>
                                <button type="submit" className="submitButton">Senden</button>
                                {statusMessage && (<p className={`statusMessage ${statusType}`}>{statusMessage}</p>)}
                            </form>

                            <Animate animation="animate__bounceInRight">
                                <div className="bookingBox">
                                    <div className="bookingContent">
                                        <h2 className="bookingHeadline">Termin buchen</h2>
                                        <img src={qrcode} className="bookingQRCode" alt="qr code zur Terminbuchung" />
                                        <button type="button" className="bookingButton" onClick={openBooking}>Direkt Hier</button>
                                    </div>
                                </div>
                            </Animate>
                        </div>
                    </Animate>
            </div>
        </div>
    );
}

export default ContactSection;
