import React,{useState} from 'react';
import PropTypes from 'prop-types';
import logo from "../Login/logo.png"
import './Login.css';

async function loginUser(credentials) {
  var targetUrl='http://localhost:5000/login'
 return fetch(targetUrl ,{
   method: 'POST',
   headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': 'http://localhost:3000'
         },
   body: JSON.stringify(credentials)
 })
   .then(data => data.json())
}

export default function Login({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    });
    setToken(token);
  }

  return(
    <div className="login-wrapper">
      <img alt="Rede" src={logo}  ></img>
      <h1 >S'identifier </h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Adresse e-mail </p>
          <input type="text" onChange={e => setUserName(e.target.value)} />
        </label>
        <br/>
        <label>
          <p>Mot de passe </p>
          <input type="password" onChange={e => setPassword(e.target.value)} />
        </label>
        <p> </p>
        <div>
          <button type="submit">Se connecter</button>
        </div>
      </form>
    </div>
  )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
};


