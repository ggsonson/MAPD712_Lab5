import { StyleSheet } from 'react-native';
import { COLOR_PRIMARY, COLOR_DARK, BORDER_RADIUS, COLOR_RED, COLOR_BLUE } from './common';

export const Colors = {
    dark: COLOR_DARK,
    light: COLOR_PRIMARY,
    red: COLOR_RED,
    blue: COLOR_BLUE
};

const baseContainerStyles = {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
};

const baseBoxStyles = {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    height: 150,
    width: 150
};

const groupOne = {
    flex: 1,
    flexDirection: "row",
    justifyContent: 'space-around',
}
const groupTwo = {
    flex: 1,
    flexDirection: "row",
    justifyContent: 'space-between'
}

const lightStyleSheet = StyleSheet.create({
    container: {
        ...baseContainerStyles,
        backgroundColor: Colors.light
    },
    box: {
        ...baseBoxStyles,
        borderColor: Colors.dark
    },
    groupOne, groupTwo
});

const darkStyleSheet = StyleSheet.create({
    container: {
        ...baseContainerStyles,
        backgroundColor: Colors.dark
    },
    box: {
        ...baseBoxStyles,
        borderColor: Colors.light
    },
    groupOne, groupTwo
});

const redStyleSheet = StyleSheet.create({
    container: {
        ...baseContainerStyles,
        backgroundColor: Colors.red
    },
    box: {
        ...baseBoxStyles,
        borderColor: Colors.light
    },
    groupOne, groupTwo
});

const blueStyleSheet = StyleSheet.create({
    container: {
        ...baseContainerStyles,
        backgroundColor: Colors.blue
    },
    box: {
        ...baseBoxStyles,
        borderColor: Colors.light
    },
    groupOne, groupTwo
});

export default function getStyleSheet(theme) {
    switch (theme) {
        case 1: return darkStyleSheet;
        case 2: return lightStyleSheet;
        case 3: return redStyleSheet;
        case 4: return blueStyleSheet;
        default: return darkStyleSheet;
    }
}