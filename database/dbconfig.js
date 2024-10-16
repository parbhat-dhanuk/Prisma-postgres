
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
    log:["query"]   //yo chai ORM hit garda backend ma kun query run gardai xa vanera terminal ma dhekhauxa.(optional)
})

export default prisma