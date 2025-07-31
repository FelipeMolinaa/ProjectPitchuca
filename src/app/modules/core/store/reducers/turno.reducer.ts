import { createReducer, createReducerFactory, on } from "@ngrx/store";
import { configuraTurno, proximoSubTurno, proximoTurno } from "../actions/turno.action";
import { Turno } from "../../models/turno";

export const estado: Turno = {
    turno: 0, subTurno: 0
};

export const turnoReducer = createReducer(
    estado,
    on(configuraTurno, (state, turno) => state = { turno: turno.turno, subTurno: turno.subTurno }),
    on(proximoTurno, (state) => state = { turno: state.turno + 1, subTurno: 0 }),
    on(proximoSubTurno, (state) => state = { ...state, subTurno: state.subTurno + 1 }),
) 