import "../styles/Input.css";

export const Input = () => {
    return (
        <div id="form-container">
            <form id="form-compra">
                <fieldset>
                    <label id="name-label">Nombre y Apellido <input id="name" type="text" placeholder="Ingresa tu nombre completo" /></label>
                    <label id="phone-label">Telefono <input id="phone" type="text" placeholder="Ingresa tu n° de telefono" /></label>
                    <label id="email-label">E-mail <input id="email" type="email" placeholder="Ingresa tu email" /></label>
                </fieldset>
                <fieldset>
                    <p>Agrega comentarios, consultas, saludos...</p>
                    <textarea rows="4" cols="30" placeholder="We're having a real moment here..."></textarea>
                </fieldset>
                <input type="submit" value="Enviar" />
            </form>
        </div>
    )
}
