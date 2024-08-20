import React, { useState, useCallback } from 'react';
import { SmallButton } from './Buttons';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: 'calc(50% - 200px)',
    left: 'calc(50% - 150px)',
    width: '300px',
    height: '400px',
  },
};

const ImageUpload = ({ children, gid, color }) => {
  Modal.setAppElement('#root');

<<<<<<< HEAD
  color = color ?? 'primary';
=======
  color = color ?? 'midGreen';
>>>>>>> ae8cc0939bdab9bb11fb2850d4f4c59698611293
  const [open, setOpen] = useState(false);

  const onClick = useCallback(() => {
    setOpen((open) => !open);
  }, []);

  return (
    <>
      <SmallButton type="button" color={color} onClick={onClick}>
        {children}
      </SmallButton>
      {open && (
        <Modal isOpen={open} style={customStyles}>
<<<<<<< HEAD
          <h1>노출!</h1>
=======
          <h1>♥노출♥</h1>
>>>>>>> ae8cc0939bdab9bb11fb2850d4f4c59698611293
          <button type="button" onClick={() => setOpen(false)}>
            닫기
          </button>
        </Modal>
      )}
    </>
  );
};

export default React.memo(ImageUpload);
