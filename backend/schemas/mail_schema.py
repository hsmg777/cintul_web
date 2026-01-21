from marshmallow import Schema, fields, validate

class MailSchema(Schema):
    nombre = fields.String(required=True)
    empresa = fields.String(allow_none=True)
    telefono = fields.String(required=True)
    email = fields.Email(required=True)
    producto_interes = fields.String(allow_none=True)
    mensaje = fields.String(allow_none=True)
