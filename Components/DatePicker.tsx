import * as React from 'react';
import {
    DatePickerIOS,
    Modal,
    StyleSheet,
    TouchableWithoutFeedback,
    View
} from 'react-native';
import {FontAwesome} from '@expo/vector-icons';
import {Button} from "./Button";
import {Input} from "./Input";
import {Colors} from "../colors";

interface DatePickerProps {
    label: string;
    onChange: (e: Date) => void;
    defaultValue?: Date;
}

interface DatePickerState {
    selectedDate: Date;
    modalVisible: boolean;
    value: string;
}

export default class DatePicker extends React.Component<DatePickerProps, DatePickerState> {

    constructor(props: DatePickerProps) {
        super(props);

        if(this.props.defaultValue) {
            this.state.selectedDate = this.props.defaultValue;
            this.state.value = this.props.defaultValue.toLocaleDateString();
        }
    }

    state = {
        modalVisible: false,
        selectedDate: new Date(),
        value: ''
    };

    showModal = () => {
        this.setState({
            modalVisible: true
        });
    };

    hideModal = () => {
        this.setState({
            modalVisible: false
        });
    };

    setDate = (e: Date) => {
        this.setState({
            selectedDate: e
        });
        this.props.onChange(e);
    };

    setValue = (e: Date) => {
        this.setState({
            value: e.toLocaleDateString()
        });
    };

    onDone = () => {
        this.hideModal();
        this.setValue(this.state.selectedDate);
    };

    render() {
        return (
            <View>
                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        alert('Modal has been closed.');
                    }}>
                    <TouchableWithoutFeedback onPress={this.hideModal}>
                        <View style={styles.modal}>
                            <View style={styles.overlay}/>
                            <View style={styles.content}>
                                <View style={styles.row}>
                                    <Button color={Colors.success} onPress={this.onDone}>
                                        <FontAwesome name="calendar-check-o" size={20}/>Done
                                    </Button>
                                </View>

                                <DatePickerIOS
                                    date={this.state.selectedDate}
                                    onDateChange={this.setDate}
                                    mode="date"
                                />
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                </Modal>

                <Input onFocus={this.showModal} editable={false} value={this.state.value} label={this.props.label} appendContent={<FontAwesome name="calendar" size={20} />} />
            </View>
        );
    }
}


const styles = StyleSheet.create({
    modal: {
        flex: 1,
    },
    overlay: {
        flex: 1,
        backgroundColor: 'black',
        opacity: 0.5
    },
    content: {
        height: 280,
        backgroundColor: 'white',
    },
    row: {
        flexDirection: 'row',
        paddingLeft: 8
    },
});