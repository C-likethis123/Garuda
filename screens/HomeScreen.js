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
            Info: {
                Name: '',
                KTP: '',
                DOB: '',
                Address: '',
                Email: '',
                Medical: '',
            }
        };
    }

    componentDidMount() {
        this.getInfo()
    }

    getInfo = async () => {
        try {
            let stored = await AsyncStorage.getItem('Info')
            if (stored !== null) {
                
                this.setState({ 
                    Info: stored,
                }); 
            } 
        } catch (error) {
            console.warn('Error in getting Info ' + error);
        }
    }

    render() {
        this.getInfo();
        return (
            <View style={styles.container}>
                <Text>Home Screen </Text>
                <Text>
                    {this.state.Info.Name}
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
