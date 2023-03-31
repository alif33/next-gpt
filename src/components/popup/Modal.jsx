import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

export default ({ actinTrigger, body }) => (
    <Popup
      trigger={actinTrigger}
      modal
      nested
      className="popup-content2"
    >
      {(close) => (
        <div className="modal-section">
          <span className="close-tag close float-end" onClick={close}>
            &times;
          </span>
          {body}
        </div>
      )}
    </Popup>
  );