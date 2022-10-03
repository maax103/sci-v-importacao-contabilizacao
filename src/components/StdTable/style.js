import styled from "styled-components";

export const StdTableContainer = styled.div`
    width: 900px;
    background-color: #f5f5f5;
    /* border: 1px solid red; */
    /* background-color: red; */
    padding: 1rem 1rem;
    margin-top: 1rem;
    border-radius: 5px;
    display: grid;
    grid-template: 1fr / 1fr 1fr;
    gap: 1rem;
    button{
        border: none;
        min-height: 4rem;
        background-color: inherit;
        display: flex;
        justify-content: center;
        align-items: center;
        /* margin: 0 1rem; */
        width: 100%;
        height: 100%;
        border-radius: 5px;
        font-size: 1.125rem;
        /* font-style: italic; */
        color: #3778ad;
        transition: filter 0.2s;

        &:hover{
            /* font-size: 1.12rem; */
            filter: brightness(0.95)
        }
    }

    @media screen and (max-width: 900px){
        grid-template: 1fr 1fr/ 1fr ;
        width: 80%;
        margin: auto;
        margin-top: 1rem;
    }
`