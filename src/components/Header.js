import "../styles/Header.css"

function Header() {
    return(
        <div className="header">
            <h1>
                Planet Memory
            </h1>
            <div className="scoreDiv">
                <h4>Current Score:</h4>
                <h4>Best Score:</h4>
            </div>
        </div>
    )
}

export default Header;