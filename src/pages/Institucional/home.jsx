import { Link, useNavigate } from "react-router-dom";
import BaseComponent from "../../components/Base/index";
import QuemSomos from "../../components/QuemSomos/quemSomos"
import NossaEquipe from "../../components/NossaEquipe/nossaEquipe";
import Cards from "../../components/Cards/cards";
import FooterHome from "../../components/FooterHome/footerHome";

export default function Root() {

  const navigate = useNavigate();

  return (
    <>
      <BaseComponent />
      <QuemSomos />
      <NossaEquipe />
      <Cards />
      <FooterHome />
    </>
  );
}