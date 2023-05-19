import React, { useState, useEffect } from "react";
import { faker } from "@faker-js/faker";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { auth } from "../firebase/firebase";
import Link from 'next/link'
const Btns = () => {
    const [user] = useAuthState(auth);
    const router = useRouter();
    const [suggestions, setSuggestions] = useState([
        {
            userId: faker.datatype.uuid(),
            username: "Rishabh Sharma",
            avatar: faker.image.avatar(),
            id: 1,
        },
        {
            userId: faker.datatype.uuid(),
            username: "Shobhit Kushwaha",
            avatar: faker.image.avatar(),
            id: 2,
        },
        {
            userId: faker.datatype.uuid(),
            username: "Aayush Sharma",
            avatar: faker.image.avatar(),
            id: 3,
        },
        {
            userId: faker.datatype.uuid(),
            username: "Tushar Gupta",
            avatar: faker.image.avatar(),
            id: 1,
        },
        {
            userId: faker.datatype.uuid(),
            username: "Rohan Parmar",
            avatar: faker.image.avatar(),
            id: 1,
        },
        {
            userId: faker.datatype.uuid(),
            username: "Rohit Raj",
            avatar: faker.image.avatar(),
            id: 1,
        },
    ]);

    useEffect(() => {
        // const suggestions = [...Array(5)].map((_, i) => ({
        //   userId: faker.datatype.uuid(),
        //   username: faker.internet.userName(),
        //   avatar: faker.image.avatar(),
        //   id: i,
        // }));
        setSuggestions(suggestions);
    }, []);
    return (
        <>
            <div className="btns">
                <a href="#" className="flex gap-2">
                    <motion.svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="blue"
                        className="w-6 h-6 text-blue-950"
                        animate={{ y: ['10px', '0px', '10px'] }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: 1,
                            // repeatDelay: 1,
                        }}
                    >
                        <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                        <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                    </motion.svg>
                    <span>For You</span>
                </a>

                <Link href="" className="flex gap-2" >
                    <motion.svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                        animate={{ rotate: 360 }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: 1,
                            repeatDelay: 1,
                        }}
                    >
                        <path
                            strokeLinecap="round"
                            d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"
                        />
                    </motion.svg>
                    <span>Live</span>
                </Link>
            </div>
            {!user && (
                <div className="login">
                    <p>Log in to follow creators, like videos, and view comments</p>
                    <button onClick={() => router.push("/auth/signin")}>Log in</button>
                </div>
            )}

            <div className="accounts">
                <p>❤️People you may know</p>
                {suggestions.map((data, index) => (
                    <div className="user" key={index}>
                        <img src={data.avatar} alt="avatar" />
                        <h6 className="username">{data.username}</h6>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Btns;
