import React from 'react'
import { StdTableContainer } from './style'
import { downloadCSV } from '../../utils'
import PlanoPadrao from  '../../assets/PlanoPadrao.csv'
import PlanoVazio from '../../assets/PlanoVazio.csv'

export const StdTable = () => {
    async function downloadStdTable() {

        let stdTableResponse = await fetch(PlanoPadrao);
        let stdTable = await stdTableResponse.text();
        downloadCSV('TabelaPadrao.csv', stdTable);
    }
    async function downloadVoidTable() {
        let voidTableResponse = await fetch(PlanoVazio);
        let voidTable = await voidTableResponse.text();
        downloadCSV('TabelaVazia.csv', voidTable);
    }

    function DownloadButton({ children, OnClick }) {
        return (
            <button onClick={OnClick}>{children}</button>
        )
    }

    return (
        <StdTableContainer>
            <DownloadButton OnClick={downloadVoidTable}>Baixar tabela em branco</DownloadButton>
            <DownloadButton OnClick={downloadStdTable}>Baixa tabela padrão</DownloadButton>
        </StdTableContainer>
    )
}
