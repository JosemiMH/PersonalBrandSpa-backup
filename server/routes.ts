import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { contactSchema, newsletterSchema } from "@shared/schema";
import { z } from "zod";
import { ZodError } from "zod-validation-error";
import { handleChatRequest } from "./api/chat";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form endpoint
  app.post('/api/contact', async (req, res) => {
    try {
      const contactData = contactSchema.parse(req.body);
      const savedContact = await storage.createContact(contactData);
      
      return res.status(200).json({
        success: true,
        message: "Mensaje enviado correctamente",
        data: savedContact
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({
          success: false,
          message: "Datos del formulario inválidos",
          errors: error.errors
        });
      }
      
      return res.status(500).json({
        success: false,
        message: "Error al procesar la solicitud"
      });
    }
  });

  // Newsletter subscription endpoint
  app.post('/api/newsletter', async (req, res) => {
    try {
      const newsletterData = newsletterSchema.parse(req.body);
      const savedSubscription = await storage.createNewsletterSubscription(newsletterData);
      
      return res.status(200).json({
        success: true,
        message: "Suscripción completada correctamente",
        data: savedSubscription
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({
          success: false,
          message: "Email inválido",
          errors: error.errors
        });
      }
      
      return res.status(500).json({
        success: false,
        message: "Error al procesar la suscripción"
      });
    }
  });

  // Chatbot API endpoint
  app.post('/api/chat', handleChatRequest);

  // Create HTTP server
  const httpServer = createServer(app);

  return httpServer;
}
