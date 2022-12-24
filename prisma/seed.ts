import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { isInt } from 'class-validator';
import { randomInt } from 'crypto';
const prisma = new PrismaClient();

async function main() {
  for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 20; j++) {
      const randkey = randomInt(0, 1000000);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      // const product = await prisma.product.upsert({
      //   where: { id: j * i },
      //   update: {},
      //   create: {
      //     price: Number(9.85 * j),
      //     stock: Number(5 * j),
      //     name: `Product #${randkey}`,
      //     description: 'This is a description'
      //   },
      // });
    }
  }
  for (let g = 1; g <= 10; g++) {
    const randkey = randomInt(0, 1000000);
    const salt = await bcrypt.genSalt();
    const hash = await bcrypt.hash('password', salt);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const user = await prisma.user.create({
      data: {
        name: `us${g}r ${g + 1}`,
        email: `user.${g}@gmail.com`,
        password: hash,
        address: "somewher 23",
        role: 'USER'
      },
    });
    // const products = await prisma.product.create({
    //   data:{
    //     name: 'product'+g,
    //     description: 'some description on product',
    //     stock: 0,
    //     urlName: 'product'+g,
    //     basePrice: +'99.'+g*1,
    //   }
    // })
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    // const address = prisma.adress.upsert({
    //   where: { id: g.toString() },
    //   update: {},
    //   create: {
    //     streetNumber: g,
    //     addressLine: 'address' + g,
    //     city: 'city' + g,
    //     region: 'region' + g,
    //     postalCode: g + 1,
    //     countryId: 'CI',
    //   },
    // });
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
