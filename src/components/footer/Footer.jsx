import "./footer.css";


function Footer() {
    return (
        <div className="footer">
            <div className="footerContent">
                <div className="col col1">
                    <h1 className="flowefyLogo">flowefy.</h1>
                </div>
                <div className="col col2"></div>
                <div className="col col3">
                    <a className="footerLink" href="/impressum">Impressum</a>
                    <a className="footerLink" href="/datenschutz">Datenschutz</a>
                </div>
            </div>
        </div>
    );
}

export default Footer;