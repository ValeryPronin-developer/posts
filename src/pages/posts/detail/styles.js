import styled from "styled-components"

export const Image = styled.img`
    max-width: 200px;
    float: left;
    margin-right: 15px;
`

export const Text = styled.div`
    font-size: 15px;
`

export const LinkWrapper = styled.div`
    margin-top: 15px;
    display: flex;
    gap: 15px;
    justify-content: center;
    align-items: center;
`

export const DeleteButton = styled.button`
    border: 1px solid black;
    background-color: white;
    padding: 5px 15px;
    border-radius: 10px;
    color: black;
    cursor: pointer;
    min-width: 55px;
    
    &:hover {
        background-color: red;
        color: white;
        border: 1px solid red;
    }
`

export const Button = styled.button`
    border: 1px solid black;
    background-color: white;
    padding: 5px 15px;
    border-radius: 10px;
    color: black;
    cursor: pointer;
    min-width: 55px;
    
    &:hover {
        background-color: gray;
        color: white;
        border: 1px solid gray;
    }
`

export const ModalWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
`

export const Modal = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    color: white;
    border: 1px solid white;
    padding: 15px;
    background-color: white;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    gap: 20px;
`

export const ModalText = styled.div`
    color: black;
    font-weight: bold;
    font-size: 20px;
    text-align: center;
`

export const ModalContent = styled.div`
    display: flex;
    gap: 15px;
    align-items: center;
    justify-content: center;
    width: 100%;
`