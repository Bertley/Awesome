import React, { Component } from 'react';
import { Dimensions, StyleSheet, Text, View, AppRegistry, Image } from 'react-native';

// Global Variables 

const screenwidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

// Hello World!

// export default class HelloWorldApp extends Component {
//   render() {
//     return (
//       <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
//         <Text>Hello World!</Text>
//       </View>
//     ); 
//   }
// }

// ImageView

// export default class Bananas extends Component {
//   render() {
//     let pic = {
//       uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
//     }; 
//     return (
//       <Image source={pic} style={{width: screenwidth, height: screenHeight * 0.3}}/>
//     ); 
//   }
// }

// class Greeting extends Component {
//   render() {
//     return (
//       <View style={{alignItems: 'center'}}>
//         <Text>Hello {this.props.name} !</Text>
//       </View>
//     ); 
//   }
// }

// export default class LotsOfGreetings extends Component {
//   render() {
//     return (
//       <View style={{alignItems: 'center', top:50}}>
//         <Greeting name='Ehis'/>
//         <Greeting name='Jane'/>
//         <Greeting name='Boy'/>
//       </View>
//     ); 
//   }
// }

// class Blink extends Component {
//   componentDidMount() {
//     // Toggle the state every second 
//     setInterval(() => (
//       this.setState(previousState => (
//         { isShowingText: !previousState.isShowingText }
//       ))
//     ), 1000)
//   }

//   // state object 
//   state = { isShowingText: true };

//   render() {
//     if (!this.state.isShowingText) {
//       return null;
//     }
//     return (
//       <Text style={this.props.textStyle}>{this.props.text}</Text>
//     );
//   }
// }

// export default class BlinkApp extends Component {
//   render() {
//     return (
//       <View>
//         <Blink text='I love to blink' />
//         <Blink text='I love to blink' />
//         <Blink text='I love to blink' />
//         <Blink text='I love to blink' />
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   bigBlue: {
//     color: 'blue', 
//     fontWeight: 'bold', 
//     fontSize: 30, 
//   }, 
//   red: {
//     color: 'red',
//   }, 
// }); 

// export default class LotsOfStyles extends Component {
//   render() {
//     return (
//       <View>
//         <Blink textStyle={styles.red} text='Just red'/>
//         <Blink textStyle={styles.bigBlue} text='Just BigBlue'/>
//         <Blink textStyle={[styles.bigBlue, styles.red]} text='bigBlue, then red'/>
//         <Blink textStyle={[styles.red, styles.bigBlue]} text='red, bigBlue'/>
//       </View>
//     ); 
//   }
// }

export default class TextInANest extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      titleText: "Bird's Nest", 
      bodyText: "This is not really a bird nest."
    }; 
  }

  render() {
    return (
      <Text style={styles.baseText}>
        <Text style={styles.titleText} onPress={this.onPressTitle}>
          {this.state.titleText}{'\n'}{'\n'}
        </Text>
        <Text numberOfLines={5}>
          {this.state.bodyText}
        </Text>
      </Text>
    ); 
  }
}

const styles = StyleSheet.create({
  baseText: {
    fontFamily: 'Cochin', 
    
  }, 
  titleText: {
    fontSize: 40, 
    fontWeight: 'bold',
  },
}); 
