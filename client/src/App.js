import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Auth/Login";
import { Toaster } from "react-hot-toast";
import Dashboard from "./pages/dashboard/Dashboard";
import AllJobs from "./pages/Jobs/AllJobs";
import AllTasks from "./pages/Tasks/AllTasks";
import AllLists from "./pages/lists/AllLists";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/my_list" element={<AllLists />} />
          <Route path="/tasks" element={<AllTasks />} />
          <Route path="/job-planning" element={<AllJobs />} />
        </Routes>
        <Toaster />
      </BrowserRouter>
    </div>
  );
}

export default App;
