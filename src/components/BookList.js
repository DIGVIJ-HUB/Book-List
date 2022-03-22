import { db } from "../firebase/config";
import { doc, deleteDoc } from "firebase/firestore";

export default function BookList({ books }) {
  const handleClick = async (id) => {
    const ref = doc(db, "book", id);

    await deleteDoc(ref);
    alert("Book Deleted");
  };

  return (
    <div className="book-list">
      <ul>
        {books.map((book) => (
          <li key={book.id} onClick={() => handleClick(book.id)}>
            {book.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
