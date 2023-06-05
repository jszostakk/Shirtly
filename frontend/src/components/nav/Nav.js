import React from 'react';
import './Nav.css';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.css';

class Nav extends React.Component{
    render(){
        return <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <img src="https://i.imgur.com/ySk57z6.png"/>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link active" aria-current="page" href="#">Strona Głowna</a>
                        <a className="nav-link active" aria-current="page" href="#">Kołnierze</a>
                        <a className="nav-link active" aria-current="page" href="#">Mankiety</a>
                        <a className="nav-link active" aria-current="page" href="#">Dodatki</a>
                        <form action="/login" method="POST" className="login">
                        <div>
                                <label htmlFor='email'>Email</label>
                                <input type="text" id="email" name="email"/>
                            </div>
                            <div>
                                <label htmlFor='password'>Password</label>
                                <input type="password" id="password" name="password" />
                            </div>
                            <button type="submit">Zaloguj</button>
                        </form>
                    </div>
                </div>
            </div>
        </nav>
    }
}

export default Nav;