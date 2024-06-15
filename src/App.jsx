import Footer from "./components/Footer";
import Header from "./components/Header";
import StudentsSection from "./components/StudentsSection";

export default function App() {
  return (
    <div className="bg-[#172227] font-[Inter] text-white">
      {/* <Navbar /> */}
      <Header />
      <StudentsSection />
      <Footer />
    </div>
  );
}
