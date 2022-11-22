import React from 'react';
import {CharacterCardStyle, ImageStyle, TextStyle} from './styles';

const CharacterCard = ({item, onPress}) => {
  return (
    <CharacterCardStyle onPress={onPress}>
      <ImageStyle source={{url: item.image}} />
      <TextStyle>{item.name}</TextStyle>
    </CharacterCardStyle>
  );
};

export default CharacterCard;
