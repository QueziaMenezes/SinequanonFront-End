import * as React from "react";
import { Gradient } from "../../Components/Container/style";
import {
  BotaoEntrar,
  PaperLogin,
  TemaPaper,
} from "./style.js";
import { Link, useNavigate } from "react-router-dom";
import { ListItemText, Input } from "@mui/material";
import "./style.css";

export const Login = () => {
  // const [user, setUser] = useState({
  //   email: " ",
  //   pass: " ",
  // });
  const navigate = useNavigate();

  return (
    <Gradient>
      <PaperLogin>
        <TemaPaper>Fazer Login</TemaPaper>
        <div className="emailSenhaArea">
          <Input
            sx={{ minWidth: "100%", top: "10%" }}
            placeholder={"  E-mail"}
          ></Input>
          <Input
            sx={{ minWidth: "100%", top: "30%" }}
            placeholder={"  Senha"}
          ></Input>
        </div>
        <Link to={"/home"}>
          <BotaoEntrar>ENTRAR</BotaoEntrar>
        </Link>
        <div className="botaoArea">
          <Link to={"/forgotPass"}>
            <ListItemText sx={{maxWidth: 200}} primary={"Esqueceu sua senha?"} />
          </Link>
          <Link to={"/register"}>
            <ListItemText sx={{maxWidth: 200}} primary={"Não possui cadastro?"} />
          </Link>
        </div>
      </PaperLogin>
    </Gradient>
  );
};