import "../../assets/styles/Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__contents">
                <div className="footer__container container grid">
                    <div>
                        <a href="/" className="footer__logo">
                            <i className="ri-english-input"></i>
                            English
                        </a>

                        <p className="footer__description">
                            Find and explore the best <br />
                            eBooks from all your <br />
                            favorite writers
                        </p>
                    </div>

                    <div className="footer__social">
                        <a href="/" className="footer__social-link" target="_blank">
                            <i className="ri-facebook-circle-line"></i>
                        </a>

                        <a href="/" className="footer__social-link" target="_blank">
                            <i className="ri-instagram-line"></i>
                        </a>

                        <a href="/" className="footer__social-link" target="_blank">
                            <i className="ri-twitter-line"></i>
                        </a>
                    </div>
                </div>
            </div>

            <span className="footer__copyright">
                &#169; All Rights Reserved By Is_Swit
            </span>
        </footer>
    );
}

export default Footer;