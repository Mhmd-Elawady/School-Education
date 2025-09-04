import React from 'react'
import Header from '../Components/Home/Header';
import MyNavbar from '../Components/Home/MyNavbar';
import EnrichingStudentLife from '../Components/StudentLife/EnrichingStudentLife';
import ExtracurricularActivities from '../Components/StudentLife/ExtracurricularActivities';
import Events from '../Components/StudentLife/Events';
import StudentSupport from '../Components/StudentLife/StudentSupport';
import Footer from "../Components/Home/Footer";
export default function StudentLife() {
  return (
    <>
      <Header/>
          <MyNavbar/>
          <EnrichingStudentLife/>
          <ExtracurricularActivities/>
          <Events/>
          <StudentSupport/>
          <Footer/>
    </>
  )
}
