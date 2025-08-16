import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request } from "@nestjs/common"
import type { VehiclesService } from "./vehicles.service"
import type { CreateVehicleDto } from "./dto/create-vehicle.dto"
import type { UpdateVehicleDto } from "./dto/update-vehicle.dto"
import { JwtAuthGuard } from "../auth/guards/jwt-auth.guard"

@Controller("vehicles")
@UseGuards(JwtAuthGuard)
export class VehiclesController {
  constructor(private readonly vehiclesService: VehiclesService) {}

  @Post()
  async create(@Body() createVehicleDto: CreateVehicleDto, @Request() req: any) {
    return this.vehiclesService.create(createVehicleDto, req.user.id)
  }

  @Get()
  async findAll() {
    return this.vehiclesService.findAll()
  }

  @Get('my-vehicles')
  async findMyVehicles(@Request() req: any) {
    return this.vehiclesService.findByOwner(req.user.id)
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.vehiclesService.findOne(+id)
  }

  @Patch(":id")
  async update(@Param('id') id: string, @Body() updateVehicleDto: UpdateVehicleDto, @Request() req: any) {
    return this.vehiclesService.update(+id, updateVehicleDto, req.user.id)
  }

  @Delete(":id")
  async remove(@Param('id') id: string, @Request() req: any) {
    return this.vehiclesService.remove(+id, req.user.id)
  }
}
