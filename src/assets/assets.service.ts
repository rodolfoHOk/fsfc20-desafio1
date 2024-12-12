import { Injectable } from '@nestjs/common';
import { CreateAssetDto } from './dto/create-asset.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AssetsService {
  constructor(private prismaService: PrismaService) {}

  create(createAssetDto: CreateAssetDto) {
    return this.prismaService.asset.create({
      data: {
        id: createAssetDto.id,
        symbol: createAssetDto.symbol,
      },
    });
  }

  findAll() {
    return this.prismaService.asset.findMany();
  }
}
