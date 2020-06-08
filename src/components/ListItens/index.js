import React, { Component } from 'react'
import { View , FlatList, Text} from 'react-native'
import {ContainerScroll } from './styles.js'
import {Itens} from '~/components/Itens'
import axios from 'axios'

export class ListItens extends Component{

    constructor(props){
        super(props)
        
        this.state = { listaCliente: [] }
    }

    UNSAFE_componentWillMount(){
        //Requisicao HTTP
        //https://viacep.com.br/ws/03808130/json/
        axios.get('http://sandbox.cisti.com.br/Cliente/BuscaCliente/27635627953')
        .then(response => {
            this.setState({ listaCliente: response.data });
        })
        .catch(() => {
             console.log('Erro') 
            })
    }


 render(){
     
     const lista = this.state.listaCliente ;
     console.log(lista)

    return (
        <ContainerScroll>
            <Itens
               key={lista.Cliente}
               lista={lista}
            />  
        </ContainerScroll>
     
    );}

    componentDidMount(){
        console.log('depois de renderizar')

    }
}