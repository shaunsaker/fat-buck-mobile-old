import firestore from '@react-native-firebase/firestore';

export const getStocks = async (
  exchange: string,
  startAt: number,
  limit = 10,
) => {
  console.log(`Fetching stocks from ${exchange} starting after ${startAt}.`);
  return (
    await firestore()
      .collection('exchanges')
      .doc(exchange)
      .collection('stocks')
      .orderBy('valuation.expectedReturn', 'desc')
      .startAfter(startAt)
      .limit(limit)
      .get()
  ).docs.map((doc) => doc.data());
};
