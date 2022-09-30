import { UserContext } from "../../context/context";
import React, { useCallback, useContext, useState } from "react";
import { CardContainer } from "./style";
import { useDropzone } from "react-dropzone";
import {downloadCSV, parseCSV, createCSV} from "../../utils/index";

export const DragnDropArea = () => {

  const [textString, setTextString] = useState('');
  const [feedback, setFeedback] = useState('');

  function MyDropzone() {
    const onDrop = useCallback((acceptedFiles) => {
      acceptedFiles.forEach((file) => {
        const reader = new FileReader()

        reader.onabort = () => setFeedback('Ocorreu um erro, procedimento abortado')
        reader.onerror = () => setFeedback('Ocorreu um erro')
        reader.onload = () => {
          // Do whatever you want with the file contents
          const binaryStr = reader.result
          var BOM = new Uint8Array([0xEF,0xBB,0xBF]);
          const blob = new Blob([BOM, binaryStr]);
          blob.text().then((file, failed) => {
            if(file){
              const parsedCSV = parseCSV(file);
              const csvString = createCSV(parsedCSV);
              setTextString(csvString);
              downloadCSV('plano_de_contas.csv', csvString);
            }else{
              setFeedback(failed)
            }
          });
        }
        reader.readAsArrayBuffer(file)
      })

    }, [])
    const { getRootProps, getInputProps } = useDropzone({ onDrop })

    return (
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        <p>Arraste um arquivo ou clique aqui para fazer upload do arquivo CSV</p>
      </div>
    )
  }

  return (
    <CardContainer>
      <h3>
        {feedback}
      </h3>
      <MyDropzone />
    </CardContainer>
  );
};
