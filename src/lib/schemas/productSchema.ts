import { z } from "zod";
import { SetDataSchema } from "./setSchema";


const productSchema = z.object({
    title: z.string().min(6, "Название слишком короткое, минимум 6 символов"),
    description: z.string().min(6, "Описание слишком короткое"),
    location: z.string().min(3),
    price: z.number().int("Ошибка").nonnegative("Цена не должна быть ниже 0"),
});

type ProductSchema = z.infer<typeof productSchema>;

export { productSchema, type ProductSchema };