import { Route, Routes } from "react-router";
import { Container } from "./components/layout";
import { CategoryPage, ItemPage } from "./pages/public";
import { ErrorBoundary } from "react-error-boundary";

function App() {
  return (
    <Routes>
      <Route
        element={
          <ErrorBoundary fallback={<div>internal error</div>}>
            <Container />
          </ErrorBoundary>
        }
      >
        <Route path="/" element={<CategoryPage />} />
        <Route path=":category" element={<ItemPage />} />
      </Route>
      <Route path="*" element={<div>404 error</div>} />
    </Routes>
  );
}

export default App;
