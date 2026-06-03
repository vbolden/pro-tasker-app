function Header () {
    return (
        <header>
            <div className="header-content">
                <h1>Hello, User!</h1>
                <div className="header-right">
                    <button id="notifications">🔔</button>
                    <input type="text" placeholder="Search" />
                    <a href="#">
                        <div className="circle"></div>
                    </a>
                </div>
            </div>
        </header>
    )
}

export default Header;