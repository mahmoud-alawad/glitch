import { createShopDto } from '../entities/dto/create-shop.dto';
import { updateShopDto } from '../entities/dto/update-shop.dto';
import { ShopsService } from '../service/shops.service';
export declare class ShopsController {
    private readonly shopService;
    constructor(shopService: ShopsService);
    newShop(shop: createShopDto): Promise<import(".prisma/client").Shop>;
    returnAllShops(): Promise<import(".prisma/client").Shop[]>;
    shopProducts(id: number): Promise<import(".prisma/client").Product[]>;
    updateShopData(id: number, data: updateShopDto): Promise<import(".prisma/client").Shop>;
    delete(id: number): Promise<import(".prisma/client").Shop>;
}
