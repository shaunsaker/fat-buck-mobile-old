import RNSnackbar from 'react-native-snackbar';
import { colors } from '../colors';

export const Snackbar = {
  show: (text: string) => {
    RNSnackbar.show({
      textColor: colors.white,
      backgroundColor: colors.black,
      fontFamily: 'Recursive-Bold',
      duration: 4000,
      text,
    });

    return null;
  },
};
