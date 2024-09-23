
import { initializeApp } from "@firebase/app";
import { getAuth } from "@firebase/auth";
import { getFunctions } from "@firebase/functions";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCLIjetLAJ_ApQIIwmVByTdVcgx7sSZV1o",
  authDomain: "saturday-hack-night.firebaseapp.com",
  projectId: "saturday-hack-night",
  storageBucket: "saturday-hack-night.appspot.com",
  messagingSenderId: "645219994222",
  appId: "1:645219994222:web:3cfb8d679435ee7027747f",
  measurementId: "G-Q3ZZY8KWKX",
};

// Initializing Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const functions = getFunctions(app);

export async function getCollege(search) {
  try {
    const res = await fetch(`/api/college?search=${search}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return await res.json();
  } catch (error) {
    console.error("Error fetching colleges from Typesense:", error);
    return [];
  }
}
