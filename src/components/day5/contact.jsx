import { useNavigate } from 'react-router-dom'; 

const Contact = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1>Contact Component</h1>
      <button onClick={() => navigate('/about')}>Navigate to About</button>
      <button onClick={() => navigate('/home')}>Navigate to Home</button>
    </>
  );
};

export default Contact;
