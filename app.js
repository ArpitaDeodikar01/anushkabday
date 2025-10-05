import { useEffect } from "react";
import { motion } from "framer-motion";
import Confetti from "react-confetti";
import { Sparkles } from "lucide-react";

export default function Birthday() {
    // Window size for confetti
    const [dimensions, setDimensions] = React.useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    useEffect(() => {
        const handleResize = () => {
            setDimensions({ width: window.innerWidth, height: window.innerHeight });
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden bg-gradient-to-br from-pink-200 via-yellow-100 to-blue-200">
            {/* Confetti */}
            <Confetti width={dimensions.width} height={dimensions.height} />

            {/* Title */}
            <motion.h1
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 100, damping: 10 }}
                className="text-5xl md:text-7xl font-extrabold text-pink-600 drop-shadow-lg"
            >
                🎂 Happy Birthday Anushkaa 🎉
            </motion.h1>

            {/* Sparkles */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="mt-6 text-yellow-500 flex items-center space-x-2 text-2xl"
            >
                <Sparkles className="w-6 h-6" />
                <span>Wishing you lots of joy, love & fun!</span>
                <Sparkles className="w-6 h-6" />
            </motion.div>

            {/* Balloons */}
            <div className="absolute bottom-0 w-full flex justify-around">
                {["bg-pink-400", "bg-blue-400", "bg-yellow-400"].map((color, i) => (
                    <motion.div
                        key={i}
                        initial={{ y: 500, opacity: 0 }}
                        animate={{ y: -1000, opacity: 1 }}
                        transition={{ duration: 10, repeat: Infinity, delay: i * 2 }}
                        className={`${color} rounded-full w-16 h-20 relative`}
                    >
                        <div className="w-1 h-8 bg-gray-600 mx-auto"></div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
