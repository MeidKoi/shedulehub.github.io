import React from "react";
import { FlatList } from "react-native-gesture-handler";
import styled from 'styled-components/native';
import { StyleSheet, Text, SafeAreaView, Button, Image, Modal, Pressable, View} from 'react-native';


const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const getColorByRole = (role) => {
  switch(role) {
    case 'Студент':
      return 'rgb(217, 217, 217)';
    case 'Староста':
      return 'rgb(255, 194, 102)';
    case 'Зам старосты':
        return 'rgb(0, 255, 194)';
    case 'Администратор':
        return 'rgb(163, 205, 255)';
    default:
      return 'black';
  }
};

const List__view = styled.View`
    width: 300px;
    height: 50px;
    max-width: 90%;
    max-height: 90%;
    background: white;
    border-radius: 10px;
    display: flex;
    padding: 15px;
    margin: 15px auto 0;
`

const List__block = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 90%;
    max-height: 90%;
`
const List__blockAll = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 90%;
    max-height: 90%;
`
const List__FlatList = styled.FlatList`

`
const List__text = styled.Text`
    font-size: 15px;
    color: black;
    text-align: center;
`
const List__FlatListText = styled.Text`
    font-size: 15px;
    color: black;
    text-align: left;
    padding: 3px;
    
`
const List__FlatListTextRole = styled.Text`
    font-size: 15px;
    color: black;
    text-align: left;
    background: ${props => getColorByRole(props.role)};
    border-radius: 7px;
    text-align: center;
    width: 120px;
`
const List__FlatListView = styled.View`
    display: flex;
`

const List__FlatListIcon = styled.Text`
    font-size: 23px;
    text-align: center;
    color: white;
`
const List__FlatListBlock = styled.View`
    width: 350px;
    height: 80px;
    max-width: 90%;
    max-height: 90%;
    background: white;
    border-radius: 10px;
    display: flex;
    margin: 15px 15px 0;
    padding: 15px;
    justify-content: space-between;
    flex-direction: row;
`
const List__FlatListIconBlock = styled.View`
    width: 50px;
    height: 50px;
    background: ${getRandomColor};
    border-radius: 50px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
`
const List__FlatListTextBlock = styled.View`
    width: 250px;
    display: flex;
    justify-content: space-between;
    margin: auto 10px 0;
`

const DATA = [
    {
      title: 'Агеев Максим',
      role: 'Студент',
      initial: 'AM',
    },
    {
      title: 'Беляева Варвара',
      role: 'Староста',
      initial: 'БВ',
    },
    {
      title: 'Вдовин Валерий',
      role: 'Студент',
      initial: 'ВВ',
    },
    {
        title: 'Гончаров Егор',
        role: 'Администратор',
        initial: 'ГЕ',
    },
    {
        title: 'Громов Михаил',
        role: 'Зам старосты',
        initial: 'ГМ',
    },
    {
        title: 'Евасеева Варвара',
        role: 'Студент',
        initial: 'ЕВ',
      },
    
  ];
  
  const img = './message.png'

const Item = ({title, role, initial, image}) => (
    <List__FlatListView>
       <List__FlatListBlock><List__FlatListIconBlock><List__FlatListIcon>{initial}</List__FlatListIcon></List__FlatListIconBlock><List__FlatListTextBlock><List__FlatListText>{title}</List__FlatListText><List__FlatListTextRole role={role}>{role}</List__FlatListTextRole></List__FlatListTextBlock><Image image = './message.png'/></List__FlatListBlock>
    </List__FlatListView>
    
);

export default function ListBlock() {
return (
    <List__blockAll>
    <List__block>
    <List__view>
    <List__text>Список группы 👨‍👩‍👧‍👦</List__text>
    </List__view>
    <List__FlatList
        data={DATA}
        renderItem={({ item }) => <Item title={item.title} role={item.role} initial={item.initial} image={'./message.png'}/>}
        keyExtractor={(item, index) => index.toString()}
      />
    </List__block>
    </List__blockAll>
);
}