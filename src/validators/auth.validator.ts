import { z } from 'zod';

const loginSchema = z.object({
  email: z.string().min(1),
  password: z.string().min(1),
  firebaseToken: z.string().optional(),
});

type LoginDTO = z.infer<typeof loginSchema>;

export { loginSchema, LoginDTO };
