import styled from 'styled-components/native';
import React, { useState } from 'react';

const Counter = styled.View`
  width: 380px;
  max-width: 80%;
  height: 250px;
  max-height: 80%;
  border-radius: 30px;
  background: white;
  margin: 60px auto 0;
  display: flex;
  padding: 20px
`

const Counter__names = styled.View`
  width: 100%;
  height: 35px;
`

const Counter__text = styled.Text`
  font-size: 20px;
  text-align: center;
  font-weight: 600;
  color: #101010;
  opacity: 0.6;
`

const Input = styled.TextInput`
  background-color: rgb(217, 217, 217);
  width: 380px;
  border-radius: 4px;
  max-width: 95%;
  height: 30px;
  padding: 5px;
`
const BlockInput = styled.View`
  border-radius: 30px;
  background: white;
  display: flex;
  text-align: center;
  margin-top: 5px;
  margin-bottom: 5px;
`
const ButtonBlock = styled.View`
  border-radius: 6px;
  background: rgb(38, 136, 235);
  display: flex;
  text-align: center;
`
const ButtonBlockAll = styled.View`
  width: 180px;
  height: 40px;
  margin: 15px 40px;
`
const ButtonText = styled.Button`
  color: white;
  font-size: 16px;
  text-align: center;
  width: 180px;
`

const CounterBlock2 = ({ onButtonPress }) => {
  handleButtonPress1 = () => {
    this.props.onButtonPress();
  }
  return (
      <Counter>
        <Counter__names>
          <Counter__text>Регистрация</Counter__text>
        <BlockInput>
        <Input placeholder="Email/Телефон"/>
        </BlockInput>
        <BlockInput>
        <Input placeholder="Пароль"/>
        </BlockInput>
        <BlockInput>
        <Input placeholder="Повторите пароль"/>
        </BlockInput>
        <ButtonBlockAll>
        <ButtonBlock>
          <ButtonText title='Зарегистрироваться' onPress={onButtonPress}></ButtonText>
        </ButtonBlock>
        </ButtonBlockAll>
        </Counter__names>
      </Counter>
  );
}

export default CounterBlock2;