import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema, insertChatbotMessageSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactMessageSchema.parse(req.body);
      const message = await storage.createContactMessage(validatedData);
      res.json({ success: true, message });
    } catch (error: any) {
      res.status(400).json({ 
        success: false, 
        error: error.message || "Invalid request data" 
      });
    }
  });

  app.get("/api/contact", async (_req, res) => {
    try {
      const messages = await storage.getContactMessages();
      res.json({ success: true, messages });
    } catch (error: any) {
      res.status(500).json({ 
        success: false, 
        error: error.message || "Failed to retrieve messages" 
      });
    }
  });

  app.post("/api/chatbot/message", async (req, res) => {
    try {
      const validatedData = insertChatbotMessageSchema.parse(req.body);
      const message = await storage.createChatbotMessage(validatedData);
      res.json({ success: true, message });
    } catch (error: any) {
      res.status(400).json({ 
        success: false, 
        error: error.message || "Invalid request data" 
      });
    }
  });

  app.get("/api/chatbot/session/:sessionId", async (req, res) => {
    try {
      const { sessionId } = req.params;
      const messages = await storage.getChatbotMessagesBySession(sessionId);
      res.json({ success: true, messages });
    } catch (error: any) {
      res.status(500).json({ 
        success: false, 
        error: error.message || "Failed to retrieve messages" 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
