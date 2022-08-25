import Header from "./components/header/Header";
import Track from "./pages/Track";
import {Navigate, Route, Routes} from "react-router-dom";
import AllTricks from "./pages/AllTricks";
import MyTricks from "./pages/MyTricks";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import ViewNotes from "./pages/ViewNotes";
import Footer from "./components/footer/Footer";
import classes from './App.module.css';
import VideoTutorial from "./pages/VideoTutorial";

function App() {
  return (
    <div className={classes.body}>
      <Header />
        <Routes>
            <Route path={'/all-tricks'} element={<AllTricks />} />
            <Route path={'/my-tricks'} element={<MyTricks />} />
            <Route path={'/my-tricks/:trickId'} element={<Track />} />
            <Route path={'/profile'} element={<Profile />} />
            <Route path={'/login'} element={<Login mode={'login'} />} />
            <Route path={'/sign-up'} element={<Login mode={'sign-up'} />} />
            <Route path={'/notes/:trickId'} element={<ViewNotes />} />
            <Route path={'/video-tutorial/:trickId'} element={<VideoTutorial />} />
            <Route path={'*'} element={<Navigate to={'/all-tricks'} replace />} />
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
