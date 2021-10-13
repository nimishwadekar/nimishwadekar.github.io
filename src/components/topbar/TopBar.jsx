import "./topbar.scss"

export default function TopBar()
{
    return (
        <div className="topbar">
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">Home</a>
                </div>
                <div className="right"></div>
            </div>
        </div>
    );
}