import { db } from "../firebase/config";
import { useEffect, useState } from "react";

import { collection, onSnapshot } from "firebase/firestore";

export const useCollection = (c) => {
  const [doc, setDoc] = useState(null);

  useEffect(() => {
    let ref = collection(db, c);

    const dig = onSnapshot(ref, (snapshot) => {
      let results = [];
      snapshot.docs.forEach((doc) => {
        results.push({ id: doc.id, ...doc.data() });
      });
      setDoc(results);
    });

    return () => dig();
  }, [c]);

  return { doc };
};
