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

class LoginScreen extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: LoginScreen
    });

    constructor() {
        super();
        this.state = {};
    }

    componentDidMount() {}

    render() {
        return (
            <View style={styles.container}>
                <Text> Login Screen </Text>
                <Button
                    type="clear"
                    style={styles.button}
                    title="Login"
                        onPress={() =>
                            this.props.navigation.navigate('HomeScreen')
                        }
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
});

export default LoginScreen;
