import { Container } from "@/components/shared/container";
import { Header } from "@/components/shared/header";
import { InputWithButton } from "@/components/shared/input";
import { Logo } from "@/components/shared/logo";
import { SetsTable } from "@/components/shared/sets-table";
import { Typography } from "@/components/shared/typography";

export default function Home() {
  return (
    <Container>
      <div className="flex flex-col items-center mt-10">
        <Typography variant="h1" text="Найдите набор" />
        <InputWithButton placeholder="Введите артикул или название набора на английском" />
        <div className="w-full text-2xl flex items-center text-gray-400 mt-10">
          <div className='flex-1 p-0.5 bg-gray-200 m-1 dark:bg-gray-500'></div>
            <span>Результаты</span>
          <div className='flex-1 p-0.5 bg-gray-200 m-1 dark:bg-gray-500'></div>
        </div>
        <SetsTable/>
      </div>

    </Container>
  );
}
