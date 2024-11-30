import { BrowserRouter as Router, Routes, Route } from "react-router";
import { EmployeePage } from "./Pages/EmployeePage";
function App() {
  return (
    <div style={{ backgroundColor: "var(--background-color)" }}>
      <Router>
        <Routes>
          <Route path="/employee/:id" element={<EmployeePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
