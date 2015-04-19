'use strict';

var React = require('react-native');
var {
	Image,
	PixelRatio,
	ScrollView,
	StyleSheet,
	TouchableHighlight,
	Text,
	View,
} = React;

var MovieScreen = React.createClass({
	cameraBtnPressed : function() {
		alert("camera button pressed");
	},
	render: function() {
		var value = JSON.stringify(this.props.movie,null,2);
		return (
			<ScrollView contentContainerStyle={styles.contentContainer}>
				<TouchableHighlight style={styles.button}
				    underlayColor='#99d9f4'
				    onPress={this.cameraBtnPressed}>
				  <Text style={styles.buttonText}>Open Camera</Text>
				</TouchableHighlight>
				<View style={styles.mainSection}>
					<Text  style={styles.movieYear} numberOfLines={100}>
					{value}
					</Text>
				</View>
			</ScrollView>
		);
	},
});


var styles = StyleSheet.create({
	contentContainer: {
		padding: 10,
	},
	mainSection: {
		//padding: 10,
	},
	movieYear: {
		top: 5,
	},
	buttonText: {
	  fontSize: 18,
	  color: 'white',
	  alignSelf: 'center'
	},
	button: {
	  height: 36,
	  flex: 1,
	  flexDirection: 'row',
	  backgroundColor: '#48BBEC',
	  borderColor: '#48BBEC',
	  borderWidth: 1,
	  borderRadius: 8,
	  marginBottom: 10,
	  alignSelf: 'stretch',
	  justifyContent: 'center'
	}
});
module.exports = MovieScreen;