import {
  Input,
  Button,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  routes,
  signInSchema,
  AuthService,
  useToast,
  getApiErrorMessage,
  useAuthContext,
} from '@/shared';
import { zodResolver } from '@hookform/resolvers/zod';
import { Label } from '@radix-ui/react-label';
import { useMutation } from '@tanstack/react-query';
import { ChevronRight } from 'lucide-react';
import { type SubmitHandler, useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { z } from 'zod';

export function SignInPage() {
  const { toast } = useToast();
  const { login } = useAuthContext();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
    mode: 'all',
  });

  const { mutate } = useMutation({
    mutationFn: AuthService.login,
  });

  const onSubmit: SubmitHandler<z.infer<typeof signInSchema>> = async (
    data,
  ) => {
    mutate(
      {
        data,
      },
      {
        onSuccess: (res) => {
          login(res.token);
          navigate(routes.root);
        },
        onError: async (err) => {
          const errorMessage = await getApiErrorMessage(err);

          toast({
            variant: 'destructive',
            title: '로그인 실패',
            description: errorMessage,
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
              <h3 className="text-lg font-semibold text-neutral-900">로그인</h3>
            </CardTitle>
          </CardHeader>
          <CardContent>
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
                {...register('password')}
              />
              {errors.password && (
                <span className="text-sm text-red-500">
                  {errors.password?.message}
                </span>
              )}
            </section>
          </CardContent>
          <CardFooter className="flex flex-col">
            <Button disabled={!isValid} className="w-full">
              로그인
            </Button>
            <div className="h-4" />
            <div className="center text-sm text-neutral-400">
              <Link to={routes.auth.signup.root} className="flex items-center">
                가입하고 시작하기 <ChevronRight size={18} />
              </Link>
            </div>
          </CardFooter>
        </Card>
      </main>
    </form>
  );
}
