import * as React from 'react';
import {
    DatePickerIOS,
    DatePickerIOSComponent,
    Modal,
    StyleSheet,
    Text, TextInput,
    TouchableHighlight,
    TouchableWithoutFeedback,
    View
} from 'react-native';
import {FontAwesome} from '@expo/vector-icons';
import {Button} from "./Button";
import {Input, InputProps} from "./Input";
import {decimalFormatter, decimalNumberFormatter, decimalParser} from "../formatters";

// @ts-ignore
interface DecimalInputProps extends InputProps {
    onChange: (newValue: number) => void;
    value: number;
}

interface DecimalInputState {
    value: number;
}

export default class DecimalInput extends React.Component<DecimalInputProps, DecimalInputState> {
    state = {
        value: 0
    };

    static getDerivedStateFromProps(nextProps: InputProps) {
        if (nextProps.value) {
            return {
                value: nextProps.value
            };
        }
        return null;
    }

    onChange = (e: string) => {
        this.props.onChange(decimalParser(e));
    };

    getStringValue = () => {
        return decimalNumberFormatter(this.state.value);
    };

    render() {
        return (
            <View>
                <Input {...this.props} keyboardType="decimal-pad" textInputStyle={styles.textInput} value={this.getStringValue()} onChange={this.onChange} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    textInput: {
        textAlign: 'right'
    }
});
