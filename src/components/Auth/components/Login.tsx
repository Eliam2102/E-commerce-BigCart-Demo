import React, { useState } from 'react';
import { z } from 'zod';
import '../../Control/assets/styles/login.css';
import cart_login from '../../Control/assets/img/big_login.svg';
import back_login from '../../Control/assets/img/back_login.svg';
import send_login from '../../Control/assets/img/user_login.svg';
//import { loginUser } from '../../Controller/loginController';
import { encryptData } from '../../Middlewares/encryption';
import axiosInstance from '../../../Api/axiosConfig';

// Definir el esquema de validación usando Zod
const loginSchema = z.object({
    username: z.string().min(1, { message: "El nombre del usuario es requerido" }),
    password: z.string().min(6, 'La contraseña debe tener al menos 6 caracteres'),
});

export type FormData = z.infer<typeof loginSchema>;

function Login() {
    const [formData, setFormData] = useState<FormData>({
        username: '',
        password: '',
    });

    const [formErrors] = useState<z.ZodIssue[] | null>(null);
    const [serverError, setServerError] = useState<string | null>(null);
    const [loginSuccess, setLoginSuccess] = useState<boolean | null>(null);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleLogin = async () => {
        try {
            // Cifrar los datos
            const encryptedUsername = await encryptData(formData.username);
            const encryptedPassword = await encryptData(formData.password);
    
            if (!encryptedUsername || !encryptedPassword) {
                throw new Error('Error de cifrado: Username o Password no definidos');
            }

            // Enviar los datos como un objeto
            const response = await axiosInstance.post('/user/loginUsuario', {
                dataSegura: {
                    username: encryptedUsername,
                    password: encryptedPassword,
                },
            });
    
            // Procesar la respuesta
            const result = response.data;
            console.log("Login frontend", result);
            
            // Manejo de éxito en el inicio de sesión
            setLoginSuccess(true);
        } catch (error) {
            console.error("Error al cifrar o enviar datos:", error);
            setServerError("Error al iniciar sesión. Inténtalo de nuevo.");
            setLoginSuccess(false);
        }
    }; 
    
    return (
        <form className='FormLogin' onSubmit={(event) => event.preventDefault()}>
            <div className='ContentFormLogin'>
                <div className='titleLogin'>
                    <h1>LOGIN IN</h1>
                </div>
                <div className='name'>
                    <label htmlFor='username'>User</label>
                    <input
                        type='text'
                        id='username'
                        name='username'
                        value={formData.username}
                        onChange={handleChange}
                    />
                    {formErrors?.find((issue) => issue.path[0] === 'username') && (
                        <span>
                            {formErrors.find((issue) => issue.path[0] === 'username')?.message}
                        </span>
                    )}
                </div>
                <div className='password'>
                    <label htmlFor='password'>Password</label>
                    <input
                        type='password'
                        id='password'
                        name='password'
                        value={formData.password}
                        onChange={handleChange}
                    />
                    {formErrors?.find((issue) => issue.path[0] === 'password') && (
                        <span>
                            {formErrors.find((issue) => issue.path[0] === 'password')?.message}
                        </span>
                    )}
                </div>
                {serverError && <span className="error">{serverError}</span>}
                {loginSuccess && <span className="success">Inicio de sesión exitoso</span>}
                <div className='buttonAction'>
                    <button className='go-back' type='button' onClick={() => {/* Manejar el regreso */} }>
                        <img src={back_login} alt="Back" />
                    </button>
                    <button className='send' type='button' onClick={handleLogin}>
                        <img src={send_login} alt="Send" />
                    </button>
                </div>
            </div>
            <div className='cart_login'>
                <img src={cart_login} alt="Login" className='cart-login' />
            </div>
        </form>
    );
}

export default Login;