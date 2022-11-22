import React from 'react';
import {View} from 'react-native';
import {
  ImageStyle,
  DetailsContainer,
  TitleStyle,
  TextStyle,
  BorderStyle,
  ContainerStyle,
  IconWrapper,
} from './styles';
import Icon from 'react-native-vector-icons/AntDesign';
const CharacterDetails = ({route, navigation: {goBack}}) => {
  const {character} = route.params;

  return (
    <ContainerStyle>
      <View>
        <ImageStyle source={{url: character?.image}} />
        <IconWrapper onPress={() => goBack()}>
          <Icon color={'#1B4233'} size={25} name="left" />
        </IconWrapper>
      </View>

      <DetailsContainer>
        <BorderStyle>
          <TitleStyle>Name</TitleStyle>
          <TextStyle>{character?.name}</TextStyle>
        </BorderStyle>
        <BorderStyle>
          <TitleStyle>Status</TitleStyle>
          <TextStyle>{character?.status}</TextStyle>
        </BorderStyle>
        <BorderStyle>
          <TitleStyle>Species</TitleStyle>
          <TextStyle>{character?.species}</TextStyle>
        </BorderStyle>
        <BorderStyle>
          <TitleStyle>Gender</TitleStyle>
          <TextStyle>{character?.gender}</TextStyle>
        </BorderStyle>
        <BorderStyle>
          <TitleStyle>Type</TitleStyle>
          <TextStyle>{character?.type ? character?.type : '---'}</TextStyle>
        </BorderStyle>
      </DetailsContainer>
    </ContainerStyle>
  );
};

export default CharacterDetails;
