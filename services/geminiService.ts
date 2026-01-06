import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { Message } from "../types";

const apiKey = import.meta.env.VITE_API_KEY || '';

// System instruction for the "Mine" persona
const SYSTEM_INSTRUCTION = `
Eres "Mine", un compañero digital de viaje inteligente, amigable y entusiasta. Tu forma es la de una mascota digital futurista.
Tu misión es ayudar a los viajeros internacionales, especialmente aquellos que viajan a México, Estados Unidos y Canadá (sedes del mundial).

Tus funciones principales son:
1. Conectividad: Ayudar con eSIMs, explicar cómo funcionan, sugerir planes de datos.
2. Finanzas: Ayudar con la tarjeta Mine Visa, conversiones de moneda y consejos de ahorro.
3. Asistencia: Dar consejos de seguridad, rutas turísticas y recomendaciones locales.

Tono de voz:
- Amigable, energético y útil.
- Usa emojis ocasionalmente para ser expresivo ✈️ 🌍 💳.
- Sé conciso en tus respuestas, ideal para chat móvil.
- Si te preguntan algo fuera de viajes, redirige amablemente al tema de viajes.

Contexto actual: El usuario está usando la web app de Mine.
`;

let chatSession: Chat | null = null;
let genAI: GoogleGenAI | null = null;

export const initializeChat = () => {
  if (!apiKey) {
    console.error("API Key is missing");
    return;
  }
  
  try {
    genAI = new GoogleGenAI({ apiKey });
    chatSession = genAI.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      }
    });
  } catch (error) {
    console.error("Error initializing Gemini:", error);
  }
};

export const sendMessageToMine = async (text: string): Promise<string> => {
  if (!chatSession) {
    initializeChat();
    if (!chatSession) return "Lo siento, no puedo conectarme en este momento. Verifica tu configuración.";
  }

  try {
    const response: GenerateContentResponse = await chatSession!.sendMessage({ message: text });
    return response.text || "Lo siento, tuve un problema pensando una respuesta.";
  } catch (error) {
    console.error("Error sending message:", error);
    return "Ocurrió un error de conexión. Intenta de nuevo.";
  }
};
