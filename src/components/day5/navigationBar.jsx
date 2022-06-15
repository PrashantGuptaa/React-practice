import { Link } from 'react-router-dom';

const NavigationBar = () => {
    return (

        <div style={{display: 'flex', gap: '10px'}}>
            <Link to='/home'>Home</Link>
            <Link to='/about'>About</Link>
            <a href='/contact-us'>Contact Us</a>
        
        </div>
     );
}
 
export default NavigationBar;