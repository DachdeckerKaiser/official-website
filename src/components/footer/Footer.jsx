import "./footer.css";
import logo from "../../assets/logo_white.png";


function Footer() {
    return (
        <>
            <div className="footer">
                <div className="footerContent">
                    <div className="col col1">
                        <img src={logo} className="footerLogo"></img>
                    </div>
                    <div className="col col2">
                        <h3>Anschrift</h3>
                        <p>
                            Städtelner Str. 28A <br />
                            04416 Markkleeberg
                        </p>
                    </div>
                    <div className="col col3">
                        <h3>Kontakt</h3>
                        <p className="conatctLinks">
                            <a className="footerLink" href="tel:+491774821477">+49 177 4821477</a>
                            <a className="footerLink" href="mailto:e.kaiser@dachdecker-kaiser.de">e.kaiser@dachdecker-kaiser.de</a>
                        </p>
                        <p className="legalLinks">
                            <a className="footerLink" href="/impressum">Impressum</a>
                            <a className="footerLink" href="/datenschutz">Datenschutz</a>
                        </p>
                    </div>
                </div>
            </div>
            <div className="secondFooter">
                <p>Designed and delivered by <a href="https://flowefy.de" target="_blank" className="flowefy">flowefy.</a></p>
            </div>
        </>
    );
}

export default Footer;