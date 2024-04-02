import {
  I18nModule,
  QueryResolver,
  HeaderResolver,
  AcceptLanguageResolver
} from 'nestjs-i18n';
import { join } from 'path';
import { Module } from '@nestjs/common';
import { AuthModule } from '@/modules';
import { MongooseModule } from '@nestjs/mongoose';
import { config } from 'dotenv';

config();

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGODB_URL as string, {dbName:process.env.MONGODB_DBNAME}),
    I18nModule.forRoot({
      fallbackLanguage: 'en-us',
      loaderOptions: {
        path: join(__dirname, '/i18n/'),
        watch: true,
      },
      resolvers: [
        { use: QueryResolver, options: ['lang'] },
        AcceptLanguageResolver,
        new HeaderResolver(['x-lang']),
      ],
    }),
    AuthModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}