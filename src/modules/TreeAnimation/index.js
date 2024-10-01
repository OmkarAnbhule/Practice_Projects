import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const leaves = ['/images/leaf.png'];

const TreeAnimation = () => {
    const [pileLeaves, setPileLeaves] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setPileLeaves(false); // Trigger wind animation
            setTimeout(() => {
                setPileLeaves(true); // Reset the piling after the wind blows
            }, 3000); // Wind blows for 3 seconds before restarting the piling
        }, 10000); // Every 10 seconds the wind blows

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            {/* Tree */}
            <div className="absolute md:-top-36 top-1/2 left-1/2 transform -translate-x-1/2">
                <img src="/images/tree.png" alt="Tree" className="w-[600px]" />
            </div>

            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-40 bg-brown-500">
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[500px] h-10 bg-gray-800 rounded-md">
                    {/* Piled Leaves (Triangle Shape) */}
                    {pileLeaves && Array.from({ length: 100 }).map((_, index) => {
                        const randomLeaf = leaves[Math.floor(Math.random() * leaves.length)];

                        // Create a triangle shape by adjusting the number of leaves per row
                        const row = Math.floor(index / 10); // 10 leaves per row
                        const leavesInRow = row + 1; // Number of leaves increases as you go down
                        const randomX = (Math.random() - 0.5) * (200 - 10 * row); // Shrinks the width as rows go higher
                        const rowBottomPosition = row * 6; // Stack leaves closer at the bottom, forming a triangle

                        return (
                            <motion.img
                                key={index}
                                src={randomLeaf}
                                alt="Piled Leaf"
                                className="absolute"
                                style={{
                                    bottom: `${rowBottomPosition}px`, // Stack leaves upwards
                                    left: `calc(50% + ${randomX}px)`, // Leaves shrink in width for triangle
                                    width: '30px',
                                }}
                                initial={{ opacity: 0 }}
                                animate={{
                                    opacity: 1,
                                    y: [10, 0],
                                }}
                                transition={{
                                    delay: index * 0.05,
                                    duration: 0.5,
                                }}
                            />
                        );
                    })}

                    {/* Wind Blow Animation */}
                    {!pileLeaves && Array.from({ length: 50 }).map((_, index) => {
                        const randomLeaf = leaves[Math.floor(Math.random() * leaves.length)];
                        const randomX = Math.random() * 200 - 100;
                        const randomWindStrength = Math.random() * 50 + 200; // Wind pushes leaves away

                        return (
                            <motion.img
                                key={index}
                                src={randomLeaf}
                                alt="Blowing Leaf"
                                className="absolute"
                                style={{
                                    bottom: `${Math.random() * 50}px`, // Leaves flying from the pile
                                    left: `calc(50% + ${randomX}px)`,
                                    width: '30px',
                                }}
                                initial={{ opacity: 1 }}
                                animate={{
                                    opacity: [1, 0.5, 0],
                                    x: randomWindStrength * -10,
                                    y: ['0%', '-100vh'], // Leaves flying upwards
                                }}
                                transition={{
                                    duration: 3,
                                    ease: 'easeInOut',
                                    repeat: 0,
                                }}
                            />
                        );
                    })}
                </div>
            </div>

            {/* Falling Leaves */}
            {Array.from({ length: 50 }).map((_, index) => {
                const randomLeaf = leaves[Math.floor(Math.random() * leaves.length)];
                const randomX = Math.random() * 36 - 20;
                const randomDuration = Math.random() * 5 + 3;
                const randomWindStrength = Math.random() * 50 - 25;

                return (
                    <motion.img
                        key={index}
                        src={randomLeaf}
                        alt="Falling Leaf"
                        className="absolute"
                        style={{
                            top: `${Math.random() * 20 + 50}vh`,
                            left: `calc(50% + ${randomX}vw)`,
                            width: '50px',
                        }}
                        initial={{ opacity: 1, y: -100, x: 0 }}
                        animate={{
                            opacity: [1, 0.8, 0.6],
                            y: ['-100%', '20vh'],
                            x: [0, randomWindStrength, -randomWindStrength, 0],
                        }}
                        transition={{
                            duration: randomDuration,
                            ease: 'easeInOut',
                            repeat: Infinity,
                            repeatType: 'loop',
                        }}
                    />
                );
            })}
        </>
    );
};

export default TreeAnimation;
