import { Link, useNavigate } from "react-router-dom"
export const Login = () => {
    const navigate = useNavigate()

    const loginUser = ()=>{
        navigate('/')
    }

    return (
        <div className="flex flex-col">
            <h3 className="self-center">Logga in</h3>
            <form className="flex flex-col" onSubmit={loginUser}>
                <label htmlFor="login-username">Användar namn:</label>
                <input type="text" name="login-username" placeholder="..." />
                <label htmlFor="login-password">Användar namn:</label>
                <input type="password" name="login-password" placeholder="..." />
                <button type="submit">Logga in</button>
            </form>
            <p>Har du inget konto, <Link to={'/registrera'} className="underline">Registrera här!</Link></p>
        </div>
    )
}
