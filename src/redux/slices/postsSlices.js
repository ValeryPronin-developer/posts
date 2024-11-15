import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {postsAPI} from "../../api/postsAPI";

const initialState = {
    posts: {
        list: null,
        loading: false,
        currentPage: 1,
        totalPages: 1,
        limit: 10,
        sortBy: 'id',
        order: 'desc',
        search: '',
        addPost: [],
        removePost: [],
    },
    postForView: {
        post: null,
        loading: false,
    },
    freshPosts: {
        posts: null,
        loading: false,
    },
}

export const getPostById = createAsyncThunk(
    'posts/fetchById',
    async (postId) => {
        return await postsAPI.fetchById(postId)
    }
)

export const getPosts = createAsyncThunk(
    'posts/fetchPosts',
    async ({page = 1, limit = 10, sortBy = 'id', order = 'desc', search = ''}) => {
        const { posts, totalCount } = await postsAPI.fetchPosts(page, limit, sortBy, order, search)
        return {
            posts,
            totalPages: Math.ceil(totalCount / limit),
        }
    }
)

export const getFreshPosts = createAsyncThunk(
    'posts/fetchFreshPosts',
    async (limit) => {
        return await postsAPI.fetchFreshPosts(limit)
    }
)

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        editPost: (state, action) => {
            state.posts.list = state.posts.list.map((post) => {
                if (post.id === action.payload.id) {
                    return action.payload
                }

                return post
            })
        },
        addPost: (state, action) => {
            const newPost = {...action.payload}

            newPost.id = new Date().getTime()
            state.posts.addPost.push(newPost)
            state.posts.list = state.posts.list ? [newPost, ...state.posts.list] : [newPost]
        },
        showPost: (state, action) => {
            state.postForView = {
                post: action.payload,
                loading: false,
            }
        },
        deletePost: (state, action) => {
            state.posts.list = state.posts.list.filter((post) => post.id !== action.payload.id)
            state.posts.removePost.push(action.payload.id)

            if (state.freshPosts.posts) {
                state.freshPosts.posts = state.freshPosts.posts.filter((post) => post.id !== action.payload.id);
            }

            state.postForView = {
                post: null,
                loading: false,
            }
        },
        setPage: (state, action) => {
            state.posts.currentPage = action.payload
        },
        setSort: (state, action) => {
            state.posts.sortBy = action.payload.sortBy
            state.posts.order = action.payload.order
        },
        setSearch: (state, action) => {
            state.posts.search = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getPostById.pending, (state, action) => {
            state.postForView = {
                post: null,
                loading: true,
            }
        })
        builder.addCase(getPostById.fulfilled, (state, action) => {
            state.postForView = {
                post: action.payload,
                loading: false,
            }
        })
        builder.addCase(getPosts.pending, (state, action) => {
            state.posts.loading = true
        })
        builder.addCase(getPosts.fulfilled, (state, action) => {
            const serverPosts = action.payload.posts

            const filteredPosts = serverPosts.filter(
                (post) => !state.posts.removePost.includes(post.id)
            )

            state.posts.list = [...state.posts.addPost, ...filteredPosts]
            state.posts.loading = false
            state.posts.totalPages = action.payload.totalPages
        })
        builder.addCase(getFreshPosts.pending, (state, action) => {
            state.freshPosts = {
                posts: null,
                loading: true,
            }
        })
        builder.addCase(getFreshPosts.fulfilled, (state, action) => {
            state.freshPosts = {
                posts: action.payload,
                loading: false,
            }
        })
    }
})

export const {editPost, addPost, showPost, deletePost, setPage, setSort, setSearch} = postsSlice.actions

export default postsSlice.reducer