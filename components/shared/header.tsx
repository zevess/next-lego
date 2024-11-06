import { auth } from "@/auth";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Logo } from "./logo";
import { User } from "lucide-react";
import { StyledLink } from "./link";
import { AlertExit } from "./alert-exit";
import { ThemeToggle } from "./theme-toggler";



interface Props {
  className?: string

}

export const Header: React.FC<Props> = async ({ className }) => {

  const session = await auth();
  


  return (
    <header className={cn('flex items-center justify-between mb-5', className)}>
      <Link href={'/'}>
        <Logo />
      </Link>
      <Link href={ !session ? '/sign-in' : `/profile/${session?.user?.id}`}>
        <User className='text-black hover:text-orange-400 transition-colors duration-300 dark:text-white dark:hover:text-orange-400' />

      </Link>
      {!session?.user ? (
        <StyledLink href={'/sign-in'}>Войти</StyledLink>

      ) :
        <AlertExit/>
      }
      <ThemeToggle />
    </header>

  )
}
