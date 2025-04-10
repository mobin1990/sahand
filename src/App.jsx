import "./App.css";
import GridLayout from "./common/GridLayout";
import NavBar from "./common/NavBar";
import Carousal from "./components/Carousal";
import Courses_Info from "./components/Courses/Courses_Info";
import Courses_List from "./components/Courses/Courses_List";
// import Footer from "./components/Footer/Footer";
import GroupingCourses from "./components/Grouping/GroupingCourses";
import Header from "./components/Header/Header";
import HomePage from "./components/HomePage";
import News_Detail from "./components/News/News_Detail";
import NewsTemplate from "./components/News/NewsTemplate";
import OurServices from "./components/OurServices/OurServices";
import StatAcademy from "./components/StatisricsWebsite/statAcademy";
import Suggestion from "./components/Suggestion/Suggestion";

function App() {
  return (
    <>
    

     
      <GridLayout />
      {/* <Carousal/> */}
      {/* <HomePage/> */}
      {/* <StatAcademy/> */}
      {/* <NewsTemplate/> */}
      {/* <OurServices /> */}
    {/* <GroupingCourses/> */}

{/* <Courses_Info/> */}
    {/* <Suggestion/> */}
    {/* <NewsTemplate/> */}
    {/* <News_Detail/> */}
    <Courses_List/>
    
    </>
  );
}

export default App;
