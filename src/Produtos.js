import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    ScrollView,
} from 'react-native';
import Eldritch from '../assets/eldritch.jpeg';
import Elder from '../assets/elder.jpeg';
import Mansions from '../assets/mansions.jpeg';
import Zombi from '../assets/zombicide.jpeg';


export default class Login extends React.Component {

    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Produtos',
        };
    };

    render() {
        return (
            <ScrollView>
                <Text style={{ fontSize: 25, marginTop: 20, textAlign: 'center' }}>
                    Jogos Cooperativos
                </Text>
                <View style={{ alignItems: 'center' }}>
                    <Image source={Eldritch} style={styles.jogos}></Image>
                    <Text style={styles.titulo}>
                        Eldritch Horror
                    </Text>
                    <Text style={styles.preco}>
                        R$ 350,00
                    </Text>

                    <Image source={Mansions} style={styles.jogos}></Image>
                    <Text style={styles.titulo}>
                        Mansions of Madness
                    </Text>
                    <Text style={styles.preco}>
                        R$ 360,00
                    </Text>

                    <Image source={Elder} style={styles.jogos}></Image>
                    <Text style={styles.titulo}>
                        Elder Sign
                    </Text>
                    <Text style={styles.preco}>
                        R$ 200,00
                    </Text>

                    <Image source={Zombi} style={styles.jogos}></Image>
                    <Text style={styles.titulo}>
                        Zombicide Season 1
                    </Text>
                    <Text style={styles.preco}>
                        R$ 450,00
                    </Text>
                </View>
            </ScrollView>
        );
    };
};

const styles = StyleSheet.create({
    jogos: {
        width: 200,
        height: 200,
        marginTop: 50,
    },

    titulo: {
        fontSize: 25,
        fontWeight: 'bold',
    },

    preco: {
        fontSize: 35,
        color: 'green',
        textShadowRadius: 3,
        textShadowColor: 'red',
        marginBottom: 60,
    }
}) 