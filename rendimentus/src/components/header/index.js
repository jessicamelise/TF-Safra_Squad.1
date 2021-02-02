import React, { useState, useEffect } from 'react';
import { Images } from '../images/images';
import logo from '../../assests/logo-safra.svg';
import logout from '../../assests/logout.svg';
import back from '../../assests/back.svg';
import './header.css';
import { useHistory, useLocation } from "react-router-dom";
import { loadApiGetUsers } from "../../api/loadApi.js";

export const Header = () => {
  const [name, setName] = useState([]);
  const [cpf, setCpf] = useState([]);
  const location = useLocation();
  const compareLocation = location.pathname === "/profile";
  let history = useHistory();

  useEffect(() => {
    loadApiGetUsers().then((data) => {
      let name = data.client.map(item => item.name).reduce((acc, client) => {
        acc += `<p>${client.name}</p>`;
        return acc;
      });
      name = name.split(' ')[0];
      setName(name);
      const cpf = data.client.map(item => item.cpf).reduce((acc, client) => {
        acc += `<p>${client.cpf}</p>`;
        return acc;
      });
      setCpf(cpf);
    });
    
  }, []);

  const handleClick = (path) => {
    history.push(path);
  };

  return (
    <header className='header'>
      <div className='images-header'>
        <div className={compareLocation ? "visibility" : "back"} onClick={() => handleClick("/profile")}>
          <Images src={back} alt='back' className='img-back' />
        </div>
        <div className='logo'>
          <Images src={logo} alt='logo' className='img-logo'/>
        </div>
        <div className='logout' onClick={() => handleClick("/")}>
          <Images src={logout} alt='logout' className='logout-image' />
        </div>
      </div>
      <nav>
        <div className='client-info'>
          <p id='client-name' className='client-name'>Olá, {name}!</p>
          <p className='client-account'>CPF: {cpf}</p>
        </div>
      </nav>
    </header>
  );

};

