const EditModal = ({
  editItem,
  setEditItem,
  setShowEditModal,
  handleEditBook,
}) => {
  return (
    <div className="delete-modal">
      <div className="modal-inner">
        <h5>Do you want to edit?</h5>
        <input
          value={editItem.title}
          type="text"
          className="form-control"
          onChange={(e) => setEditItem({ ...editItem, title: e.target.value })}
        />
        <div className="d-flex justify-content-center gap-2 mt-2">
          <button
            className="btn btn-warning"
            onClick={() => setShowEditModal(false)}
          >
            Cancel
          </button>
          <button className="btn btn-success" onClick={handleEditBook}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
