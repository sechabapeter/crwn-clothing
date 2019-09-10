import React from 'react';
import CustomButton from '../custom-buttom/custom-buttom.component'
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';

import { signInWithGoogle } from '../../firebase/firebase.utils';


class SignIn extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {


        event.preventDefault();

        this.setState({ email: '', password: '' })

    }

    handleChange = event => {
        const { value, name} = event.target;
        this.setState({[name]: value})
    }

    render() {
        return(
            <div className='sign-in'>
                <h2>
                    I already have an account
                </h2>
                <span>Sign in with your email and password</span>


               <form onSubmit={this.handleSubmit}>
                   <FormInput name="email" type="email" label="email" handleChange={this.handleChange} value={this.state.email} required/>
                 
                   <FormInput name="password" type="password"  label="password" handleChange={this.handleChange} value={this.state.password} required/>
      
                     <div className='buttons'>
                         
                   <CustomButton type="Submit"  value="Submit Form"> Sign In </CustomButton>
                   <CustomButton onClick= {signInWithGoogle}  isGoogleSignIn> Sign In with Google</CustomButton>
                     </div>

               </form>

            </div>
        );
    }
}
export default SignIn;