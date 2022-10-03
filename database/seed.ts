import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
	const demouser = await prisma.user.upsert({
		where: { username: "demouser" },
		update: {},
		create: {
			username: "demouser",
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
