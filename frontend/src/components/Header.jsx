import { BsFillBellFill } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";


function Header({ setMenuOpen }) {

    return (
        <header>
            <div className="header-content">
                <button
                    className="menu-btn"
                    onClick={() => setMenuOpen(prev => !prev)}
                >
                    <RxHamburgerMenu />
                </button>

                <h1>Hello, User!</h1>
                <div className="header-right">
                    <button id="notifications"> <BsFillBellFill style={{ width: "20px", height: "20px" }} /> </button>
                    <input type="text" placeholder="Search" />
                    <a href="#">
                        <div className="circle"></div>
                    </a>
                </div>
            </div>
        </header>
    );
}

export default Header;