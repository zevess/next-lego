import { z } from "zod";

const formSchema = z.object({
  email: z.string().email('Некорректный email'),
  password: z.string().min(6, "Пароль слишком короткий, минимум 6 символов"),
});

type FormSchema = z.infer<typeof formSchema>;

export { formSchema, type FormSchema };