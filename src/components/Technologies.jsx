import { motion } from "framer-motion";
import cp from "../assets/cells/cp.jpg";
import gamedev from "../assets/cells/gamedev.jpg";
import media from "../assets/cells/media.jpg";
import training from "../assets/cells/training.jpg";
import sponsoring from "../assets/cells/sponsoring.jpg";

const iconMove = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        }
    }
});

const Technologies = () => {
    return (
        <div id="CELLS" className="border-b border-neutral-800 pb-24">
            <motion.h2 whileInView={{ opacity: 1, y: 0 }} initial={{ y: -100, opacity: 0 }} transition={{ duration: 1.5 }} className="my-20 text-center text-4xl">CELLS</motion.h2>
            <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ x: -100, opacity: 0 }} transition={{ duration: 1.5 }} className="flex flex-wrap items-center justify-center gap-4">
                <motion.div variants={iconMove(2.5)} initial="initial" animate="animate" className="rounded-full border-4 border-neutral-800 flex items-center justify-center" style={{ width: '100px', height: '100px' }}>
                    <img src={sponsoring} alt="sponsoring" className="w-full h-full rounded-full object-cover" />
                </motion.div>
                <motion.div variants={iconMove(3)} initial="initial" animate="animate" className="rounded-full border-4 border-neutral-800 flex items-center justify-center" style={{ width: '100px', height: '100px' }}>
                    <img src={gamedev} alt="gamedev" className="w-full h-full rounded-full object-cover" />
                </motion.div>
                <motion.div variants={iconMove(5)} initial="initial" animate="animate" className="rounded-full border-4 border-neutral-800 flex items-center justify-center" style={{ width: '100px', height: '100px' }}>
                    <img src={training} alt="training" className="w-full h-full rounded-full object-cover" />
                </motion.div>
                <motion.div variants={iconMove(2)} initial="initial" animate="animate" className="rounded-full border-4 border-neutral-800 flex items-center justify-center" style={{ width: '100px', height: '100px' }}>
                    <img src={cp} alt="cp" className="w-full h-full rounded-full object-cover" />
                </motion.div>
                <motion.div variants={iconMove(4)} initial="initial" animate="animate" className="rounded-full border-4 border-neutral-800 flex items-center justify-center" style={{ width: '100px', height: '100px' }}>
                    <img src={media} alt="media" className="w-full h-full rounded-full object-cover" />
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Technologies;
