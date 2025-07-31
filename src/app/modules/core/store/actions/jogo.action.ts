import { createAction, props } from "@ngrx/store";
import { Feature } from "../../models/features/feature";
import { Plataforma } from "../../models/Plataforma";

export const novoJogo = createAction('[Jogo] Novo Jogo', props<{ nome: string, topico: string, plataformas: Plataforma[], genero: string, preco: number, engine: string }>());
export const atualizaFeatures = createAction('[Jogo] Atualiza features', props<{ Features: Feature[] }>());
export const atualizaDesenvolvimentoJogo = createAction('[Jogo] Atualiza Jogo', props<{ nome: string, preco: number }>());
export const lancaJogo = createAction('[Jogo] Lança Jogo');
export const cancelaJogo = createAction('[Jogo] Cancela Jogo');