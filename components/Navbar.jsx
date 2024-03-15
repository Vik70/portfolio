// Note: No "use client" directive needed for Next.js Link component
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import Link from 'next/link'; // Import from next/link instead
import { logo, menu, close } from '../public/assets/';
import Image from 'next/image';

const Navbar = () => {
    const [setActive] = useState("");

    return (
        <motion.nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
            <motion.div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
                <Link href="/" legacyBehavior>
                    <motion.a
                        className='flex items-center gap-2'
                        onClick={() => {
                            setActive("");
                            // Next.js handles scrolling to the top on navigation by default
                        }}
                    >
                        <Image 
                        src="/assets/pplogoinvsquare.png" 
                        alt='logo' 
                        height={50}
                        width={50}
                        />
                    </motion.a>
                </Link>
                    <motion.p
                    className='text-white text-[18px] font-bold cursor-pointer'
                    >
                        Pure Pixel
                    </motion.p>
            </motion.div>
        </motion.nav>
    );
}

export default Navbar;
