import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideState, provideStore, StoreModule } from '@ngrx/store';
import { turnoReducer } from './modules/core/store/reducers/turno.reducer';
import { CoreReducer } from './modules/core/store/reducers/core.reducer';
import { jogoReducer } from './modules/core/store/reducers/jogo.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideStore(),
    provideState({ name: 'turno', reducer: turnoReducer }),
    provideState({ name: 'core', reducer: CoreReducer }),
    provideState({ name: 'jogo', reducer: jogoReducer })
  ]
};
