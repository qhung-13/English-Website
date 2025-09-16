import { Link } from "react-router-dom";

import "../../assets/styles/Header.css";
import Auth from "../../pages/Auth";

const Header = () => {
    return (
        <header className="header" id="header">
            <nav className="nav container">
                <a href="/" className="nav__logo">
                    <i className="ri-english-input"></i> English
                </a>

                <div className="nav__menu">
                    <ul className="nav__list">
                        <li className="nav__item">
                            <a href="/" className="nav__link">
                                <i className="ri-home-9-line"></i>
                                <span>Home</span>
                            </a>
                        </li>
                         <li className="nav__item">
                            <a href="/" className="nav__link">
                                <i className="ri-book-open-line"></i>
                                <span>Vocabulary</span>
                            </a>
                        </li>
                         <li className="nav__item">
                            <a href="/" className="nav__link">
                                <i className="ri-headphone-line"></i>
                                <span>Listening</span>
                            </a>
                        </li>
                         <li className="nav__item">
                            <a href="/" className="nav__link">
                                <i className="ri-edit-line"></i>
                                <span>Writing</span>
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="nav__actions">
                    {/* Login Button */}
                    <Link to="/auth"><i className="ri-user-line login-button" id="login-button"></i></Link>

                    {/* Theme Button */}
                    <i className="ri-moon-line theme-button" id="theme-button"></i>
                </div>
            </nav>
        </header>
    );
}

export default Header;
