import { Request } from 'express';
import { CreatePurchaseDto } from './dto/create-purchase.dto';
import { FindPurchasesDto } from './dto/find-purchases.dto';
import { ReviewPurchaseDto } from './dto/review-purchase.dto';
import { UpdatePurchaseDto } from './dto/update-purchase.dto';
import { Purchase } from './entities/purchase.entity';
import { PurchaseService } from './purchase.service';
export declare class PurchaseController {
    private readonly purchaseService;
    constructor(purchaseService: PurchaseService);
    create(request: Request, createPurchaseDto: CreatePurchaseDto): Promise<Purchase>;
    findAll(findPurchasesDto: FindPurchasesDto): Promise<Purchase[]>;
    findAllMine(request: Request, findPurchasesDto: FindPurchasesDto): Promise<Purchase[]>;
    findOne(request: Request, purchaseId: string): Promise<Purchase>;
    review(request: Request, purchaseId: string, reviewPurchaseDto: ReviewPurchaseDto): Promise<Purchase>;
    update(id: string, updatePurchaseDto: UpdatePurchaseDto): Promise<Purchase>;
    remove(id: string): Promise<void>;
}
