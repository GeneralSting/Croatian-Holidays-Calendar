import { Container, Row } from "react-bootstrap";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import appRoutes from "./routes/Router";

function App() {
  return (
    <>
      <Container>
        <Row style={{ margin: "2rem auto" }}>
          <Routes>
            {appRoutes.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}
          </Routes>
        </Row>
      </Container>
    </>
  );
}

export default App;
