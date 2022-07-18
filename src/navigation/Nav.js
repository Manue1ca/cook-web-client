import './nav.css'
import Store from "../store/Store";
import {observer} from "mobx-react-lite";
import {Link} from "react-router-dom";

const Nav = observer(() =>{
    return (
        <>
            <nav>
                <p onClick={()=>Store.menuShow()}><span>Меню</span></p>
                <h1>CookApp</h1>
                <div>Профиль</div>

            </nav>
            <div className={'Menu' + Store.menu}>
                <p className="closeBut" onClick={() =>Store.menuHide()}>X</p>
                <Link to="/recepts">Рецепты</Link>
                <Link to="/">Настройки</Link>
                <Link to="/" >Профиль</Link>
            </div>
        </>
    );
});

export default Nav;