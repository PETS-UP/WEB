import './styles.css';
import Background from '../../assets/images/PETSUP-BACKGROUND-HOME.png';
import Image from '../../assets/icons/PETSUP-LOGO-ICON.png';

const BaseComponent = () => {
  return (
    <div className="banner">
      <img src={Background} className="imagebg" />
      <div className="main-content-index">
        <div className="image-main"><img src={Image} /></div>
        <div className="content-main">
          <p className="title-content">Seja bem vindo! </p>
        </div>
      </div>
    </div>
  );
}

export default BaseComponent;