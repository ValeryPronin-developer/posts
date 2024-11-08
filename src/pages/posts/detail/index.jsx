import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {Typo} from "../../../components/Typo";
import {Container} from "../../../components/Container";
import * as SC from './styles'
import {Link} from "../../../components/Link";
import {useDispatch, useSelector} from "react-redux";
import {deletePost, getPostById, showPost} from "../../../redux/slices/postsSlices";

export const DetailPostPage = () => {
    const {id} = useParams()
    const dispatch = useDispatch()

    const navigate = useNavigate()

    const {list} = useSelector((state) => state.posts.posts)
    const postForView = useSelector((state) => state.posts.postForView)

    const [postForDelete, setPostForDelete] = useState(null)

    const onDeletePost = () => {
        dispatch(deletePost(postForDelete))

        setPostForDelete(null)

        return navigate('/posts')
    }

    useEffect(() => {
        const intId = Number(id)
        const findedPosts = list ? list.find((item) => item.id === intId) : undefined

        if (findedPosts) {
            dispatch(showPost(findedPosts))
        } else {
            dispatch(getPostById(intId))
        }
    }, [id, list, dispatch])

    if (postForView.loading) {
        return <>Loading...</>
    }

    if (!postForView.post || !postForView.post.hasOwnProperty('id')) {
        return <>Пост не найден</>
    }

    const {post} = postForView

    const image = post.image || 'https://cs13.pikabu.ru/post_img/big/2023/09/15/0/1694727354146680749.jpg'

    return (
        <Container>
            {postForDelete && <SC.ModalWrapper>
                <SC.Modal>
                    <SC.ModalText>Вы точно уверены, что хотите удалить публикацию c ID - {postForDelete.id}?</SC.ModalText>
                    <SC.ModalContent>
                        <SC.DeleteButton onClick={onDeletePost}>Да</SC.DeleteButton>
                        <SC.Button onClick={() => setPostForDelete(null)}>Нет</SC.Button>
                    </SC.ModalContent>
                </SC.Modal>
            </SC.ModalWrapper>}
            <Typo>{post.title}</Typo>
            <SC.Image src={image} alt={post.title}/>
            <SC.Text>{post.body}</SC.Text>
            <div style={{clear: 'both'}}/>
            <SC.LinkWrapper>
                <Link to='/posts'>Обратно к публикациям</Link>
                {list && <Link to={`/posts/${post.id}/edit`}>Редактировать</Link>}
                {list && <SC.DeleteButton onClick={() => setPostForDelete(post)}>Удалить</SC.DeleteButton>}
            </SC.LinkWrapper>
        </Container>
    )
}