import React from 'react';
import {
  Container, Button, Text, Content,
} from 'native-base';
import { StyleSheet } from 'react-native';

export default function Home() {
  return (
    <Container>
      <Content>
        <Text>Some text lorem ipsum</Text>
        <Button>
          <Text>Test Button</Text>
        </Button>
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
