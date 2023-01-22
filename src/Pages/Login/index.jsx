import * as React from "react";
import "./style.css"; 
import { Gradient } from "../../Components/Container/style";
import {
  AreaBotao,
  AreaCadastro,
  AreaEsqueceuSenha,
  AreaInput,
  AreaPaper,
  AreaTitulo,
  AreaTotal,
  BotaoEntrar,
  PaperLogin,
  TituloPaper,
} from "./style.js";
import { Link, useNavigate } from "react-router-dom";
import { ListItemText, Input } from "@mui/material";

export const Login = () => {
  // const [user, setUser] = useState({
  //   email: " ",
  //   pass: " ",
  // });
  const navigate = useNavigate();

  return (
    <AreaTotal>
      <Gradient>
      <AreaTitulo>
        <TituloPaper>SINEQUANON</TituloPaper>
      </AreaTitulo>
      <AreaPaper>
        <PaperLogin>
          <AreaInput>
            <Input
              sx={{ minWidth: "100%", top: "10%" }}
              placeholder={"  E-mail"}
            ></Input>
            <Input
              sx={{ minWidth: "100%", top: "30%" }}
              placeholder={"  Senha"}
            ></Input>
          </AreaInput>
        </PaperLogin>
        <AreaBotao>
          <Link to={"/home"}>
            <BotaoEntrar id={'anchorsBotao'}>ENTRAR</BotaoEntrar>
          </Link>
        </AreaBotao>
        <AreaEsqueceuSenha>
          <Link to={"/forgotPass"}>
            <ListItemText
              sx={{ maxWidth: 200 }}
              primary={"Esqueceu senha?"}
            />
          </Link>
        </AreaEsqueceuSenha>
        <AreaCadastro>
          <Link to={"/register"}>
            <ListItemText
              sx={{ maxWidth: 200 }}
              primary={"Cadastre-se"}
            />
          </Link>
        </AreaCadastro>
      </AreaPaper>
      </Gradient>
    </AreaTotal>
  );
};
