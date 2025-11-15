import { 
  type ContactMessage, 
  type InsertContactMessage,
  type ChatbotMessage,
  type InsertChatbotMessage 
} from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  createContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
  getContactMessages(): Promise<ContactMessage[]>;
  createChatbotMessage(message: InsertChatbotMessage): Promise<ChatbotMessage>;
  getChatbotMessagesBySession(sessionId: string): Promise<ChatbotMessage[]>;
}

export class MemStorage implements IStorage {
  private contactMessages: Map<string, ContactMessage>;
  private chatbotMessages: Map<string, ChatbotMessage>;

  constructor() {
    this.contactMessages = new Map();
    this.chatbotMessages = new Map();
  }

  async createContactMessage(insertMessage: InsertContactMessage): Promise<ContactMessage> {
    const id = randomUUID();
    const message: ContactMessage = {
      ...insertMessage,
      id,
    };
    this.contactMessages.set(id, message);
    return message;
  }

  async getContactMessages(): Promise<ContactMessage[]> {
    return Array.from(this.contactMessages.values());
  }

  async createChatbotMessage(insertMessage: InsertChatbotMessage): Promise<ChatbotMessage> {
    const id = randomUUID();
    const message: ChatbotMessage = {
      ...insertMessage,
      id,
    };
    this.chatbotMessages.set(id, message);
    return message;
  }

  async getChatbotMessagesBySession(sessionId: string): Promise<ChatbotMessage[]> {
    return Array.from(this.chatbotMessages.values())
      .filter(msg => msg.sessionId === sessionId);
  }
}

export const storage = new MemStorage();
