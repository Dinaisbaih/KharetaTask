import React, {useState, useEffect} from 'react';
import {SafeAreaView, FlatList, ActivityIndicator} from 'react-native';
import {useQuery} from '@apollo/client';
import {FETCH_CHARACTERS} from '../../GraphQL/CharactersGraphQl';
import CharacterCard from '../../Components/CharacterCard.js';
import {ContainerStyle, TitleStyle} from './styles';

const Home = ({navigation}) => {
  const [page, setPage] = useState(1);
  const [characters, setCharacters] = useState([]);
  const {loading, data} = useQuery(FETCH_CHARACTERS, {
    variables: {page},
  });
  const {navigate} = navigation;
  const navigateToDetails = character => {
    navigate('CharacterDetails', {character});
  };

  useEffect(() => {
    if (data?.characters?.results) {
      setCharacters([...characters, ...data?.characters?.results]);
    }
  }, [data?.characters?.results]);

  const handleLoadMore = () => {
    if (!loading) {
      setPage(page + 1);
    }
  };

  const renderItems = ({item}) => {
    return (
      <CharacterCard item={item} onPress={() => navigateToDetails(item)} />
    );
  };
  return (
    <ContainerStyle>
      <SafeAreaView />
      <TitleStyle>Rick And Morty's</TitleStyle>
      <FlatList
        // eslint-disable-next-line react-native/no-inline-styles
        contentContainerStyle={{paddingBottom: 20}}
        onEndReachedThreshold={0.1}
        onEndReached={handleLoadMore}
        renderItem={renderItems}
        data={characters}
        ListFooterComponent={() => <ActivityIndicator />}
      />
    </ContainerStyle>
  );
};

export default Home;
