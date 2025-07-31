import { Turno } from "../../models/turno";

export const selectTurno = (state: Turno) => state.turno;
export const selectSubTurno = (state: Turno) => state.subTurno;