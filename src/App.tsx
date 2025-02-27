import { Route, Routes } from "react-router";
import { Container } from "./components/layout";
import { CategoryPage, ItemPage } from "./pages/public";
import { NotFoundPage } from "./pages/error";

function App() {
  return (
    <Routes>
      <Route element={<Container />}>
        <Route path="/" element={<CategoryPage />} />
        <Route path=":category" element={<ItemPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
