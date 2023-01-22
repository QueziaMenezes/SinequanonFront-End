import * as React from "react";
import { Gradient } from "../../components/Container/style";
import {
  CardMensagem
} from "../../Components/Card/style.js";
import "./style.css";

export const Home = () => {
  return (
    <Gradient>
      <CardMensagem>Mensagem</CardMensagem>
    </Gradient>
  );
}