import { ProviderAuth, SignInForm, Typography } from "@/components/shared";
import { Card, Separator } from "@/components/ui";
import { Button } from "@/components/ui/button";
import { CardContent, CardHeader } from "@/components/ui/card";
import { auth } from "@/lib/auth";
import { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  return {
    title: "Войти"
  };
}

export default async function Page() {
  const session = await auth();
  if (session) redirect("/");
  return (
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
        <SignInForm />

        <div className="text-center mt-4">
          <Button asChild variant="link">
            <Link href="/sign-up">Ещё нет аккаунта? Создать аккаунт</Link>
          </Button>
        </div>
      </CardContent>
    </Card>


  );
};

