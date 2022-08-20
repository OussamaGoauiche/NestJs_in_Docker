import { Injectable } from '@nestjs/common';
import { CreateUtilisateurDto } from './dto/create-utilisateur.dto';
import { UpdateUtilisateurDto } from './dto/update-utilisateur.dto';
import { PrismaService } from '../prisma.service';


@Injectable()
export class UtilisateurService {

  constructor( private readonly prisma: PrismaService) {}

  async create(createUtilisateurDto: CreateUtilisateurDto) {
    return await this.prisma.utilisateur.create({
          data: {
          ...createUtilisateurDto,
        },
        });
  }

  async findAll() {
    return await this.prisma.utilisateur.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.utilisateur.findUnique({
            where: {id_utilisateur :id}
        });
  }

  async update(id: number, updateUtilisateurDto: UpdateUtilisateurDto) {
    return await this.prisma.utilisateur.update({
      where: { id_utilisateur : id },
      data: updateUtilisateurDto,
    });
  }

  async remove(id: number) {
    return await this.prisma.utilisateur.delete({
      where: { id_utilisateur : id },
    });
  }
}
