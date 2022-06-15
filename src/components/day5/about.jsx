import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1>About Component</h1>
      <button onClick={() => navigate('/home')}>Navigate to Home</button>
      <button onClick={() => navigate('/contact-us')}>Navigate to Contact US</button>
    </>
  );
};

export default About;
