import React from 'react';
import { StyleSheet } from 'react-native';
import {
  Header,
  Text,
  Content,
  Left,
  Right,
  Body,
  Icon,
  Button,
  Title,
  Footer,
  FooterTab,
} from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class FooterComponent {
  onNavClick(event) {
    Actions.push('');
    console.log(event);
  }

  render() {
    return (
      <Footer>
        <FooterTab>
          <Button onClick={this.onNavClick} vertical active>
            <Icon type="Entypo" name="wallet" />
            <Text>Wallet</Text>
          </Button>
          <Button vertical>
            <Icon type="MaterialCommunityIcons" name="finance" />
            <Text>Trade</Text>
          </Button>
          <Button vertical>
            <Icon type="Entypo" name="cloud" />
            <Text>Bots</Text>
          </Button>
          <Button vertical>
            <Icon type="MaterialIcons" name="person" />
            <Text>Account</Text>
          </Button>
        </FooterTab>
      </Footer>
    );
  }
}
