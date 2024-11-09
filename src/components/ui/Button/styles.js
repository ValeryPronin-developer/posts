import styled from "styled-components"

export const Button = styled.button`
    background-color: white;
    color: ${({ $isDelete }) => $isDelete ? 'darkred' : 'black'};
    padding: 5px 15px;
    border-radius: 10px;
    min-width: 55px;
    border: 1px solid ${({ $isDelete }) => $isDelete ? 'darkred' : 'black'};
    cursor: pointer;
    
    &:hover {
        border: 1px solid ${({ $isDelete }) => $isDelete ? 'red' : 'darkred'};
        color: white;
        background-color: ${({ $isDelete }) => $isDelete ? 'red' : 'darkred'};
    }
    
    &:disabled {
        color: white;
        background-color: darkred;
        opacity: 0.6;
        cursor: not-allowed;
    }
`