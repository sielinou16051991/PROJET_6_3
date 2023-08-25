import {Link} from "react-router-dom";

export default function NotFound() {
    return(
        <div className="error-container">
            <p className="message_404">404</p>
            <p className="message_error">Oups! La page que vous demandez n'existe pas.</p>
            <Link to="/" class="message_redirect">Retourner sur la page d’accueil</Link>
        </div>
    )
}
