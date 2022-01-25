import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PokemonController } from './adapter/controller/pokemon.controller';
import { AppService } from './app.service';
import { FindPokemonUseCase } from './application/usecase/find.pokemon.usecase';
import { PokemonRestClient } from './adapter/rest/pokemon.rest.client';

import { ConfigModule } from '@nestjs/config';
import { PokemonConfigurarion } from './config/pokemon.configuration';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [AppController, PokemonController],
  providers: [AppService, PokemonConfigurarion, PokemonRestClient, FindPokemonUseCase],
})
export class AppModule {}
