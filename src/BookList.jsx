import Book from "./Book";

function BookList() {
  return (
    <ul>
      <Book title="The Republic" author="Plato" />
      <Book title="Meditations" author="Marcus Aurelius" />
      <Book title="Beyond Good and Evil" author="Friedrich Nietzsche" />
    </ul>
  );
}
export default BookList;
