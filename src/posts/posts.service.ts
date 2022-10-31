import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthorsService } from 'src/authors/authors.service';
import { Author } from 'src/authors/entities/author.entity';
import { Repository } from 'typeorm';
import { CreatePostInput } from './dto/create-post.input';

import { Post } from './post.entity';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post)
    private postsRepository: Repository<Post>,
    private authorsService: AuthorsService,
  ) {}

  async findAll(): Promise<Post[]> {
    return await this.postsRepository.find();
  }

  createPost(post: CreatePostInput): Promise<Post> {
    const newPost = this.postsRepository.create(post);

    return this.postsRepository.save(newPost);
  }

  async findProductById(id: number): Promise<Post> {
    return this.postsRepository.findOne({
      where: { id },
    });
  }

  async getAuthor(userId: number): Promise<Author> {
    return this.authorsService.findOne(userId);
  }
}
