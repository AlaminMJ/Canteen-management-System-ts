import { z } from 'zod';
import { TypeOf } from 'zod/lib';

const create = z.object({
    body: z
        .object({
            name: z.string(),
            email: z.string().email({ message: 'Enter a valid Email address' }),
            password: z
                .string()
                .min(
                    6,
                    'Password is too short | Password must more than six chars'
                ),
            confirmPassword: z.string(),
        })
        .refine((data) => data.password === data.confirmPassword, {
            message: 'Password not match',
        }),
});

export type CreateUserInput = TypeOf<typeof create>['body'];
export default { create };
