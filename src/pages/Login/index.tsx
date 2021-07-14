import React from 'react';
import { Container, Line, LoginCont, ContainerBottom,
        ContainerInput, User, ContainerBtn } from './styles';

const Login: React.FC = () => {    
    return (
        <Container>
            <LoginCont>
                <Line />
                <img src="https://www.weg.net/institutional/_ui/desktop/theme-institutional/img/brand.svg" alt="logo"/>
                <ContainerBottom>
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
                            <a href="/mainmenu"><button>entrar</button></a>
                            <a href="/mainmenu">Esqueceu sua senha?</a>
                        </ContainerBtn>
                    </ContainerInput>
                </ContainerBottom>
            </LoginCont>
        </Container>
    );
};

export default Login;