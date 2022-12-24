"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const bcrypt = require("bcrypt");
const crypto_1 = require("crypto");
const prisma = new client_1.PrismaClient();
async function main() {
    for (let i = 1; i <= 10; i++) {
        for (let j = 1; j <= 20; j++) {
            const randkey = (0, crypto_1.randomInt)(0, 1000000);
        }
    }
    for (let g = 1; g <= 10; g++) {
        const randkey = (0, crypto_1.randomInt)(0, 1000000);
        const salt = await bcrypt.genSalt();
        const hash = await bcrypt.hash('password', salt);
        const user = await prisma.user.create({
            data: {
                userName: `us${g}r ${g + 1}`,
                email: `user.${g}@gmail.com`,
                password: hash,
                phoneNumber: ' 133+g',
                address: "somewher 23",
                city: 'berlin',
                postalCode: ' 21001',
                gender: 'male',
                dateOfBirth: '1313/3/3',
                country: 'GE',
                addressNote: 'nota',
                role: 'CLIENT'
            },
        });
        const products = await prisma.product.create({
            data: {
                name: 'product' + g,
                description: 'some description on product',
                price: (10 * g),
                stock: 1,
            }
        });
    }
}
main()
    .catch((e) => {
    console.error(e);
    process.exit(1);
})
    .finally(async () => {
    await prisma.$disconnect();
});
//# sourceMappingURL=seed.js.map