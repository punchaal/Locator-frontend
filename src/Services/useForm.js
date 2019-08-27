import { useState } from 'react';
import AuthApiService from '../Services/auth-api-service';
import history from '../Services/history';
import TokenService from '../Services/token-service';

const useForm = (callback) => {

  const [values, setValues] = useState({});
  const [error, setError] = useState(null);

  //Registration - check if all required fields are field and POST to db 
  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    const { first_name, last_name, email, password } = event.target
    AuthApiService.postUser({
      first_name: first_name.value,
      last_name: last_name.value,
      email: email.value,
      password: password.value,
    })
      .then(user => {
        first_name.value = ''
        last_name.value = ''
        email.value = ''
        password.value = ''
        window.setTimeout(() => {
          history.push('/success');
        }, 1000)
      })
      .catch(res => {
        console.log(res.error)
      })
  };

//Login - Check the Db to ensure information matches and redirect to home if validated
  const handleSubmitJwtAuth = (event) => {
    event.preventDefault()
    const { email, password } = event.target

    AuthApiService.postLogin({
      email: email.value,
      password: password.value,
    })
      .then(res => {
        email.value = ''
        password.value = ''
        TokenService.saveAuthToken(res.authToken)
      })
      .catch(res => {

        setError(res.error)
      })

    window.setTimeout(() => {
      history.push('/home');
    }, 1000)
  }

// Check for keystroke to record information typed by user
  const handleChange = (event) => {
    event.persist();
    setValues(values => ({ ...values, [event.target.id]: event.target.value }));
  };

//Clear the authtoken and send the user back to the home page
  const handleLogoutClick = () => {
    TokenService.clearAuthToken();
    history.push('/')
  };

  const handleFormSubmit = (event)=>{
    event.preventDefault();
    const date = new Date().toLocaleDateString()
    const {location_name} = event.target
    console.log(date,location_name.value)
  }
  

  return {
    handleChange,
    handleSubmit,
    handleFormSubmit,
    handleSubmitJwtAuth,
    handleLogoutClick,
    values,
    error,
  }
};

export default useForm;