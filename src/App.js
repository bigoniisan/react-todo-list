import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginForm from './pages/LoginForm';
import SignUpForm from './pages/SignUpForm';
import UploadVideo from './pages/UploadVideo';
import UserChannel from './pages/UserChannel';
import VideoPlayer from './pages/VideoPlayer';

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignUpForm />} />
          <Route path="/user" element={<UserChannel />} />
          <Route path="/upload" element={<UploadVideo />} />
          {/* need random video path string */}
          <Route path="/video" element={<VideoPlayer />} />
      </Routes>
    </div>
    
  );
}

export default App;
