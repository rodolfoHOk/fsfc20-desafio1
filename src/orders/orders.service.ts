import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { OrderStatus } from '@prisma/client';

@Injectable()
export class OrdersService {
  constructor(private prismaService: PrismaService) {}

  async create(createOrderDto: CreateOrderDto) {
    if (createOrderDto.status) {
      throw new BadRequestException(
        'Status cannot be present when creating the order',
      );
    }

    try {
      await this.prismaService.asset.findFirstOrThrow({
        where: {
          id: createOrderDto.asset_id,
        },
      });
    } catch {
      throw new BadRequestException('Asset not found');
    }

    return this.prismaService.order.create({
      data: {
        asset_id: createOrderDto.asset_id,
        price: createOrderDto.price,
        status: OrderStatus.pending,
      },
    });
  }

  findAll() {
    return this.prismaService.order.findMany();
  }
}
