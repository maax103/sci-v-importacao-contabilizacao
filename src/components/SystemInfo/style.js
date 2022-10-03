
import styled from "styled-components";

export const SystemInfoContainer = styled.div`
  background-color: #f5f5f5;
  width: 900px;
  margin: auto;
  margin-top: 15px;
  border-radius: 5px;
  color: #3778ad;
  padding: 1.5rem;
  h1 {
    font-size: 1.125rem;
  }
  div {
    margin-top: 1.5rem;
  }
  @media screen and (max-width: 750px) {
    div{
      display: flex;
      flex-direction: column;
    }
  }
`;