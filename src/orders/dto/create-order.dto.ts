import { Exclude } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsPositive, IsString } from 'class-validator';

export class CreateOrderDto {
  @IsNotEmpty()
  @IsString()
  asset_id: string;

  @IsNumber()
  @IsPositive()
  price: number;

  @Exclude()
  status: string;
}
