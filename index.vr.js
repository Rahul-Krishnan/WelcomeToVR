import React, { Component } from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  VrButton
} from 'react-vr';

export default class WelcomeToVR extends Component {
  state = {
    selection: 'stairs',
    imageLoaded: false,
  }

  selectLouvre = () => {
    this.setState({ selection: 'louvre', imageLoaded: false })
  }

  selectStairs = () => {
    this.setState({ selection: 'stairs', imageLoaded: false })
  }

  imageLoaded = () => {
    this.setState({ imageLoaded: true })
  }

  render() {
    if (this.state.selection === 'stairs') {
      return (
        <View>
          <Pano source={asset('chess-world.jpg')} onLoad={this.imageLoaded}/>
          <VrButton onClick={this.selectLouvre}>
            <Text
              style={{
                backgroundColor: 'darkred',
                display: `${this.state.imageLoaded ? '' : 'none' }`,
                fontSize: 0.8,
                fontWeight: '400',
                layoutOrigin: [0.5, 0.5],
                paddingLeft: 0.2,
                paddingRight: 0.2,
                textAlign: 'center',
                textAlignVertical: 'center',
                transform: [
                  {translate: [-0.1, -1, -6]},
                  {rotateY: 0},
                ],
              }}>
              Click here for the Louvre
            </Text>
          </VrButton>
        </View>
      );
    }
    else if (this.state.selection === 'louvre') {
      return (
        <View>
          <Pano source={asset('louvre.jpg')} onLoad={this.imageLoaded}/>
          <Text
            style={{
              backgroundColor: 'darkred',
              display: `${this.state.imageLoaded ? '' : 'none' }`,
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
              display: `${this.state.imageLoaded ? '' : 'none' }`,
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
              display: `${this.state.imageLoaded ? '' : 'none' }`,
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
          <VrButton onClick={this.selectStairs}>
            <Text
              style={{
                backgroundColor: 'darkred',
                display: `${this.state.imageLoaded ? '' : 'none' }`,
                fontSize: 0.8,
                fontWeight: '400',
                layoutOrigin: [0.5, 0.5],
                paddingLeft: 0.2,
                paddingRight: 0.2,
                textAlign: 'center',
                textAlignVertical: 'center',
                transform: [
                  {translate: [1.25, 0, -8]},
                  {rotateY: -0},
                  {rotateX: -0},
                ],
                width: '50px',
              }}>
              Go Back
            </Text>
          </VrButton>
        </View>
      );
    }
  }
};

AppRegistry.registerComponent('WelcomeToVR', () => WelcomeToVR);
