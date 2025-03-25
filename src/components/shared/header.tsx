import { auth } from "@/lib/auth";
import { cn } from "@/lib/utils";
import Link from "next/link";

import { Search, ShoppingBag, UserIcon } from "lucide-react";
import { StyledLink } from "./styled-link";
import { ThemeToggle } from "./theme-toggler";
import { User } from "@prisma/client";
import { Logo } from "./logo";


interface Props {
  className?: string
  user: User | null
}

export const Header: React.FC<Props> = async ({ className, user }) => {

  const session = await auth();

  return (
    <header className={cn('flex items-center justify-between my-3 sticky top-0 z-50 bg-white dark:bg-black', className)}>
      <Link href={'/'}>
        <Logo />
      </Link>

      <Link href={'/'}>
        <Search className='text-black hover:text-orange-400 transition-colors duration-300 dark:text-white dark:hover:text-orange-400' />
      </Link>

      <Link href={'/marketplace'}>
        <ShoppingBag className='text-black hover:text-orange-400 transition-colors duration-300 dark:text-white dark:hover:text-orange-400' />
      </Link>

      <Link href={!user ? '/sign-in' : `/profile/${user.userNick}`}>
        <UserIcon className='text-black hover:text-orange-400 transition-colors duration-300 dark:text-white dark:hover:text-orange-400' />
      </Link>

      {!session?.user &&
        <StyledLink href={'/sign-in'}>Войти</StyledLink>
      }
      <ThemeToggle />
    </header>
  )
}
