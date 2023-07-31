import Navbar from "../Components/Navbar";
// import Hero from "../Components/Hero";
function Home (){
    return(
        <>
            <Navbar />
            <div className="hero">
                <img src=".\src\assets\home.jpg" alt="HeroImg" />
            </div>
            <div className="hero-text">
                <h1 >Welcome to ForestWatchAI Website</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, nisi.</p>
                <div className="btn-box">

                    <a href="/login" className="btn">Login</a>
                    <a href="/signup" className="btn">Register</a>
                    
                </div>
            </div>
        </>
    )
}

export default Home;