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
        title: Home
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
                    Info: {
                        ...this.state.Info,
                        Name: stored.Name,
                        KTP: stored.KTP,
                        DOB: stored.DOB,
                        Address: stored.Address,
                        Email: stored.Email,
                        Medical: stored.Medical,
                    },
                }); 
            } 
        } catch (error) {
            console.warn('Error in getting Info ' + error);
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Welcome to HealthRecords</Text>
                <Text>
                    {this.state.Info.Name}
                </Text>
                <Button
                    type="clear"
                    style={styles.button}
                    title="Go to Form"
                        onPress={() =>
                            this.props.navigation.navigate('Form')
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
        backgroundColor: '#f0f8ff',
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        fontFamily: 'Helvetica-Bold',
        color: '#0f4c75',
        margin: 50,
    }
});

export default HomeScreen;
