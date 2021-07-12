import React from 'react';
import { ContainerNavbar, Logo, PageIndicator, SandwichMenu, DropdownMenu,
        LanguageIndicator, Flag, VectorLanguage } from './styles';

const Menu: React.FC = () => {
    return (
    <ContainerNavbar>
        <Logo></Logo>
        <PageIndicator>
            <a>Menu</a>
        </PageIndicator>
        <SandwichMenu>
            <DropdownMenu>
                <ul>
                    <li><a>Perfil</a></li>
                    <li><a>Configurações</a></li>
                    <li><a>Sair</a></li>
                </ul>
            </DropdownMenu>
        </SandwichMenu>
        <LanguageIndicator>
            <Flag></Flag>
            <VectorLanguage></VectorLanguage>
        </LanguageIndicator>
    </ContainerNavbar>
    );
};

export default Menu;