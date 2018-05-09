
declare module 'react-native-datepicker'
{
    export interface DatePickerProps {
        date: Date,
        mode?: 'date' | 'datetime' | 'time',
        format?: string,
        confirmBtnText?: string,
        cancelBtnText?: string
    }

    export default class DatePicker extends React.Component<DatePickerProps> {

    }
}

declare module 'react-native-button'
{
    import {TouchableOpacityProps} from "react-native";
    import {StyleProp, TextStyle, ViewStyle} from "react-native";

    export interface ButtonProps extends TouchableOpacityProps {
        accessibilityLabel?: string,
        allowFontScaling?: boolean,
        containerStyle?: StyleProp<ViewStyle>,
        disabledContainerStyle?: StyleProp<ViewStyle>,
        disabled?: boolean,
        style?: StyleProp<TextStyle>,
        styleDisabled?: StyleProp<TextStyle>,
        childGroupStyle?: StyleProp<ViewStyle>,
    }

    export default class Button extends React.Component<ButtonProps> {}
}
