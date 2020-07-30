import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsOptional, IsString, MaxLength, Min, IsNumber, MinLength } from 'class-validator';
import { IDemand } from 'modules/database/interfaces/demand';

export class SaveValidator implements IDemand {
  @IsOptional()
  @IsInt()
  @Min(0)
  @ApiProperty({ required: false, type: 'integer' })
  public id?: number;

  @IsNotEmpty()
  @IsString()
  @MinLength(4)
  @MaxLength(50)
  @ApiProperty({ required: true, type: 'string', minLength: 4, maxLength: 50 })
  public name: string;

  @IsOptional()
  @IsString()
  @ApiProperty({ required: false, type: 'string' })
  public description?: string;

  @IsOptional()
  @IsNumber()
  @ApiProperty({ required: false, type: 'quantity' })
  public quantity: number;

  @IsOptional()
  @IsNumber()
  @ApiProperty({ required: false, type: 'number' })
  public value: number;
}
