import Navbar from "../Components/Navbar";
import "./servicestyle.css"

function Service (){
    return(
        <>
            <Navbar />
            <div className="for_nav">
                <h1>This is service page</h1>
                <div id="ser-div">
                    <a href="/poacher detection"><button className="ser-btn">POACHER DETECTION</button></a>
                    <a href="/forest fire alert"><button className="ser-btn">FOREST FIRE ALERT</button></a>
                    <a href="/flood alert"><button className="ser-btn">FLOOD ALERT</button></a>
                </div>
            </div>
        </>
    );
}

export default Service;
