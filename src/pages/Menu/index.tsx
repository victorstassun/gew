import React, { MouseEvent } from 'react';

import { IoNewspaperOutline, IoExitOutline, IoPersonAddSharp } from 'react-icons/io5';
import { FaRegUser } from 'react-icons/fa';
import { FiRefreshCcw } from 'react-icons/fi';
import { RiDeleteBinLine, RiFileEditFill } from 'react-icons/ri';
import { AiOutlineFolderView, AiFillEye } from 'react-icons/ai';
import { CgInsertAfterR } from 'react-icons/cg';
import { GoGraph } from 'react-icons/go';
import { GiOrganigram } from 'react-icons/gi';

import { ContainerNavbar, Logo, PageIndicator, SandwichMenu, DropdownMenu,
    LanguageIndicator, Flag, VectorLanguage } from './styleNavbar';

import { ContainerMenu, ContainerInfo, UserImg, NewsImg, LineBlue, DeleteImg, RefreshImg,
    ContainerMsg, Msg, Aba, LineMsg, TextMsg, TitleMsg, BtnOpen, ExitImg } from './styleMenuLeft';

import { ContainerMenuRight, ContIcons, Icon, TextMenuRight } from './styleMenuRight';

import { ContainerHome, ContainerHomeGraph, Card, ContainerHomeCards, ContainerHomeTitle, Graph, GraphTitle
    , CardContent, GraphContainer } from './styles';
       
