import * as React from "react";
import { Gradient } from "../../Components/Container/style";
import {
  AreaBotaoRecuperar,
  AreaInputRecuperar,
  AreaPaperRecuperar,
  AreaTituloRecuperar,
  AreaTotalRecuperar,
  BotaoRecuperar,
  PaperRecuperar,
  TituloPaperRecuperar
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
    <AreaTotalRecuperar>
    <Gradient>
        <AreaTituloRecuperar>
        <TituloPaperRecuperar>RECUPERAR SENHA</TituloPaperRecuperar>
        </AreaTituloRecuperar>
        <AreaPaperRecuperar>
        <PaperRecuperar>
        <AreaInputRecuperar>
          <Input
            sx={{ minWidth: "100%", top: "10%" }}
            placeholder={"  Insira seu e-mail cadastrado"}
          ></Input>
          <Input
            sx={{ minWidth: "100%", top: "30%" }}
            placeholder={" Confirme o e-mail digitado"}
          ></Input>
        </AreaInputRecuperar>
        </PaperRecuperar>
        </AreaPaperRecuperar>
        <AreaBotaoRecuperar>
        <Link to={"/Login"}>
          <BotaoRecuperar id={"anchorsBotaoRecuperar"}>ENVIAR</BotaoRecuperar>
        </Link>
        </AreaBotaoRecuperar>
    </Gradient>
    </AreaTotalRecuperar>
  );
};