import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Query } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

import { Demand } from 'modules/database/models/demand';

import { DemandRepository } from '../repositories/demand';
import { DemandService } from '../services/demand';

import { ListValidator } from '../validators/demand/list';
import { SaveValidator } from '../validators/demand/save';

@ApiTags('Demand')
@Controller('/demand')
export class DemandController {
  constructor(private demandRepository: DemandRepository, private demandService: DemandService) {}

  @Get()
  @ApiResponse({ status: 200, type: [Demand] })
  public async list(@Query() model: ListValidator) {
    return this.demandRepository.list(model);
  }

  @Get(':demandId')
  @ApiResponse({ status: 200, type: Demand })
  public async details(@Param('demandId', ParseIntPipe) demandId: number) {
    return this.demandRepository.findById(demandId);
  }

  @Delete(':demandId')
  public async delete(@Param('demandId', ParseIntPipe) demandId: number) {
    return this.demandService.remove(demandId);
  }

  @Post()
  @ApiResponse({ status: 200, type: Demand })
  public async save(@Body() model: SaveValidator) {
    return this.demandService.save(model);
  }
}
