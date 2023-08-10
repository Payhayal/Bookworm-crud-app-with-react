const BookCard = ({ book, handleModal, handleRead, handleEditModal }) => {
  return (
    <div className="books d-flex border rounded shadow justify-content-between align-items-center mt-5">
      <div>
        <h5
          style={{
            textDecoration: book.isRead ? "line-through" : "none",
          }}
        >
          {book.title}
        </h5>
        <p>{book.date}</p>
      </div>
      <div className="btn-group gap-2">
        <button className="btn btn-danger" onClick={() => handleModal(book.id)}>
          Delete
        </button>
        <button
          className="btn btn-primary"
          onClick={() => handleEditModal(book)}
        >
          Edit
        </button>

        <button
          className="btn btn-success"
          onClick={() => handleRead(book)}
          style={{ backgroundColor: book.isRead ? "green" : "orange" }}
        >
          {" "}
          {book.isRead ? "Done" : "Read"}
        </button>
      </div>
    </div>
  );
};

export default BookCard;
