import * as React from "react";
import { Gradient } from "../../Components/Container/style";
import {
    BotaoEnviar,
  PaperLogin,
  TemaPaper,
} from "./style.js";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "@mui/material";
import "./style.css"; 
  export const ForgotPass = () => {
  // const [user, setUser] = useState({
  //   email: " ",
  //   pass: " ",
  // });
  const navigate = useNavigate();

  return (
    <Gradient>
      <PaperLogin>
        <TemaPaper>Recuperar Senha</TemaPaper>
        <div className="emailArea">
          <Input
            sx={{ minWidth: "100%", top: "10%" }}
            placeholder={"  Insira seu e-mail cadastrado"}
          ></Input>
          <Input
            sx={{ minWidth: "100%", top: "30%" }}
            placeholder={" Confirme o e-mail digitado"}
          ></Input>
        </div>
        <Link to={"/Login"}>
          <BotaoEnviar>ENVIAR</BotaoEnviar>
        </Link>
      </PaperLogin>
    </Gradient>
  );
};