import './styles.css';
import Logo from '../../assets/icons/ICON-LOGO.svg';

const BaseComponent = () => {
  return (
    <div className="banner">
      <div className='header'>
        <img src={Logo} alt="" />
        <div className='btn'>
          <button id='btn-cliente'>ENTRAR COMO CLIENTE</button>
          <button id='btn-petshop'>ENTRAR COMO EMPRESA</button>
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