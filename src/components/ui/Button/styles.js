import styled from "styled-components"

export const Button = styled.button`
    background-color: white;
    color: ${({ $isDelete }) => $isDelete ? 'red' : 'black'};
    padding: 5px 15px;
    border-radius: 10px;
    min-width: 55px;
    border: 1px solid black;
    cursor: pointer;
    
    &:hover {
        color: white;
        background-color: ${({ $isDelete }) => $isDelete ? 'red' : 'gray'};
    }
    
    &:disabled {
        color: white;
        background-color: gray;
        opacity: 0.6;
        cursor: not-allowed;
    }
`