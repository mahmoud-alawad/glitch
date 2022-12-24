import { PrismaService } from 'server/prisma/prisma.service';
import { CreatePurchaseDto } from './dto/create-purchase.dto';
import { FindPurchasesDto } from './dto/find-purchases.dto';
import { ReviewPurchaseDto } from './dto/review-purchase.dto';
import { UpdatePurchaseDto } from './dto/update-purchase.dto';
import { Purchase } from './entities/purchase.entity';
export declare class PurchaseService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(userId: string, createPurchaseDto: CreatePurchaseDto): Promise<Purchase>;
    findAll({ userId, productId, page, offset, }: FindPurchasesDto): Promise<Purchase[]>;
    findOne(purchaseId: string, userId: string, userRole: string): Promise<Purchase>;
    review(userId: string, purchaseId: string, reviewPurchaseDto: ReviewPurchaseDto): Promise<Purchase>;
    update(id: string, updatePurchaseDto: UpdatePurchaseDto): Promise<Purchase>;
    remove(id: string): Promise<void>;
    private calculateTotalPrice;
}
