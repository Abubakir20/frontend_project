import Header from "./Header.tsx";
import Breadcrumb from "./Breadcrumb.tsx";
import CourseHeader from "./CourseHeader.tsx";
import CourseLessons from "./CourseLessons.tsx";
import Comments from "./Comments.tsx";
import Footer from "./Footer.tsx";

function Page() {
  return <div className="flex flex-col min-w-360">
    <Header/>
    <div className="flex flex-col mx-8">
      <Breadcrumb items={["Asosiy", "O‘rganish", "Shaxmat donalari bilan tanishuv"]}/>
      <div className="mt-5.5">
        <CourseHeader/>
      </div>
      <CourseLessons/>
      <Comments/>
    </div>
    <Footer/>
  </div>;
}

export default Page;
