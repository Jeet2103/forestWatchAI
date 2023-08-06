import React,{useState} from "react";
import InputField from "../Components/InputField";
// import "./Form.css";

function Form(props){ 
    const [dataSignup, setDataSignup] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
      });
    const [dataLogin, setDataLogin]=useState({
        email: '',
        password: ''
    });
    const [dataContact, setDataContact]=useState({
        name: '',
        phone: '',
        email: '',
        subject: '',
        message: ''
    });
    
    //For Signup
    const handleSubmitSignup = (event) => {
        if (validateFormSignup()) {
          // You can handle form submission here, e.g., send form data to the server
          console.log('Form submitted successfully!', dataSignup);
        }
      };
    const validateFormSignup = () => {
      const {password, confirmPassword } = dataSignup;
      if (password !== confirmPassword) {
        alert('Password and Confirm Password must match.');
        return false;
      }
    
      return true;
    };
    
      const handleChangeSignup = (event) => {
        const { name, value } = event.target;
        setDataSignup((prevdataSignup) => ({
          ...prevdataSignup,
          [name]: value,
        }));
      };
    
      //For Login
      const handleSubmitLogin = (event) => {
        if (validateFormLogin()) {
          // You can handle form submission here, e.g., send form data to the server
          console.log('Form submitted successfully!', dataLogin);
        }
      };
      const validateFormLogin = () => {
        const {password, confirmPassword } = dataLogin;
        if (password !== confirmPassword) {
          alert('Password and Confirm Password must match.');
          return false;
        }
    
        return true;
      };
    
      const handleChangeLogin = (event) => {
        const { name, value } = event.target;
        setDataLogin((prevdataLogin) => ({
          ...prevdataLogin,
          [name]: value,
        }));
      };

      //For Contact Page
      const handleSubmitContact = (event) => {
        if (validateFormContact()) {
          // You can handle form submission here, e.g., send form data to the server
          console.log('Form submitted successfully!', dataContact);
        }
      };
      const validateFormContact = () => {
        const {password, confirmPassword } = dataContact;
        if (password !== confirmPassword) {
          alert('Password and Confirm Password must match.');
          return false;
        }
    
        return true;
      };
    
      const handleChangeContact = (event) => {
        const { name, value } = event.target;
        setDataContact((prevdataContact) => ({
          ...prevdataContact,
          [name]: value,
        }));
      };

    if(props.tag === "signup"){
        return( 
        <>
            <form onSubmit={handleSubmitSignup}>
                <InputField placeHolder="First Name" type="text" name="firstName" value={dataSignup.firstName} onChange={handleChangeSignup} />
                <InputField placeHolder="Last Name" type="text" name="lastName" value={dataSignup.lastName} onChange={handleChangeSignup} />
                <InputField placeHolder="Email" type="email" name="email" value={dataSignup.email} onChange={handleChangeSignup} />
                <InputField placeHolder="Password" type="password" name="password" value={dataSignup.password} onChange={handleChangeSignup} />
                <InputField placeHolder="Confirm Password" type="password" name="confirmPassword" value={dataSignup.confirmPassword} onChange={handleChangeSignup} />
                <input className="submit" type="submit" value="Signup" />
            </form>
        </>
        );
    } else if(props.tag === "login"){
        return( 
            <>
                <form onSubmit={handleSubmitLogin}>
                    <InputField placeHolder="Email" type="email" name="email" value={dataLogin.email} onChange={handleChangeLogin} />
                    <InputField placeHolder="Password" type="password" name="password" value={dataLogin.password} onChange={handleChangeLogin} />
                    <input className="submit" type="submit" value="Login" />
                </form>
            </>
        );
    } else if(props.tag === "contact"){
        return( 
            <>
                <form onSubmit={handleSubmitContact}>
                    <InputField placeHolder="Name" type="text" name="name" value={dataContact.password} onChange={handleChangeContact} />
                    <InputField placeHolder="Phone" type="tel" name="phone_no" value={dataContact.password} onChange={handleChangeContact} />
                    <InputField placeHolder="Email" type="email" name="email" value={dataContact.email} onChange={handleChangeContact} />
                    <InputField placeHolder="Subject" type="text" name="subject" value={dataContact.password} onChange={handleChangeContact} />
                    <InputField placeHolder="Message" type="text" name="message" value={dataContact.password} onChange={handleChangeContact} />
                    <input className="submit" type="submit" value="Send Message" />
                </form>
            </>
        );
    }
}

export default Form;