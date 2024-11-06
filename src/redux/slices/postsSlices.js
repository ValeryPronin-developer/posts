import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    list: [
        {
            id: 4,
            title: "Post 4",
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
            id: 2,
            title: "Post 2",
            image: 'https://cs13.pikabu.ru/post_img/big/2023/09/15/0/1694727354146680749.jpg',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad animi autem debitis dicta, expedita laborum ' +
                'non numquam reiciendis reprehenderit vero. Atque consectetur dolorum earum expedita repudiandae sequi. Earum iusto, minima.'
        },
        {
            id: 1,
            title: "Post 1",
            image: 'https://cs13.pikabu.ru/post_img/big/2023/09/15/0/1694727354146680749.jpg',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad animi autem debitis dicta, expedita laborum ' +
                'non numquam reiciendis reprehenderit vero. Atque consectetur dolorum earum expedita repudiandae sequi. Earum iusto, minima.'
        },
    ],
    postForView: null,
    freshPosts: null,
}

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        setPosts: (state, action) => {
            state.list = action.payload
        },
        editPost: (state, action) => {
            // edit post
        },
        getPosts: (state, action) => {
            state.postForView = state.list.find((item) => item.id === action.payload)
        },
        getFreshPosts: (state) => {
            state.freshPosts = state.list.slice(0, 3)
        },
        addPost: (state, action) => {
            // add new post by data
        },
    },
})

export const {setPosts, editPost, getPosts, getFreshPosts, addPost} = postsSlice.actions

export default postsSlice.reducer