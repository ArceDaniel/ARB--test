import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinTable,
  ManyToOne,
  ManyToMany,
} from 'typeorm';

import { Category } from './category.entity';
import { CourseClass } from './class.entity';

@Entity({ name: 'course', schema: 'public' })
export class Course {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('character varying', {
    name: 'title',
    length: 50,
    nullable: false,
    unique: true,
  })
  title: string;

  @Column('character varying', {
    name: 'description',
    length: 250,
    nullable: true,
  })
  description: string;

  @Column('character varying', {
    name: 'instructor',
    length: 50,
    nullable: true,
  })
  name: string;

  @ManyToOne(() => CourseClass, (course) => course.id)
  courses: string;

  @ManyToMany(() => Category, (category) => category.courses)
  @JoinTable()
  categories: Category[];

  constructor(partial: Partial<Course>) {
    Object.assign(this, partial);
  }
}