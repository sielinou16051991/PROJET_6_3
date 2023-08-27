// @ts-ignore
import axios from 'axios';
import {environment} from '../../environments/environment';

const baseUrl = environment.baseUrl;
export const loginUser = async (email: any, password: any) => {
  console.log('data', {
    email,
    password
  });
  let data;
  data = {
    email,
    password
  };
  try {
    const response = await axios.post(`${baseUrl}/user/login`, data);
    console.log(response);
    const jwtToken = response.data.body.token;
    console.log(jwtToken);
    return jwtToken;

  } catch (error) {
    console.error('Erreur de connexion à:', error);
    if (error.response) {
      if (error.response.status === 400) {
        console.error('Invalid fields', error.message);
        alert(error.message);
      } else if (error.response.status === 500) {
        alert('Internal server error');
      }
    }else {
      alert(error.message);
    }
  }
}
