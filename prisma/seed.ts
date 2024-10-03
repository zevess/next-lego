import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function up() {
    await prisma.user.create({
        data: {
            name: "Admin",
            email: "admin@email.com",
            password: "dwqgkopdsgq",
            collection: {},
            wishes: {},
        }
    }
    )

    await prisma.set.create({
        data: {
            setNum: "75291-1",
            setUrl: "https://rebrickable.com/sets/75291-1/death-star-final-duel/",
            setImageUrl: "https://cdn.rebrickable.com/media/sets/75291-1/67357.jpg",
            themeId: 158,
            year: 2020,
            name: "Death Star Final Duel",
            numParts: 775
        }
    })
}

async function down() {
    await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw`TRUNCATE TABLE "Set" RESTART IDENTITY CASCADE`;

}

async function main() {
    try {
        await down();
        await up();
    } catch (error) {
        console.error(error)
    }
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    })