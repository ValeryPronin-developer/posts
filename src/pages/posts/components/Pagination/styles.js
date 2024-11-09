import styled from 'styled-components';

export const Pagination = styled.div`
    display: flex;
    justify-content: center;
    gap: 10px;
`

export const PaginationBtn = styled.button`
    padding: 5px 8px;
    background-color: gray;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    
    &:disabled {
        background-color: darkred;
        cursor: not-allowed;
    }
    
    &:hover:enabled {
        opacity: 0.8;
        background-color: darkred;
    }
`