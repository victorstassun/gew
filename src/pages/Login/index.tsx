import React from 'react';
import { Container, Line, LoginCont, ContainerBottom,
        ContainerInput, User, ContainerBtn } from './styles';

const Login: React.FC = () => {    
    return (
        <Container>
            <LoginCont>
                <Line>
                </Line>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQ4AAAC7CAMAAACjH4DlAAAAV1BMVEUAV53///8AU5tXf7GwwNcATJgASZcATZjK1eQ3bKi9y97P2eYIWp9cgrMAVZysvdUjY6M9cKkAPZLq7vTj6fGVrMvE0OEdX6G4x9sAQZOHocRIdayjt9JHrH7XAAACT0lEQVR4nO3dTW/aQBRGYQoEkzhAPppCSf//7+yqUo7mXVzkIkPmPOurYXSWtplZLCRJkiRJkiTpn/2yV7HGcbfqVMqx3P3oVcyxmntXszEHmAPMAeYAc4A5wBxgDjAHmAPMAeYAc4A5wBxgDjAHmAPqOX4e1o3De5ps59brU3XJC6Ql36ctWc9x+P3QeNumyaEd3LykwdNbO3mBtOQ4bckLcgzt5GZMk89hycc0+BR/vizm2ExaMjEHmAPMAeYAc4A5wBxgDjAHmAPMAeYAc4A5wBxgDjAHzJtj2AT7tM9yjrhk/ML45nIMH+O2MT6mHtUcw7ldcTt+VnvMmuPhKU2+pr2Xc8Rn7rtucxzMYQ5zmMMc5jCHOcxhDnOYwxzmMIc5zGGO28zxyxxfHV+CuM8uciz2Qcc5yswB5gBzgDnAHGAOMAeYA8wB5gBzgDnAHGAOMAeYA/rIkZ6GRV3kiM9Kox5y5CfpZd8uR3zPUmYOMAeYA8wB5gBzgDnAHGAOMAeYA8wB5gBzgDnAHGAOuEaOePPX+n5zTPwP/mc6JOEccgx/0uRz+xnoxBMasnKOc9pl+YSGxTKddxFq1A/bmHp+R5IP9/3/53dcwT2f7nIF5gBzgDnAHGAOMAeYA8wB5gBzgDnAHGAOMAeYA8wBd5Nj0kVZZde4+WuIOcpL5v/1T7pGre7m7oU7vZbPT+5CfrEw965mYw4wB5gDzAHmAHOAOcAcYA4wB5gDzAHmAHOAOcAcYA4wB+Qcq07tjvHR8bJX+cWCJEmSJEmSpD79BWgzqLmuWN0LAAAAAElFTkSuQmCC"></img>
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
                            <a href="#">Esqueceu sua senha?</a>
                        </ContainerBtn>
                    </ContainerInput>
                </ContainerBottom>
            </LoginCont>
        </Container>
    );
};

export default Login;