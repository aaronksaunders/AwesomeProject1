/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var MovieList = require('./movieList');
var {
  AppRegistry,
  NavigatorIOS,
  StyleSheet,
} = React;


var AwesomeProject = React.createClass({

  render: function() {

    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'MovieList',
          component: MovieList,
        }}/>
    );
  },
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);