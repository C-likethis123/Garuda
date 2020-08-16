import React, { Component } from "react";import {
    StyleSheet,
    View,
    Image,
    ImageBackground,
    Text,
    AsyncStorage,
    Alert,
    TextInput,
} from "react-native";
import { Button } from "react-native-elements";

class FormScreen extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: Form
    });

    constructor(props) {
        super(props);
        
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
        this.saveInfo();
    }

    saveInfo = async () => {
        try {
            Info = 
            await AsyncStorage.setItem('Info', this.state.Info)
            // await AsyncStorage.setItem('NRIC', this.state.NRIC)
            // await AsyncStorage.setItem('DOB', this.state.DOB)
            // await AsyncStorage.setItem('address', this.state.address)
            // await AsyncStorage.setItem('email', this.state.email)
            // await AsyncStorage.setItem('medical', this.state.medical)
        } catch (error) {
            console.warn('Error in getting Info' + error);
        }
    }

    onLogin() {
        // const { name, NRIC, DOB, address, email, medical} = this.state;
        const {Info} = this.state;
        this.saveInfo();
        window.location.reload(false);
        this.props.navigation.goBack(null);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}> Patient Record </Text>
                <TextInput
                value={this.state.name}
                onChangeText={(name) => this.setState({
                    ...this.state.Info,
                    Name: name
                })} 
                placeholder={'Name'}
                style={styles.input}
                />
                <TextInput
                value={this.state.NRIC}
                onChangeText={(ktp) => this.setState({
                    ...this.state.Info,
                    KTP: ktp
                })}
                placeholder={'NRIC'}
                style={styles.input}
                />
                <TextInput
                value={this.state.DOB}
                onChangeText={(dob) => this.setState({
                    ...this.state.Info,
                    DOB: dob
                })}
                placeholder={'DOB'}
                style={styles.input}
                />
                <TextInput
                value={this.state.address}
                onChangeText={(address) => this.setState({
                    ...this.state.Info,
                    Address: address
                })}
                placeholder={'Address'}
                style={styles.input}
                />
                <TextInput
                value={this.state.email}
                onChangeText={(email) => this.setState({
                    ...this.state.Info,
                    Email: email
                })}
                placeholder={'Email'}
                style={styles.input}
                />
                <TextInput
                value={this.state.medical}
                multiline={true}
                onChangeText={(medical) => this.setState({
                    ...this.state.Info,
                    Medical: medical
                })}
                placeholder={'Medical History'}
                style={styles.longInput}
                />
                
                
                <Button
                    type="clear"
                    style={styles.button}
                    title="Submit"
                        onPress={() =>
                            this.onLogin()
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
    input: {
		width: 250,
		color: '#555555',
        padding: 10,
        margin: 10,
        height: 50,
        borderColor: '#6E5BAA',
        borderWidth: 1,
        borderRadius: 10,
        alignSelf: 'center',
        backgroundColor: '#ffffff'
    },
    longInput: {
		width: 250,
		color: '#555555',
        padding: 10,
        margin: 10,
        height: 150,
        borderColor: '#6E5BAA',
        borderWidth: 1,
        borderRadius: 10,
        alignSelf: 'center',
        backgroundColor: '#ffffff'
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        fontFamily: 'Helvetica-Bold',
        color: '#0f4c75',
        margin: 10,
    }
  });
  

export default FormScreen;
