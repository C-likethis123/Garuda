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
            Name: '',
            NRIC: '',
            DOB: '',
            Address: '',
            Email: '',
            Medical: '',
        };
    }

    componentDidMount() {
        this.getInfo()
    }

    getInfo = async () => {
        try {
            let name = await AsyncStorage.getItem('Name');
            let nric = await AsyncStorage.getItem('NRIC')
            let dob = await AsyncStorage.getItem('DOB')
            let address = await AsyncStorage.getItem('address')
            let email = await AsyncStorage.getItem('email')
            let medical = await AsyncStorage.getItem('medical')
            if (name !== null) {
                this.setState({
                    Name: name
                });
            } 
            if (nric !== null) {
                this.setState({
                    NRIC: nric
                });
            }
            if (dob !== null) {
                this.setState({
                    DOB: dob
                });
            }
            if (address !== null) {
                this.setState({
                    Address: address
                });
            }
            if (email !== null) {
                this.setState({
                    Email: email
                });
            }
            if (medical !== null) {
                this.setState({
                    Medical: medical
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
                    {this.state.Name}
                    {"\n"}
                    {this.state.NRIC}
                    {"\n"}
                    {this.state.DOB}
                    {"\n"}
                    {this.state.Address}
                    {"\n"}
                    {this.state.Email}
                    {"\n"}
                    {this.state.Medical}
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
