import Header from "./Header.tsx";
import Breadcrumb from "./Breadcrumb.tsx";
import BookInfo from "./BookInfo.tsx";
import Recommendations from "./Recommendations.tsx";
import Footer from "./Footer.tsx";

function BookPage() {
  return <div className="flex flex-col min-w-360">
    <Header/>
    <div className="flex flex-col mx-8">
      <Breadcrumb items={["Asosiy", "Kutubxona", "Shaxmatdagi qobiliyatliringizga qayta baxo bering"]}/>
      <div className="flex flex-row items-start gap-6 mt-8.25">
        <BookInfo/>
        <Recommendations/>
      </div>
    </div>
    <Footer/>
  </div>;
}

export default BookPage;
