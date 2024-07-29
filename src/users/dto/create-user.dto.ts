import { IsEmail, IsString, IsUUID } from "class-validator"
import { Role } from "src/roles/entities/role.entity";

export class CreateUserDto {
    @IsString()
    username: string

    @IsEmail()
    email: string

    @IsString()
    password: string

    @IsUUID()
    role: Role;

    //reviews:
}
