import './styles.css';
import Background from '../../assets/images/IMAGE-HOMEPAGE-PETSUP.png';
import Logo from '../../assets/icons/ICON-LOGO.png';
import Github from '../../assets/icons/ICON-GITHUB.png';

const BaseComponent = () => {
  return (
    <div className="banner">
      <img src={Background} className="imagebg" />
      <div className='header'>
        <img src={Logo} alt="" />
        <div className='btn'>
          <button id='btn-cliente'>ETRAR COMO CLIENTE</button>
          <button id='btn-petshop'>ENTRAR COMO EMPRESA</button>
        </div>
      </div>
    </div>
  );
}

export default BaseComponent;