import React, { Component } from 'react';
import {
    View, Text,
    SafeAreaView,
} from 'react-native';

import DeviceInfo from 'react-native-device-info';
import { Button } from 'react-native-paper';

import Mathematic from '../utils/Math';
import Titulo from '../components/Titulo';

export default class FirstScreen extends Component {
    state = {
        bateryLevel: 0,
    }

    async componentDidMount() {
        console.log(this.props.navigation.state.params)
        // Mathematic.sum(4, 5)
        //   .then(sumResult => {
        //     console.log('sum result: ' + sumResult);
        //     return DeviceInfo.getBatteryLevel()
        //       .then(level => {
        //         console.log('battery level: ' + level);
        //         this.setState({
        //           bateryLevel: level,
        //           sumResult,
        //         })
        //       })
        //   })
        //   .catch(error => {
        //     console.log(error)
        //   })

        try {
            const sumResult = await Mathematic.sum(4, 5);
            console.log('sum result: ' + sumResult);
            const level = await DeviceInfo.getBatteryLevel();
            console.log('battery level: ' + level);
            this.setState({
                bateryLevel: level,
                sumResult,
            });
        } catch (error) {
            console.log(error)
            //
        }
    }

    onVoltarPress = () => {
        this.props.navigation.goBack()
    }

    render() {
        const version = DeviceInfo.getVersion()
        const { bateryLevel, sumResult } = this.state;
        return (
            <View>
                <SafeAreaView>
                    <Titulo textColor="green">Este é o título do meu app</Titulo>
                    <Text>Olá React Native!!</Text>
                    <Text>Versão: {version}</Text>
                    <Text>Bateria: {bateryLevel}</Text>
                    <Text>Soma feita no JAVA: {sumResult}</Text>
                    <Titulo textColor="red">Este é outro título</Titulo>
                    <Text>
                        {JSON.stringify(this.props.navigation.state.params)}
                    </Text>
                    <Button onPress={this.onVoltarPress}>Voltar</Button>
                </SafeAreaView>
            </View>
        );
    }
}
