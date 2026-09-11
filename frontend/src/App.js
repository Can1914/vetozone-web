import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import { LanguageProvider } from "@/context/LanguageContext";
import SiteLayout from "@/components/layout/SiteLayout";
import Landing from "@/pages/Landing";
import TreatmentAreas from "@/pages/TreatmentAreas";
import Devices from "@/pages/Devices";
import DoctorsSay from "@/pages/DoctorsSay";
import Academy from "@/pages/Academy";
import CaseCenter from "@/pages/CaseCenter";
import ScientificLibrary from "@/pages/ScientificLibrary";
import Corporate from "@/pages/Corporate";
import ContactPage from "@/pages/ContactPage";
import Admin from "@/pages/Admin";

function App() {
  return (
    <LanguageProvider>
      <div className="App">
        <Toaster position="top-center" richColors />
        <BrowserRouter>
          <Routes>
            <Route element={<SiteLayout />}>
              <Route path="/" element={<Landing />} />
              <Route path="/tedavi-alanlari" element={<TreatmentAreas />} />
              <Route path="/cihazlar" element={<Devices />} />
              <Route path="/hekimler-ne-diyor" element={<DoctorsSay />} />
              <Route path="/vetozone-akademi" element={<Academy />} />
              <Route path="/vaka-merkezi" element={<CaseCenter />} />
              <Route path="/bilimsel-kutuphane" element={<ScientificLibrary />} />
              <Route path="/kurumsal" element={<Corporate />} />
              <Route path="/iletisim" element={<ContactPage />} />
            </Route>
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </BrowserRouter>
      </div>
    </LanguageProvider>
  );
}

export default App;
