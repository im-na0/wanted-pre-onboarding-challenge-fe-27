import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  Input,
  CardFooter,
  Button,
  Label,
  routes,
  signUpSchema,
  AuthService,
  getApiErrorMessage,
  useToast,
  useAuthContext,
} from '@/shared';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { ChevronRight } from 'lucide-react';
import { type SubmitHandler, useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { z } from 'zod';

export function SignUpPage() {
  const { toast } = useToast();
  const { login } = useAuthContext();
  const navigate = useNavigate();

  const {
    register,
    getFieldState,
    trigger,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
    mode: 'all',
  });

  const { mutate } = useMutation({
    mutationFn: AuthService.signup,
  });

  const onSubmit: SubmitHandler<z.infer<typeof signUpSchema>> = (data) => {
    mutate(
      { data },
      {
        onSuccess: (res) => {
          login(res.token);
          navigate(routes.root);
        },
        onError: async (err) => {
          const message = await getApiErrorMessage(err);
          toast({
            variant: 'destructive',
            title: '회원가입 실패',
            description: message,
          });
        },
      },
    );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <main className="flex min-h-screen flex-col items-center justify-center">
        <Card className="h-fit w-full max-w-96">
          <CardHeader>
            <CardTitle>
              <h3 className="text-lg font-semibold text-neutral-900">
                회원가입
              </h3>
            </CardTitle>
          </CardHeader>
          <CardContent>
            {/* 이메일 입력 */}
            <section className="flex flex-col gap-2">
              <Label
                htmlFor="email"
                className="text-sm font-medium text-neutral-700"
              >
                이메일
              </Label>
              <Input
                id="email"
                placeholder="이메일을 입력해주세요"
                {...register('email')}
              />
              {errors.email && (
                <span className="text-sm leading-tight text-red-500">
                  {errors.email?.message}
                </span>
              )}
            </section>
            <div className="h-4" />
            {/* 비밀번호 입력 */}
            <section className="flex flex-col gap-2">
              <Label
                htmlFor="password"
                className="text-sm font-medium text-neutral-700"
              >
                비밀번호
              </Label>
              <Input
                id="password"
                placeholder="비밀번호를 입력해주세요"
                type="password"
                {...register('password', {
                  onChange: () => {
                    if (getFieldState('passwordConfirm').isDirty) {
                      trigger('passwordConfirm');
                    }
                  },
                })}
              />
              {errors.password && (
                <span className="text-sm text-red-500">
                  {errors.password?.message}
                </span>
              )}
            </section>
            <div className="h-4" />
            <section className="flex flex-col gap-2">
              {/* 비밀번호 확인 */}
              <Label
                htmlFor="password-confirm"
                className="text-sm font-medium text-neutral-700"
              >
                비밀번호 재확인
              </Label>
              <Input
                id="password-confirm"
                placeholder="비밀번호 재확인을 입력해주세요"
                type="password"
                {...register('passwordConfirm')}
              />
              {errors.passwordConfirm && (
                <span className="text-sm text-red-500">
                  {errors.passwordConfirm?.message}
                </span>
              )}
            </section>
          </CardContent>
          <CardFooter className="flex flex-col">
            {/* 제출 버튼 */}
            <Button disabled={!isValid} className="w-full">
              회원가입
            </Button>
            <div className="h-4" />
            <div className="center text-sm text-neutral-400">
              <Link to={routes.auth.signin.root} className="flex items-center">
                로그인 하러가기 <ChevronRight size={18} />
              </Link>
            </div>
          </CardFooter>
        </Card>
      </main>
    </form>
  );
}
