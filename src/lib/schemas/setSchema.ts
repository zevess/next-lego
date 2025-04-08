import { z } from 'zod';

export const SetDataSchema = z.object({
  name: z.string(), // Обязательное поле
  id: z.number().optional(), // Необязательное поле
  createdAt: z.date().optional(), // Необязательное поле типа Date
  updatedAt: z.date().optional(), // Необязательное поле типа Date
  set_num: z.string(), // Обязательное поле
  year: z.number(), // Обязательное поле
  theme_id: z.number(), // Обязательное поле
  num_parts: z.number(), // Обязательное поле
  set_img_url: z.string(), // Обязательное поле
  set_url: z.string(), // Обязательное поле
  collectionId: z.string().nullable().optional(), // Может быть string или null, необязательное
  wishesId: z.string().nullable().optional(), // Может быть string или null, необязательное
  productId: z.string().nullable().optional(), // Может быть string или null, необязательное
  user_id: z.string().optional(), // Необязательное поле
});

// Экспортируем тип TypeScript, который можно использовать автоматически
export type SetData = z.infer<typeof SetDataSchema>;