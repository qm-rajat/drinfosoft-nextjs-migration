import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  // Create default Owner admin
  const hashedPassword = await bcrypt.hash('ChangeMe@123!', 12);
  await prisma.user.upsert({
    where: { email: 'admin@drinfosoft.com' },
    update: {},
    create: {
      name: 'DR Infosoft Admin',
      email: 'admin@drinfosoft.com',
      password: hashedPassword,
      role: 'OWNER',
      isActive: true,
    },
  });
  console.log('Seed complete — default Owner created');
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
