import z from 'zod'

// export const userSchema = z
//     .object({
//         name: z.string().min(3, 'Введите имя пользователя').max(55),
//         email: z.string().min(3, 'Введите почту').email('Неправильная почта'),
//         password: z.string().min(1, 'Введите пароль').min(8, 'Пароль должен содержать от 8 символов')
//     })

export const passwordSchema = z.string().min(8, {message: 'Пароль должен содержать от 8 символов'});

export const formLoginSchema = z.object({
    email: z.string().email({message: 'Неверный формат почты'}),
    password: passwordSchema
})

export const formRegisterSchema = formLoginSchema.merge(
    z.object({
        name: z.string().min(3, {message: 'Введите имя'}),
        nick: z.string().min(3, {message: 'Введите ник'}),
        confirmPassword: passwordSchema
    }),
    
).refine((data) => data.password === data.confirmPassword, {
    message: 'Пароли не совпадают',
    path: ['confirmPassword']
})

export type FormLoginValues = z.infer<typeof formLoginSchema>;
export type FormRegisterValues = z.infer<typeof formRegisterSchema>