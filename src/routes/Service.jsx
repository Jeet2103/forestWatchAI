import Navbar from "../Components/Navbar";
import "./servicestyle.css"
function Service (){
    return(
        <>
            <Navbar />
            <h1>This is service page</h1>
            <div id="ser-div">
            <button className="ser-btn">this is first button</button>
            <button className="ser-btn">this is second button</button>
            <button className="ser-btn">this is third button</button>
            </div>
        </>
    )
}

export default Service;
