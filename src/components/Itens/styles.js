import {StyleSheet} from 'react-native'

import styled from 'styled-components/native'

export const Container = styled.View`
   height: 100px;
   margin-top: 20px;
`;


export const ItemTab = styled.View`
   width: 405px;
   height: 405px;
   background: rgba(255, 255, 255, 0.2);
   border-radius: 3px;
   margin-left: 5px
   padding: 15px;
 
`;

export const ItemText = styled.Text`
   font-size: 13px;
   margin-top: 5px;
   margin-bottom: 5px;
   color: #FFF;
`;

export const TitleItem = styled.Text`
   font-size: 15px;
   color: gray;
   margin-top: 1px
`;

export const Title = styled.Text`
   font-size: 20px;
   color: black;
   margin-bottom: 7px;
`;