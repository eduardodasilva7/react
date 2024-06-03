import './style.css';
import Logo from "../Logo";
import OptionsHeader from "../OptionsHeader";
import IconesHeader from "../IconesHeader";

function Header () {
    return (
        <header className="App-Header">
            <Logo />
            <OptionsHeader />
            <IconesHeader />
        </header>
    )
}

export default Header;