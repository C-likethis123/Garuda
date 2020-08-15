import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

import * as SQLite from 'expo-sqlite';
const db = SQLite.openDatabase('db.testDb');

class PatientsScreen extends React.Component {

    static navigationOptions = ({ navigation }) => ({
        title: PatientsScreen
    });

    constructor(props) {
        super(props);
        this.state = {
            data: null
        }

        db.transaction(tx => {
            tx.executeSql(
                'CREATE TABLE IF NOT EXISTS items (id INTEGER PRIMARY KEY AUTOINCREMENT, text TEXT, count INT)')
        })

        this.fetchData();
    }

    fetchData = () => {
            db.transaction(tx => {
            tx.executeSql('SELECT * FROM items', null,
            (txObj, { rows: { _array } }) => this.setState({ data: [] }),
            (txObj, error) => console.log('Error ', error)
            )
            console.log(this.state);
        })
    }

    newItem = () => {
        db.transaction(tx => {
            tx.executeSql('INSERT INTO items (text, count) values (?, ?)', ['gibberish', 0],
                (txObj, resultSet) => this.setState({ data: this.state.data.concat(
                { id: resultSet.insertId, text: 'gibberish', count: 0 }) }),
                (txObj, error) => console.log('Error', error))
            })
    }

    increment = (id) => {
        db.transaction(tx => {
            tx.executeSql('UPDATE items SET count = count + 1 WHERE id = ?', [id],
            (txObj, resultSet) => {
            if (resultSet.rowsAffected > 0) {
                let newList = this.state.data.map(data => {
                if (data.id === id)
                    return { ...data, count: data.count + 1 }
                else
                    return data
                })
                this.setState({ data: newList })
            }
            })
        })
    }

    delete = (id) => {
        db.transaction(tx => {
        tx.executeSql('DELETE FROM items WHERE id = ? ', [id],
            (txObj, resultSet) => {
            if (resultSet.rowsAffected > 0) {
                let newList = this.state.data.filter(data => {
                if (data.id === id)
                    return false
                else
                    return true
                })
                this.setState({ data: newList })
            }
            })
        })
    }

    render() {
        return (
            <View>
                <Text>Add random names with count</Text>
                <TouchableOpacity onPress={this.newItem}>
                    <Text>Add Item</Text>
                </TouchableOpacity>
                <ScrollView>
                    {this.state.data && this.state.data.map(data => (
                        <View key={data.id}>
                            <Text>{data.id}-{data.count}</Text>
                            <TouchableOpacity onPress={() => this.increment(data.id)}>
                                <Text> + </Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.delete(data.id)}>
                                <Text> DEL </Text>
                            </TouchableOpacity>
                        </View>
                    ))}
                </ScrollView>
            </View>
        )
    }
}

export default PatientsScreen;