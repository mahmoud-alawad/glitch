import { Product, Shop } from '@prisma/client';
import { PrismaService } from '../../database/prisma.service';
import { createShopDto } from '../entities/dto/create-shop.dto';
import { updateShopDto } from '../entities/dto/update-shop.dto';
export declare class ShopsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    createShop(CreateShopDto: createShopDto): Promise<Shop>;
    readAllShops(): Promise<Shop[]>;
    getShopById(id: number): Promise<Shop>;
    updateShop(id: number, shopData: updateShopDto): Promise<Shop>;
    deleteShop(id: number): Promise<Shop>;
    getShopProducts(id: number): Promise<Product[]>;
}
