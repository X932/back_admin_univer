import { IsNumber, IsString } from 'class-validator';

export class SignUpUserDto {
  @IsString()
  public name: string;

  @IsString()
  public surname: string;

  @IsString()
  public nickname: string;

  @IsString()
  public password: string;

  @IsNumber()
  public departmentId: number;

  @IsNumber()
  public groupId: number;
}
