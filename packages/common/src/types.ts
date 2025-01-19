import { z } from "zod";

export const createUserSchema = z.object({
  name: z.string().min(3).max(20),
  Password: z.string(),
  email: z.string().email(),
});

export const signinSchema = z.object({
  email: z.string().email(),
  Password: z.string(),
});

export const CreateRoomSchema = z.object({
  name: z.string().min(3).max(20),
});
