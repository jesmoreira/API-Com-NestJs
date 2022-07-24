import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config/dist/config.module";
import { SequelizeModule } from "@nestjs/sequelize/dist/sequelize.module";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { Produto } from "./produto.model";
import { ProdutosController } from "./produtos.controller";
import ProdutosService from "./produtos.service";

@Module({
  imports: [
    ConfigModule.forRoot(),
    SequelizeModule.forRoot({
      dialect: "mysql",
      host: "localhost",
      port: 3306,
      username: process.env.USUARIO_BANCO_DADOS,
      password: process.env.SENHA_BANCO_DADOS,
      database: "livraria",
      autoLoadModels: true,
      synchronize: true,
    }),
    SequelizeModule.forFeature([Produto]),
  ],
  controllers: [AppController, ProdutosController],
  providers: [AppService, ProdutosService],
})
export class AppModule {}
