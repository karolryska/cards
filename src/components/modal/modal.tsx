import { ReactNode } from 'react';
import ReactModal from 'react-modal';

type ModalProps = {
    children: ReactNode;
    closeOnClickOutside: boolean;
    isOpen: boolean;
    onClose: () => void;
    title: string;
};

export const Modal = ({ children, closeOnClickOutside, isOpen, onClose, title }: ModalProps) => {
    return (
        <ReactModal
            className="Modal"
            isOpen={isOpen}
            onRequestClose={onClose}
            overlayClassName="Overlay"
            shouldCloseOnOverlayClick={closeOnClickOutside || false}
        >
            <h2 className="title">{title}</h2>

            {children}
        </ReactModal>
    );
};
