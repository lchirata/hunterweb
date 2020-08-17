import React,  { Component } from 'react';
import api from '../../services/api';

export default class Main extends Component {

    //metodo executado assim que o componente foi exibido em tela
    componentDidMount() {
        this.loadProducts();
    }
    //buscar produtos da api
    loadProducts = async () => {
        const response = await api.get('/products');

        console.log(response.data.docs);
    }

    render() {
        return <h1>hello word</h1>
    }
}