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
          name: '',
          NRIC: '',
          DOB: '',
          address: '',
          email: '',
          medical: '',
        };
    }

    componentDidMount() {
        this.saveInfo();
    }

    saveInfo = async () => {
        try {
            await AsyncStorage.setItem('Name', this.state.name)
            await AsyncStorage.setItem('NRIC', this.state.NRIC)
            console.log(this.state.name + this.state.NRIC)
        } catch (error) {
            console.warn('Error in getting Info' + error);
        }
    }

    onLogin() {
        const { name, NRIC, DOB, address, email, medical} = this.state;
    
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
                onChangeText={(name) => this.setState({ name })}
                placeholder={'Name'}
                style={styles.input}
                />
                <TextInput
                value={this.state.NRIC}
                onChangeText={(NRIC) => this.setState({ NRIC })}
                placeholder={'NRIC'}
                style={styles.input}
                />
                <TextInput
                value={this.state.DOB}
                onChangeText={(DOB) => this.setState({ DOB })}
                placeholder={'DOB'}
                style={styles.input}
                />
                <TextInput
                value={this.state.address}
                onChangeText={(address) => this.setState({ address })}
                placeholder={'address'}
                style={styles.input}
                />
                <TextInput
                value={this.state.email}
                onChangeText={(email) => this.setState({ email })}
                placeholder={'email'}
                style={styles.input}
                />
                <TextInput
                value={this.state.medical}
                onChangeText={(medical) => this.setState({ medical })}
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
