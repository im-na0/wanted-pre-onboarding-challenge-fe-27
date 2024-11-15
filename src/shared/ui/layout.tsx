import type { PropsWithChildren } from 'react';

export function Layout({ children }: PropsWithChildren) {
  return (
    <div className="flex h-screen w-screen justify-center bg-white">
      <div className="relative flex w-full max-w-md flex-col bg-gray-50">
        {children}
      </div>
    </div>
  );
}
