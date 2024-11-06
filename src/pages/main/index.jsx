import React from 'react';
import {Posts} from "../../components/Posts";
import {Container} from "../../components/Container";
import {Typo} from "../../components/Typo";

const INITIAL_POSTS = [
    {
        id: 1,
        title: "Post 1",
        image: 'https://cs13.pikabu.ru/post_img/big/2023/09/15/0/1694727354146680749.jpg'
    },
    {
        id: 2,
        title: "Post 2",
        image: 'https://cs13.pikabu.ru/post_img/big/2023/09/15/0/1694727354146680749.jpg'
    },
    {
        id: 3,
        title: "Post 3",
        image: 'https://cs13.pikabu.ru/post_img/big/2023/09/15/0/1694727354146680749.jpg'
    },
]

export const MainPage = () =>
    <>
        <Container>
            <Typo>Свежие публикации</Typo>
            <Posts posts={INITIAL_POSTS}/>
        </Container>
    </>
