import "./contactSection.css";
import qrcode from "../../../../assets/dachdecker_qr_code.png";

function ContactSection() {
    function openBooking() {
        window.open('https://zeeg.me/ekaiser-dachdecker', '_blank');
    }

    return(
        <div className="contactSection">
            <div className="contactContent">
                <div className="contactSectionHeader">
                    <h1 className="contactTitle">Kontaktieren Sie uns gern!</h1>
                    <p className="contactText">Schnell & Einfach ein Einschätzung & Angebot einholen</p>
                </div>
                <div className="contactFormBox">
                    <div className="contactForm">
                        <div className="inputField">
                            <label>Vollständiger Name<span className="requiredStar">*</span></label>
                            <input type="text" name="fullName" id="fullname" placeholder="Max Mustermann" required />
                        </div>
                        <div className="inputField">
                            <label>Telefon</label>
                            <input type="text" name="phone" id="phone" placeholder="+49 123 45678" />
                        </div>
                        <div className="inputField">
                            <label>Email<span className="requiredStar">*</span></label>
                            <input type="text" name="email" id="email" placeholder="beispiel@email.de" required />
                        </div>
                        <div className="inputField">
                            <label>Nachricht<span className="requiredStar">*</span></label>
                            <textarea className="message" name="message" id="message" placeholder="Ihre Nachricht..." required />
                        </div>
                        <p className="privacyText">Mit dem senden akzeptieren Sie die <a href="/datenschutz">Datenschutzbestimmungen</a>.</p>
                        <button type="button" className="submitButton" name="submitButton" id="submitButton">
                            Senden
                        </button>
                    </div>
                    <div className="bookingBox">
                        <div className="bookingContent">
                            <h2 className="bookingHeadline">Termin buchen</h2>
                            <img src={qrcode} className="bookingQRCode" alt="qr code tur Terminbuchung" />
                            <button type="button" className="bookingButton" onClick={openBooking}>Direkt Hier</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactSection;