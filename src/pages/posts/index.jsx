import React, {useEffect} from 'react';
import {Container} from "../../components/Container";
import {Posts} from "../../components/Posts";
import {Typo} from "../../components/Typo";
import {useDispatch, useSelector} from "react-redux";
import {getPosts} from "../../redux/slices/postsSlices";


export const PostsPage = () => {
    const { list, loading } = useSelector((state) => state.posts.posts)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPosts())
    }, [])

    if (!list && loading) {
        return <Container>Loading...</Container>
    }

    if (!list) {
        return <>404</>
    }

    return (
        <Container>
            <Typo>Публикации</Typo>
            <Posts posts={list}/>
        </Container>
    )
}