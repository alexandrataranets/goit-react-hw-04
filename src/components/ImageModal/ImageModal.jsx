import Modal from 'react-modal';


Modal.setAppElement('#root');

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    border: 'none',
    padding: '0',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    cursor: 'zoom-out',
  },
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
  },
};

export default function ImageModal({ isOpen, onClose, imageUrl }) {
  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} style={customStyles} contentLabel="Image Modal">
      <div onClick={onClose}>
        <img src={imageUrl} alt="Large" />
      </div>
    </Modal>
  );
}