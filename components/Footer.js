import React from 'react'
import { motion } from 'framer-motion'
export default function Footer() {
    return (
        <motion.div
            className="footer"
            initial={{ opacity: 0, y: '400vh' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '400vh' }}
            transition={{ duration: 1, delay: 4 }}

        >
            <h6 className="mb-4" >&copy; 2023 Clipper</h6>
        </motion.div>
    )
}
