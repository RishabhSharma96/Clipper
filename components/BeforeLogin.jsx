import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
export default function BeforeLogin() {

    const [text, setText] = useState("");
    const [sentence, setSentence] = useState(` Please login to continue further`);
    const [cnt, setCnt] = useState(0);

    const router = useRouter();
    useEffect(() => {
        if (cnt < sentence.length) {
            setTimeout(() => {
                setText(text + sentence[cnt]);
                setCnt(cnt + 1);
            }, 80)
        }
    }, [cnt]);
    return (
        <motion.div
            className="beforeLogin"
            initial={{ opacity: 0, x: '-200vh' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '-200vh' }}
            transition={{ duration: 1 }}
        >
            {text}

            <motion.div
                className="login beforeL"
                initial={{ opacity: 0, y: '200vh' }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: '200vh' }}
                transition={{ duration: 1, delay: 2 }}
            >

                <button onClick={() => router.push("/auth/signin")}>Log in</button>
            </motion.div>


        </motion.div>
    )
}
