import { ObjectType, Field, Int } from '@nestjs/graphql';

import { Column, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
export class Post {
  @PrimaryGeneratedColumn()
  @Field((type) => Int)
  id: number;

  @Column()
  @Field()
  title: string;

  @Column({ type: 'text', nullable: true})
  @Field({ nullable: true })
  content?: string;
}
