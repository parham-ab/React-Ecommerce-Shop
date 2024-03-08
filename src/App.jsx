import { Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import mainRoutes from "./routes";
import Layout from "./layout";
import PreLoader from "components/common/Preloader";

const App = () => {
  return (
    <Layout>
    <Routes>
      {mainRoutes.map((item) => (
        <Route
          key={item.title}
          path={item.path}
          element={
            <Suspense fallback={<PreLoader />}>{<item.component />}</Suspense>
          }
        />
      ))}
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
    </Layout>
  );
};

export default App;
