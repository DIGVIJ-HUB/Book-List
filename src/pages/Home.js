import BookList from "../components/BookList";
import BookForm from "../components/BookForm";
import { useCollection } from "../hooks/useCollection";

export default function Home() {
  const { doc: books } = useCollection("book");
  return (
    <div className="App">
      {books && <BookList books={books} />}
      <BookForm />
    </div>
  );
}
