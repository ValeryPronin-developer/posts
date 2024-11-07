import React from 'react';
import {PostForm} from "../components/PostForm";
import {addPost} from "../../../redux/slices/postsSlices";
import {useDispatch} from "react-redux";

export const AddPostPage = () => {
    const dispatch = useDispatch()

    const onSubmitForm = (formValues) => {
        dispatch(addPost(formValues))
    }

    return (
        <PostForm title='Добавление нового поста' onSubmitForm={onSubmitForm}/>
    )
}