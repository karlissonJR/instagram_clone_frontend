import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
    return (
        <div>
            <form>
                <input type="text" placeholder="email"/>
                <input type="password" placeholder="senha"/>

                <button>Entrar</button>
            </form>
            <p>Não tem uma conta? <Link to='/register'>cadastre-se</Link></p>
        </div>
    );
}

export default Login;