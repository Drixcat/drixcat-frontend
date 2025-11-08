import React, { useEffect, useState } from 'react'
import { useLocation } from "react-router-dom";
import Navbar from './components/Navbar/Navbar'
import Heroes from './components/Heroes/Heroes'
import TrustedCompanies from './components/TrustedCompanies/TrustedCompanies'
import AluminiCards from './components/AluminiCards/AluminiCards';
import CoursesHome from './components/Courses/CoursesHome';
import OurMentors from './components/OurMentors/OurMentors';
import LearnersFeedback from './components/LearnersFeedback/LearnersFeedback';
import GetInTouch from './components/GetInTouch/GetInTouch';
import Footer from './components/Footer/Footer';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import { Route, Routes } from 'react-router-dom';
import CoursesPage from './components/Courses/CoursesPage';
import Recognitions from './components/Recoginitions/Recognitions';
import UserProfile from './components/UserProfile/UserProfile';
import Mentors from './components/Mentors/Mentors';
import About from './components/About/About';
import OnlineRegistration from './components/OnlineRegistration/OnlineRegistration';
import Certificates from './components/Certificates/Certificates';
import ApplyCertification from './components/Certificates/ApplyCertification';
import DownloadCertificate from './components/Certificates/DownloadCertificate';
import ContactUs from './components/contactUs/ContactUs';
import Blog from './components/Blog/Blog';
import CareerPrograms from './components/Courses/CareerPrograms';
import AboutUs from './components/About/AboutUs';
import Placement from './components/Placements/PlacementPage';
import SubCourses from './components/Courses/SubCourses';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import DetailedCourse from './components/Courses/DetailedCourse';
import CorporateTraining from './components/CorporateTraining/CorporateTraining';
import PopUp from './components/PopUp/PopUp';
import DownloadBrochure from './components/DownloadBrochure/DownloadBrochure';

function App() {


  const logos = [
  { src: "https://via.placeholder.com/140x48?text=Logo+1", alt: "Company 1" },
  { src: "https://via.placeholder.com/140x48?text=Logo+2", alt: "Company 2" },
  { src: "https://via.placeholder.com/140x48?text=Logo+3", alt: "Company 3" },
  { src: "https://via.placeholder.com/140x48?text=Logo+4", alt: "Company 4" },
  { src: "https://via.placeholder.com/140x48?text=Logo+5", alt: "Company 5" },
  { src: "https://via.placeholder.com/140x48?text=Logo+6", alt: "Company 6" },
];


   const [showPopup, setShowPopup] = useState(false);
  const [submitted, setSubmitted] = useState(false); // new flag
  const location = useLocation();
 
  const[count,setCount] = useState(15000)


  const handleClose = ()=>{
    setShowPopup(false)
    setCount(count+15000)
  }

  
  
  useEffect(() => {
    let timer;
    
  
   
    // Only start the timer if the user has NOT submitted yet
    if (!showPopup && !submitted) {
      timer = setTimeout(() => setShowPopup(true), count); // show after 15s
    }

    return () => clearTimeout(timer);
  }, [showPopup, submitted, location.pathname]);





  return (
    <>
    <header className='sticky top-0 z-50'>
      <Navbar/>
    </header>
     <ScrollToTop/>
    <main >
      <Routes>
     
    <Route path="/" element={<>
      <Heroes/>
      <CoursesHome/>
      <AluminiCards/>
      <TrustedCompanies logos={logos}/>
    
      <Recognitions/>
      <LearnersFeedback/>
      <GetInTouch/>
         
    </>}/>

    <Route path='/courses' element={<CareerPrograms/>}/>
    <Route path='/courses/:courseslug' element={<SubCourses/>}/>
    <Route path='/courses/:courseslug/:subcourseslug' element={<DetailedCourse/>}/>
    <Route path='/profile' element={<UserProfile/>}/>
    <Route path='/onlineregistration' element={<OnlineRegistration/>}/>
   <Route path="/certificates" element={<Certificates/>} />
   <Route path="/applycertification" element={<ApplyCertification/>}/>
   <Route path={'/contact'} element={<ContactUs/>} />
   <Route path='/blog' element={<Blog/>}/>
   <Route path='/download-certificate' element={<DownloadCertificate/>}/>
    <Route path="/about" element={<AboutUs/>} /> 
    <Route path='/placements' element={<Placement/>}/>   
    <Route path="/corporatetraining" element={<CorporateTraining/>}/>
    {/* <Route path='/downloadbrochure' element={<DownloadBrochure/>}/> */}
       

    </Routes>
    
    </main>

    <aside>
     {showPopup && (
        <PopUp
          onClose={handleClose}
          setCount={setCount}
          onSubmitSuccess={() => {
            setSubmitted(true); // user has submitted successfully
            setShowPopup(false); // close popup
          }}
        />
      )}





      
    </aside>

  

  <footer>
    
    <Footer/>
  </footer>

    
     
      


    


    
    </>
  )
}

export default App