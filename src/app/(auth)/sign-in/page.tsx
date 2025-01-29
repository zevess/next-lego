import { ProviderAuth, SignInForm, Typography } from "@/components/shared";
import { Card, Separator } from "@/components/ui";
import { Button } from "@/components/ui/button";
import { CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { auth, signIn } from "@/lib/auth";
import { executeAction } from "@/lib/executeAction";

import Link from "next/link";
import { redirect } from "next/navigation";

interface Props {
  className?: string
}

export default async function Page({ params: { className } }: { params: Props }) {
  

  return (
    <div className={className}>
      <Card className='mx-auto max-w-[560px]'>
        <CardHeader>
          <Typography variant='h2' text={"Войти"} className='mx-auto' />
        </CardHeader>
        <CardContent>
          <ProviderAuth />
          <div className="flex items-center mt-4 mb-4 gap-4">
            <Separator className="flex-1" />
            <span className="text-muted-foreground">или войти через</span>
            <Separator className="flex-1" />
          </div>
          <SignInForm/>

          <div className="text-center mt-4">
            <Button asChild variant="link">
              <Link href="/sign-up">Ещё нет аккаунта? Создать аккаунт</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>

  );
};

