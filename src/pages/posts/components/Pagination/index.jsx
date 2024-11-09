import React from 'react';
import * as SC from './styles';

export const Pagination = ({totalPages, currentPage, onPageChange}) => {
    return (
        <SC.Pagination>
            {Array.from({length: totalPages}, (_, index) => (
                <SC.PaginationBtn
                    key={index + 1}
                    onClick={() => onPageChange(index + 1)}
                    disabled={currentPage === index + 1}
                >
                    {index + 1}
                </SC.PaginationBtn>
            ))}
        </SC.Pagination>
    )
}