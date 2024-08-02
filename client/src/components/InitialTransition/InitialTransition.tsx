import { motion } from "framer-motion";
import '/src/css/InitialTransition.css';

const blackBox = {
    initial: {
        height: "100vh",
        y: "100%",
    },
    animate: {
        height: 0,
        y: 0,
        transition: {
            duration: 1.5,
            ease: [0.87, 0, 0.13, 1],
        },
    },
};

const InitialTransition = () => {
    return (
        <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
                className="fixed inset-0 z-50 w-full bg-black"
                initial="initial"
                animate="animate"
                variants={blackBox}
            />
            <motion.svg className="absolute z-50 flex">
                <pattern
                    id="pattern"
                    patternUnits="userSpaceOnUse"
                    width={750}
                    height={800}
                    className="text-white"
                >
                    <rect className="w-full h-full fill-current" />
                    <motion.rect className="w-full h-full text-gray-600 fill-current" />
                </pattern>
                <text
                    className="text-4xl font-bold"
                    text-anchor="middle"
                    x="50%"
                    y="50%"
                    style={{ fill: "url(#pattern)" }}
                >
                    tailstore
                </text>
            </motion.svg>
        </div>
    );
};

export default InitialTransition;
