import { Link, useNavigate } from "react-router-dom";
import BaseComponent from "../../components/Base";

export default function Root() {

  const navigate = useNavigate();

  return (
    <>
    <BaseComponent />
    Home page

    <Link to="/login">Ir para login de outra forma</Link>
    
    <button onClick={() => navigate('/login')}>Ir para login</button>
    </>
  );
}