import { Module } from "@nestjs/common";
import { SummaryModule } from "./summary/summary.module";
import { ArticleModule } from "./article/article.module";
import { ReadLaterModule } from "./readLater/readLater.module";
import { ProducerModule } from "./producer/producer.module";
import { ReadItemModule } from "./readItem/readItem.module";
import { StarModule } from "./star/star.module";
import { StatisticsModule } from "./statistics/statistics.module";
import { CollectionModule } from "./collection/collection.module";
import { ReadHistoryModule } from "./readHistory/readHistory.module";
import { UserModule } from "./user/user.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

@Module({
  controllers: [],
  imports: [
    SummaryModule,
    ArticleModule,
    ReadLaterModule,
    ProducerModule,
    ReadItemModule,
    StarModule,
    StatisticsModule,
    CollectionModule,
    ReadHistoryModule,
    UserModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
