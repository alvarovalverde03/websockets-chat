import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
    const global = await prisma.chat.upsert({
        where: { publicId: ')eHb53nEh*w4xkT' },
        update: {},
        create: {
            publicId: ')eHb53nEh*w4xkT',
            name: 'Global'
        }
    })
    
    const admin = await prisma.user.upsert({
        where: { id: 1 },
        update: {},
        create: {
            username: 'Admin',
            chats: {
                connect: {
                    publicId: ')eHb53nEh*w4xkT',
                    name: 'Global'
                }
            }
        }
    })
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })