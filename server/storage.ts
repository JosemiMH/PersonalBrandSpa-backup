import { users, type User, type InsertUser } from "@shared/schema";
import { type Contact, type InsertContact } from "@shared/schema";
import { type Newsletter, type InsertNewsletter } from "@shared/schema";

// Define storage interface for CRUD operations
export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  createContact(contact: InsertContact): Promise<Contact>;
  getAllContacts(): Promise<Contact[]>;
  
  createNewsletterSubscription(subscription: InsertNewsletter): Promise<Newsletter>;
  getAllNewsletterSubscriptions(): Promise<Newsletter[]>;
}

// In-memory storage implementation
export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private contacts: Map<number, Contact>;
  private newsletterSubscriptions: Map<number, Newsletter>;
  
  private currentUserId: number;
  private currentContactId: number;
  private currentNewsletterId: number;

  constructor() {
    this.users = new Map();
    this.contacts = new Map();
    this.newsletterSubscriptions = new Map();
    
    this.currentUserId = 1;
    this.currentContactId = 1;
    this.currentNewsletterId = 1;
  }

  // User methods
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
  
  // Contact methods
  async createContact(insertContact: InsertContact): Promise<Contact> {
    const id = this.currentContactId++;
    const createdAt = new Date();
    const contact: Contact = { ...insertContact, id, createdAt };
    this.contacts.set(id, contact);
    return contact;
  }
  
  async getAllContacts(): Promise<Contact[]> {
    return Array.from(this.contacts.values());
  }
  
  // Newsletter methods
  async createNewsletterSubscription(insertNewsletter: InsertNewsletter): Promise<Newsletter> {
    // Check if email already exists
    const existingSubscription = Array.from(this.newsletterSubscriptions.values()).find(
      sub => sub.email === insertNewsletter.email
    );
    
    if (existingSubscription) {
      return existingSubscription;
    }
    
    const id = this.currentNewsletterId++;
    const createdAt = new Date();
    const subscription: Newsletter = { ...insertNewsletter, id, createdAt };
    this.newsletterSubscriptions.set(id, subscription);
    return subscription;
  }
  
  async getAllNewsletterSubscriptions(): Promise<Newsletter[]> {
    return Array.from(this.newsletterSubscriptions.values());
  }
}

// Export a singleton instance of the storage
export const storage = new MemStorage();
