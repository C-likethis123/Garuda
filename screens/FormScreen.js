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

class FormScreen extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: FormScreen
    });

    constructor() {
        super();
        this.state = {};
    }

    componentDidMount() {}

    render() {
        return (
            <View style={styles.container}>
                <Text> Form Screen </Text>
                <Button
                    type="clear"
                    style={styles.button}
                    title="Submit Form"
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

export default FormScreen;
