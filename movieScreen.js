'use strict';

var React = require('react-native');
var {
	Image,
	PixelRatio,
	ScrollView,
	StyleSheet,
	Text,
	View,
} = React;

var MovieScreen = React.createClass({
	render: function() {
		var value = JSON.stringify(this.props.movie,null,2);
		return (
			<ScrollView contentContainerStyle={styles.contentContainer}>
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
});
module.exports = MovieScreen;