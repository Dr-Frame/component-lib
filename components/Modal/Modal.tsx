import s from './Modal.module.scss';
import classNames from 'classnames/bind';
import Portal from '../Portal';
import { useEffect } from 'react';
import IconButton from '../IconButton';
import { GrClose } from 'react-icons/gr';

const cx = classNames.bind(s);

interface ModalProps {
  active: boolean;
  setActive(e: boolean): void;
  onClose?(): void;
  children: React.ReactChild | React.ReactNode;
}

function Modal({ active, setActive, onClose, children }: ModalProps) {
  //close modal on ESC
  useEffect(() => {
    function close(this: Window, e: KeyboardEvent) {
      if (e.key === 'Escape') {
        setActive(false);
        onClose ? onClose() : null;
      }
    }
    window.addEventListener('keydown', close);
    return () => {
      window.removeEventListener('keydown', close);
    };
  }, []);

  //prevent scrolling behind modal
  useEffect(() => {
    if (active) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [active]);

  return (
    <Portal>
      <div
        className={cx(s.backdrop, {
          active,
        })}
        onClick={() => {
          setActive(false);
          onClose ? onClose() : null;
        }}
      >
        <div
          className={cx(s.modalContent, {
            active,
          })}
          onClick={e => e.stopPropagation()}
        >
          <IconButton
            size="small"
            theme="transparent"
            onClick={() => {
              setActive(false);
              onClose ? onClose() : null;
            }}
            extraClass={s.icon}
          >
            <GrClose fontSize={16} />
          </IconButton>
          {children}
        </div>
      </div>
    </Portal>
  );
}

export default Modal;
