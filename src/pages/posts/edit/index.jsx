import React from 'react';
import {PostForm} from "../components/PostForm";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {editPost} from "../../../redux/slices/postsSlices";

export const EditPostPage = () => {
    const {id} = useParams()
    const dispatch = useDispatch()
    const { list } = useSelector((state) => state.posts.posts)

    const onSubmitForm = (formValues) => {
        dispatch(editPost(formValues))
    }

    if (!list) {
        return <>Пост не найден</>
    }

    const findedPosts = list.find((item) => item.id === +id)

    return <PostForm title={`Редактирование поста - ${id}`} onSubmitForm={onSubmitForm} defaultValues={findedPosts}/>
}