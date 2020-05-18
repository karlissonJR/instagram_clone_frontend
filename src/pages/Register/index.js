import React from 'react';
import { Link } from 'react-router-dom';

function Register() {
    return (
        <div>
            <form>
                <input type="text" placeholder="email"/>
                <input type="text" placeholder="nome completo"/>
                <input type="text" placeholder="nome de usuário"/>
                <input type="password" placeholder="senha"/>

                <button>Cadastre-se</button>
            </form>
            <p>Tem uma conta? <Link to='/login'>conecte-se</Link></p>
        </div>
    );
}

export default Register;