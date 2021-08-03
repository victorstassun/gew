import React, { useRef, useCallback, useContext} from 'react';

import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import { AuthContext } from '../../context/AuthContext';
import getValidationErrors from '../../utils/getValidationErrors';

import Input from '../components/InputPrimary';

import { Container, Line, LoginCont, ContainerBottom, ContainerBtn } from './styles';

interface SingInFormData {
    email: string;
    senha: string;
}

const Login: React.FC = () => {  
    const formRef = useRef<FormHandles>(null);

    const { singIn } = useContext(AuthContext);

    const handleSubmit = useCallback(async (data: SingInFormData) => {
        try {
            formRef.current?.setErrors({});

            const schema = Yup.object().shape({
                email: Yup.string().required('E-mail obrigatório').email('Informe um e-mail válido'),
                senha: Yup.string().required('Senha obrigatória'),
            })

            await schema.validate(data, {
                abortEarly: false,
            })

            singIn({
                email: data.email,
                senha: data.senha
            })
        } catch(err) {
            const errors = getValidationErrors(err);
            formRef.current?.setErrors(errors);
        }
    }, [singIn]);

    return (
        <Container>
            <LoginCont>
                <Line />
                <img src="https://www.weg.net/institutional/_ui/desktop/theme-institutional/img/brand.svg" alt="logo"/>
                <ContainerBottom>
<<<<<<< HEAD
                    
                        <Form ref={formRef} onSubmit={handleSubmit}>
                            <Input type="text" name="email" />
                            <Input type="password" name="senha" />
                            
                            <ContainerBtn>
                                <button>entrar</button>
                                <a href="/mainmenu">Esqueceu sua senha?</a>
                            </ContainerBtn>
                        </Form>
                  
=======
                    <ContainerInput>
                        <User>
                            <input type="text" placeholder="" required></input>
                            <label>USUÁRIO</label>
                        </User>
                        <User>
                            <input type="password" placeholder="" required></input>
                            <label>SENHA</label>
                        </User>
                        <ContainerBtn>
                            <button>entrar</button>
                            <a href="/mainmenu">Esqueceu sua senha?</a>
                        </ContainerBtn>
                    </ContainerInput>
>>>>>>> ff354c35379b35c72352bc6f6529f31d3659e70b
                </ContainerBottom>
            </LoginCont>
        </Container>
    );
};

export default Login;