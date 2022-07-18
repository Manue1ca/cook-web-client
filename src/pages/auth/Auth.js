import React from "react";
import './auth.css'
import {observer} from "mobx-react-lite";
import Store from "../../store/Store";

const Auth = observer(() =>{
    return (
        <div className='auth'>
            <div className='authForm'>
                <img src={require("../../images/auth.png")} alt=""/>
                <h2>Мы - твоя лучшая кулинарная книга!</h2>
                <h3>Готовь из того, что найдешь на кухне - мы поможем тебе с выбором.</h3>

                <button id='registrationBut' onClick={() => Store.logIn()}>Регистрация</button>
                <button id='logIn'>Авторизоваться</button>
            </div>
        </div>
    );
})

export default Auth;