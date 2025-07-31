import { Core } from "@models/core";
import { createReducer, on } from "@ngrx/store";
import { adicionaDinheiro, adicionaFans, configuraCore, FinalizaDesenvolvimentoJogo, IniciaDesenvolvimentoJogo, removeFans } from "@store/actions/core.action";

function criaEstadoInicial(): Core {
    return {
        nomeEmpresa: '',
        jogoEmDesenvolvimento: false,
        dinheiro: 0,
        fans: 0
    };
}

export const estado: Core = criaEstadoInicial();

export const CoreReducer = createReducer(
    estado,
    on(configuraCore, (state, core) => state = { ...state, dinheiro: core.dinheiro, fans: core.fans, nomeEmpresa: core.nomeEmpresa, jogoEmDesenvolvimento: core.jogoEmDesenvolvimento }),
    on(adicionaDinheiro, (state, props) => state = { ...state, dinheiro: state.dinheiro + props.dinheiro }),
    on(adicionaFans, (state, props) => state = { ...state, fans: state.fans + props.fans }),
    on(removeFans, (state, props) => state = { ...state, fans: state.fans - props.fans }),
    on(IniciaDesenvolvimentoJogo, (state) => ({ ...state, jogoEmDesenvolvimento: true })),
    on(FinalizaDesenvolvimentoJogo, (state) => ({ ...state, jogoEmDesenvolvimento: false })),
) 