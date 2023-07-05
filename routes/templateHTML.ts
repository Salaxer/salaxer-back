

const templateHTML = (name: string) => {
    return `
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Correo de Salaxer</title>
    </head>
    <body style="margin: 0; padding: 0; background-color: rgb(26, 26, 27); font-family: Arial, sans-serif;">
        <div style="max-width: 600px; margin: 0 auto; padding: 1rem; color: rgb(238, 238, 238);">
            <header style="font-size: 30px; color: rgb(238, 238, 238); font-weight: 800; text-align: center;">SALAXER</header>
            <h1 style="font-size: 25px; color: rgb(238, 238, 238); text-align: center; margin-top: 1rem;">Hola ${name}!</h1>
            <p style="font-size: 18px; text-align: center;">Muchas gracias por ponerte en contacto conmigo.</p>
            <p style="font-size: 18px; text-align: center; margin-bottom: 10rem;">Muy pronto me estaré poniendo en contacto contigo. Si es de manera urgente, por favor contesta este correo dejando tu número de celular para una comunicación más rápida.</p>
            <footer style="font-size: 17px; color: rgb(238, 238, 238); text-align: center;">
                <p>Saludos y gracias</p>
                <p>Made with ❤ by Salaxer</p>
            </footer>
        </div>
    </body>
    </html>

    `
}

export default templateHTML;