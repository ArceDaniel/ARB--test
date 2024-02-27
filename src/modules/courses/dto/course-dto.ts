import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsArray } from 'class-validator';

export class CourseDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  instructor: string;

  @ApiProperty({ type: [String] })
  @IsArray()
  @IsNotEmpty({ each: true })
  @IsString({ each: true })
  categories: string[];
}

export default CourseDto;
