import React, { MouseEvent } from 'react';
import { ContainerNavbar, Logo, PageIndicator, SandwichMenu, DropdownMenu,
        LanguageIndicator, Flag, VectorLanguage } from './styles';

import { IoNewspaperOutline, IoExitOutline } from 'react-icons/io5';
import { FaRegUser } from 'react-icons/fa';
import { FiRefreshCcw } from 'react-icons/fi';
import { RiDeleteBinLine } from 'react-icons/ri';

import { AiOutlineFolderView } from 'react-icons/ai';
import { CgInsertAfterR } from 'react-icons/cg';
import { RiFileEditFill } from 'react-icons/ri';
import { IoPersonAddSharp } from 'react-icons/io5';
import { GoGraph } from 'react-icons/go';
import { GiOrganigram } from 'react-icons/gi';



import { ContainerMenu, ContainerInfo, UserImg, NewsImg, LineBlue, DeleteImg, RefreshImg,
    ContainerMsg, Msg, Aba, LineMsg, TextMsg, TitleMsg, BtnOpen, ExitImg } from './stylesDashboard';

import { ContainerMenuRight, ContIcons, Icon, TextMenuRight } from './styleMenuRight';
       
const Menu: React.FC = () => {

    function openMenu() {
        var elemento = document.getElementById("dropdownMenu")!.style.display;
        
        if(elemento === 'block') {
            document.getElementById("dropdownMenu")!.style.display = 'none';
        } else {
            document.getElementById("dropdownMenu")!.style.display = 'block';
        }
    }
    
    var status = 0;

    function handdleClick(event: MouseEvent) {
        event.preventDefault();

            if(status !== 1) {
                document.getElementById("btn-open")!.style.transform = "rotate(225deg)";
                document.getElementById("btn-open")!.style.marginLeft = "16.2vw";
                document.getElementById("btn-open")!.style.backgroundColor = "transparent";

                document.getElementById("container-menu")!.style.transform = 'translateX(11vw)';
                document.getElementById("user-img")!.style.transform = 'translateX(-11vw)';
                document.getElementById("user-img")!.style.width = '8vh';
                document.getElementById("user-img")!.style.height = '9.25vh';

                document.getElementById("news-img")!.style.transform = 'translate(-12vw, 1vh)';
                document.getElementById("news-img")!.style.width = '2.77vh';
                document.getElementById("news-img")!.style.height = '2.73vh';
                document.getElementById("news-img")!.style.justifyContent = 'start';

                document.getElementById("title-not")!.style.marginTop = '1.75vh';
                document.getElementById("user-name")!.style.margin = '1vh 0 0 16vw';

                document.getElementById("user-name")!.style.display = "block";
                document.getElementById("title-not")!.style.display = "block";    
                document.getElementById("line-blue")!.style.display = "block";
                document.getElementById("refresh-img")!.style.display = "block";
                document.getElementById("delete-img")!.style.display = "block";
                document.getElementById("container-msg")!.style.display = "block";

                status = status + 1;
            } else {
                document.getElementById("container-menu")!.style.transform = 'translateX(0vw)';
                document.getElementById("user-img")!.style.transform = 'translateX(0vw)';
                document.getElementById("user-img")!.style.width = '8vh';
                document.getElementById("user-img")!.style.height = '8vh';

                document.getElementById("news-img")!.style.transform = 'translate(0vw, 0vh)';
                document.getElementById("news-img")!.style.width = '5vh';
                document.getElementById("news-img")!.style.height = '4.6vh';

                document.getElementById("user-name")!.style.display = "none";
                document.getElementById("title-not")!.style.display = "none";
                document.getElementById("line-blue")!.style.display = "none";
                document.getElementById("refresh-img")!.style.display = "none";
                document.getElementById("delete-img")!.style.display = "none";
                document.getElementById("container-msg")!.style.display = "none";

                document.getElementById("btn-open")!.style.transform = "rotate(45deg)";
                document.getElementById("btn-open")!.style.marginLeft = "16.3vw";
                document.getElementById("btn-open")!.style.backgroundColor = "#fff";

                status = status - 1;
            }

    }

    return (
        <>
            <ContainerNavbar>
                <Logo></Logo>
                <PageIndicator>
                    <a>Menu</a>
                </PageIndicator>
                <SandwichMenu onClick={openMenu}>
                    <DropdownMenu id="dropdownMenu">
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
    
            <ContainerMenu id="container-menu">
                <ContainerInfo>
                    <UserImg id="user-img">
                        <FaRegUser size={40} color="#00579D" />
                        <p id="user-name">Seja bem vindo, <a>Renato Silva</a></p> 
                    </UserImg>
                    <NewsImg id="news-img">
                        <IoNewspaperOutline size={40} id="icon-news" color="#00579D" />
                        <p id="title-not">Notificações</p> 
                    </NewsImg>
                    <LineBlue id="line-blue" />
                    <RefreshImg id="refresh-img">
                        <FiRefreshCcw size={20} id="icon-ref" color="#00579D" />
                    </RefreshImg>
                    <DeleteImg id="delete-img">
                        <RiDeleteBinLine size={20} id="icon-del" color="#00579D" />
                    </DeleteImg>
                    <ContainerMsg id="container-msg">
                        <Msg>
                            <LineMsg>
                                <Aba>
                                    <TitleMsg>
                                        <p>Cumprimento de jornada</p>
                                    </TitleMsg>
                                    <TextMsg>
                                        <p>O funcionário José concluiu suas tarefas!</p>
                                    </TextMsg>
                                </Aba>
                            </LineMsg>
                        </Msg>
                    </ContainerMsg>
                    <ExitImg id="exit-img">
                        <IoExitOutline size={40} color="#00579D" />
                    </ExitImg>
                </ContainerInfo>
                <BtnOpen id="btn-open" onClick={handdleClick} />
            </ContainerMenu>

            <ContainerMenuRight>
                <ContIcons>
                    <Icon>
                       <AiOutlineFolderView size={50} color="#fff" /> 
                    </Icon> 
                    <TextMenuRight>
                        <a>VISUALIZAR</a>
                        <a>PROJETOS</a>
                    </TextMenuRight>
                </ContIcons>
                <ContIcons>
                    <Icon>
                        <CgInsertAfterR size={50} color="#fff" />
                    </Icon>
                    <TextMenuRight>
                        <a>CADASTRAR</a>
                        <a>PROJETOS</a>
                    </TextMenuRight>
                </ContIcons>
                <ContIcons>
                    <Icon>
                        <RiFileEditFill size={50} color="#fff" />
                    </Icon>
                    <TextMenuRight>
                        <a>EDITAR</a>
                        <a>PROJETOS</a>
                    </TextMenuRight>
                </ContIcons>
                <ContIcons>
                    <Icon>
                        <IoPersonAddSharp size={50} color="#fff" />
                    </Icon>
                    <TextMenuRight>
                        <a>CADASTRAR</a>
                        <a>CONSULTORES</a>
                    </TextMenuRight>
                </ContIcons>
                <ContIcons>
                    <Icon> 
                        <GiOrganigram size={50} color="#fff" />
                    </Icon>
                    <TextMenuRight>
                        <a>ALOCAR</a>
                        <a>CONSULTORES</a>
                    </TextMenuRight>
                </ContIcons>
                <ContIcons>
                    <Icon>
                        <GoGraph size={50} color="#fff" />
                    </Icon>
                    <TextMenuRight>
                        <a>IR PARA</a>
                        <a>DASHBOARDS</a>
                    </TextMenuRight>
                </ContIcons>
        </ContainerMenuRight>

    </>
    );
};

export default Menu;