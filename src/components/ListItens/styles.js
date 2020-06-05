import {StyleSheet} from 'react-native'

import styled from 'styled-components/native'

export const ContainerScroll = styled.ScrollView.attrs({
  horizontal: true,
  contentContainerStyle: { paddingLeft: 10 , paddingRight: 20},
  showsHorizontalScrollIndicator: false, 
})``;
