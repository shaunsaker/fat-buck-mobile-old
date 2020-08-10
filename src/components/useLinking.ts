import { useCallback } from 'react';
import { Linking } from 'react-native';
import { Snackbar } from './Snackbar';

export const useLinking = () => {
  const openLink = useCallback(async (url) => {
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      Snackbar.show(`Don't know how to open this URL: ${url}`);
    }
  }, []);

  return {
    openLink,
  };
};
