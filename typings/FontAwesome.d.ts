declare module 'react-native-fontawesome' {
    import React from "react";
    import {TextProps} from "react-native";
    export { default as Icons } from "react-native-fontawesome/FontAwesomeIcons";
    const Icon: React.ComponentClass<TextProps>;
    export default Icon;
}