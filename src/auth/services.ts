import auth from '@react-native-firebase/auth';

export const createUserWithEmailAndPassword = async (
  email: string,
  password: string,
) => {
  return await auth().createUserWithEmailAndPassword(email, password);
};

export const signInWithEmailAndPassword = async (
  email: string,
  password: string,
) => {
  return await auth().signInWithEmailAndPassword(email, password);
};

export const signUserOut = async () => {
  return await auth().signOut();
};
