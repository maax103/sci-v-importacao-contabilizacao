import styled from "styled-components";

export const CardContainer = styled.div`
  background-color: #f5f5f5;
  width: 900px;
  margin: auto;
  margin-top: 15px;
  border-radius: 5px;
  color: #3778ad;
  h1 {
    font-size: 1.125rem;
  }
  div {
    padding: 0.5rem;
    border-radius: 5px;
    /* background-color: red; */
    height: 20rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  h3 {
    color: red;
  }
  
  @media screen and (max-width: 750px) {
    div{
      display: flex;
      flex-direction: column;
    
      input{margin-left:0px}
    }
  }
`;
