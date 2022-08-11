import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Homepage from './pages/Homepage/Homepage';
import AboutPage from "./pages/About/AboutPage";
import Contact from "./pages/Contact/Contact";
import CoursesPage from "./pages/Courses/CoursesPage";
import Details from "./pages/Details/Details";
import { SidebarVisibilityContextProvider } from './store/SidebarVisibilityContext';
import SecondaryFooter from "./components/SecondaryFooter/SecondaryFooter";
import NotFoundError from "./pages/NotFoundError/NotFoundError";



function App() {

  return (
    <div className="App">
      <Router>
        <SidebarVisibilityContextProvider>
          <Header />
        </SidebarVisibilityContextProvider>
        <Routes>
          <Route path='/' exact element={<Homepage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/courses' element={<CoursesPage />} />
          <Route path='/courses/:id' element={<Details />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/*' element={<NotFoundError />} />
        </Routes>
        <Footer />
        <SecondaryFooter />
      </Router>
    </div>
  );
}

export default App;
