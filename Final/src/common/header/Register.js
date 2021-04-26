import React,{useState} from 'react';
import {Button,Input,InputLabel,FormControl} from '@material-ui/core';
import './Commonlogin.css';

export default function Register() {

    const [firstName,setFirstName] = useState("");
    const [lastName,setLastName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [contact,setContact] = useState("");

    const [firstNameError,setFirstNameError] = useState(false);
    const [lastNameError,setLastNameError] = useState(false);
    const [emailError,setEmailError] = useState(false);
    const [passwordError,setPasswordError] = useState(false);
    const [contactError,setContactError] = useState(false);

    const [firstNameUnTouch,setFirstNameUnTouch] = useState(true);
    const [lastNameUnTouch,setLastNameUnTouch] = useState(true);
    const [emailUnTouch,setEmailUnTouch] = useState(true);
    const [passwordUnTouch,setPasswordUnTouch] = useState(true);
    const [contactUnTouch,setContactUnTouch] = useState(true);

    const [submitSuccess,setSubmitSucess] = useState(false);

    const handleFirstChange = (event) => {
        let value = event.target.value;
        if(value.length < 3){
            setFirstNameError(true);
        }
        else{
            setFirstNameError(false);
        }
        setFirstName(value);
        setFirstNameUnTouch(false);
    }

    const handleLastChange = (event) => {
        let value = event.target.value;
        if(value.length < 3){
            setLastNameError(true);
        }
        else{
            setLastNameError(false);
        }
        setLastName(value);
        setLastNameUnTouch(false);
    }

    const handleEmailChange = (event) => {
        let value = event.target.value;
        if(!value.includes('@') || value <= 9 || !value.includes('.com')){
            setEmailError(true);
        }
        else{
            setEmailError(false);
        }
        setEmail(value);
        setEmailUnTouch(false);
    }

    const handlePassChange = (event) =>{
        let value = event.target.value;
            if(value.length <= 1){
                setPasswordError(true);
            }
            else{
                setPasswordError(false);
            }
            setPassword(value);
            setPasswordUnTouch(false);
            
    }

    const handleContactChange = (event) => {
        let value = event.target.value;
        if(!(value.length === 10) ){
            setContactError(true);
        }
        else{
            setContactError(false);
        }
        setContact(value);
        setContactUnTouch(false);
    }
    
    const onSubmits = (event) => {
        
        event.preventDefault();
        if(!(firstNameError) && !(lastNameError) && !(emailError) && !(passwordError) && !(contactError)
        && !(firstNameUnTouch) && !(lastNameUnTouch) && !(emailUnTouch) && !(passwordUnTouch) && !(contactUnTouch)){
            console.log(firstName,lastName,email,password,contact);
            setSubmitSucess(true);
        }
        else{
            if(firstNameUnTouch){
                setFirstNameError(true);
            }
            if(lastNameUnTouch){
                setLastNameError(true);
            }
            if(emailUnTouch){
                setEmailError(true);
            }
            if(passwordUnTouch){
                setPasswordError(true);
            }
            if(contactUnTouch){
                setContactError(true);
            }
            console.log('error');
            setSubmitSucess(false);
        }
    }
    return(
        <div className='formDiv'>
            <form onSubmit={onSubmits}noValidate>
                <FormControl>
                        <InputLabel
                            htmlFor='firstName'
                            required
                        >First Name</InputLabel>
                        <Input
                            required 
                            onChange ={handleFirstChange}
                            name = 'firstName'
                            id = 'firstName'
                            value={firstName}
                            error={firstNameError}
                        ></Input>
                            
                        {(firstNameError)?<p className="errorMessage">required</p>:null}
                </FormControl>
                <br/>
                <br/>
                <FormControl>
                        <InputLabel
                            htmlFor='lastName'
                            required
                        >Last Name</InputLabel>
                        <Input
                            required 
                           onChange ={handleLastChange}
                            name = 'lastName'
                            id = 'lastName'
                            value={lastName}
                            error={lastNameError}
                        ></Input>
                            
                        {(lastNameError)?<p className="errorMessage">required</p>:null}
                </FormControl>
                <br/>
                <br/>
                <FormControl>
                        <InputLabel
                            htmlFor='email'
                            required
                        >Email</InputLabel>
                        <Input
                            required 
                            onChange ={handleEmailChange}
                            name = 'email'
                            id = 'email'
                            value={email}
                            error={emailError}
                        ></Input>
                            
                        {(emailError)?<p className="errorMessage">required</p>:null}
                </FormControl>
                <br/>
                <br/>
                <FormControl>
                <InputLabel
                            htmlFor='password'
                            required
                        >Password</InputLabel>
                    <Input

                        required
                        onChange ={handlePassChange}
                        name = 'password'
                        type='password'
                        id = 'password'
                        password={password}
                        error={passwordError}
                    > </Input>
                     {(passwordError)?<p className="errorMessage">required</p>:null}
                </FormControl>
                <br/>
                <br/>
                <FormControl>
                <InputLabel
                            htmlFor='contact'
                            required
                        >Contact No. </InputLabel>
                    <Input

                        required
                        onChange ={handleContactChange}
                        name = 'contact'
                        id = 'contact'
                        password={contact}
                        error={contactError}
                    > </Input>
                     {(contactError)?<p className="errorMessage">required</p>:null}
                </FormControl>
                <br/>
                <br/>
                {(submitSuccess)?<p className="submitSuccess">Registration Successful. Please Login!</p>:<br/>}
                <Button variant="contained" color="primary" type='submit'>
                    Register
                </Button>
            </form>
        </div>
    );
}