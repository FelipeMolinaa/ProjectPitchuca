import { createReducer, createReducerFactory, on } from "@ngrx/store";
import { Turno } from "../../models/turno";
import { JogoEmDesenvolvimento } from "../../models/jogoEmDesenvolvimento";
import { atualizaDesenvolvimentoJogo, atualizaFeatures, cancelaJogo, lancaJogo, novoJogo } from "../actions/jogo.action";

function criaEstadoInicial(): JogoEmDesenvolvimento {
    return {
        engine: '',
        genero: '',
        nome: '',
        plataformas: [],
        preco: 0,
        publicoAlvo: '',
        topico: '',
        features: [],
        bugs: 0,
        PDs: 0,
        PDsProduzidos: 0,
        qualidade: 0
    };
}

export const estado: JogoEmDesenvolvimento = criaEstadoInicial();

export const jogoReducer = createReducer(
    estado,
    on(novoJogo, (state, jogo) => state = { ...state, nome: jogo.nome, topico: jogo.topico, plataformas: jogo.plataformas, genero: jogo.genero, preco: jogo.preco, engine: jogo.engine }),
    on(atualizaFeatures, (state) => state = { ...state, features: state.features }),
    on(atualizaDesenvolvimentoJogo, (state) => state = { ...state, nome: state.nome, preco: state.preco }),
    on(lancaJogo, _ => criaEstadoInicial()),
    on(cancelaJogo, _ => criaEstadoInicial()),
) 