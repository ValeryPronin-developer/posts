import React, {useEffect} from 'react';
import {Container} from "../../components/ui/Container";
import {Posts} from "../../components/Posts";
import {Typo} from "../../components/ui/Typo";
import {useDispatch, useSelector} from "react-redux";
import {getPosts} from "../../redux/slices/postsSlices";
import {Pagination} from "./components/Pagination";
import {Sort} from "./components/Sort";
import {Search} from "./components/Search";
import * as SC from './styles'
import {Loading} from "../../components/ui/Loading";

export const PostsPage = () => {
    const {list, loading, currentPage, limit, sortBy, order} = useSelector((state) => state.posts.posts)
    const dispatch = useDispatch()

    useEffect(() => {
        if (!list) {
            dispatch(getPosts({ page: currentPage, limit: limit, sortBy: sortBy, order: order }))
        }
    }, [list, dispatch])

    if (!list && loading) {
        return <Container><Loading/></Container>
    }

    if (!list) {
        return <Container>404</Container>
    }

    return (
        <Container>
            <Typo>Публикации</Typo>
            <SC.ControlsContainer>
                <Search />
                <Sort />
            </SC.ControlsContainer>
            <Posts posts={list}/>
            <Pagination />
        </Container>
    )
}