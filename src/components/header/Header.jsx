import "./header.css"
import logo from "../../assets/logo_white.png";

function Header() {


    return(
        <div className="headerContainer">
            <header className="header">
                <div className="logoBox">
                    <a href="/" className="logoLink">
                        <img src={logo} className="logo" />
                    </a>
                </div>
                <div className="buttonBox">
                    <a href="tel:+491774821477" className="callButton">
                        <i class="bi bi-telephone-inbound-fill"></i>
                        +49 177 4821477
                    </a>
                </div>
            </header>
        </div>
    );
}

export default Header;