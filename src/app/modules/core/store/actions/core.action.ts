import { createAction, props } from "@ngrx/store";
import { Feature } from "../../models/features/feature";
import { Plataforma } from "../../models/Plataforma";
import { Core } from "../../models/core";

export const configuraCore = createAction('[Core] Configura Core', props<Core>());

export const adicionaDinheiro = createAction('[Core Dinheiro] Adiciona Dinheiro', props<{ dinheiro: number }>());
export const removeDinheiro = createAction('[Core Dinheiro] Remove Dinheiro', props<{ dinheiro: number }>());

export const adicionaFans = createAction('[Core Fans] Adiciona Dinheiro', props<{ fans: number }>());
export const removeFans = createAction('[Core Fans] Remove Dinheiro', props<{ fans: number }>());

export const IniciaDesenvolvimentoJogo = createAction('[Core Jogo] Inicia Desenvolvimento Jogo');
export const FinalizaDesenvolvimentoJogo = createAction('[Core Jogo] Finaliza Desenvolvimento Jogo');
