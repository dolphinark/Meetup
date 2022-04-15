import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import AllMeetupsPage from "./pages/AllMeetups";
import FavoritesPage from "./pages/Favorites";
import NewMeetupsPage from "./pages/NewMeetups";


function App() {
  return (
      <Layout>
      <Routes>
      <Route path="/" element={<AllMeetupsPage />} />     {/*//這邊語法有改 */}
      <Route path="/favorites" element={<FavoritesPage />} />
      <Route path="/newmeetups" element={<NewMeetupsPage />} />        
      </Routes>
      </Layout>
  );
}

export default App;
