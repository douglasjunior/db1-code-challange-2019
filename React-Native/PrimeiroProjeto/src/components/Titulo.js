import React from 'react';
import { Text } from 'react-native';

const Titulo = ({ textColor, children }) => {
    const style = {
        color: textColor,
        backgroundColor: 'yellow'
    };
    return (
        <Text style={style}>{children}</Text>
    );
};

export default Titulo;
