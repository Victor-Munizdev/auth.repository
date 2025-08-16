import { Injectable, NotFoundException, ForbiddenException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Vehicle } from "./entities/vehicle.entity";
import { CreateVehicleDto } from "./dto/create-vehicle.dto";
import { UpdateVehicleDto } from "./dto/update-vehicle.dto";

@Injectable()
export class VehiclesService {
  constructor(
    @InjectRepository(Vehicle)
    private vehiclesRepository: Repository<Vehicle>
  ) {}

  async create(createVehicleDto: CreateVehicleDto, ownerId: number): Promise<Vehicle> {
    const vehicle = this.vehiclesRepository.create({
      ...createVehicleDto,
      idProprietario: ownerId,
    });
    return this.vehiclesRepository.save(vehicle);
  }

  async findAll(): Promise<Vehicle[]> {
    return this.vehiclesRepository.find({ relations: ["owner"] });
  }

  async findOne(id: number): Promise<Vehicle> {
    const vehicle = await this.vehiclesRepository.findOne({
      where: { id },
      relations: ["owner"],
    });
    if (!vehicle) throw new NotFoundException("Veículo não encontrado");
    return vehicle;
  }

  async update(id: number, updateVehicleDto: UpdateVehicleDto, userId: number): Promise<Vehicle> {
    const vehicle = await this.findOne(id);
    if (vehicle.idProprietario !== userId) {
      throw new ForbiddenException("Você só pode editar seus próprios veículos");
    }
    await this.vehiclesRepository.update(id, updateVehicleDto);
    return this.findOne(id);
  }

  async remove(id: number, userId: number): Promise<void> {
    const vehicle = await this.findOne(id);
    if (vehicle.idProprietario !== userId) {
      throw new ForbiddenException("Você só pode deletar seus próprios veículos");
    }
    await this.vehiclesRepository.delete(id);
  }

  async findByOwner(ownerId: number): Promise<Vehicle[]> {
    return this.vehiclesRepository.find({
      where: { idProprietario: ownerId },
      relations: ["owner"],
    });
  }
}
