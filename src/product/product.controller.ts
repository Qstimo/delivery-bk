import { Controller, Get, Param, Query, UsePipes, ValidationPipe, HttpCode, Put, Body, Post, Delete } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductDto } from './dto/product.dto';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @UsePipes(new ValidationPipe())
  @Get()
  async getAll(@Query('searchTerm') searchTerm?: string){
    return this.productService.getAll(searchTerm)
  }

  @Get('by-slug/:slug')
  async getProductBySlug(@Param('slug') slug:string){
    return this.productService.bySlug(slug)
  }

  @Get('by-category/:categorySlug')
  async getProductByCategory(@Param('categorySlug') categorySlug:string){
    return this.productService.byCategory(categorySlug)
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Post()
  async create (){
    return this.productService.create()
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Put(":id")
  async update (@Param('id') id:string, @Body() dto:ProductDto){
    return this.productService.update(id, dto)
  }

  @HttpCode(200)
  @Delete(":id")
  async delete (@Param('id') id:string){
    return this.productService.delete(id)
  }
}
