
import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'

export default class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            status: 0,
            optionsYou: '',
            optionsComp: ''
        }
    }
    chooseOptions(option) {
        let optionsComps = ['Rock', 'Paper', 'Scissors']
        let random = Math.abs(parseInt(Math.random() * 5) - 2)
        let optionsComp = optionsComps[random]
        this.setState({ optionsYou: option, optionsComp })
        if(option ==  optionsComp){
            this.setState({status: 0})
        } else if ((option == 'Rock' && optionsComp == 'Scissors') 
        || (option == 'Paper' && optionsComp == 'Rock')
        || (option = 'Scissors' && optionsComp == 'Paper')) {
            this.setState({status: 1})
        } else {
            this.setState({status: 2})
        }
    }
    render() {
        const { status, optionsYou, optionsComp } = this.state
        return (
            <View style={style.container}>
                <Message status={status} />
                <Screen optionsYou={optionsYou} optionsComp={optionsComp} />
                {/* <Controller /> */}
                <View style={style.controller}>
                    <TouchableOpacity
                        onPress={() => this.chooseOptions('Rock')}
                        style={style.options}>
                        <Text style={style.textOptions}>Rock</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this.chooseOptions('Paper')}
                        style={style.options}>
                        <Text style={style.textOptions}>Paper</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this.chooseOptions('Scissors')}
                        style={style.options}>
                        <Text style={style.textOptions}>Scissors</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const Message = (props) => {
    const status = Number(props.status)
    if (status === 0) {
        return (
            <View style={style.header}>
                <Text style={{
                    fontSize: 30,
                    color: 'black',
                    fontWeight: 'bold'
                }}>Tie game</Text>
            </View>
        )
    }
    if (status === 1) {
        return (
            <View style={style.header}>
                <Text style={{
                    fontSize: 30,
                    color: 'green',
                    fontWeight: 'bold'
                }}>Victory!</Text>
            </View>
        )
    }
    if (status === 2) {
        return (
            <View style={style.header}>
                <Text style={{
                    fontSize: 30,
                    color: 'red',
                    fontWeight: 'bold'
                }}>Defeat</Text>
            </View>
        )
    }

}
const Screen = (props) => {
    const { optionsYou, optionsComp } = props
    return (
        <View style={style.screen}>
            <Player
                name='You'
                options={optionsYou}
            />
            <Text>vs</Text>
            <Player
                name='Comp'
                options={optionsComp}
            />
        </View>
    )
}
const Player = (props) => {
    const { name, options } = props
    let image
    switch (options) {
        case 'Rock':
            image = 'http://outdoordesignbylucas.files.wordpress.com/2011/01/1-10-11-charcter-rocks.jpg'
            break;
        case 'Paper':
            image = 'https://www.featurepics.com//StockImage/20070702/clipped-papers-stock-picture-369653.jpg'
            break;
        case 'Scissors':
            image = 'https://images-na.ssl-images-amazon.com/images/I/51DmBkUkofL._UY395_.jpg'
            break;
        default:
            image = null
            break;
    }
    return (
        <View style={style.player}>
            <Text
                style={{
                    color: 'black',
                    fontWeight: 'bold',
                    fontSize: 20
                }}
            >{name}</Text>
            <Image
                style={{
                    width: 100,
                    height: 100
                }}
                source={{ uri: image }}
            />
            <Text>{options}</Text>
        </View>
    )
}
const Controller = (props) => {
    return (
        <View style={style.controller}>
            <TouchableOpacity
                onPress={() => this.setState({ optionsYou: 'Rock' })}
                style={style.options}>
                <Text style={style.textOptions}>Rock</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => this.setState({ optionsYou: 'Paper' })}
                style={style.options}>
                <Text style={style.textOptions}>Paper</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => this.setState({ optionsYou: 'Scissors' })}
                style={style.options}>
                <Text style={style.textOptions}>Scissors</Text>
            </TouchableOpacity>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#D8D8D8'
    },
    header: {
        flex: 0.1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    screen: {
        flex: 0.5,
        borderWidth: 10,
        borderColor: '#d6d7da',
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    controller: {
        flex: 0.4,
        justifyContent: 'center',
        alignItems: 'center'
    },
    options: {
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: 20,
        borderRadius: 10,
        width: 100,
        height: 30,
        backgroundColor: '#610B0B'
    },
    textOptions: {
        color: 'white',
        fontWeight: 'bold'
    },
    player: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
})

// export default TieGame;