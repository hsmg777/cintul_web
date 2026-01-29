from flask_smorest import Blueprint, abort
from flask import request
import smtplib
from email.message import EmailMessage
from schemas.mail_schema import MailSchema
import os
from datetime import datetime

mail_bp = Blueprint("mail", __name__, url_prefix="/api", description="Endpoints para envío de correos")

# SMTP config
EMAIL_ADDRESS = os.getenv("EMAIL_ADDRESS")
EMAIL_PASSWORD = os.getenv("EMAIL_PASSWORD")
SMTP_SERVER = os.getenv("SMTP_SERVER", "smtp.gmail.com")
SMTP_PORT = int(os.getenv("SMTP_PORT", 587))
MAIL_SENDER = os.getenv("MAIL_SENDER", EMAIL_ADDRESS)



@mail_bp.route("/send-email", methods=["POST"])
@mail_bp.arguments(MailSchema)
@mail_bp.response(200, description="Correo enviado correctamente")
def send_email(data):
    """
    Enviar correo de contacto CINTUL
    """

    nombre = data.get("nombre")
    empresa = data.get("empresa", "No especificada")
    telefono = data.get("telefono")
    email = data.get("email")
    producto_interes = data.get("producto_interes", "No especificado")
    mensaje = data.get("mensaje", "")
    
    currentYear = datetime.now().year

    try:
        msg = EmailMessage()
        msg["Subject"] = f"👷 Nueva solicitud de información – {nombre}"
        msg["From"] = MAIL_SENDER
        msg["To"] = "osc_german243@hotmail.com"
        
        # ----------- PLAIN TEXT -----------
        msg.set_content(
            f"""
Nueva solicitud de información técnica recibida (CINTUL)

Nombre: {nombre}
Empresa: {empresa}
Teléfono: {telefono}
Email: {email}
Producto de Interés: {producto_interes}
Mensaje: {mensaje}

Notificación automática – CINTUL Web
"""
        )

        # ----------- HTML PROFESIONAL -----------
        msg.add_alternative(
            f"""
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nueva Solicitud CINTUL</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f1f5f9; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
    
    <!-- Main Container -->
    <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; margin: 40px auto; background-color: #ffffff; border-radius: 16px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); overflow: hidden;">
        
        <!-- Header -->
        <tr>
            <td style="background-color: #0f172a; padding: 40px 20px; text-align: center; border-bottom: 4px solid #facc15;">
                <!-- Logo Placehoder / Text -->
                <h1 style="color: #ffffff; margin: 0; font-size: 32px; font-weight: 800; letter-spacing: -0.025em;">CINTUL</h1>
                <p style="color: #facc15; margin: 8px 0 0 0; font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em;">Seguridad Industrial</p>
            </td>
        </tr>

        <!-- Banner / Title -->
        <tr>
            <td style="padding: 40px 40px 20px 40px; text-align: center;">
                <div style="background-color: #fefce8; border: 1px solid #fef08a; border-radius: 12px; padding: 16px; display: inline-block;">
                    <h2 style="color: #854d0e; margin: 0; font-size: 18px; font-weight: 700;">Nueva Solicitud de Información</h2>
                </div>
                <p style="color: #64748b; font-size: 16px; line-height: 1.6; margin-top: 24px;">
                    Has recibido un nuevo mensaje a través del formulario web. A continuación los detalles del contacto:
                </p>
            </td>
        </tr>

        <!-- Content Details -->
        <tr>
            <td style="padding: 0 40px 40px 40px;">
                <table border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: separate; border-spacing: 0;">
                    
                    <!-- Nombre -->
                    <tr>
                        <td width="35%" style="background-color: #f8fafc; padding: 16px; border-top: 1px solid #e2e8f0; border-bottom: 1px solid #e2e8f0; border-right: 1px solid #e2e8f0; border-radius: 8px 0 0 0; font-weight: 600; color: #475569; font-size: 14px;">
                            Nombre
                        </td>
                        <td style="background-color: #ffffff; padding: 16px; border-top: 1px solid #e2e8f0; border-bottom: 1px solid #e2e8f0; border-radius: 0 8px 0 0; color: #0f172a; font-weight: 500; font-size: 15px;">
                            {nombre}
                        </td>
                    </tr>

                    <!-- Empresa -->
                    <tr>
                        <td style="background-color: #f8fafc; padding: 16px; border-bottom: 1px solid #e2e8f0; border-right: 1px solid #e2e8f0; font-weight: 600; color: #475569; font-size: 14px;">
                            Empresa
                        </td>
                        <td style="background-color: #ffffff; padding: 16px; border-bottom: 1px solid #e2e8f0; color: #0f172a; font-weight: 500; font-size: 15px;">
                            {empresa}
                        </td>
                    </tr>

                    <!-- Teléfono -->
                    <tr>
                        <td style="background-color: #f8fafc; padding: 16px; border-bottom: 1px solid #e2e8f0; border-right: 1px solid #e2e8f0; font-weight: 600; color: #475569; font-size: 14px;">
                            Teléfono
                        </td>
                        <td style="background-color: #ffffff; padding: 16px; border-bottom: 1px solid #e2e8f0; color: #0f172a; font-weight: 500; font-size: 15px;">
                            <a href="tel:{telefono}" style="color: #0f172a; text-decoration: none;">{telefono}</a>
                        </td>
                    </tr>

                    <!-- Email -->
                    <tr>
                        <td style="background-color: #f8fafc; padding: 16px; border-bottom: 1px solid #e2e8f0; border-right: 1px solid #e2e8f0; font-weight: 600; color: #475569; font-size: 14px;">
                            Email
                        </td>
                        <td style="background-color: #ffffff; padding: 16px; border-bottom: 1px solid #e2e8f0; color: #0f172a; font-weight: 500; font-size: 15px;">
                            <a href="mailto:{email}" style="color: #2563eb; text-decoration: none;">{email}</a>
                        </td>
                    </tr>

                    <!-- Producto de Interés -->
                    <tr>
                        <td style="background-color: #fffbeb; padding: 16px; border-bottom: 1px solid #fef08a; border-right: 1px solid #fef08a; font-weight: 600; color: #854d0e; font-size: 14px;">
                            Interesado en
                        </td>
                        <td style="background-color: #ffffff; padding: 16px; border-bottom: 1px solid #e2e8f0; color: #0f172a; font-weight: 600; font-size: 15px;">
                            {producto_interes}
                        </td>
                    </tr>

                    <!-- Mensaje -->
                    <tr>
                        <td colspan="2" style="padding-top: 24px;">
                            <p style="margin: 0 0 8px 0; font-weight: 600; color: #475569; font-size: 14px;">Mensaje del usuario:</p>
                            <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 20px; color: #334155; font-size: 15px; line-height: 1.6;">
                                {mensaje}
                            </div>
                        </td>
                    </tr>

                </table>
            </td>
        </tr>

        <!-- Footer -->
        <tr>
            <td style="background-color: #f8fafc; padding: 30px; text-align: center; border-top: 1px solid #e2e8f0;">
                <p style="color: #94a3b8; font-size: 12px; margin: 0 0 8px 0;">Este mensaje fue enviado automáticamente desde el sitio web de CINTUL.</p>
                <p style="color: #94a3b8; font-size: 12px; margin: 0;">&copy; {currentYear} CINTUL. Todos los derechos reservados.</p>
            </td>
        </tr>

    </table>

</body>
</html>
            """,
            subtype="html",
        )


        # ----------- ENVÍO DEL CORREO -----------
        with smtplib.SMTP(SMTP_SERVER, SMTP_PORT) as smtp:
            smtp.starttls()
            smtp.login(EMAIL_ADDRESS, EMAIL_PASSWORD)
            smtp.send_message(msg)

        return {"success": True, "message": "Correo enviado correctamente"}

    except Exception as e:
        print("❌ Error al enviar correo:", repr(e))
        abort(500, message=f"No se pudo enviar el correo: {str(e)}")
