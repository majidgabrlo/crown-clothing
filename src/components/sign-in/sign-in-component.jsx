import React from 'react';
import FormInput from '../form-input/form-input-component'
import CustomButton from '../custom-button/custom-button-component'
import {signInWithGoogle, auth} from '../../firebase/firebase-utils'
import './sign-in-styles.scss';

class SignIn extends React.Component{
    constructor(props){
        super(props);
        this.state={
            email:'',
            password:''
        }
    }

    handleSubmit=async(event)=>{
        event.preventDefault();
        const {email,password}=this.state;
        try {
            await auth.signInWithEmailAndPassword(email,password);
            this.setState({email:'',password:''})
            alert('You have successfully logged in')
        } catch (error) {
            alert(error.message)
        }
    }
    
    handleChange=(event)=>{
        const{value,name}=event.target
        this.setState({[name]:value})
    }
    render(){
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your e-mail and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput name='email' type='email' value={this.state.email} handleChange={this.handleChange} label='Email' required />
                    <FormInput name='password' type='password' handleChange={this.handleChange} value={this.state.password} label='Password' required />
                    <div className='button'>
                        <CustomButton type='submit'>
                            Sign in
                        </CustomButton>
                        {/* signInWithGoogle is th function that we wrote in our firebase.js */}
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                            Sign in by Google
                        </CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;