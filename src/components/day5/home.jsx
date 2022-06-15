import { useNavigate, Link } from 'react-router-dom'; 

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1>Home Component</h1>
      <Link to='/home/myHome'>Navigate to my home</Link>
      <button onClick={() => navigate('/about')}>Navigate to About</button>
      <button onClick={() => navigate('/contact-us')}>Navigate to Contact US</button>
    </>
  );
};

export default Home;
