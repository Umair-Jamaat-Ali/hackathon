'use client'
import React from "react";
import NavBar from "../(components)/sidenavbar/navBar";
import { useState } from "react";
// import {addDoc, collection, getDoc} from "firebase/firestore"
// import { db } from "../config/db";


export default function Student  ()  {

    const [userName, setUserName] = useState("");
    const [fatherName, setFatherName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userPhone, setUserPhone] = useState("");
    const [userDOB, setUserDOB] = useState("");
    const [gender, setGender] = useState("");

    const onSubmitHandler = async () => {

      // let studata = {
      //   name : userName,
      //   father : fatherName,
      //   email: userEmail,
      //   phone : userPhone,
      //   dob : userDOB,
      //   gender : gender
      // }

      // try {
      //   const collectionName = collection(db, "students")
      //   const docs = await getDocs(collectionName)
      //   console.log("fetchingdata", docs);
      // } catch (error) {
        
      // }

      // try {
      //   const collectionName =  collection (db, "studentdata")
      //    await addDoc(collectionName, studata);
      // } catch (error) {
      //   alert("error", error)
      // }
    }

  

    return (
        <>
            <div className='flex'>
                <div><NavBar /></div>
    
            {/* <div className="md:mx-10 md:my-20"> */}
        <div className="bg-slate-700 md:bg-slate-300 rounded-md p-5">
          <div className="sm:text-center text-3xl font-bold sm:px-[150px]">
            <p>Admission Form</p>
          </div>
          <div className="p-5 sm:px-[150px]">
            
              <label className="py-5 font-semibold" htmlFor="userName">
                Name
              </label>
              <br />
              <input
                onChange={(e) => setUserName(e.target.value)}
                value={userName} // Bind input value to state
                className="lg:w-[900px] pl-5 h-[30px] rounded-md"
                type="text"
                placeholder="Enter your name"
              />
              <br />
              <label className="my-2 font-semibold" htmlFor="fatherName">
                Father Name
              </label>
              <br />
              <input
                onChange={(e) => setFatherName(e.target.value)}
                value={fatherName} // Bind input value to state
                type="text"
                className="lg:w-[900px] pl-5 h-[30px] rounded-md"
                placeholder="Enter your father name"
              />
              <br />
              <label className="my-2 font-semibold" htmlFor="userEmail">
                Email
              </label>
              <br />
              <input
                onChange={(e) => setUserEmail(e.target.value)}
                value={userEmail} // Bind input value to state
                className="lg:w-[900px] pl-5 h-[30px] rounded-md"
                type="email"
                placeholder="Enter your mail"
              />
              <br />
              <label className="my-2 font-semibold" htmlFor="phoneNumber">
                Phone Number
              </label>
              <br />
              <input
                onChange={(e) => setUserPhone(e.target.value)}
                value={userPhone} // Bind input value to state
                className="lg:w-[900px] pl-5 h-[30px] rounded-md"
                type="tel"
                placeholder="Enter your number"
              />
              <br />
              <label className="my-2 font-semibold" htmlFor="date">
                Date of Birth
              </label>
              <br />
              <input
                onChange={(e) => setUserDOB(e.target.value)}
                value={userDOB} // Bind input value to state
                className="lg:w-[900px] pl-5 h-[30px] rounded-md"
                type="date"
                placeholder="Enter your DOB"
              />
              <br />
              <label className="my-2 font-semibold" htmlFor="gender">
                Gender
              </label>
              <br />
              <input
                onChange={(e) => setGender(e.target.value)}
                value={gender} // Bind input value to state
                className="ml-2"
                type="radio"
                id="Male"
                name="fav_language"
                // value="Male"
              />
              <label htmlFor="html">Male</label>
              <input
                onChange={(e) => setGender(e.target.value)}
                value={gender} // Bind input value to state
                className="ml-2"
                type="radio"
                id="Female"
                name="fav_language"
                // value="Female"
              />
              <label htmlFor="css">Female</label>
              <br />
              <button
                className="w-[120px] h-[40px] bg-blue-500 rounded-lg lg:mx-[380px] hover:bg-white hover:border-2 hover:border-blue-400 hover:scale-110"
                onClick={onSubmitHandler}
                type="button" // Use type="button" to prevent form submission
              >
                Submit
              </button>

            </div>
            </div>
            </div>
            {/* </div> */}


        </>
    );
}

// export default Student;

