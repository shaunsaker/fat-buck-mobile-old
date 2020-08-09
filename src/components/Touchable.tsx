import React from 'react';
import { TouchableOpacityProperties, TouchableOpacity } from 'react-native';

export const Touchable = (props: TouchableOpacityProperties) => {
  return <TouchableOpacity {...props} activeOpacity={0.67} />;
};
