import React from 'react';
import {Container} from "../../components/Container";
import {Posts} from "../../components/Posts";
import {Typo} from "../../components/Typo";

export const INITIAL_POSTS = [
    {
        id: 1,
        title: "Post 1",
        image: 'https://cs13.pikabu.ru/post_img/big/2023/09/15/0/1694727354146680749.jpg',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad animi autem debitis dicta, expedita laborum ' +
            'non numquam reiciendis reprehenderit vero. Atque consectetur dolorum earum expedita repudiandae sequi. Earum iusto, minima.'
    },
    {
        id: 2,
        title: "Post 2",
        image: 'https://cs13.pikabu.ru/post_img/big/2023/09/15/0/1694727354146680749.jpg',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad animi autem debitis dicta, expedita laborum ' +
            'non numquam reiciendis reprehenderit vero. Atque consectetur dolorum earum expedita repudiandae sequi. Earum iusto, minima.'
    },
    {
        id: 3,
        title: "Post 3",
        image: 'https://cs13.pikabu.ru/post_img/big/2023/09/15/0/1694727354146680749.jpg',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad animi autem debitis dicta, expedita laborum ' +
            'non numquam reiciendis reprehenderit vero. Atque consectetur dolorum earum expedita repudiandae sequi. Earum iusto, minima.'
    },
    {
        id: 4,
        title: "Post 4",
        image: 'https://cs13.pikabu.ru/post_img/big/2023/09/15/0/1694727354146680749.jpg',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad animi autem debitis dicta, expedita laborum ' +
            'non numquam reiciendis reprehenderit vero. Atque consectetur dolorum earum expedita repudiandae sequi. Earum iusto, minima.'
    },
]

export const PostsPage = () =>
    <>
        <Container>
            <Typo>Публикации</Typo>
            <Posts posts={INITIAL_POSTS}/>
        </Container>
    </>