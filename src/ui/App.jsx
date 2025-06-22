import { HashRouter as Router, Link, Route, Routes, useNavigate } from "react-router-dom"
import Home from "./pages/home";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<GetStart />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>

  )
}

export default App



function GetStart() {
  const navigate = useNavigate()
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <header className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-gray-800 mt-4">Welcome to Electron JS App</h1>
        <p className="text-gray-600 mt-2">Build modern desktop applications with React and Electron.</p>
      </header>
      <main className="mt-8">
        <button
          onClick={() => navigate("/home")}
          className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
          Get Start
        </button>
        {/* <Link
          to={'/pages/home.jsx'}
        >
          <span className="text-white">

            Get Start
          </span> */}
        {/* </Link> */}

      </main>
    </div>
  )
}