import { createAction, props } from "@ngrx/store";
import { Turno } from "../../models/turno";

export const configuraTurno = createAction('[Turno] Configura turno', props<Turno>());
export const proximoTurno = createAction('[Turno] Proximo turno');
export const proximoSubTurno = createAction('[Turno] Proximo sub turno');