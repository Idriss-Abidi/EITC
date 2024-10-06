import { useState } from "react";
import { motion } from "framer-motion";
import cp from "../assets/cell/cp.webp";
import tr from "../assets/cell/Training.svg";
import gd from "../assets/cell/gd2.png";
import ds from "../assets/cell/Design.svg";
import sp from "../assets/cell/Sponsoring.svg";
import md from "../assets/cell/Media.svg";
import ev from "../assets/cell/Events.svg";
import re from "../assets/cell/re.png";

import cp1 from "../assets/pilotage/cp1.png";
import cp2 from "../assets/pilotage/cp2.png";

import tr1 from "../assets/pilotage/tr1.png";
import tr2 from "../assets/pilotage/tr2.png";

const iconMove = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        },
    },
});

const Clubs = () => {
    const [selectedCell, setSelectedCell] = useState(null);

    return (
        <div id="CELLS" className="border-b border-neutral-800 pb-24">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ y: -100, opacity: 0 }}
                transition={{ duration: 1.5 }}
                className="my-20 text-center text-4xl text-white text-neon"
            >
                CELLS
            </motion.h2>

            <div className="flex flex-wrap items-center justify-center gap-4 mb-[10rem]">
                {/* CP CELL */}
                <motion.div
                    className="relative p-4 text-white rounded-lg flex flex-col items-center"
                >
                    {/* Top Div with Images */}
                    <div className="flex flex-col items-center">
                        <div className="m-2">
                            <h3 className="text-center text-4xl font-bold text-white p-1 text-neon"
                            style={{ fontFamily: '"Share Tech", sans-serif' }}>
                                Competitive Programming Cell
                            </h3>
                            <h3 className="text-center text-2xl text-white p-1 text-neon"
                            style={{ fontFamily: '"Share Tech", sans-serif' }}>
                                Souhail LOUZI & Idriss EL ABIDI</h3>
                        </div>
                        {/* Top images */}
                        <div className="flex space-x-[50px] items-center">
                            {/* Image with gold neon */}
                            {/* <motion.img
                                src={cp1}
                                alt="cp1"
                                className="w-[250px] shadow-lg shadow-yellow-300/90"
                                whileHover={{ scale: 1.1 }}
                            /> */}
                            {/* Center image with purple neon */}
                            <div className="flex flex-col items-center">
                            <motion.img
                            src={cp}
                            alt="CP Cell"
                            className="w-[22rem] h-[22rem] shadow-lg shadow-blue-400/90"
                            whileHover={{ scale: 1.1 }}
                        />
                        <div className="mt-8 bg-darkblue-opacity border border-blue-500 p-2 rounded-lg">
                            <p className="text-center text-1xl font-bold text-white p-4" style={{ fontFamily: '"Share Tech", sans-serif' }}>
                                Develops skills in competitive programming
                                and prepares for competitions.
                            </p>
                        </div>
                        </div>

                            {/* Image with gold neon */}
                            {/* <motion.img
                                src={cp2}
                                alt="cp2"
                                className="w-[250px] shadow-lg shadow-yellow-300/90"
                                whileHover={{ scale: 1.1 }}
                            /> */}
                        </div>
                    </div>
                    {/* Bottom Div with Text */}
                    
                </motion.div>
            </div>



            
            <div className="flex flex-wrap items-center justify-center gap-4 mb-[10rem]">
                {/* Training CELL */}
                <motion.div
                    className="relative p-4 text-white rounded-lg flex flex-col items-center"
                >
                    {/* Top Div with Images */}
                    <div className="flex flex-col items-center">
                        <div className="m-2">
                            <h3 className="text-center text-4xl font-bold text-white p-1 text-neon"
                            style={{ fontFamily: '"Share Tech", sans-serif' }}>
                                Training Cell
                                <br/>
                            </h3>
                            <h3 className="text-center text-2xl  text-white p-1 text-neon"
                            style={{ fontFamily: '"Share Tech", sans-serif' }}>
                                Bouchra LOUKILI & Omar MANDRI</h3>
                        </div>
                        {/* Top images */}
                        <div className="flex space-x-[50px] items-center">

                            {/* Image with gold neon */}
                            {/* <motion.img
                                src={tr1}
                                alt="cp1"
                                className="w-[200px] shadow-lg shadow-blue-400/90"
                                whileHover={{ scale: 1.1 }}
                            /> */}
                            {/* Center image with purple neon */}
                            <div className="flex flex-col items-center">
                            <motion.img
                            src={tr}
                            alt="CP Cell"
                            className="w-[22rem] h-[22rem]  shadow-lg shadow-blue-400/90"
                            whileHover={{ scale: 1.1 }}
                        />
                        <div className="mt-8 bg-darkblue-opacity border border-blue-500 shadow-lg shadow-blue-400/90">
                            <p className="text-center text-1xl font-bold text-white p-4" style={{ fontFamily: '"Share Tech", sans-serif' }}>
                            Organizes workshops and training sessions across various IT-related fields.
                            </p>
                        </div>
                        </div>

                            {/* Image with gold neon */}
                            {/* <motion.img
                                src={tr2}
                                alt="cp2"
                                className="w-[200px] shadow-lg shadow-blue-400/90"
                                whileHover={{ scale: 1.1 }}
                            /> */}
                        </div>
                    </div>
                    {/* Bottom Div with Text */}
                    
                </motion.div>
            </div>



            <div className="flex flex-wrap items-center justify-center gap-4 mb-[10rem]">
                {/* GameDev CELL */}
                <motion.div
                    className="relative p-4 text-white rounded-lg flex flex-col items-center"
                >
                    {/* Top Div with Images */}
                    <div className="flex flex-col items-center">
                        <div className="m-2">
                            <h3 className="text-center text-4xl font-bold text-white p-1 text-neon"
                            style={{ fontFamily: '"Share Tech", sans-serif' }}>
                                GameDev Cell
                                <br/>
                            </h3>
                            <h3 className="text-center text-2xl  text-white p-1 text-neon"
                            style={{ fontFamily: '"Share Tech", sans-serif' }}>
                                Anouar TAMASNA & Mohamed El Amine TAYOUBI</h3>
                        </div>
                        {/* Top images */}
                        <div className="flex space-x-[50px] items-center">

                            {/* Image with gold neon */}
                            {/* <motion.img
                                src={tr1}
                                alt="cp1"
                                className="w-[200px] shadow-lg shadow-blue-400/90"
                                whileHover={{ scale: 1.1 }}
                            /> */}
                            {/* Center image with purple neon */}
                            <div className="flex flex-col items-center">
                            <motion.img
                            src={gd}
                            alt="CP Cell"
                            className="w-[28rem] h-[20rem]  shadow-lg shadow-blue-400/90"
                            whileHover={{ scale: 1.1 }}
                        />
                        <div className="mt-8 bg-darkblue-opacity border border-blue-500 shadow-lg shadow-blue-400/90">
                            <p className="text-center text-1xl font-bold text-white p-4" style={{ fontFamily: '"Share Tech", sans-serif' }}>
                            Advances members' skills in game development through workshops and projects.
                            </p>
                        </div>
                        </div>

                            {/* Image with gold neon */}
                            {/* <motion.img
                                src={tr2}
                                alt="cp2"
                                className="w-[200px] shadow-lg shadow-blue-400/90"
                                whileHover={{ scale: 1.1 }}
                            /> */}
                        </div>
                    </div>
                    {/* Bottom Div with Text */}
                    
                </motion.div>
            </div>

            
            
            <div className="flex flex-wrap items-center justify-center gap-4 mb-[10rem]">
                {/* Event CELL */}
                <motion.div
                    className="relative p-4 text-white rounded-lg flex flex-col items-center"
                >
                    {/* Top Div with Images */}
                    <div className="flex flex-col items-center">
                        <div className="m-2">
                            <h3 className="text-center text-4xl font-bold text-white p-1 text-neon"
                            style={{ fontFamily: '"Share Tech", sans-serif' }}>
                                Event Cell
                                <br/>
                            </h3>
                            <h3 className="text-center text-2xl  text-white p-1 text-neon"
                            style={{ fontFamily: '"Share Tech", sans-serif' }}>
                                Zineb Mouman & Omar Nebag</h3>
                        </div>
                        {/* Top images */}
                        <div className="flex space-x-[50px] items-center">

                            {/* Image with gold neon */}
                            {/* <motion.img
                                src={tr1}
                                alt="cp1"
                                className="w-[200px] shadow-lg shadow-blue-400/90"
                                whileHover={{ scale: 1.1 }}
                            /> */}
                            {/* Center image with purple neon */}
                            <div className="flex flex-col items-center">
                            <motion.img
                            src={ev}
                            alt="CP Cell"
                            className="w-[22rem] h-[22rem]  shadow-lg shadow-blue-400/90"
                            whileHover={{ scale: 1.1 }}
                        />
                        <div className="mt-8 bg-darkblue-opacity border border-blue-500 shadow-lg shadow-blue-400/90">
                            <p className="text-center text-1xl font-bold text-white p-4" style={{ fontFamily: '"Share Tech", sans-serif' }}>
                            Manages events, guest relations, and logistics for all activities.                            </p>
                        </div>
                        </div>

                            {/* Image with gold neon */}
                            {/* <motion.img
                                src={tr2}
                                alt="cp2"
                                className="w-[200px] shadow-lg shadow-blue-400/90"
                                whileHover={{ scale: 1.1 }}
                            /> */}
                        </div>
                    </div>
                    {/* Bottom Div with Text */}
                    
                </motion.div>
            </div>



            
            <div className="flex flex-wrap items-center justify-center gap-4 mb-[10rem]">
                {/* Design CELL */}
                <motion.div
                    className="relative p-4 text-white rounded-lg flex flex-col items-center"
                >
                    {/* Top Div with Images */}
                    <div className="flex flex-col items-center">
                        <div className="m-2">
                            <h3 className="text-center text-4xl font-bold text-white p-1 text-neon"
                            style={{ fontFamily: '"Share Tech", sans-serif' }}>
                                𝐃𝐞𝐬𝐢𝐠𝐧 Cell
                                <br/>
                            </h3>
                            <h3 className="text-center text-2xl  text-white p-1 text-neon"
                            style={{ fontFamily: '"Share Tech", sans-serif' }}>
                                Hiba Allah BOUGOUTAYA & Anouar TAMASNA </h3>
                        </div>
                        {/* Top images */}
                        <div className="flex space-x-[50px] items-center">

                            {/* Image with gold neon */}
                            {/* <motion.img
                                src={tr1}
                                alt="cp1"
                                className="w-[200px] shadow-lg shadow-blue-400/90"
                                whileHover={{ scale: 1.1 }}
                            /> */}
                            {/* Center image with purple neon */}
                            <div className="flex flex-col items-center">
                            <motion.img
                            src={ds}
                            alt="CP Cell"
                            className="w-[22rem] h-[22rem]  shadow-lg shadow-blue-400/90"
                            whileHover={{ scale: 1.1 }}
                        />
                        <div className="mt-8 bg-darkblue-opacity border border-blue-500 shadow-lg shadow-blue-400/90">
                            <p className="text-center text-1xl font-bold text-white p-4" style={{ fontFamily: '"Share Tech", sans-serif' }}>
                            Nurtures creative spirit and creates visual materials for club events.
                            </p>
                        </div>
                        </div>

                            {/* Image with gold neon */}
                            {/* <motion.img
                                src={tr2}
                                alt="cp2"
                                className="w-[200px] shadow-lg shadow-blue-400/90"
                                whileHover={{ scale: 1.1 }}
                            /> */}
                        </div>
                    </div>
                    {/* Bottom Div with Text */}
                    
                </motion.div>
            </div>




            
            <div className="flex flex-wrap items-center justify-center gap-4 mb-[10rem]">
                {/* Media CELL */}
                <motion.div
                    className="relative p-4 text-white rounded-lg flex flex-col items-center"
                >
                    {/* Top Div with Images */}
                    <div className="flex flex-col items-center">
                        <div className="m-2">
                            <h3 className="text-center text-4xl font-bold text-white p-1 text-neon"
                            style={{ fontFamily: '"Share Tech", sans-serif' }}>
                                Media Cell
                                <br/>
                            </h3>
                            <h3 className="text-center text-2xl  text-white p-1 text-neon"
                            style={{ fontFamily: '"Share Tech", sans-serif' }}>
                                Hasna BOUBAKRY & Aya AZIZ</h3>
                        </div>
                        {/* Top images */}
                        <div className="flex space-x-[50px] items-center">

                            {/* Image with gold neon */}
                            {/* <motion.img
                                src={tr1}
                                alt="cp1"
                                className="w-[200px] shadow-lg shadow-blue-400/90"
                                whileHover={{ scale: 1.1 }}
                            /> */}
                            {/* Center image with purple neon */}
                            <div className="flex flex-col items-center">
                            <motion.img
                            src={md}
                            alt="CP Cell"
                            className="w-[22rem] h-[22rem]  shadow-lg shadow-blue-400/90"
                            whileHover={{ scale: 1.1 }}
                        />
                        <div className="mt-8 bg-darkblue-opacity border border-blue-500 shadow-lg shadow-blue-400/90">
                            <p className="text-center text-1xl font-bold text-white p-4" style={{ fontFamily: '"Share Tech", sans-serif' }}>
                            Promotes events through social media and manages press relations.
                            </p>
                        </div>
                        </div>

                            {/* Image with gold neon */}
                            {/* <motion.img
                                src={tr2}
                                alt="cp2"
                                className="w-[200px] shadow-lg shadow-blue-400/90"
                                whileHover={{ scale: 1.1 }}
                            /> */}
                        </div>
                    </div>
                    {/* Bottom Div with Text */}
                    
                </motion.div>
            </div>


            
            <div className="flex flex-wrap items-center justify-center gap-4 mb-[10rem]">
                {/* Sponsoring CELL */}
                <motion.div
                    className="relative p-4 text-white rounded-lg flex flex-col items-center"
                >
                    {/* Top Div with Images */}
                    <div className="flex flex-col items-center">
                        <div className="m-2">
                            <h3 className="text-center text-4xl font-bold text-white p-1 text-neon"
                            style={{ fontFamily: '"Share Tech", sans-serif' }}>
                                Sponsoring Cell
                                <br/>
                            </h3>
                            <h3 className="text-center text-2xl  text-white p-1 text-neon"
                            style={{ fontFamily: '"Share Tech", sans-serif' }}>
                                Hafssa BOUNIA  & Marouane BATRONE </h3>
                        </div>
                        {/* Top images */}
                        <div className="flex space-x-[50px] items-center">

                            {/* Image with gold neon */}
                            {/* <motion.img
                                src={tr1}
                                alt="cp1"
                                className="w-[200px] shadow-lg shadow-blue-400/90"
                                whileHover={{ scale: 1.1 }}
                            /> */}
                            {/* Center image with purple neon */}
                            <div className="flex flex-col items-center">
                            <motion.img
                            src={sp}
                            alt="CP Cell"
                            className="w-[22rem] h-[22rem]  shadow-lg shadow-blue-400/90"
                            whileHover={{ scale: 1.1 }}
                        />
                        <div className="mt-8 bg-darkblue-opacity border border-blue-500 shadow-lg shadow-blue-400/90">
                            <p className="text-center text-1xl font-bold text-white p-4" style={{ fontFamily: '"Share Tech", sans-serif' }}>
                            Reaches out to sponsors and partners for financial support.
                            </p>
                        </div>
                        </div>

                            {/* Image with gold neon */}
                            {/* <motion.img
                                src={tr2}
                                alt="cp2"
                                className="w-[200px] shadow-lg shadow-blue-400/90"
                                whileHover={{ scale: 1.1 }}
                            /> */}
                        </div>
                    </div>
                    {/* Bottom Div with Text */}
                    
                </motion.div>
            </div>




            
            <div className="flex flex-wrap items-center justify-center gap-4 mb-[10rem]">
                {/* External Relations CELL */}
                <motion.div
                    className="relative p-4 text-white rounded-lg flex flex-col items-center"
                >
                    {/* Top Div with Images */}
                    <div className="flex flex-col items-center">
                        <div className="m-2">
                            <h3 className="text-center text-4xl font-bold text-white p-1 text-neon"
                            style={{ fontFamily: '"Share Tech", sans-serif' }}>
                                External Relations Cell
                                <br/>
                            </h3>
                            <h3 className="text-center text-2xl  text-white p-1 text-neon"
                            style={{ fontFamily: '"Share Tech", sans-serif' }}>
                                Youssef ELGARCH </h3>
                        </div>
                        {/* Top images */}
                        <div className="flex space-x-[50px] items-center">

                            {/* Image with gold neon */}
                            {/* <motion.img
                                src={tr1}
                                alt="cp1"
                                className="w-[200px] shadow-lg shadow-blue-400/90"
                                whileHover={{ scale: 1.1 }}
                            /> */}
                            {/* Center image with purple neon */}
                            <div className="flex flex-col items-center">
                            <motion.img
                            src={re}
                            alt="CP Cell"
                            className="w-[24rem] h-[20rem]  shadow-lg shadow-blue-400/90"
                            whileHover={{ scale: 1.1 }}
                        />
                        <div className="mt-8 bg-darkblue-opacity border border-blue-500 shadow-lg shadow-blue-400/90">
                            <p className="text-center text-1xl font-bold text-white p-4" style={{ fontFamily: '"Share Tech", sans-serif' }}>
                            Builds partnership, organizes collaborations with external organisations.
                            </p>
                        </div>
                        </div>

                            {/* Image with gold neon */}
                            {/* <motion.img
                                src={tr2}
                                alt="cp2"
                                className="w-[200px] shadow-lg shadow-blue-400/90"
                                whileHover={{ scale: 1.1 }}
                            /> */}
                        </div>
                    </div>
                    {/* Bottom Div with Text */}
                    
                </motion.div>
            </div>



            
        </div>
    );
};

export default Clubs;
