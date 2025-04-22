import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="lobby">
      <h1>🖼️ Welcome to Deepika's Museum</h1>
      <div className="room-signs">
        <div className="room-sign" onClick={() => navigate('/about')}>🧠 About Me</div>
        <div className="room-sign" onClick={() => navigate('/projects')}>💡 Projects</div>
        <div className="room-sign" onClick={() => navigate('/contact')}>📬 Contact</div>
      </div>
    </div>
  );
};

export default Home;