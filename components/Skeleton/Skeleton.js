import React from "react";
import { motion } from "framer-motion";
import { Dna } from "react-loader-spinner";

const Skeleton = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex justify-center items-center"
        >
            <Dna
                visible={true}
                height="600"
                width="400"
                ariaLabel="dna-loading"
                wrapperStyle={{}}
                wrapperClass="dna-wrapper"
            />
        </motion.div>
    );
};

export default Skeleton;
