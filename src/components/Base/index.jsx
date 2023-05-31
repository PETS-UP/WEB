import './styles.css';
import Logo from '../../assets/icons/ICON-LOGO.svg';
import { useNavigate } from 'react-router-dom';

const BaseComponent = () => {

  const navigate = useNavigate();

  return (
    <div className="banner">
      <div className='header'>
        <img src={Logo} alt="" />
        <div className='btn'>
          <button onClick={() => navigate("/login-cliente")} id='btn-cliente'>ENTRAR COMO CLIENTE</button>
          <button onClick={() => navigate("/login-empresa")} id='btn-petshop'>ENTRAR COMO EMPRESA</button>
        </div>
      </div>
      <div className='content-text'>
        <h2>
          Encontre os melhores
          pet shops e agende
          os serviços online
          mais próximos
          de você
        </h2>
      </div>
    </div>

  );
}

export default BaseComponent;