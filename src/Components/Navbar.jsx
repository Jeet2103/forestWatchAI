import { Component } from "react";
import "./navbarStyles.css";
import { MenuItems } from "./Manuitems";
import {Link} from "react-router-dom";
class Navbar extends Component {
    state ={clicked: false};
    handleClick =() =>{
        this.setState({clicked: !this.state.clicked})
    }
    render(){
        return(
            <nav className="NavbarItems">

                <h1 className="navbar-logo">ForestWatchAI</h1>
                                       
                <div className="menu-icons" onClick={this.handleClick} >
                    <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars" }></i>
                </div>

                <ul className={this.state.clicked ? "nav-menu active" : "nav-menu "}>
                    {MenuItems.map((item,index) =>{
                        return(
                            <li key={index}>
                                <Link className={item.cName} to={item.url}> 
                                <i className={item.icon}></i>{item.title} 
                                </Link>
                            </li>
                        );
                    }
                    )}
                    
<<<<<<< HEAD
                    <a href="/signup"><button id="nav-btn">Sign Up</button></a>
=======
                    <button id="nav-btn">Sign Up</button>
>>>>>>> 0e6bdd6b5d9944ecc4e2be1e73d89abe45dcdb44
                </ul>

            </nav>



        );
    }
}


export default Navbar;
