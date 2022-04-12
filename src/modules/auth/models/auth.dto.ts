import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class SignUpUserDto {
  @IsString()
  @IsNotEmpty()
  public name: string;

  @IsString()
  @IsNotEmpty()
  public surname: string;

  @IsString()
  @IsNotEmpty()
  public nickname: string;

  @IsString()
  @IsNotEmpty()
  public password: string;

  @IsNumber()
  @IsNotEmpty()
  public departmentId: number;

  @IsNumber()
  @IsNotEmpty()
  public groupId: number;

  @IsNumber()
  @IsNotEmpty()
  public roleId: number;
}

export class AuthorizationDto {
  @IsString()
  @IsNotEmpty()
  public nickname: string;

  @IsString()
  @IsNotEmpty()
  public password: string;
}
