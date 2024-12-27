import { Outlet, Route, Routes } from 'react-router';
import BaseLayout from './views/BaseLayout';
import Home from './views/Home';
import AvailableCats from './views/AvailableCats';
import AboutUs from './views/AboutUs'; // Import the About Us component
import ContactUs from './views/ContactUs'; // Import the Contact Us component

function App() {
  return (
    <Routes>
      <Route
        element={
          <BaseLayout>
            <Outlet />
          </BaseLayout>
        }
      >
        <Route path="/" element={<Home />} />
        <Route path="/available-cats" element={<AvailableCats />} />
        <Route path="/about" element={<AboutUs />} /> {/* About Us route */}
        <Route path="/contact" element={<ContactUs />} /> {/* Contact Us route */}
      </Route>
    </Routes>
  );
}

export default App;
