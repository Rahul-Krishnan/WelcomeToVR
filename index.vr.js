import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
} from 'react-vr';

export default class WelcomeToVR extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('louvre.jpg')}/>
        <Text
          style={{
            backgroundColor: 'darkred',
            fontSize: 0.8,
            fontWeight: '400',
            layoutOrigin: [0.5, 0.5],
            paddingLeft: 0.2,
            paddingRight: 0.2,
            textAlign: 'center',
            textAlignVertical: 'center',
            transform: [
              {translate: [10.5, 12, -30]},
              {rotateY: -50},
            ],
          }}>
          This is the Louvre Main Building
        </Text>
        <Text
          style={{
            backgroundColor: 'darkred',
            fontSize: 0.8,
            fontWeight: '400',
            layoutOrigin: [0.5, 0.5],
            paddingLeft: 0.2,
            paddingRight: 0.2,
            textAlign: 'center',
            textAlignVertical: 'center',
            transform: [
              {translate: [-15, 4, -11]},
              {rotateY: 50},
              {rotateX: -35},
            ],
          }}>
          This is the Louvre Pyramid
        </Text>
        <Text
          style={{
            backgroundColor: 'darkred',
            fontSize: 0.8,
            fontWeight: '400',
            layoutOrigin: [0.5, 0.5],
            paddingLeft: 0.2,
            paddingRight: 0.2,
            textAlign: 'center',
            textAlignVertical: 'center',
            transform: [
              {translate: [7, 0, -5]},
              {rotateY: -98},
              {rotateX: -90},
            ],
          }}>
          This is the Pool
        </Text>
      </View>
    );
  }
};

AppRegistry.registerComponent('WelcomeToVR', () => WelcomeToVR);
