import { Request, Response } from 'express';
import OpenAI from 'openai';

// Inicializar la API de OpenAI
// Nota: Deberás añadir tu OPENAI_API_KEY como variable de entorno
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Información contextual sobre Eva Pérez y sus servicios
const contextInfo = `
Eva Pérez es una Experta en Estrategia de Hospitalidad y Bienestar de Lujo, 
especializada en la transformación de áreas de Wellness en hoteles para 
convertirlas en motores de crecimiento estratégico.

Sus servicios principales incluyen:
1. Consultoría estratégica para áreas wellness en hoteles
2. Gestión de proyectos de SPA 
3. Optimización de ingresos para centros wellness
4. Formación y desarrollo de equipos

Eva cuenta con más de 20 años de experiencia en el sector, 
optimizando operaciones, formando equipos excepcionales 
y elevando la satisfacción del cliente.
`;

export async function handleChatRequest(req: Request, res: Response) {
  try {
    const { messages } = req.body;

    // Validar que se recibieron los mensajes
    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: 'Se requiere un array de mensajes' });
    }

    // Asegurar que el primer mensaje incluya el contexto
    const systemMessage = {
      role: 'system',
      content: `Eres el asistente virtual de Eva Pérez. ${contextInfo}
                Responde de manera profesional, cálida y concisa.
                Enfócate en ayudar a potenciales clientes a entender cómo Eva puede ayudarles.
                Si no sabes la respuesta, sugiere contactar directamente con Eva a través del formulario de contacto.
                Responde en el mismo idioma en que te preguntan (español o inglés).`
    };

    // Obtener la respuesta de la API de OpenAI
    const chatCompletion = await openai.chat.completions.create({
      model: "gpt-4o", // El modelo más reciente de OpenAI
      messages: [systemMessage, ...messages],
      max_tokens: 500,
      temperature: 0.7,
    });

    // Enviar la respuesta al cliente
    res.json({
      response: chatCompletion.choices[0].message,
      usage: chatCompletion.usage,
    });

  } catch (err) {
    const error = err as Error;
    console.error('Error en la API de chat:', error);
    res.status(500).json({ 
      error: 'Error al procesar la solicitud del chat',
      details: error.message || 'Error desconocido'
    });
  }
}