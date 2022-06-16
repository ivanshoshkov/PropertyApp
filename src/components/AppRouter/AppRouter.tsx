import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PropertiesList from "src/components/PropertiesList";
import PropertyItem from "src/components/PropertyItem";
import Navbar from "src/components/Navbar";
import Wrapper from "src/components/common/Wrapper";
import NotFound from "src/components/NotFound";
const title = "Property App";

const AppRouter = () => {
  return (
    <Router>
      <Navbar title={title} />
      <Wrapper>
        <Routes>
          <Route
            path="/"
            element={<PropertiesList/>}
          />
          <Route
            path="/property/:id"
            element={<PropertyItem/>}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Wrapper>
    </Router>
  );
};

export default AppRouter;
