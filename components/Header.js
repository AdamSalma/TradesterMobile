import React from 'react';
import { StyleSheet } from 'react-native';
import {
  Header, Text, Content, Left, Right, Body, Icon, Button, Title,
} from 'native-base';

const HeaderComponent = () => (
  <Header>
    <Left>
      <Button transparent>
        <Icon name="menu" />
      </Button>
    </Left>
    <Body>
      <Title>TradesterMobile</Title>
    </Body>
    <Right />
  </Header>
);

export default HeaderComponent;
