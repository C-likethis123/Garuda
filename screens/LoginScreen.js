import React, { Component } from "react";
import { Alert, Button, Text, TextInput, View, StyleSheet, Dimensions } from 'react-native';

let windowSize = Dimensions.get('window');

class LoginScreen extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: Login
    });

    constructor(props) {
        super(props);
        
        this.state = {
          username: '',
          password: '',
        };
    }

    componentDidMount() {}

    onLogin() {
        const { username, password } = this.state;
    
        Alert.alert('Credentials', `${username} + ${password}`);
      }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                value={this.state.username}
                onChangeText={(username) => this.setState({ username })}
                placeholder={'Username'}
                style={styles.input}
                />
                <TextInput
                value={this.state.password}
                onChangeText={(password) => this.setState({ password })}
                placeholder={'Password'}
                secureTextEntry={true}
                style={styles.input}
                />
                <View style={styles.button}>
                    <Button
                    color="#3282b8"
                    title={'Login'}
                    style={styles.input}
                    onPress={this.onLogin.bind(this)}
                    />
                </View>
                <View style={styles.button}>
                    <Button
					color="#3282b8"
                    title="Login"
                        onPress={() =>
                            this.props.navigation.navigate('Home')
                        }
                    />
                </View>
            </View>
        );
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
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
    button: {
        margin: 10,
    }
});

export default LoginScreen;
