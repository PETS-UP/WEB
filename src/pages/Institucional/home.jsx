import { Link, useNavigate } from "react-router-dom";
import BaseComponent from "../../components/Base";

export default function Root() {

  const navigate = useNavigate();

  return (
    <>
    <BaseComponent />
    </>
  );
}