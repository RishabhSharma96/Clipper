import React from 'react'
import { signOut } from "firebase/auth";
import { motion } from 'framer-motion';
import { auth } from "../firebase/firebase";
export default function LogOutModal({ setModalOpen }) {


    const logout = async () => {
        await signOut(auth);
        setModalOpen(false);
    };

    const closeModal = (

    ) => {
        setModalOpen(false);

    }
    return (
        <>
            <motion.div className="logOutModal"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                // exit={{ right: 2000 }}
                transition={{ duration: 1, delay: 0.2 }}

            >
                <p>

                    Are you sure you want to logout?
                </p>
                <div className="lgbtns">

                    <button onClick={logout}
                        className="lgtyes"

                    >Yes</button>
                    <button
                        onClick={closeModal}
                        className="lgno" >No</button>
                </div>
                `
            </motion.div>


        </>
    )
}
