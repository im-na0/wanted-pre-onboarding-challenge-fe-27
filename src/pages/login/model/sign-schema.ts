import { z } from 'zod';

const emailSchema = z
  .string()
  .trim()
  .min(1, '이메일을 입력해주세요.')
  .email('이메일 형식이 올바르지 않습니다.');
const passwordSchema = z
  .string()
  .min(8, '비밀번호는 최소 8자 이상이어야 합니다.');

const signInSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
});

const signUpSchema = z
  .object({
    email: emailSchema,
    password: passwordSchema,
    passwordConfirm: passwordSchema,
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: '비밀번호가 일치하지 않습니다.',
    path: ['passwordConfirm'],
  });

export { signInSchema, signUpSchema };
