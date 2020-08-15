import React, { Component } from "react";
import {
    StyleSheet,
    View,
    Image,
    ImageBackground,
    Text,
    AsyncStorage
} from "react-native";
import { Button } from "react-native-elements";


class HomeScreen extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: HomeScreen
    });

    constructor() {
        super();
        this.state = {};
    }

    componentDidMount() {}

    render() {
        return (
            <View style={styles.container}>
                <Text>Home Screen </Text>
                <Button
                    type="clear"
                    style={styles.button}
                    title="Go to Form"
                        onPress={() =>
                            this.props.navigation.navigate('FormScreen')
                        }
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default HomeScreen;
