import React, { useEffect } from 'react';
import '../styles/Modal.css';
import { createPortal } from 'react-dom';

const menuWrapper = document.getElementById('menu');

export default function Modal({ children, type, onClose }) {
    const modalClass = type === 'SideMenu' ? 'SideMenu__wrapper' : 'Modal__wrapper'
    useEffect(() => {
        const handleEsc = (event) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };
        document.addEventListener('keydown', handleEsc);
        return () => {
            document.removeEventListener('keydown', handleEsc);
        };
    }, [onClose]);
    return createPortal(
        <div className={modalClass}>{children}</div>,
        menuWrapper
    );
}
