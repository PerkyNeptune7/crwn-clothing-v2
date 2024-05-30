import { useState } from "react";
import FormInput from "../form-input/form-input.component";
import { signInWithGooglePopup, createUserDocumentFromAuth, signInAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";
import './sign-in-form.styles.scss';
import Button from "../button/button.component";

const defaultformFields= {
    email: '',
    password: ''
}


const SignInForm=()=>{
    const[formFields, setFormFields] = useState(defaultformFields);
    const {email, password}= formFields;
    
    console.log(formFields);
    
    const handleChange = async(event)=>{    
        const{name, value} = event.target;
        setFormFields({...formFields, [name]: value});
    }
    const signInWithGoogle = async()=>{
    await signInWithGooglePopup();    
    }

    const resetFormFields = ()=>{
        setFormFields(defaultformFields);
    }

    const handleSubmit= async(event) =>{
        event.preventDefault();
        
    try {
        const {user} = await signInAuthUserWithEmailAndPassword(email, password);
        resetFormFields();
    }catch (error) {
        switch(error.code){
        case 'auth/wrong-password':
        alert('incorrect password for email');
        break;

        case 'auth/user-not-found':
        alert('no user associated with this email');
        break;
        default:
          console.log(error);
        }
    }
};  


    return(
        <div className="sign-up-container">
        <h2>Already have an account? </h2>
        <span>Sign In with your email and password</span> 
        <form onSubmit={handleSubmit}>
            
            <FormInput 
            label= "Email"
            type="email" 
            required 
            onChange={handleChange} 
            name="email" 
            value={email}>
            </FormInput>

            <FormInput 
            label= "Password"
            type="password"
            required 
            onChange={handleChange}
            name="password" 
            value={password}>                
            </FormInput>
            <div className="buttons-container">
            <Button type="submit"> Sign In </Button>
            <Button type="button" buttonType='google' onClick={signInWithGoogle}>Google sign in</Button>
            </div>
            </form>
            
            </div>
        );
    };

export default SignInForm;