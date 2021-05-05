/* eslint-disable @typescript-eslint/no-implicit-any-catch */
import AsyncStorage from "@react-native-async-storage/async-storage";

export const getStringValue = async (storageKey: string) => {
  try {
    return await AsyncStorage.getItem(storageKey);
  } catch (error) {
    console.error(error);
  }
};

export const getObjectValue = async (storageKey: string) => {
  try {
    const jsonValue = await AsyncStorage.getItem(storageKey);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return jsonValue !== null ? JSON.parse(jsonValue) : null;
  } catch (error) {
    console.error(error);
  }
};

export const storeStringValue = async (storageKey: string, value: string) => {
  try {
    await AsyncStorage.setItem(storageKey, value);
  } catch (error) {
    console.error(error);
  }
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const storeObjectValue = async (storageKey: string, value: any) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(storageKey, jsonValue);
  } catch (error) {
    console.error(error);
  }
};