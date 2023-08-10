const DeleteModal = ({handleDelete, setShowDeleteModal}) => {
  return (
    <div className="delete-modal">
        <div className="modal-inner shadow">
            <h5>Are you sure you want to delete?</h5>
            <div className="d-flex justify-content-center gap-2 mt-2">
            <button className="btn btn-warning" onClick={() => setShowDeleteModal(false)}>Cancel</button>
            <button className="btn btn-danger" onClick={handleDelete}>Remove</button>
            </div>
        </div>
    </div>
  )
}

export default DeleteModal