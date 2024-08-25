import { IsDate, IsDateString, IsEmail, IsNotEmpty, IsOptional, IsPhoneNumber, IsString, Length } from "class-validator";
export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    @Length(2, 50)
    f_name: string;

    @IsString()
    @IsNotEmpty()
    @Length(2, 50)
    l_name: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    @Length(6, 100)
    password: string;

    @IsString()
    @IsNotEmpty()
    @IsPhoneNumber()
    phone: string;

    @IsOptional()
    @IsDateString()
    b_date: string;
}
