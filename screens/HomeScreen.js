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
        this.state = {
            name: '',
            NRIC: ''
        };
    }

    componentDidMount() {
        this.getInfo()
    }

    getInfo = async () => {
        try {
            let name = await AsyncStorage.getItem('Name');
            let nric = await AsyncStorage.getItem('NRIC')
            if (name !== null) {
                this.setState({
                    name: name
                });
            } 
            if (nric !== null) {
                this.setState({
                    NRIC:nric
                });
            }

        } catch (error) {
            console.warn('Error in getting Info ' + error);
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Home Screen </Text>
                <Text>
                    {this.state.name}
                    {"\n"}
                    {this.state.NRIC}
                </Text>
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
