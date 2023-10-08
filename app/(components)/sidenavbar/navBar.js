import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import {AiFillHome} from 'react-icons/Ai'
import {RiPresentationLine} from 'react-icons/Ri'
import {PiStudentFill} from 'react-icons/Pi'
import {FaLaptopCode} from 'react-icons/Fa'


const NavBar = () => {
    return (
        <>
            <div className='w-[250px]  h-screen rounded-r-md bg-slate-700 flex flex-col '>
                <div className='Navbar'>
                    <nav className='pt-[100px]'>

                        <ul>
                            <li>
                                <Image className='p-[20px] mx-12 mt-10 rounded-full' src="/img/2.jpeg" width={100} height={50} alt="" />
                            </li>
                            <li className='py-5 pl-[50px] '>
                                <div className='flex items-center w-[150px] h-10 bg-cyan-400 rounded-md text-center pt-2 hover:bg-cyan-700 hover:scale-110'>
                                <AiFillHome className='mx-3' />
                                    <Link href="/" >
                                       DashBoard
                                    </Link>
                                </div >
                            </li>
                            <li className='py-5 pl-[50px] '>
                                <div className='flex items-center  w-[150px] h-10 bg-cyan-400 rounded-md text-center pt-2 hover:bg-cyan-700 hover:scale-110'>
                                   <PiStudentFill className='mx-3' />
                                    <Link href="/student" >
                                        Students
                                    </Link>
                                </div >
                            </li>
                            <li className='py-5 pl-[50px] '>
                                <div className='flex items-center w-[150px] h-10 bg-cyan-400 rounded-md text-center pt-2 hover:bg-cyan-700 hover:scale-110'>
                                   <FaLaptopCode className='mx-3' />
                                    <Link href="/course" >
                                        Courses
                                    </Link>
                                </div >
                            </li>
                            <li className='py-5 pl-[50px] '>
                                <div className='flex items-center w-[150px] h-10 bg-cyan-400 rounded-md text-center pt-2 hover:bg-cyan-700 hover:scale-110'>
                                    <RiPresentationLine className='mx-3'/>
                                    <Link href="/attendence" >
                                        Attendence
                                    </Link>
                                </div >
                            </li>
                        </ul>
                    </nav>


                </div>
            </div>
        </>
    );
}

export default NavBar;
