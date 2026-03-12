import "./index.css";
import Header from "./Header";
import BookList from "./BookList";
import ContactCard from "./ContactCard";

function App() {
  return (
    <div
      style={{
        border: "1px solid black",
        padding: "1rem",
        marginBottom: "10px",
        backgroundColor: "#f0f0f0",
        color: "#333",
      }}
    >
      <Header title="My Favorite Books" />
      <BookList />
      <hr />
      <h2>Contact Information</h2>
      <ContactCard
        name="Sunita Kumar"
        job="Electrical Engineer"
        email="sunita.kumar@acme.co"
      />
    </div>
  );
}
export default App;
