import "./header.css";
const Header = () => {
    return (
        <div id="header">
            <div className="d-flex justify-content-between container mt-3 align-items-center p-2 rounded">
                <h4 className="brand-name">Knowledge Cafe</h4>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGqJduKrLk4-1j--Yv_C0UL1Xetkj1T6EOMg&s"
                    alt="user img"
                    className="cafe_user rounded-pill"
                />
            </div>
        </div>
    );
};

export default Header;
