import React, {useEffect, useState} from 'react';
import * as SC from './styles'
import {useDispatch, useSelector} from "react-redux";
import {getPosts, setPage, setSearch} from "../../../../redux/slices/postsSlices";
import { useDebounce } from 'use-debounce'

export const Search = () => {
    const dispatch = useDispatch()
    const search = useSelector(state => state.posts.search)

    const [localSearch, setLocalSearch] = useState(search || '')
    const [previousSearch, setPreviousSearch] = useState(search || '')

    const [debouncedSearch] = useDebounce(localSearch, 500)

    const handleSearchChange = (event) => {
        setLocalSearch(event.target.value)
    }

    useEffect(() => {
        const searchTerm = debouncedSearch || ''

        if (searchTerm !== previousSearch) {
            dispatch(setSearch(searchTerm))
            dispatch(setPage(1))
            dispatch(getPosts({ search: searchTerm }))
            setPreviousSearch(searchTerm)
        }
    }, [debouncedSearch, previousSearch, dispatch])

    return (
        <SC.Search
            type="text"
            placeholder="Поиск"
            value={localSearch}
            onChange={handleSearchChange}
        />
    )
}
