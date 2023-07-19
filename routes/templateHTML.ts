

const templateHTML = (name: string) => {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Thank You for Contacting Us</title>
</head>
<body style="margin: 0; width: 100%; background-color: #dbdbdb; display: flex; justify-content: center; padding: 1rem;">
    <table style="max-width: 550px; width: 100%; margin: 0 auto; background-color: #1A1A1B; border-radius: 10px; overflow: hidden;">
        <tr>
            <td style="background-color: #1A1A1B; padding: 0.5rem 1rem;">
                <table style="width: 100%;">
                    <tr>
                        <td style="width: 60px;">
                            <svg style="height: 60px; width: 60px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 485.99 485.99">
                                <g id="Layer_2" data-name="Layer 2">
                                    <g id="Layer_1-2" data-name="Layer 1">
                                    <circle cx="243" cy="243" r="243"/>
                                    <path style="fill:none; stroke:#fff; stroke-miterlimit:10; stroke-width:9px;" 
                                    d="M286.92,442.38A13.17,13.17,0,0,1,274,432l-40.07-179.2-71.77-.39-28,125a13.26,13.26,0,0,1-25.86.06L79.43,252l-31.52-.17a13.25,13.25,0,0,1-12.62-17.07c7-23.21,13.89-47,20.38-69.3a13.26,13.26,0,0,1,25.66.74L96.2,231l49.13.27L185.12,54A13.26,13.26,0,0,1,211,54l39.78,177.89,73.11.4,26.92-117.9a13.26,13.26,0,0,1,25.84-.05L404.14,232.7l33.88.18a13.28,13.28,0,0,1,12.77,16.75c-7,25.72-14,51.15-20.94,76.55a13.26,13.26,0,0,1-25.7-.52l-16.73-72-46.78-.25-40.8,178.68A13.19,13.19,0,0,1,286.92,442.38Z"/>
                                    </g>
                                </g>
                            </svg>
                        </td>
                        <td style="text-align: right;">
                            <h1 style="color: #EEEEEE; font-family: Segoe UI; font-size: 30px; margin: 0; font-weight: 700;">
                                SALAXER
                            </h1>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
        <tr>
            <td style="color: #EEEEEE; background-color: #2c2c2c; padding: 1.5rem; font-family: Segoe UI;">
                <p>Estimado ${name},</p>
                <p>Gracias por ponerte en contacto conmigo. Aprecio sinceramente tu interés en mis servicios como desarrollador front-end y back-end. Estoy emocionado de colaborar contigo en tu proyecto.</p>
                <p>Quiero asegurarte que he recibido tu mensaje y estaré revisando detenidamente tus requerimientos. Tu proyecto es importante para mí, y me comprometo a responder lo antes posible.</p>
                <p>Si tienes alguna consulta urgente o algo que requiere atención inmediata, por favor, no dudes en responder a este correo. Estaré encantado de brindarte una solución lo más rápido posible.</p>
                <p>Una vez más, gracias por considerar mis servicios. Estoy ansioso por trabajar contigo y llevar tu proyecto al siguiente nivel.</p>
                <p>Saludos cordiales,</p>
                <p>Hector Salazar<br>
                Desarrollador Front-end y Back-end</p>
                <p>Telefono: +52 7775073272</p>
            </td>
        </tr>
        <tr>
            <td style="border-top: 1px solid #03C4A1; color: #EEEEEE; background-color: #2c2c2c; padding: 1.5rem; font-family: Segoe UI;">
                <p>Dear ${name},</p>
                <p>Thank you for getting in touch with me. I sincerely appreciate your interest in my services as a front-end and back-end developer. I am excited to collaborate with you on your project.</p>
                <p>I want to assure you that I have received your message and will carefully review your requirements. Your project is important to me, and I commit to responding as soon as possible.</p>
                <p>If you have any urgent queries or require immediate attention, please do not hesitate to reply to this email. I will be delighted to provide you with a solution as quickly as possible.</p>
                <p>Once again, thank you for considering my services. I am eager to work with you and take your project to the next level.</p>
                <p>Best regards,</p>
                <p>Hector Salazar<br>
                Front-end and Back-end Developer</p>
                <p>Phone Number: +52 7775073272</p>
            </td>
        </tr>
        <tr>
            <td style="text-align: center; padding: 1rem; margin: 0;">
                <h6 style="color: #EEEEEE; font-family: Segoe UI; color: #fd367e; margin: 0;"> made with ❤ by SALAXER </h6>
                <table cellpadding="0" cellspacing="0" border="0" align="center" style="width: 100%;">
                    <tr>
                        <td align="center" style="height: 50px;">
                            <table cellpadding="0" cellspacing="0" border="0" align="center" style="display: inline-block;">
                                <tr>
                                    <td style="padding-right: 1rem;">
                                        <a href="https://github.com/Salaxer" target="_blank" rel="noopener noreferrer" data-projection-id="3" style="display: block; height: 30px; width: 30px;">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" version="1.1">
                                                <title>Github icon</title>
                                                <g id="Onboarding-and-Dashboard-Final-07.2020" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                    <g id="GDev-Dashboard-1520px---10a" transform="translate(-66.000000, -644.000000)">
                                                        <g id="Profile" transform="translate(40.000000, 142.000000)">
                                                            <g id="Group" transform="translate(24.000000, 500.000000)">
                                                                <g id="Github-icon" transform="translate(2.000000, 2.000000)" fill="#EEEEEE" fill-rule="nonzero">
                                                                    <path d="M10,0 C4.47833333,0 0,4.4775 0,10 C0,14.4183333 2.865,18.1666667 6.83916667,19.4891667 C7.33833333,19.5816667 7.5,19.2716667 7.5,19.0083333 L7.5,17.1466667 C4.71833333,17.7516667 4.13916667,15.9666667 4.13916667,15.9666667 C3.68416667,14.8108333 3.02833333,14.5033333 3.02833333,14.5033333 C2.12083333,13.8825 3.0975,13.8958333 3.0975,13.8958333 C4.10166667,13.9658333 4.63,14.9266667 4.63,14.9266667 C5.52166667,16.455 6.96916667,16.0133333 7.54,15.7575 C7.62916667,15.1116667 7.88833333,14.67 8.175,14.4208333 C5.95416667,14.1666667 3.61916667,13.3091667 3.61916667,9.47833333 C3.61916667,8.38583333 4.01,7.49416667 4.64916667,6.79416667 C4.54583333,6.54166667 4.20333333,5.52416667 4.74666667,4.1475 C4.74666667,4.1475 5.58666667,3.87916667 7.4975,5.1725 C8.295,4.95083333 9.15,4.84 10,4.83583333 C10.85,4.84 11.7058333,4.95083333 12.505,5.1725 C14.4141667,3.87916667 15.2525,4.1475 15.2525,4.1475 C15.7966667,5.525 15.4541667,6.5425 15.3508333,6.79416667 C15.9925,7.49416667 16.38,8.38666667 16.38,9.47833333 C16.38,13.3191667 14.0408333,14.165 11.8141667,14.4125 C12.1725,14.7225 12.5,15.3308333 12.5,16.2641667 L12.5,19.0083333 C12.5,19.2741667 12.66,19.5866667 13.1675,19.4883333 C17.1383333,18.1641667 20,14.4166667 20,10 C20,4.4775 15.5225,0 10,0 Z" id="Path"></path>
                                                                </g>
                                                                <rect id="Bounding-box" x="0" y="0" width="24" height="24"></rect>
                                                            </g>
                                                        </g>
                                                    </g>
                                                </g>
                                            </svg>
                                        </a>
                                    </td>
                                    <td style="padding-right: 1rem;">
                                        <a href="https://g.dev/Salaxer" target="_blank" rel="noopener noreferrer" data-projection-id="4" style="display: block; height: 30px; width: 30px;">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-9 -5 140 140">
                                                <title>Google Developers</title>
                                                <g fill="#EEEEEE">
                                                    <path d="M92.85 36.376c-3.867-3.95-8.068-6.975-12.522-9.076s-10.085-3.11-16.556-3.11c-5.21 0-10.169.925-14.79 2.773s-8.657 4.454-12.102 7.816c-3.53 3.362-6.303 7.48-8.32 12.27s-3.025 10.084-3.025 15.967 1.008 11.177 3.025 15.967 4.79 8.824 8.32 12.185 7.647 6.051 12.27 7.9 9.664 2.773 14.958 2.773c5.63 0 10.589-.756 14.79-2.353s7.816-3.782 10.842-6.47c2.017-1.85 3.866-4.119 5.462-6.808 1.597-2.773 2.858-5.798 3.782-9.16H63.436V56.881h57.986c.336 1.345.588 2.941.84 4.958s.337 3.866.337 5.799c0 7.983-1.177 15.21-3.53 21.85s-5.967 12.437-10.673 17.564c-5.294 5.63-11.597 9.916-18.992 13.025S73.52 124.7 64.024 124.7c-8.572 0-16.64-1.513-24.203-4.623s-14.202-7.395-19.917-12.857c-5.63-5.463-10.084-11.934-13.446-19.413S1.5 72.007 1.5 63.1s1.68-17.144 4.958-24.707 7.732-14.035 13.446-19.497c5.63-5.463 12.27-9.665 19.917-12.774S55.536 1.5 64.024 1.5c9.749 0 18.404 1.68 25.884 5.042s13.95 7.984 19.413 13.867zM241.848 90.496c0 10.337-3.781 18.657-11.345 24.96-7.647 6.134-16.975 9.244-27.984 9.244-9.749 0-18.405-2.858-25.884-8.572s-12.606-13.53-15.463-23.363l14.454-5.967c1.009 3.53 2.354 6.723 4.118 9.58s3.782 5.295 6.135 7.312 4.958 3.614 7.816 4.79"></path>
                                                </g>
                                            </svg>
                                        </a>
                                    </td>
                                    <td style="padding-right: 1rem;">
                                        <a href="https://twitter.com/Salaxer1" target="_blank" rel="noopener noreferrer" data-projection-id="5" style="display: block; height: 30px; width: 30px;">
                                            <svg viewBox="0 0 24 24" aria-hidden="true" class="r-1fmj7o5 r-4qtqp9 r-yyyyoo r-16y2uox r-8kz0gk r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-lrsllp">
                                                <title>Twitter</title>
                                                <g fill="#EEEEEE">
                                                    <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path>
                                                </g>
                                            </svg>
                                        </a>
                                    </td>
                                    <td style="padding-right: 1rem;">
                                        <a href="https://stackoverflow.com/users/9939795/salaxer" target="_blank" rel="noopener noreferrer" data-projection-id="6" style="display: block; height: 30px; width: 30px;">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" version="1.1">
                                                <title>Stackoverflow</title>
                                                <g id="Onboarding-and-Dashboard-Final-07.2020" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                    <g id="GDev-Dashboard-1520px---10a" transform="translate(-64.000000, -750.000000)">
                                                        <g id="Profile" transform="translate(40.000000, 142.000000)">
                                                            <g id="so-icon" transform="translate(24.000000, 608.000000)">
                                                                <g id="Group" transform="translate(3.000000, 1.000000)" fill="#EEEEEE" fill-rule="nonzero">
                                                                    <polygon id="Path" points="15.0324324 19.1918919 15.0324324 13.5486486 16.9054054 13.5486486 16.9054054 21.0648649 7.10542736e-15 21.0648649 7.10542736e-15 13.5486486 1.87297297 13.5486486 1.87297297 19.1918919"></polygon>
                                                                    <path d="M3.94054054,13.0135135 L13.1351351,14.9351351 L13.5243243,13.0864865 L4.32972973,11.1648649 L3.94054054,13.0135135 L3.94054054,13.0135135 Z M5.15675676,8.63513514 L13.6702703,12.6 L14.4486486,10.8972973 L5.93513514,6.90810811 L5.15675676,8.63513514 Z M7.51621622,4.45135135 L14.7405405,10.4594595 L15.9324324,9.02432432 L8.70810811,3.01621622 L7.51621622,4.45135135 L7.51621622,4.45135135 Z M12.1864865,-3.19744231e-13 L10.6783784,1.11891892 L16.272973,8.65945946 L17.7810811,7.54054054 L12.1864865,-3.19744231e-13 Z M3.74594595,17.2945946 L13.1351351,17.2945946 L13.1351351,15.4216216 L3.74594595,15.4216216 L3.74594595,17.2945946 Z" id="Shape"></path>
                                                                </g>
                                                                <rect id="Bounding-box" x="0" y="0" width="24" height="24"></rect>
                                                            </g>
                                                        </g>
                                                    </g>
                                                </g>
                                            </svg>
                                        </a>
                                    </td>
                                    <td style="padding-right: 1rem;">
                                        <a href="https://www.linkedin.com/in/salaxer/" target="_blank" rel="noopener noreferrer" data-projection-id="7" style="display: block; height: 30px; width: 30px;">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none">
                                                <title>LinkedIn</title>
                                                <path d="M18 0H2C0.9 0 0.00999999 0.9 0.00999999 2L0 18C0 19.1 0.9 20 2 20H18C19.1 20 20 19.1 20 18V2C20 0.9 19.1 0 18 0ZM6 17H3V8H6V17ZM4.5 6.31C3.5 6.31 2.69 5.5 2.69 4.5C2.69 3.5 3.5 2.69 4.5 2.69C5.5 2.69 6.31 3.5 6.31 4.5C6.31 5.5 5.5 6.31 4.5 6.31ZM17 17H14V11.7C14 10.87 13.33 10.2 12.5 10.2C11.67 10.2 11 10.87 11 11.7V17H8V8H11V9.2C11.52 8.36 12.59 7.8 13.5 7.8C15.43 7.8 17 9.37 17 11.3V17Z" fill="#EEEEEE"></path>
                                            </svg>
                                            
                                        </a>
                                    </td>
                                    <td style="padding-right: 1rem;">
                                        <a href="https://www.instagram.com/salaxer1/" target="_blank" rel="noopener noreferrer" data-projection-id="8" style="display: block; height: 30px; width: 30px;">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" version="1.1" preserveAspectRatio="xMidYMid">
                                                <title>Instagram</title>
                                                <g>
                                                    <path d="M127.999746,23.06353 C162.177385,23.06353 166.225393,23.1936027 179.722476,23.8094161 C192.20235,24.3789926 198.979853,26.4642218 203.490736,28.2166477 C209.464938,30.5386501 213.729395,33.3128586 218.208268,37.7917319 C222.687141,42.2706052 225.46135,46.5350617 227.782844,52.5092638 C229.535778,57.0201472 231.621007,63.7976504 232.190584,76.277016 C232.806397,89.7746075 232.93647,93.8226147 232.93647,128.000254 C232.93647,162.177893 232.806397,166.225901 232.190584,179.722984 C231.621007,192.202858 229.535778,198.980361 227.782844,203.491244 C225.46135,209.465446 222.687141,213.729903 218.208268,218.208776 C213.729395,222.687649 209.464938,225.461858 203.490736,227.783352 C198.979853,229.536286 192.20235,231.621516 179.722476,232.191092 C166.227425,232.806905 162.179418,232.936978 127.999746,232.936978 C93.8200742,232.936978 89.772067,232.806905 76.277016,232.191092 C63.7971424,231.621516 57.0196391,229.536286 52.5092638,227.783352 C46.5345536,225.461858 42.2700971,222.687649 37.7912238,218.208776 C33.3123505,213.729903 30.538142,209.465446 28.2166477,203.491244 C26.4637138,198.980361 24.3784845,192.202858 23.808908,179.723492 C23.1930946,166.225901 23.0630219,162.177893 23.0630219,128.000254 C23.0630219,93.8226147 23.1930946,89.7746075 23.808908,76.2775241 C24.3784845,63.7976504 26.4637138,57.0201472 28.2166477,52.5092638 C30.538142,46.5350617 33.3123505,42.2706052 37.7912238,37.7917319 C42.2700971,33.3128586 46.5345536,30.5386501 52.5092638,28.2166477 C57.0196391,26.4642218 63.7971424,24.3789926 76.2765079,23.8094161 C89.7740994,23.1936027 93.8221066,23.06353 127.999746,23.06353 M127.999746,0 C93.2367791,0 88.8783247,0.147348072 75.2257637,0.770274749 C61.601148,1.39218523 52.2968794,3.55566141 44.1546281,6.72008828 C35.7374966,9.99121548 28.5992446,14.3679613 21.4833489,21.483857 C14.3674532,28.5997527 9.99070739,35.7380046 6.71958019,44.1551362 C3.55515331,52.2973875 1.39167714,61.6016561 0.769766653,75.2262718 C0.146839975,88.8783247 0,93.2372872 0,128.000254 C0,162.763221 0.146839975,167.122183 0.769766653,180.774236 C1.39167714,194.398852 3.55515331,203.703121 6.71958019,211.845372 C9.99070739,220.261995 14.3674532,227.400755 21.4833489,234.516651 C28.5992446,241.632547 35.7374966,246.009293 44.1546281,249.28042 C52.2968794,252.444847 61.601148,254.608323 75.2257637,255.230233 C88.8783247,255.85316 93.2367791,256 127.999746,256 C162.762713,256 167.121675,255.85316 180.773728,255.230233 C194.398344,254.608323 203.702613,252.444847 211.844864,249.28042 C220.261995,246.009293 227.400247,241.632547 234.516143,234.516651 C241.632039,227.400755 246.008785,220.262503 249.279912,211.845372 C252.444339,203.703121 254.607815,194.398852 255.229725,180.774236 C255.852652,167.122183 256,162.763221 256,128.000254 C256,93.2372872 255.852652,88.8783247 255.229725,75.2262718 C254.607815,61.6016561 252.444339,52.2973875 249.279912,44.1551362 C246.008785,35.7380046 241.632039,28.5997527 234.516143,21.483857 C227.400247,14.3679613 220.261995,9.99121548 211.844864,6.72008828 C203.702613,3.55566141 194.398344,1.39218523 180.773728,0.770274749 C167.121675,0.147348072 162.762713,0 127.999746,0 Z M127.999746,62.2703115 C91.698262,62.2703115 62.2698034,91.69877 62.2698034,128.000254 C62.2698034,164.301738 91.698262,193.730197 127.999746,193.730197 C164.30123,193.730197 193.729689,164.301738 193.729689,128.000254 C193.729689,91.69877 164.30123,62.2703115 127.999746,62.2703115 Z M127.999746,170.667175 C104.435741,170.667175 85.3328252,151.564259 85.3328252,128.000254 C85.3328252,104.436249 104.435741,85.3333333 127.999746,85.3333333 C151.563751,85.3333333 170.666667,104.436249 170.666667,128.000254 C170.666667,151.564259 151.563751,170.667175 127.999746,170.667175 Z M211.686338,59.6734287 C211.686338,68.1566129 204.809755,75.0337031 196.326571,75.0337031 C187.843387,75.0337031 180.966297,68.1566129 180.966297,59.6734287 C180.966297,51.1902445 187.843387,44.3136624 196.326571,44.3136624 C204.809755,44.3136624 211.686338,51.1902445 211.686338,59.6734287 Z" fill="#EEEEEE"></path>
                                                </g>
                                            </svg>
                                        </a>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
                <p style=" color: #EEEEEE; font-size: 11px; line-height: 18px; padding-top: 12px; margin: 0; font-family: Roboto-Regular,Helvetica,Arial,sans-serif;">We are sending you this email because you have contacted us through our 
                    <a target="_blank" href="https://salaxer.com" style="color: #03C4A1; text-decoration: none;">website</a>.
                </p>
            </td>
        </tr>
    </table>
</body>
</html>
    `
}

export default templateHTML;