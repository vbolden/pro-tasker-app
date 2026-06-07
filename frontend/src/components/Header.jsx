import { BsFillBellFill } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";


function Header({ setMenuOpen }) {
    const user = JSON.parse(localStorage.getItem("user"));

    return (
        <header>
            <div className="header-content">
                <button
                    className="menu-btn"
                    onClick={() => setMenuOpen(prev => !prev)}
                >
                    <RxHamburgerMenu />
                </button>

                <h1>Hello, {user?.username}!</h1>
                <div className="header-right">
                    <button id="notifications"> <BsFillBellFill style={{ width: "20px", height: "20px" }} /> </button>
                    <input type="text" placeholder="Search" />
                    <a href="#">
                        <div className="circle">{user?.username.charAt(0)}</div>
                    </a>
                </div>
            </div>
        </header>
    );
}

export default Header;