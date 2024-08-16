import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors } from '../Style/Style'
import { additemtoCard } from '../Redux/Action/Action'

const Productitem = ({ item,onadditemtoCard,onaddtoWashlist }) => {
    return (
        <View style={styles.container}>
            <Image source={item.image} style={styles.Img} />
            <Text style={styles.name}>{item.name}</Text>
            <View style={styles.bottom}>
                <Text style={styles.price}>{"$" + item.price}</Text>
                <TouchableOpacity style={styles.btn}
                    onPress={() => {
                        onadditemtoCard(item);               // use for add card (redux)
                    }}
                >
                    <Text style={styles.btntxt}>Add to Card</Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity style={styles.heart}
                 onPress={() => {
                    onaddtoWashlist(item);               // use for washlist card (redux)
                }}
                >
                    <Image source={require('../assets/PNG/heart.png')} style={{ width: 24, height: 24 }} />
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default Productitem

const styles = StyleSheet.create({
    container: {
        width: 200,
        height: 200,
        borderRadius: 10,
        elevation: 20,
        backgroundColor: colors.coloe3,
        marginLeft: 20,
        marginBottom: 10
    },
    Img: {
        width: "100%",
        height: "50%",
        resizeMode: 'cover',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
    },
    name: {
        fontSize: 16,
        fontWeight: '600',
        marginLeft: 10,
        marginTop: 10,

        color: colors.color2
    },
    bottom: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 10,
        paddingRight: 10,
        marginTop: 10
    },
    price: {
        fontSize: 16,
        fontWeight: '600',
        marginLeft: 10,
        marginTop: 10,
        color: colors.color2
    },
    btn: {
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        backgroundColor: colors.color1
    },
    btntxt: {
        fontSize: 12,
        fontWeight: '700',
        color: colors.coloe3
    },
    heart: {
        width: 40,
        height: 40,
        backgroundColor: colors.coloe3,
        borderRadius: 20,
        elevation: 5,
        position: 'absolute',
        right: 10,
        bottom: 130,
        justifyContent: 'center',
        alignItems: 'center'
    }
})