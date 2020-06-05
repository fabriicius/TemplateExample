import React from 'react';

import { ListItens } from '~/components/ListItens'
import { Header } from '~/components/Header'
import { Container } from './styles';


const Main = () => (

    <Container>

      <Header/>
      
      <ListItens />
     </Container>
  

);

export default Main;
