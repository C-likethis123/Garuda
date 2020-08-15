import React, { Component } from "react";
import { Alert, Button, Text, TextInput, View, StyleSheet } from 'react-native';

class LoginScreen extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: LoginScreen
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
                <Text> Google Login Screen </Text>
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
                
                <Button
                title={'Login'}
                style={styles.input}
                onPress={this.onLogin.bind(this)}
                />
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
