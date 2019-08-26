import React, { Component } from 'react';

import { Alert } from 'reactstrap';

import Titulo from '../components/Titulo';
import Contador from '../components/Contador';

export default class Home extends Component {

    render() {
        return (
            <div>
                <Titulo textColor='green'>
                    Primeiro seção
                </Titulo>

                <Titulo textColor='red'>
                    Segunda seção
                </Titulo>

                <Contador inicio={10} tempo={200} />
                <Contador inicio={100} tempo={550} />

                <Alert color="info">
                    Alert para exibir info
                </Alert>
                <Alert color="danger">
                    Alert para exibir erros
                </Alert>
                <Alert color="warning">
                    Alert para exibir alertas
                </Alert>
            </div>
        );
    }

}
