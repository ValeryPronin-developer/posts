import React from 'react';
import * as SC from './styles';
import {Link} from "../../../ui/Link";

export const Post = ({post}) => {
    const image = post.image || 'https://cs13.pikabu.ru/post_img/big/2023/09/15/0/1694727354146680749.jpg'
    return (
        <SC.Post>
            <SC.Image src={image} alt={post.title}/>
            <SC.Title>{post.title} - {post.id}</SC.Title>
            <Link to={`/posts/${post.id}`}>Читать далее...</Link>
        </SC.Post>
    )
}