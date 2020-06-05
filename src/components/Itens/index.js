import React, { Component } from 'react';

import {Container, ItensContatiner , ItemTab , Title , ItemText , TitleItem} from './styles.js';
import Icon from 'react-native-vector-icons/MaterialIcons';

export class Itens extends Component {


        render() {
         return (
        <Container>
                <ItemTab>
                        <Title>Enderecos Clientes</Title>
                        <TitleItem>CEP</TitleItem>
                        <ItemText> {this.props.lista.cep} </ItemText>
                        <TitleItem>LOGRADOURO</TitleItem>
                        <ItemText> {this.props.lista.logradouro} </ItemText>
                        <TitleItem>COMPLEMENTO</TitleItem>
                        <ItemText> {this.props.lista.complemento} </ItemText>
                        <TitleItem>BAIRRO</TitleItem>
                        <ItemText> {this.props.lista.bairro} </ItemText>
                        <TitleItem>LOCALIDADE</TitleItem>
                        <ItemText> {this.props.lista.localidade} </ItemText>
                        <TitleItem>UF</TitleItem>
                        <ItemText> {this.props.lista.uf} </ItemText>
                        <TitleItem>IBGE</TitleItem>
                        <ItemText> {this.props.lista.ibge} </ItemText>
                        <TitleItem>GIA</TitleItem>
                        <ItemText> {this.props.lista.gia} </ItemText>
                </ItemTab>
        </Container >
        );
        }
}

       
