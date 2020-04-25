import React from 'react';
import FormInput from '../form-input/form-input-component'
import CustomButton from '../custom-button/custom-button-component'
import { auth, createUserProfileDocument } from '../../firebase/firebase-utils'
import './sign-up-styles.scss';

class SignUp extends React.Component{
    constructor(){
        super()
        this.state={
            displayName:'',
            email:'',
            password:'',
            confirmPassword:''
        }
    }
    handleSubmit = async event => {
        event.preventDefault();
        const {displayName,email,password,confirmPassword}=this.state;
        if(password!==confirmPassword){
            alert("Password don't match")
            return
        }
        try {
            // the following line takes {user} object after auth.createUserWithEmailAndPassword(email,password) executed
            const {user}=await auth.createUserWithEmailAndPassword(email,password);
            // because in our createUserProfileDocument we have additionalData we need to send display name by {}
            await createUserProfileDocument(user,{displayName})
            // the following line empty our sign up form
            this.setState({
                displayName:'',
                email:'',
                password:'',
                confirmPassword:''
            })
            alert('Sign up was successful')
        } 
        catch (error) {
            alert(error.message)
        }
    }

    handleChange=event=>{
        // next line takes name and value of element that we took from form
        const {name,value}=event.target;
        // next line assigns to state like =>username:majidgabrlo
        this.setState({[name]:value})
    }
    render(){
        const {displayName,email,password,confirmPassword}=this.state
        return(
            <div className='sign-up'>
                <h2 className='title'>I don't have an account</h2>
                <span>Sign up with your email and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput
                        type='text'
                        name='displayName'
                        value={displayName}
                        onChange={this.handleChange}
                        label='Display Name'
                        required />

                    <FormInput
                        type='email'
                        name='email'
                        value={email}
                        onChange={this.handleChange}
                        label='Email'
                        required />

                    <FormInput
                        type='password'
                        name='password'
                        value={password}
                        onChange={this.handleChange}
                        label='Password'
                        required />

                    <FormInput
                        type='password'
                        name='confirmPassword'
                        value={confirmPassword}
                        onChange={this.handleChange}
                        label='Confirm Password '
                        required />
                    <CustomButton type='button' onClick={this.handleSubmit}> SIGN UP </CustomButton>
                </form>
            </div>
        )
    }
}
export default SignUp;