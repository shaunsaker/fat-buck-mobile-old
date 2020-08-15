import firestore from '@react-native-firebase/firestore';
import { Exchange } from './models';
import { objectArrayToObject } from '../utils/objectArrayToObject';

export const getExchanges = async () => {
  const exchangesArray = (await (
    await firestore().collection('exchanges').get()
  ).docs.map((doc) => doc.data())) as Exchange[];

  return objectArrayToObject(exchangesArray);
};
