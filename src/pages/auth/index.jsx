import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import {Container} from "../../components/ui/Container";
import {Typo} from "../../components/ui/Typo";
import {Field} from "../../components/ui/Field";
import {Input} from "../../components/ui/Input";
import {Form} from "../../components/ui/Form";
import {useDispatch} from "react-redux";
import {login} from "../../redux/slices/authSlice";
import {Button} from "../../components/ui/Button";

export const AuthPage = () => {
    const [formValues, setFormValues] = useState({name:'', surname:'', email: '', password: ''})
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const onChange = (name, value) => {
        setFormValues({...formValues, [name]: value})
    }

    const onSubmit = (e) => {
        e.preventDefault()
        try {
            const users = JSON.parse(localStorage.getItem('users'))

            if (!users) {
                alert("Данный пользователь не найден")
                return
            }

            const currentUser = users.find((user) => user.email === formValues.email && user.password === formValues.password)

            if (!currentUser) {
                alert("Данный пользователь не найден")
                return
            }

            dispatch(login(currentUser))

            navigate('/posts')
        } catch (e) {
            console.log(e)
        }
    }

    const disabled = !formValues.email || !formValues.password

    return (
        <Container>
            <Typo>Страница авторизации</Typo>
            <Form onSubmit={onSubmit}>
                <Field>
                    <Input
                        type="email"
                        name="email"
                        value={formValues.email}
                        placeholder='Email'
                        onChange={(e) => onChange(e.target.name, e.target.value)}
                    />
                </Field>
                <Field>
                    <Input
                        type="password"
                        name="password"
                        value={formValues.password}
                        placeholder='Пароль'
                        onChange={(e) => onChange(e.target.name, e.target.value)}
                    />
                </Field>
                <Button type='submit' disabled={disabled}>Авторизация</Button>
                </Form>
        </Container>
    )
}