import { z } from "zod";

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(6, "Пароль слишком короткий, минимум 6 символов"),
});

type Schema = z.infer<typeof schema>;

export { schema, type Schema };