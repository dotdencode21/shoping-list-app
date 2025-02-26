import { Route, Routes } from "react-router";
import { Container } from "./components/layout";
import { CategoryPage, ItemPage } from "./pages/public";

function App() {
  return (
    <Routes>
      <Route element={<Container />}>
        <Route path="/" element={<CategoryPage />} />
        <Route path=":category" element={<ItemPage />} />
      </Route>
      <Route path="*" element={<div>404 error</div>} />
    </Routes>
  );
}

export default App;
