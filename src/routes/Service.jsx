import Navbar from "../Components/Navbar";
import "./servicestyle.css"
function Service (){
    return(
        <>
            <Navbar />
            <h1>This is service page</h1>
            <div id="ser-div">
            <button className="ser-btn">POACHER DETECTION</button>
            <button className="ser-btn">FOREST FIRE ALERT</button>
            <button className="ser-btn">FLOOD ALERT</button>
            </div>
        </>
    );
}

export default Service;
