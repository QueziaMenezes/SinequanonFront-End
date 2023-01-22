import * as React from "react";
import { Gradient } from "../../components/Container/style";
import {
  AreaBotaoCadastro,
  AreaFotoCadastro,
  AreaInputCadastro,
  AreaPaperCadastro,
  AreaTituloCadastro,
  AreaTotalCadastro,
  BotaoCadastrar,
  InputFotoCadastro,
  PaperCadastro,
  TituloCadastro,
} from "./style";
import { Link } from "react-router-dom";
import { Input } from "@mui/material";
import "./style.css";

export const Register = () => {
  return (
    <AreaTotalCadastro>
      <Gradient>
        <AreaTituloCadastro>
          <TituloCadastro>CADASTRE-SE</TituloCadastro>
        </AreaTituloCadastro>
        <AreaPaperCadastro>
          <PaperCadastro>
            <AreaInputCadastro>
              <Input
                sx={{ minWidth: "100%", top: "0%" }}
                placeholder={" Digite seu nome completo"}
              ></Input>
              <Input
                sx={{ minWidth: "100%", top: "10%" }}
                placeholder={" Como gostaria de ser chamado (a)"}
              ></Input>
              <Input
                sx={{ minWidth: "100%", top: "20%" }}
                placeholder={" Digite um e-mail"}
              ></Input>
              <Input
                sx={{ minWidth: "100%", top: "30%" }}
                placeholder={" Confirme o e-mail"}
              ></Input>
              <Input
                sx={{ minWidth: "100%", top: "40%" }}
                placeholder={" Digite uma Senha"}
              ></Input>
              <Input
                sx={{ minWidth: "100%", top: "50%" }}
                placeholder={" Confirme a senha"}
              ></Input>
            </AreaInputCadastro>
          </PaperCadastro>
        </AreaPaperCadastro>
        <AreaFotoCadastro>
          <InputFotoCadastro></InputFotoCadastro>
        </AreaFotoCadastro>
        <AreaBotaoCadastro>
          <Link to={"/login"}>
            <BotaoCadastrar id={"anchorsBotaoRegister"}>CADASTRAR</BotaoCadastrar>
          </Link>
        </AreaBotaoCadastro>
      </Gradient>
    </AreaTotalCadastro>
  );
};
