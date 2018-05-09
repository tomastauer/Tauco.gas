import * as React from "react";

import {StyleSheet, Text, TouchableWithoutFeedback, View} from "react-native";
import {Colors, getBackgroundColor, getBackgroundColorActive, getForegroundColor} from "../colors";

interface ButtonProps {
    onPress: () => void;
    disabled?: boolean;
    color?: Colors,
    allowFontScaling?: boolean;
}

interface ButtonState {
    isActive: boolean;
}

export class Button extends React.Component<ButtonProps> {
    static defaultProps: Partial<ButtonProps> = {
        color: Colors.primary,
        allowFontScaling: true
    };

    state = {
        isActive: false
    };

    onPressIn = () => {
        this.setState({
            isActive: true
        })
    };

    onPressOut = () => {
        this.setState({
            isActive: false
        })
    };

    _renderGroupedChildren() {
        const children = this.getCoalescedChildren();

        if (Array.isArray(children)) {
            switch (children.length) {
                case 0:
                    return null;
                case 1:
                default:
                    return <View style={styles.group}>{children}</View>;
            }
        } else {
            return children;
        }
    }

    getCoalescedChildren = () => {
        const {children} = this.props;

        if (Array.isArray(children)) {
            return children.map((child, index) => (
                <Text key={index} style={this.getTextStyle()} allowFontScaling={this.props.allowFontScaling}>
                    {child}
                </Text>
            ));
        }
        return <Text style={this.getTextStyle()} allowFontScaling={this.props.allowFontScaling}>
            {children}
        </Text>
    };

    getContainerStyle = () => {
        console.log(this.props.color);
        const result = [styles.container, { backgroundColor: getBackgroundColor(this.props.color!)}];
        if (this.state.isActive) {
            result.push({ backgroundColor: getBackgroundColorActive(this.props.color!) });
        }

        return result
    };

    getTextStyle = () => [styles.text, { color: getForegroundColor(this.props.color!)}];

    render() {
        return (
            <TouchableWithoutFeedback
                accessibilityTraits="button"
                onPressIn={this.onPressIn}
                onPressOut={this.onPressOut}
                onPress={this.props.onPress}
                accessibilityComponentType="button"
            >
                <View style={styles.background}>
                    <View style={this.getContainerStyle()}>
                        {this._renderGroupedChildren()}
                    </View>
                </View>
            </TouchableWithoutFeedback>


        )
    }
}

const styles = StyleSheet.create({
    background: {
        marginVertical: 8,
        backgroundColor: '#000',
        borderRadius: 5,
    },
    container: {
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 5,
        textAlign: 'center',
    },
    group: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        marginHorizontal: 3,
        fontSize: 17,
    },
});


