import React from 'react';
import * as SC from './styles';
import {useDispatch, useSelector} from "react-redux";
import {getPosts, setPage} from "../../../../redux/slices/postsSlices";

export const Pagination = () => {
    const dispatch = useDispatch()
    const {currentPage, totalPages, sortBy, order, search} = useSelector((state) => state.posts.posts)

    const handlePageChange = (pageNumber) => {
        dispatch(setPage(pageNumber))
        dispatch(getPosts({
            page: pageNumber,
            limit: 10,
            sortBy: sortBy,
            order: order,
            search: search
        }))
    }

    return (
        <SC.Pagination>
            {Array.from({length: totalPages}, (_, index) => (
                <SC.PaginationBtn
                    key={index + 1}
                    onClick={() => handlePageChange(index + 1)}
                    disabled={currentPage === index + 1}
                >
                    {index + 1}
                </SC.PaginationBtn>
            ))}
        </SC.Pagination>
    )
}