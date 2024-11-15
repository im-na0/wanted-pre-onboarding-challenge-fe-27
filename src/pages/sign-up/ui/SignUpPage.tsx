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
} from '@/shared';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function SignUpPage() {
  return (
    <form>
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
            <section className="flex flex-col gap-2">
              <Label
                htmlFor="email"
                className="text-sm font-medium text-neutral-700"
              >
                이메일
              </Label>
              <Input id="email" placeholder="이메일을 입력해주세요" />
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
                placeholder="비밀번호를 입력해주세요."
                type="password"
              />
            </section>
            <div className="h-4" />
            <section className="flex flex-col gap-2">
              <Label
                htmlFor="password-confirm"
                className="text-sm font-medium text-neutral-700"
              >
                비밀번호 재확인
              </Label>
              <Input
                id="password-confirm"
                placeholder="비밀번호 재확인을 입력해주세요."
                type="password"
              />
            </section>
          </CardContent>
          <CardFooter className="flex flex-col">
            <Button className="w-full">회원가입</Button>
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
