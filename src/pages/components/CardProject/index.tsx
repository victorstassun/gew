import React from "react";

import { Card, CardStatus, CardBox, BoxLeft, BoxRight } from './styles';

const CardProject: React.FC = () => {
    return (
        <>
            <Card>
                <CardStatus />
                <CardBox>
                    <BoxLeft>
                        <div>
                            <p>1000025562 - Seção ABC</p>
                            <h1>WEC - IMPLATAÇÃO DE EDI CLIENTE XYZ</h1>
                        </div>
                        <div>
                            <p><strong>Saldo previsto:</strong> R$ 50.000,00</p>
                            <p><strong>Saldo restante:</strong> R$ 50.000,00</p>
                        </div>
                        <div>
                            <p>De: 02/02/2021</p>
                            <p>Até: 02/05/2021</p>
                        </div>
                    </BoxLeft>
                    <BoxRight>
                        <div>
                            <p>Status: <strong>Atrasado</strong></p>
                        </div>
                        <div>
                            <p><strong>Horas:</strong> 120 Horas</p>
                            <p><strong>Apontadas:</strong> 60 Horas</p>
                        </div>
                    </BoxRight>
                </CardBox>
            </Card>
        </>
    );
}

export default CardProject;