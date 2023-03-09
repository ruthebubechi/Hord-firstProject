import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Home } from "./pages/homepage";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { Navbar } from "./component/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
