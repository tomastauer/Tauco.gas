import * as React from 'react';
import {
    KeyboardTypeOptions, StyleProp,
    StyleSheet,
    Text,
    TextInput,
    TextInputProps, TextStyle,
    TouchableWithoutFeedback,
    View
} from "react-native";
import {Colors} from "../colors";

export interface InputProps {
    onFocus?: () => void;
    label: string,
    editable?: boolean,
    appendContent?: React.ReactNode,
    value: string,
    keyboardType?: KeyboardTypeOptions
    textInputStyle?: StyleProp<TextStyle>,
    valueFormatter?: (e: string) => string,
    onChange?: (e: string) => void;
}

interface InputState {
    value: string;
}

export class Input extends React.Component<InputProps, InputState> {
    state = {
        value: ''
    };

    static getDerivedStateFromProps(nextProps: InputProps) {
        if (nextProps.value) {
            return {
                value: nextProps.value.toLocaleString()
            };
        }
        return null;
    }

    static defaultProps: Partial<InputProps> = {
        editable: true,
        keyboardType: 'default'
    };

    onChange = (newValue: string) => {
        let value = newValue;

        if(this.props.valueFormatter) {
            console.log(value);
            value = this.props.valueFormatter(value);
            console.log(value);
        }

        this.setState({
            value
        });

        if(this.props.onChange) {
            this.props.onChange(value);
        }
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={[styles.text, styles.label]}>{this.props.label}</Text>
                <TouchableWithoutFeedback onPress={this.props.onFocus}>
                    <View style={styles.inputGroup}>
                        {!this.props.editable ?
                            <Text style={[styles.text, styles.inputGroupText, this.props.textInputStyle]}>{this.state.value}</Text> :
                            <TextInput style={[styles.text, styles.inputGroupText, this.props.textInputStyle]} onChangeText={this.onChange} keyboardType={this.props.keyboardType!} returnKeyType="done"
                                       value={this.state.value}/>
                        }
                        {this.props.appendContent &&
                        <Text style={[styles.text, styles.inputGroupText, styles.inputGroupAppend]}>{this.props.appendContent}</Text>}
                    </View>
                </TouchableWithoutFeedback>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        marginVertical: 10
    },
    text: {
        color: '#495057',
        fontSize: 17
    },
    label: {
        marginBottom: 12,
    },
    inputGroup: {
        borderRadius: 5,
        borderColor: '#ced4da',
        borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    inputGroupText: {
        paddingHorizontal: 12,
        paddingVertical: 12,
        flex: 1,
    },
    inputGroupAppend: {
        backgroundColor: '#e9ecef',
        flex: 0
    },
});