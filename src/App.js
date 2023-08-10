import { v4 } from "uuid";
import { useState } from "react";
import BookCard from "./components/BookCard";
import DeleteModal from "./components/DeleteModal";
import EditModal from "./components/EditModal";
import { ToastContainer, toast } from "react-toastify";

function App() {
  // book state
  const [books, setBooks] = useState([]);
  const [bookName, setBookName] = useState("");
  const [inputError, setInputError] = useState(false);
  // modal state
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editItem, setEditItem] = useState(null);


  // input=>handleChange
  const handleChange = (e) => {
    setBookName(e.target.value);
  };
  // form=> handleSubmit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!bookName) {
      toast.warn("Please write a bookname...");
      return;
    }

    const newBook = {
      id: v4(),
      title: bookName,
      date: new Date().toLocaleString(),
      isRead: false,
    };
    setBooks([...books, newBook]);
    setBookName("");

    toast.success("Book has been added..");
  };

  const handleModal = (id) => {
    setDeleteId(id);
    setShowDeleteModal(true);
  };

  const handleDelete = () => {
    const filtred = books.filter((book) => book.id !== deleteId);
    setBooks(filtred);
    setShowDeleteModal(false);

    toast.error("Book has been removed...");
  };

  const handleRead = (book) => {
    const updatedBook = { ...book, isRead: !book.isRead };
    const index = books.findIndex((item) => item.id === book.id);

    const cloneBooks = [...books];
    cloneBooks[index] = updatedBook;
    setBooks(cloneBooks);
  };

  const handleEditModal = (book) => {
    setEditItem(book);
    setShowEditModal(true);
  };

  const handleEditBook = () => {
    const index = books.findIndex((book) => book.id === editItem.id);

    const cloneBooks = [...books];
    cloneBooks.splice(index, 1, editItem);

    // edit state
    setBooks(cloneBooks);
    // close modal
    setShowEditModal(false);

    toast.success("Book has been updated...");
  };

  return (
    <div>
      <header className="navvbar py-3 fs-5 text-center">
        <h1>Bookworm :D</h1>
      </header>
      {/* form */}
      <div className="container">
        {inputError && (
          <div className="alert alert-danger mt-4">{inputError}</div>
        )}

        <form className="d-flex gap-3 mt-4 " onSubmit={handleSubmit}>
          <input
            placeholder="please write a bookname..."
            onChange={handleChange}
            value={bookName}
            className="form-control shadow"
            type="search"
          />
          <button className="btn btn-warning">Add</button>
        </form>
        {books.length === 0 && <h4>No book has been added yet!!</h4>}
        {books.map((book) => (
          <BookCard
            key={book.id}
            book={book}
            handleModal={handleModal}
            handleRead={handleRead}
            handleEditModal={handleEditModal}
            handleEditBook={handleEditBook}
          />
        ))}
      </div>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      
      {/* modals */}
      {showDeleteModal && (
        <DeleteModal
          handleDelete={handleDelete}
          setShowDeleteModal={setShowDeleteModal}
        />
      )}
      {showEditModal && (
        <EditModal
          editItem={editItem}
          setEditItem={setEditItem}
          setShowEditModal={setShowEditModal}
          handleEditBook={handleEditBook}
        />
      )}
      ;
    </div>
  );
}
export default App;
