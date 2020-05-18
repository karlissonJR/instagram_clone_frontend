import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';

import api from '../../api';

function Register() {

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();

    async function handleRegister(event) {
        event.preventDefault();

        try {

            const response = await api.post('/user/new', {
                email,
                name,
                username,
                password
            });

            history.push('/login');

        } catch (error) {
            alert('Falha no Cadastro');
        }
    }

    return (
        <div>
            <form onSubmit={handleRegister}>
                <input
                    type="email"
                    placeholder="email"
                    value={email}
                    onChange={event => setEmail(event.target.value)}
                />

                <input
                    type="text"
                    placeholder="nome completo"
                    value={name}
                    onChange={event => setName(event.target.value)}
                />

                <input
                    type="text"
                    placeholder="nome de usuário"
                    value={username}
                    onChange={event => setUsername(event.target.value)}
                />

                <input
                    type="password"
                    placeholder="senha"
                    value={password}
                    onChange={event => setPassword(event.target.value)}
                />

                <button type="submit">Cadastre-se</button>
            </form>
            <p>Tem uma conta? <Link to='/login'>conecte-se</Link></p>
        </div>
    );
}

export default Register;