import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {Typo} from "../../../components/ui/Typo";
import {Container} from "../../../components/ui/Container";
import * as SC from './styles'
import {Link} from "../../../components/ui/Link";
import {useDispatch, useSelector} from "react-redux";
import {deletePost, getPostById, showPost} from "../../../redux/slices/postsSlices";
import {Button} from "../../../components/ui/Button";
import {Modal} from "../../../components/ui/Modal";
import {Loading} from "../../../components/ui/Loading";

export const DetailPostPage = () => {
    const {id} = useParams()
    const dispatch = useDispatch()

    const navigate = useNavigate()

    const {list} = useSelector((state) => state.posts.posts)
    const postForView = useSelector((state) => state.posts.postForView)
    const {user} = useSelector((state) => state.auth)

    const [postForDelete, setPostForDelete] = useState(null)

    const showEditAndDeleteBtn = list && user

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
        return <Loading />
    }

    if (!postForView.post || !postForView.post.hasOwnProperty('id')) {
        return <>Пост не найден</>
    }

    const {post} = postForView

    const image = post.image || 'https://cs13.pikabu.ru/post_img/big/2023/09/15/0/1694727354146680749.jpg'

    return (
        <Container>
            {postForDelete &&
                <Modal
                    text={`Вы точно уверены, что хотите удалить публикацию с ID - ${postForDelete?.id}?`}
                    onConfirm={onDeletePost}
                    onCancel={() => setPostForDelete(null)}
                />
            }
            <Typo>{post.title}</Typo>
            <SC.Image src={image} alt={post.title}/>
            <SC.Text>{post.body}</SC.Text>
            <div style={{clear: 'both'}}/>
            <SC.LinkWrapper>
                <Link to='/posts'>Обратно к публикациям</Link>
                {showEditAndDeleteBtn && <Link to={`/posts/${post.id}/edit`}>Редактировать</Link>}
                {showEditAndDeleteBtn && <Button $isDelete onClick={() => setPostForDelete(post)}>Удалить</Button>}
            </SC.LinkWrapper>
        </Container>
    )
}