import styled from "styled-components";

export const Textarea = styled.textarea`
    resize: none;
    width: 100%;
    outline: none;
    border: 1px solid #282c34;
`

export const Button = styled.button`
    width: 100%;
    background-color: #282c34;
    color: white;
    padding: 10px 0;
    border-radius: 10px;
    cursor: pointer;
    
    &:hover {
        background-color: #1e2d48;
    }
    
    &:disabled {
        opacity: 0.8;
        cursor: not-allowed;
    }
`