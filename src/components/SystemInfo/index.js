import React from "react";
import { SystemInfoContainer } from "./style.js";

export const SystemInfo = () => {

  return (
    <SystemInfoContainer>
      <h1>Instruções de uso</h1>
      <div>
        <p>○ {'Converte o arquivo de plano de contas em formato CSV para configuração de exportação Practive - Sucessor.'}</p>
        <br></br>
        <p>○ Baixe a tabela em branco e solicite o preenchimento da mesma.</p><br></br>
        <p>○ O arquivo do cliente será convertido para o padrão da tabela TPIC do SCI Visual Practice.</p><br></br>
        <p>○ Faça a importação do arquivo utilizando um software editor de tabelas como <i>Paradox Data Editor</i>.</p><br></br>
        <p>○ A tabela encontra-se em: <i>VPRA/Empresas/[NÚMERO_DA_EMPRESA]/TPIC[NÚMERO_DA_EMPRESA].DB</i></p><br></br>
      </div>
    </SystemInfoContainer>
  );
};