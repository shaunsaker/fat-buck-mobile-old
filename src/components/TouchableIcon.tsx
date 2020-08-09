import React from 'react';
import { Touchable } from './Touchable';
import { TouchableOpacityProperties } from 'react-native';

export const TouchableIcon = (props: TouchableOpacityProperties) => {
  return (
    <Touchable
      {...props}
      hitSlop={{ top: 20, right: 20, bottom: 20, left: 20 }}
    />
  );
};
