import React from "react";
import { motion } from "framer-motion";

import Btns from "./Btns";
import Tags from "./Tags";
import Links from "./Links";

const LeftHandSide = () => {
    return (

        <motion.div
            initial={{ opacity: 0, x: '200vh' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '200vh' }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="left"
            style={{ marginTop: "40px" }}

        >
            <Btns />
            <Tags />
            <Links />
        </motion.div>

    );
};

export default LeftHandSide;
