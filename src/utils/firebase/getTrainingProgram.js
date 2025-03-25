// src/utils/firebase/getTrainingProgram.js
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

export const fetchTrainingProgram = async () => {
  try {
    const weeksRef = collection(db, "trainingPrograms", "default", "weeks");
    const querySnapshot = await getDocs(weeksRef);

    const weeks = {};
    querySnapshot.forEach((doc) => {
      weeks[doc.id] = doc.data();
    });

    // console.log("✅ Fetched weeks:", weeks);
    return weeks;
  } catch (error) {
    console.error("Error fetching training program:", error);
    return {};
  }
};
