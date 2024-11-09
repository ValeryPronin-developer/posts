import React, {useEffect} from 'react';
import {Container} from "../../components/ui/Container";
import {Posts} from "../../components/Posts";
import {Typo} from "../../components/ui/Typo";
import {useDispatch, useSelector} from "react-redux";
import {getPosts, setCurrentPage, setSearchTerm, setSortOrder} from "../../redux/slices/postsSlices";
import {Pagination} from "./components/Pagination";
import {Sort} from "./components/Sort";
import {Search} from "./components/Search";
import * as SC from './styles'


export const PostsPage = () => {
    const {list, loading} = useSelector((state) => state.posts.posts)
    const {searchTerm, sortOrder, currentPage, postsPerPage} = useSelector((state) => state.posts)
    const dispatch = useDispatch()

    useEffect(() => {
        if (!list) {
            dispatch(getPosts())
        }
    }, [list, dispatch])

    if (!list && loading) {
        return <Container>Loading...</Container>
    }

    if (!list) {
        return <Container>404</Container>
    }

    const filteredPosts = list.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase())
    )

    const sortedPosts = filteredPosts.sort((a, b) =>
        sortOrder === 'asc' ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title)
    )

    const startIndex = (currentPage - 1) * postsPerPage
    const paginatedPosts = sortedPosts.slice(startIndex, startIndex + postsPerPage)

    const totalPages = Math.ceil(filteredPosts.length / postsPerPage)

    return (
        <Container>
            <Typo>Публикации</Typo>
            <SC.ControlsContainer>
                <Search onSearch={(term) => dispatch(setSearchTerm(term))}/>
                <Sort onSortChange={(order) => dispatch(setSortOrder(order))}/>
            </SC.ControlsContainer>
            <Posts posts={paginatedPosts}/>
            <Pagination currentPage={currentPage} onPageChange={(page) => dispatch(setCurrentPage(page))} totalPages={totalPages}/>
        </Container>
    )
}