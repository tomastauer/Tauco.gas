import {StyleSheet} from "react-native";

interface ColorDefinition {
    backgroundHex: string;
    foregroundHex: string;
    backgroundRGB: number[];
}

const buttonColors: { [key: string]: ColorDefinition } = {
    primary: {
        backgroundHex: '#007bff',
        foregroundHex: '#fff',
        backgroundRGB: [0, 105, 217]
    },
    secondary: {
        backgroundHex: '#6c757d',
        foregroundHex: '#fff',
        backgroundRGB: [108, 117, 125]
    },
    success: {
        backgroundHex: '#28a745',
        foregroundHex: '#fff',
        backgroundRGB: [40, 167, 69]
    },
    danger: {
        backgroundHex: '#dc3545',
        foregroundHex: '#fff',
        backgroundRGB: [220, 53, 69]
    },
    warning: {
        backgroundHex: '#ffc107',
        foregroundHex: '#000',
        backgroundRGB: [255, 193, 7]
    },
    info: {
        backgroundHex: '#17a2b8',
        foregroundHex: '#fff',
        backgroundRGB: [23, 162, 184]
    },
    light:{
        backgroundHex: '#f8f9fa',
        foregroundHex: '#000',
        backgroundRGB: [248, 249, 250]
    },
    dark: {
        backgroundHex: '#343a40',
        foregroundHex: '#fff',
        backgroundRGB: [52, 58, 64]
    }
};

export const enum Colors {
    primary = 'primary',
    secondary = 'secondary',
    success = 'success',
    danger = 'danger',
    warning = 'warning',
    light = 'light',
    dark = 'dark'
}

export const getBackgroundColor = (color: Colors) => buttonColors[color].backgroundHex;
export const getForegroundColor = (color: Colors) => buttonColors[color].foregroundHex;
export const getBackgroundColorActive = (color: Colors) => `rgba(${buttonColors[color].backgroundRGB.join(',')}, 0.85)`;
export const getShadowColor = (color: Colors) => `rgba(${buttonColors[color].backgroundRGB.join(',')}, 0.5)`;

