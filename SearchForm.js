import React, { Component } from 'react'
import { Text, View, TextInput, Button, FlatList } from 'react-native'

export default class SearchForm extends Component {
    constructor(props) {
        super(props);
        this.state = {busRoutes:[]}
    }
    componentDidMount() {
        fetch().then().then();
    }
    render() {
        return (
            <View>
                <Text> Fount the following buses </Text>
                <TextInput></TextInput>
                <TextInput></TextInput>
                <Button onPress={}></Button>
                <FlatList></FlatList>
            </View>
        )
    }
}
