import React from "react";
import './auth.css'
import {observer} from "mobx-react-lite";
import Store from "../../store/Store";

const Auth = observer(() =>{
    return (
        <>
            <div className='auth authMain'>
                <div className='authForm'>
                    <img src={require("../../images/auth.png")} alt=""/>
                    <h2>Мы - твоя лучшая кулинарная книга!</h2>
                    <h3>Готовь из того, что найдешь на кухне - мы поможем тебе с выбором.</h3>

                    <button id='registrationBut' onClick={() => Store.logIn()}>Регистрация</button>
                    <button id='logIn'>Авторизоваться</button>
                </div>
            </div>
            <div className='auth authLogin'>
                <div className='authForm'>
                    <img src={require("../../images/Blobs.png")} alt=""/>
                    <div className='authContainer'>
                        <div className='authContainerDots'>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <div className='formAuth'>
                            <div><img src={require('../../images/Envelope.png')} alt=""/><input  type="text" placeholder='E-mail'/></div>
                            <div><img src={require('../../images/Key.png')} alt=""/><input type="text" placeholder='Пароль'/></div>
                            <button id='registrationBut' onClick={() => Store.logIn()}>Войти</button>
                            <h3>Нет аккаунта? Зарегистрируйся!</h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
})

export default Auth;