const Menu: React.FC = () => {

    function openMenuNavbar() {
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
                document.getElementById("btn-open")!.style.marginLeft = "97%";

                document.getElementById("container-menu")!.style.overflow = 'hidden';
                document.getElementById("container-menu")!.style.transform = 'translateX(11vw)';
                document.getElementById("user-img")!.style.transform = 'translateX(-11vw)';
                document.getElementById("user-img")!.style.width = '8vh';
                document.getElementById("user-img")!.style.height = '9.25vh';

                document.getElementById("news-img")!.style.transform = 'translate(-12vw, 1.8vh)';
                document.getElementById("news-img")!.style.width = '2.77vh';
                document.getElementById("news-img")!.style.height = '2.73vh';
                document.getElementById("news-img")!.style.marginLeft = '12.5vw';
                document.getElementById("news-img")!.style.justifyContent = 'start';

                document.getElementById("title-not")!.style.marginTop = '1.5vh';
                document.getElementById("user-name")!.style.margin = '1vh 0 0 16vw';

                document.getElementById("user-name")!.style.display = "block";
                document.getElementById("title-not")!.style.display = "block";    
                document.getElementById("line-blue")!.style.display = "block";
                document.getElementById("refresh-img")!.style.display = "block";
                document.getElementById("delete-img")!.style.display = "block";
                document.getElementById("container-msg")!.style.display = "block";

                status = status + 1;
            } else {
                document.getElementById("container-menu")!.style.overflow = 'visible';
                document.getElementById("container-menu")!.style.transform = 'translateX(0vw)';
                document.getElementById("user-img")!.style.transform = 'translateX(0vw)';
                document.getElementById("user-img")!.style.width = '8vh';
                document.getElementById("user-img")!.style.height = '8vh';

                document.getElementById("news-img")!.style.transform = 'translate(0vw, 0vh)';
                document.getElementById("news-img")!.style.width = '10vh';
                document.getElementById("news-img")!.style.height = '6vh';
                document.getElementById("news-img")!.style.marginLeft = '14.5vw';

                document.getElementById("user-name")!.style.display = "none";
                document.getElementById("title-not")!.style.display = "none";
                document.getElementById("line-blue")!.style.display = "none";
                document.getElementById("refresh-img")!.style.display = "none";
                document.getElementById("delete-img")!.style.display = "none";
                document.getElementById("container-msg")!.style.display = "none";

                document.getElementById("btn-open")!.style.transform = "rotate(45deg)";
                document.getElementById("btn-open")!.style.marginLeft = "97%";
                document.getElementById("btn-open")!.style.backgroundColor = "#fff";

                status = status - 1;
            }
    }

    return (
        <>
            <ContainerNavbar>
                <Logo></Logo>
                <PageIndicator>
                    <a href="./">Menu</a>
                </PageIndicator>
                <SandwichMenu onClick={openMenuNavbar}>
                    <DropdownMenu id="dropdownMenu">
                        <ul>
                            <li><a href="./">Perfil</a></li>
                            <li><a href="./">Configurações</a></li>
                            <li><a href="./">Sair</a></li>
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
                        <p id="user-name">Seja bem vindo, <a href="./">Renato Silva</a></p> 
                    </UserImg>
                    <NewsImg id="news-img">
                        <IoNewspaperOutline size={40} id="icon-news"/>
                        <p id="title-not">Notificações</p> 
                    </NewsImg>
                    <LineBlue id="line-blue" />
                    <RefreshImg id="refresh-img">
                        <FiRefreshCcw size={20} id="icon-ref"/>
                    </RefreshImg>
                    <DeleteImg id="delete-img">
                        <RiDeleteBinLine size={20} id="icon-del"/>
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
                        <IoExitOutline size={40} id="icon-exit"/>
                    </ExitImg>
                </ContainerInfo>
                <BtnOpen id="btn-open" onClick={handdleClick} />
            </ContainerMenu>

            <ContainerHome>
                <ContainerHomeTitle>
                    <h1><strong>Visão</strong> Geral</h1>
                    <p>quadrado</p>
                </ContainerHomeTitle>
                <ContainerHomeCards>
                    <Card>
                        <div>
                            <h2>Projetos Concluídos:</h2>
                        </div>
                        <CardContent>
                            <span />
                            <h1 id="complete">87</h1>
                            <GraphContainer />
                        </CardContent>
                        <div>
                            <p><strong>Verba Total:</strong>  R$ 159.956,76 <AiFillEye id="icon-eye"/></p>
                        </div>
                    </Card>
                    <Card>
                        <div>
                            <h2>Projetos Em Andamento:</h2>
                        </div>
                        <CardContent>
                            <span />
                            <h1 id="up">14</h1>
                            <GraphContainer />
                        </CardContent>
                        <div>
                            <p><strong>Verba Total:</strong>  R$ 159.956,76 <AiFillEye id="icon-eye"/></p>
                        </div>
                    </Card>
                    <Card>
                        <div>
                            <h2>Projetos Atrasados:</h2>
                        </div>
                        <CardContent>
                            <span />
                            <h1 id="down">16</h1>
                            <GraphContainer />
                        </CardContent>
                        <div>
                            <p><strong>Verba Total:</strong>  R$ 159.956,76 <AiFillEye id="icon-eye"/></p>
                        </div>
                    </Card>
                </ContainerHomeCards>
                <ContainerHomeGraph>
                    <GraphTitle></GraphTitle>
                    <Graph></Graph>
                </ContainerHomeGraph>
            </ContainerHome>

            <ContainerMenuRight>
                <ContIcons>
                    <Icon>
                       <AiOutlineFolderView size={50} color="#fff" /> 
                    </Icon> 
                    <TextMenuRight>
                        <a href="./">VISUALIZAR</a>
                        <a href="./">PROJETOS</a>
                    </TextMenuRight>
                </ContIcons>
                <ContIcons>
                    <Icon>
                        <CgInsertAfterR size={50} color="#fff" />
                    </Icon>
                    <TextMenuRight>
                        <a href="./">CADASTRAR</a>
                        <a href="./">PROJETOS</a>
                    </TextMenuRight>
                </ContIcons>
                <ContIcons>
                    <Icon>
                        <RiFileEditFill size={50} color="#fff" />
                    </Icon>
                    <TextMenuRight>
                        <a href="./">EDITAR</a>
                        <a href="./">PROJETOS</a>
                    </TextMenuRight>
                </ContIcons>
                <ContIcons>
                    <Icon>
                        <IoPersonAddSharp size={50} color="#fff" />
                    </Icon>
                    <TextMenuRight>
                        <a href="./">CADASTRAR</a>
                        <a href="./">CONSULTORES</a>
                    </TextMenuRight>
                </ContIcons>
                <ContIcons>
                    <Icon> 
                        <GiOrganigram size={50} color="#fff" />
                    </Icon>
                    <TextMenuRight>
                        <a href="./">ALOCAR</a>
                        <a href="./">CONSULTORES</a>
                    </TextMenuRight>
                </ContIcons>
                <ContIcons>
                    <Icon>
                        <GoGraph size={50} color="#fff" />
                    </Icon>
                    <TextMenuRight>
                        <a href="./">IR PARA</a>
                        <a href="./">DASHBOARDS</a>
                    </TextMenuRight>
                </ContIcons>
        </ContainerMenuRight>
    </>
    );
};

export default Menu;