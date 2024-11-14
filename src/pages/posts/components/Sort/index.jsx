import React from 'react';
import * as SC from './styles'
import {useDispatch, useSelector} from "react-redux";
import {getPosts, setPage, setSort} from "../../../../redux/slices/postsSlices";

export const Sort = () => {
    const dispatch = useDispatch()
    const {sortBy, order, search} = useSelector((state) => state.posts.posts)

    const handleSortChange = (event) => {
        const [newSortBy, newOrder] = event.target.value.split('_')

        dispatch(setSort({ sortBy: newSortBy, order: newOrder }))
        dispatch(setPage(1))
        dispatch(getPosts({
            page: 1,
            limit: 10,
            sortBy: newSortBy,
            order: newOrder,
            search: search,
        }))
    }

    return (
        <SC.Sort value={`${sortBy}_${order}`} onChange={handleSortChange}>
            <option value="id_desc">По ID (По убыванию)</option>
            <option value="id_asc">По ID (По возрастанию)</option>
            <option value="title_asc">По названию (A-Z)</option>
            <option value="title_desc">По названию (Z-A)</option>
        </SC.Sort>
    )
}