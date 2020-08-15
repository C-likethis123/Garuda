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
        title: FormScreen
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

        this.props.navigation.navigate('HomeScreen');
    }

    render() {
        return (
            <View style={styles.container}>
                <Text> Form Screen </Text>
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
                placeholder={'address'}
                style={styles.input}
                />
                <TextInput
                value={this.state.email}
                onChangeText={(email) => this.setState({
                    ...this.state.Info,
                    Email: email
                })}
                placeholder={'email'}
                style={styles.input}
                />
                <TextInput
                value={this.state.medical}
                onChangeText={(medical) => this.setState({
                    ...this.state.Info,
                    Medical: medical
                })}
                placeholder={'Medical History'}
                style={styles.input}
                />
                
                
                <Button
                    type="clear"
                    style={styles.button}
                    title="Submit Form"
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
      backgroundColor: '#ecf0f1',
    },
    input: {
      width: 200,
      height: 44,
      padding: 10,
      borderWidth: 1,
      borderColor: 'black',
      marginBottom: 10,
    },
  });
  

export default FormScreen;
