import firestore from '@react-native-firebase/firestore';
import { Instructions } from '../instructions/models';

export const getStocks = async (
  exchange: string,
  instruction: Instructions,
  startAt: number,
  limit = 10,
) => {
  console.log(`Fetching stocks from ${exchange} starting after ${startAt}.`);
  return (
    await firestore()
      .collection('exchanges')
      .doc(exchange)
      .collection('stocks')
      .where('valuation.instruction', '==', instruction)
      .orderBy('valuation.expectedReturn', 'desc')
      .startAfter(startAt)
      .limit(limit)
      .get()
  ).docs.map((doc) => doc.data());
};
