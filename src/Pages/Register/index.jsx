import * as React from "react";
import { Gradient } from "../../components/Container/style";
import { BotaoCadastrar, Foto, Titulo } from "./style";
import { Link } from "react-router-dom";
import { Input} from "@mui/material";
import "./style.css";

export const Register = () => {
  return (
    <Gradient>
      <Titulo>Cadastre-se</Titulo>
      <div className="cadastroArea">
        <Input
          sx={{ minWidth: "100%", top: "30%" }}
          placeholder={" Digite seu nome completo"}
        ></Input>
        <Input
          sx={{ minWidth: "100%", top: "30%" }}
          placeholder={" Como gostaria de ser chamado (a)"}
        ></Input>
        <Input
          sx={{ minWidth: "100%", top: "30%" }}
          placeholder={" Digite um e-mail"}
        ></Input>
        <Input
          sx={{ minWidth: "100%", top: "30%" }}
          placeholder={" Confirme o e-mail"}
        ></Input>
        <Input
          sx={{ minWidth: "100%", top: "30%" }}
          placeholder={" Digite uma Senha"}
        ></Input>
        <Input
          sx={{ minWidth: "100%", top: "30%" }}
          placeholder={" Confirme a senha"}
        ></Input>
      </div>      
      <div className="fotoArea">   
      <Foto>
      </Foto>
      </div>
      <Link to={"/login"}>
        <BotaoCadastrar>CADASTRAR</BotaoCadastrar>
      </Link>
    </Gradient>
  );
}