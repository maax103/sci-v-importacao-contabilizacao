import { UserContext } from "../../context/context";
import React from "react";
import { SystemInfoContainer } from "./style.js";

export const SystemInfo = () => {

  return (
    <SystemInfoContainer>
      <h1>Instruções de uso</h1>
      <div>
        <p>{'Use esta aplicação para converter o arquivo de plano de contas para exportação Practive - Sucessor em formato csv.'}</p>
        <br></br>
        <p>O arquivo do cliente será convertido para o padrão da tabela TPIC do SCI Visual Practice.</p><br></br> 
        <p>A tabela encontra-se em: <strong><i>VPRA/Empresas/[NÚMERO_DA_EMPRESA]/TPIC[NÚMERO_DA_EMPRESA].DB</i></strong></p><br></br>
      </div>
    </SystemInfoContainer>
  );
};
