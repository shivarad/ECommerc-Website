import React from 'react';
import FormInput from '../../components/custom-form-input/Form-Input';
import CustomBtn from '../custom-button/customButton'
import './sign-in.scss';

class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state={
            email:'',
            password:''
        }
    }
    handleSubmit = event => {
        event.preventDefault();
        this.setState({ email: '', password: '' });
      };
    
      handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value });
      };

    render(){
        return(
            <div className='sign-in'>
                <h2>I allready have an account </h2>
                <span>Sign in with your email and password</span>
                <form onSubmit='this.handleSubmit'>
                        <FormInput 
                            name='email' 
                            label='Email' 
                            type='email'            
                            value={this.state.email}
                            required 
                            onChange={this.handleChange}>
                        </FormInput>
                        <FormInput 
                            name='password' 
                            label='Password' 
                            type='password'            
                            value={this.state.password}
                            required 
                            onChange={this.handleChange}>
                        </FormInput>
                        <CustomBtn type='submit' >Sign In</CustomBtn>
                </form>
            </div>
        )
    }
}


export default SignIn;