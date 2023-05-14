import "./style.css"
import gitHubIcon from "./gitHub-black.svg";

// to open in new window GitHub i used target="_blank" rel="noreferrer"
const BtnGitHub = ({link}) => {
    return (  
         <a href={link} target="_blank" rel="noreferrer" className="btn-outline">
    <img src={gitHubIcon} alt=""/>
    GitHub repo
</a>);
}
 
export default BtnGitHub;