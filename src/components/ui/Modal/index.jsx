import React from 'react';
import {Button} from "../Button";
import * as SC from "./styles";

export const Modal = ({ text, onConfirm, onCancel }) =>
    <SC.ModalWrapper>
        <SC.Modal>
            <SC.ModalText>{text}</SC.ModalText>
            <SC.ModalContent>
                <Button onClick={onConfirm} $isDelete>Да</Button>
                <Button onClick={onCancel}>Нет</Button>
            </SC.ModalContent>
        </SC.Modal>
    </SC.ModalWrapper>