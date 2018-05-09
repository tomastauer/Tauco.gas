
import * as React from 'react';
import {
    StyleSheet,
    View,
    StatusBar,
    Platform} from 'react-native';
import DatePicker from "./Components/DatePicker";
import DecimalInput from "./Components/DecimalInput";
import {Button} from "./Components/Button";
import {FontAwesome} from "@expo/vector-icons";


interface DarkThemeProps {

}

interface DarkThemeState {
    value: string;
    totalPrice: number;
    pricePerLitre: number;
    amount: number;
}
console.disableYellowBox = true;
export default class DarkTheme extends React.Component<DarkThemeProps, DarkThemeState> {
    onPressLearnMore = () => {};

    state = {
        value: 'foog',
        totalPrice: 0,
        pricePerLitre: 0,
        amount: 0
    };

    onDateChange = () => {

    };

    onPriceChange = (e: number) => {
        this.setState({
            totalPrice: e
        }, () => {
            this.updatePrice();
        });
    };

    onAmountChange = (e: number) => {
        this.setState({
            amount: e
        }, () => {
            this.updatePrice();
        });
    };

    onGasPriceChange = (e: number) => {
        this.setState({
            pricePerLitre: e
        }, () => {
            this.updatePrice();
        });
    };

    updatePrice = () => {
        const { totalPrice, pricePerLitre, amount } = this.state;
        console.log(totalPrice, pricePerLitre, amount);
        if(totalPrice && amount) {
            this.setState({
                pricePerLitre: totalPrice / amount
            });
            return;
        }

        if(totalPrice && pricePerLitre) {
            this.setState({
                amount: totalPrice / pricePerLitre
            });
            return;
        }

        if(amount && pricePerLitre) {
            this.setState({
                totalPrice: amount * pricePerLitre
            });
            return;
        }

    }

    render() {
        return (
            <View style={styles.container}>
                <DatePicker label="Tank date" onChange={this.onDateChange} defaultValue={new Date()} />
                <DecimalInput label="Total price" appendContent="Kč" onChange={this.onPriceChange} value={this.state.totalPrice} />
                <DecimalInput label="Amount" appendContent="l" onChange={this.onAmountChange} value={this.state.amount} />
                <DecimalInput label="Price per litre" appendContent="Kč/l" onChange={this.onGasPriceChange} value={this.state.pricePerLitre} />
                <Button onPress={() => {}}><FontAwesome name="save" size={20}/>Save</Button>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        marginTop: 22,
    },
    statusBar: {
        height: 20,
    },
    content: {
        flex: 1,
        backgroundColor: 'white',
    },
    textAlignRight: {
        textAlign: 'right'
    }
});