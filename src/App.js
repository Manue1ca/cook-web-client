import Auth from "./pages/auth/Auth";
import Store from "./store/Store";
import {observer} from "mobx-react-lite";
import React from "react";
import Nav from "./navigation/Nav";
import Main from "./pages/main/Main";
import Recepts from "./pages/recepts/Recepts";
import { Routes , Route } from "react-router-dom"

const App = observer(() =>{

    if (Store.logining === false){
        return (
            <>
                <Auth/>
            </>
        );
    }
    else{
        return (
                <div className='app-wraper'>
                    <Nav/>
                    <div className={'app-wraper-content '+'blur'+Store.menu} onClick={()=>Store.menuHide()}>
                        <Routes>
                            <Route path='/' element={<Main/>}/>
                            <Route path='recepts'element={<Recepts/>}/>
                        </Routes>
                    </div>
                </div>

        )
    }
})


export default App;
