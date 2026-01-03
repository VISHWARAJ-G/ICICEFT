import { Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AboutSecPage from "./pages/AboutPage/AboutSecPage";
import AboutDeptPage from "./pages/AboutPage/AboutDeptPage";
import Advisory from "./pages/Advisory";
import AboutConferencePage from "./pages/AboutConferencePage";
import OrganizingCommittee from "./pages/OrganizingCommittee";
import TracksPage from "./pages/TracksPage";
import TravelsVisaPage from "./pages/TravelsVisaPage";
import ContactUs from "./pages/ContactUs";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const InternationalAdvisoryCommittee = [
    {
      name: "Dr. Sheng-Lung Peng",
      designation: "Professor, Department of Creative Technologies",
      institution: "National Taipei University of Business",
      country: "Taiwan",
    },
    {
      name: "Dr. Zdzislaw Polkowski",
      designation: "Professor",
      institution: "Bydgoszcz University of Science and Technology",
      country: "Poland",
    },
    {
      name: "Dr. Sheng-Lung Peng",
      designation: "Dean, College of Innovative Design and Management",
      institution: "National Taipei University of Business",
      country: "Taiwan",
    },
    {
      name: "Dr. Chithirai Pon Selvan",
      designation:
        "Director of Research & Head of School, Science and Engineering",
      institution: "Curtin University, Dubai Campus",
      country: "Australia",
    },
    {
      name: "Dr. Ramani Subramanian",
      designation: "Associate Dean & Head of Institutional Relations",
      institution: "Westford University College",
      country: "United Arab Emirates",
    },
    {
      name: "Dr. Somasundaram",
      designation: "Associate Dean & Practice School",
      institution: "BITS Pilani, Dubai Campus",
      country: "United Arab Emirates",
    },
    {
      name: "Dr. Ramani Kannan",
      designation: "Senior Lecturer, Electrical & Electronic Engineering",
      institution: "Universiti Teknologi Petronas",
      country: "Malaysia",
    },
    {
      name: "Dr. Ts. Chockalingam Arvind Vaithilingam",
      designation: "Director, Clean Technology Impact Lab",
      institution: "Taylor’s University",
      country: "Malaysia",
    },
    {
      name: "Dr. Kim-Kwang Raymond Choo",
      designation: "Professor, Information Systems and Cyber Security",
      institution: "University of Texas at San Antonio",
      country: "United States",
    },
    {
      name: "Dr. Juan M. Cofchado",
      designation: "Professor, Computer Science & Automation Control",
      institution: "University of Salamanca",
      country: "Spain",
    },
    {
      name: "Dr. Xiaolei Wang",
      designation: "Associate Professor, Computer Science Engineering",
      institution: "Aalto University",
      country: "Finland",
    },
    {
      name: "Dr. Amir H. Gandomi",
      designation: "Professor, Data Science",
      institution: "University of Technology Sydney",
      country: "Australia",
    },
  ];
  const NationalAdvisoryCommittee = [
    {
      name: "Dr. A. Kannan",
      designation: "Senior Professor",
      institution: "VIT, Vellore",
      state: "Tamil Nadu",
    },
    {
      name: "Dr. Ganapathy",
      designation: "Associate Professor",
      institution: "NITTTR, Bhopal",
      state: "Madhya Pradesh",
    },
    {
      name: "Dr. Milind Singh Phoughat",
      designation: "Head, Department of Computer Science",
      institution: "C.C.S University, Meerut",
      state: "Uttar Pradesh",
    },
    {
      name: "Dr. Prashant R. Nair",
      designation:
        "Head & Vice-Chairman, Internal Quality Assurance Cell (IQAC)",
      institution: "Amrita Vishwa Vidyapeetham, Coimbatore",
      state: "Tamil Nadu",
    },
    {
      name: "Dr. Sanjay Gour",
      designation:
        "Professor & Head, Department of Computer Science & Engineering",
      institution: "Jaipur Engineering College and Research Centre, Jaipur",
      state: "Rajasthan",
    },
    {
      name: "Prof. Atulgiri Mayagiri Gonsai",
      designation: "Professor, Department of Computer Science & Engineering",
      institution: "Saurashtra University, Gujarat",
      state: "Gujarat",
    },
    {
      name: "Dr. B. Balamurugan",
      designation:
        "Associate Dean – Students & Professor, Computer Science and Engineering",
      institution: "Shiv Nadar University, Delhi",
      state: "Delhi",
    },
    {
      name: "Dr. V. D. Ambeth Kumar",
      designation: "Associate Professor & Head, Computer Engineering",
      institution: "Mizoram University, Aizawl",
      state: "Mizoram",
    },
    {
      name: "Dr. Sasi Kala T",
      designation: "Dean, School of Computing",
      institution: "Sathyabama University",
      state: "Tamil Nadu",
    },
    {
      name: "Dr. Ganesan Subramanian",
      designation: "Head, Centre for Innovation and Entrepreneurship",
      institution: "Manipal Academy of Higher Education",
      state: "Karnataka",
    },
    {
      name: "Dr. M. Hanumanthappa",
      designation: "Professor & Director, Computer Science",
      institution: "Bangalore University",
      state: "Karnataka",
    },
  ];

  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/institution" element={<AboutSecPage />} />
        <Route path="/department" element={<AboutDeptPage />} />
        <Route path="/conference" element={<AboutConferencePage />} />
        <Route
          path="/international-advisory"
          element={
            <Advisory
              AdvisoryCommittee={InternationalAdvisoryCommittee}
              IAdvisory={true}
              NAdvisory={false}
            />
          }
        />
        <Route
          path="/national-advisory"
          element={
            <Advisory
              AdvisoryCommittee={NationalAdvisoryCommittee}
              IAdvisory={false}
              NAdvisory={true}
            />
          }
        />
        <Route path="/organizing-committee" element={<OrganizingCommittee />} />
        <Route path="/tracks" element={<TracksPage />} />
        <Route path="/travels" element={<TravelsVisaPage />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
