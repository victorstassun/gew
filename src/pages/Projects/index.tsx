import React from 'react';

import MenuLeft from '../components/MenuLeft';
import Navbar from '../components/Navbar';
import MenuRight from '../components/MenuRight';
import CardProject from '../components/CardProject';

import { ContainerProject, ContainerInfo, Projects, Container, ContainerTitle, ContainerFiltro,
    Left, Right } from './styles';

import { ContIcons } from '../components/MenuRight/styles';


const RegisterConsultants: React.FC = () => {
    return (
        <>
            <Navbar />
            <MenuLeft />

            <Container>
                <ContainerProject>
                    <ContainerInfo>
                        <ContainerTitle></ContainerTitle>
                        <ContainerFiltro></ContainerFiltro>
                    </ContainerInfo>
                    <Projects>
                        <Left>
                            <CardProject /> 
                            <CardProject />
                            <CardProject />
                            <CardProject />
                            <CardProject /> 
                            <CardProject />
                            <CardProject />
                            <CardProject />
                        </Left>
                        <Right>
                            <CardProject /> 
                            <CardProject />
                            <CardProject />
                            <CardProject />
                            <CardProject /> 
                            <CardProject />
                            <CardProject />
                            <CardProject />
                        </Right>
                    </Projects>
                </ContainerProject>
            </Container>

            <MenuRight>
                <ContIcons />
            </MenuRight>
        </>
    );
};

export default RegisterConsultants;