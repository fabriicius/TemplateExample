import React from 'react';
import { Container , Top , Title } from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const Header = () => {
    return (
        <Container>
            <Top>
                <Title> Cis Informatica</Title>
            </Top>
            <Icon name="keyboard-arrow-down" size={20} color="#FFF" />
        </Container>
    );
}