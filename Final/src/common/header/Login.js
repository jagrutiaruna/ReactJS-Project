import React, {useState} from 'react';
import {Input,InputLabel,FormControl,Button} from '@material-ui/core';
import './Commonlogin.css';


export default function Login() {

        const [userName,setUserName] = useState("");
        const [password,setPassword] = useState("");
        const [userError,setUserError] = useState(false);
        const [passError,setPassError] = useState(false);
        const [UserUnTouched,setUserUnTouched] = useState(true);
        const [PassUnTouched,setPassUnTouched] = useState(true);
        
    const handleUserChange = (event) =>{
            let value = event.target.value;
            if(value.length <= 1){
                setUserError(true);
            }
            else{
                setUserError(false);
            }
            setUserName(value);
            setUserUnTouched(false);
            
    }
    const handlePassChange = (event) =>{
        let value = event.target.value;
            if(value.length <= 1){
                setPassError(true);
            }
            else{
                setPassError(false);
            }
            setPassword(value);
            setPassUnTouched(false);
        }

    
    
    const onSubmits = (event) => {
        event.preventDefault();
        if(!(userError) && !(passError) && !(UserUnTouched) && !(PassUnTouched)){
           console.log(userName,password);
        }
        else {
            if(UserUnTouched){ 
                setUserError(true);
            }
            if(PassUnTouched){
                setPassError(true);
            }
            
            
            console.log('error');
        }
    }
       return( 
        
        <div className="formDiv">
            <form onSubmit={onSubmits} noValidate>
                <FormControl>
                        <InputLabel
                            htmlFor='userName'
                            required
                        >Username</InputLabel>
                        <Input
                            required 
                           onChange ={handleUserChange}
                            name = 'userName'
                            id = 'userName'
                            value={userName}
                            error={userError}
                        ></Input>
                            
                        {(userError)?<p className="errorMessage">Invalid Username</p>:null}
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
                        error={passError}
                    > </Input>
                     {(passError)?<p className="errorMessage">Invalid Password</p>:null}
                </FormControl>
                <br/>
                <br/>
                <br/>
                <Button variant="contained" color="primary" type='submit'>
                    Login
                </Button>
            </form>
        </div>
    )



}




