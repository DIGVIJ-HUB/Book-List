import { useState } from "react";

import { db } from "../firebase/config";
import { collection, addDoc } from "firebase/firestore";

export default function BookForm() {
  const [newBook, setNewBook] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    await addDoc(collection(db, "book"), {
      title: newBook,
    });

    setNewBook("");
    alert("New book added");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <span>Add a new book title:</span>
        <input
          required
          type="text"
          onChange={(e) => setNewBook(e.target.value)}
          value={newBook}
        />
      </label>
      <button>Add</button>
    </form>
  );
}
