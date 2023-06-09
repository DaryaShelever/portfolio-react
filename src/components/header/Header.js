import  './style.css';
import CV from '../../img/cvDaryaShelever.pdf';
 
const Header = () => {
    return (<header className="header">
    <div className="header__wrapper">
        <h1 className="header__title">
            <strong>Hi, my name is <em>Darya</em></strong><br/>
            a Full Stack developer
        </h1>
        <div className="header__text">
            <p>with passion for learning and creating.</p>
        </div>
        <a href={CV} download className="btn">Download CV</a>
    </div>
</header>
);
}
 
export default Header;