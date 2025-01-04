import { Link } from "react-router-dom"
export const Login = () => {
    return (
        <div className="flex flex-col">
            <h3 className="self-center">Logga in</h3>
            <div className="flex flex-col">
                <label htmlFor="login-username">Användar namn:</label>
                <input type="text" name="login-username" placeholder="..." />
                <label htmlFor="login-password">Användar namn:</label>
                <input type="password" name="login-password" placeholder="..." />
            </div>
            <p>Har du inget konto, <Link to={'/registrera'} className="underline">Registrera här!</Link></p>
        </div>
    )
}
