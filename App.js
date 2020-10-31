import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, StatusBar } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import { Image } from 'react-native';

const DATA = [
  {
    id: '1',
    title: 'Pan Fry Teriyaki Chicken',
    img:require("./assets/1.jpg"),
    detail: 'Hello Japan! Here is a recipe that is easy to make, and can go with any types of rice. My personal favorite is jasmine rice. It is a bit sticky, and has a jasmine flavor. You can add boiled carrots and some fresh cherry tomatoes on top of the beans. It will look colorful, and healthy as well.'
  },
  {
    id: '2',
    title: 'Boo Paht Pong Karee',
    img:require("./assets/1.jpg"),
    detail: 'What is Thailand without their crab curry? Spicy, juicy, and scrumptious, crabs are all time favorites, besides their traditional red and green curry. This stir fried crab curry has the deadly combination of fresh spices and coconut milk. So, the next time you are craving something spicy, and exotic, you can easily make this dish.'
  },
  {
    id: '3',
    title: 'Singapore Rice Noodles',
    img:require("./assets/1.jpg"),
    detail: 'Say hello to Malay Peninsula! This is a well loved dish, especially among the Chinese. If you and your family are spicy food lovers, then this is a perfect Saturday brunch for all of you to enjoy. You don’t have to add any other dishes to go with this.'
  },
  {
    id: '4',
    title: 'Dal Makhani',
    img:require("./assets/1.jpg"),
    detail: 'Dal Makhani, or Whole Black Lentil, is a very famous dish in India. Originated from North India, it has spread throughout the whole nation, and beyond. The main ingredients are Whole Black Lentil, Red Kidney Beans, butter oil, or ghee, and full fat cream. These are what make this food very rich. Dal Makhani goes best with naan or pita bread. But you can also eat it with white rice.'
  },
  {
    id: '5',
    title: 'Lamb Biryani',
    img:require("./assets/1.jpg"),
    detail: 'Biryani is a highly popular dish in South Asia. This dish is commonly served as the main meal in weddings, and on special occasions. The aromatic basmati rice is combined with lambs cooked in spices, and yogurt, making this an exotic cuisine. You can try it with chicken instead of lamb, or even substitute with shrimps. Vegetarians can omit all and can add their favorite veggies to make a vegetable biryani.'
  },
  {
    id: '6',
    title: 'Shish Kebabs',
    img:require("./assets/1.jpg"),
    detail: 'What is Middle East without Shish Kebabs? This beloved dish consists of chicken, or lamb, or beef chunks, all boneless, and is marinaded before hand. It is usually said not to marinade for more than 30 minutes. You can grill your personal choice vegetables to go with this exotic dish. The best way to enjoy Shish Kebabs are with naans.'
  },
];

const Item = ({ item }) => (
  <Content>
  <Card>
    <CardItem>
      <Left>
      <Thumbnail source={item.img} />
        <Body>
          <Text>{item.title}</Text>
          <Text note>{item.detail}</Text>
        </Body>
      </Left>
    </CardItem>
    <CardItem cardBody>
    <Image source={item.img} style={{height: 200, width: null, flex: 1}}/>
    </CardItem>
    <CardItem>
      <Left>
        <Button transparent>
          <Icon active name="thumbs-up" />
          <Text>12 Likes</Text>
        </Button>
      </Left>
      <Body>
        <Button transparent>
          <Icon active name="chatbubbles" />
          <Text>4 Comments</Text>
        </Button>
      </Body>
      <Right>
        <Text>11h ago</Text>
      </Right>
    </CardItem>
  </Card>
</Content>

);

const App = () => {
  const renderItem = ({ item }) => (
    <Item item={item} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default App;