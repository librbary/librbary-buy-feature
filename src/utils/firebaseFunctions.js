import {
  collection,
  doc,
  getDocs,
  orderBy,
  query,
  setDoc,
} from "firebase/firestore";
import { firestore } from "../firebase.config";

// Saving new Item
export const saveItem = async (data) => {
  await setDoc(doc(firestore, "newArrivals", `${Date.now()}`), data, {
    merge: true,
  });
};

// getall new arrivals
export const getAllNewArrivals = async () => {
  const items = await getDocs(
    query(collection(firestore, "newArrivals"), orderBy("id", "desc"))
  );

  return items.docs.map((doc) => doc.data());
};
