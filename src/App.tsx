import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import BasePage from "./components/BasePage";
import { RoutesList } from "./routes/routes-list";
import { useAppPage } from "./useAppPage";
import PageLoading from "./components/PageLoading";

function App() {
  const page = useAppPage();
  return (
    <div>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <PageLoading open={page.pageLoading} />
      <BasePage>
        <Routes>
          {RoutesList.map((e) => {
            const Element = e.element;
            return (
              <Route
                key={e.path}
                path={e.path}
                element={
                  <BasePage>
                    <Element />
                  </BasePage>
                }
              />
            );
          })}
        </Routes>
      </BasePage>
    </div>
  );
}

export default App;
