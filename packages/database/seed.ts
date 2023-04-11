import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  // create a single User, with a single Post
  await prisma.user.upsert({
    where: { username: "demo_user" },
    update: {},
    create: {
      username: "demo_user",
      posts: {
        create: {
          body: "Hello, world!",
        },
      },
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
