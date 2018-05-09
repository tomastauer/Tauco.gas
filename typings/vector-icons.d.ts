declare module '@expo/vector-icons' {
    import {StyleProp, TextStyle} from "react-native";

    export interface FontProps {
        name: string,
        size?: number;
        style?: StyleProp<TextStyle>
    }

    export class FontAwesome extends React.Component<FontProps> {}
}