import { z } from "zod";

export const createStartupSchema = z.object({
  name: z.string().min(5),
  description: z.string().min(1),
  image: z.string().url(),
  category: z.string(),
});
