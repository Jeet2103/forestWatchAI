import React,{useState} from "react";
import InputField from "../Components/InputField";

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
                <InputField label="First Name" type="text" name="firstName" value={dataSignup.firstName} onChange={handleChangeSignup} />
                <InputField label="Last Name" type="text" name="lastName" value={dataSignup.lastName} onChange={handleChangeSignup} />
                <InputField label="Email" type="email" name="email" value={dataSignup.email} onChange={handleChangeSignup} />
                <InputField label="Password" type="password" name="password" value={dataSignup.password} onChange={handleChangeSignup} />
                <InputField label="Confirm Password" type="password" name="confirmPassword" value={dataSignup.confirmPassword} onChange={handleChangeSignup} />
                <input type="submit" value="Signup" />
            </form>
        </>
        );
    } else if(props.tag === "login"){
        return( 
            <>
                <form onSubmit={handleSubmitLogin}>
                    <InputField label="Email" type="email" name="email" value={dataLogin.email} onChange={handleChangeLogin} />
                    <InputField label="Password" type="password" name="password" value={dataLogin.password} onChange={handleChangeLogin} />
                    <input type="submit" value="Login" />
                </form>
            </>
        );
    } else if(props.tag === "contact"){
        return( 
            <>
                <form onSubmit={handleSubmitContact}>
                    <InputField label="Name" type="text" name="name" value={dataContact.password} onChange={handleChangeContact} />
                    <InputField label="Phone" type="tel" name="phone_no" value={dataContact.password} onChange={handleChangeContact} />
                    <InputField label="Email" type="email" name="email" value={dataContact.email} onChange={handleChangeContact} />
                    <InputField label="Subject" type="text" name="subject" value={dataContact.password} onChange={handleChangeContact} />
                    <InputField label="Message" type="text" name="message" value={dataContact.password} onChange={handleChangeContact} />
                    <input type="submit" value="Login" />
                </form>
            </>
        );
    }
}

export default Form;