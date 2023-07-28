import React, { useEffect } from "react";
import "../styles/SideMenu.css";
import { createPortal } from "react-dom";
import NavBar from "./NavBar";

const menuWrapper = document.getElementById("menu");

export default function SideMenu({ children, onClose }) {
    useEffect(() => {
        const handleEsc = (event) => {
            if (event.key === "Escape") {
                onClose();
            }
        };
        document.addEventListener("keydown", handleEsc);
        return () => {
            document.removeEventListener("keydown", handleEsc);
        };
    }, [onClose]);
    return createPortal(
        <div className='SideMenu__wrapper'>
            <NavBar />
        </div>,
        menuWrapper
    );
}
