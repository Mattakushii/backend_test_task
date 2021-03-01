import { ChatModule } from './module/chat.module';
import { ChatEntity } from 'src/entity/chat.entity';
import { UserEntity } from 'src/entity/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './module/user.module';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/gql/index.graphql'),
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      database: 'backend_nest',
      username: 'postgres',
      password: 'secret',
      entities: [UserEntity, ChatEntity],
      autoLoadEntities: true,
      synchronize: true,
    }),
    UserModule,
    ChatModule,
  ],
})
export class AppModule {
  constructor() {
    console.log(123);
  }
}
