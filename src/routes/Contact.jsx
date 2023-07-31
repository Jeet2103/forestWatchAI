import Navbar from "../Components/Navbar";
import Form from "../Components/Form";

function Contact (){
    return(
        <>
            <Navbar />
            <h1>Contact With Us</h1>
            <p>We would love to interact with you</p>
            <p>Feel free to get in touch with us</p>
            <Form tag="contact" />
            <div>
                <h2>Reach Us</h2>
                <p><span>Email:</span>forestwatchai@gmail.com</p>
                <p><span>Phone:</span>+91 7653423789</p>
                <p><span>Address:</span>Kolkata</p>
            </div>
        </>
    );
}

export default Contact;