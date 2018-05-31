import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { of as observableOf } from 'rxjs/observable/of';
import { switchMap } from 'rxjs/operators/switchMap';
import { map } from 'rxjs/operators/map';
import { catchError } from 'rxjs/operators/catchError';
import { AppStoreService } from './app-store.service';
import * as appStoreActions from './app-store.actions';

@Injectable()
export class AppStoreEffects {
  @Effect() loadAppStore$;
  
  constructor(
    private appStoreService: AppStoreService,
    private actions$: Actions
  ) {
    this.loadAppStore$ = this.actions$
      .ofType(appStoreActions.LOAD_APP_STORE)
      .pipe(switchMap((state: appStoreActions.LoadAppStoreAction) => 
        this.appStoreService.loadAppStore().pipe(
          // If successful, dispatch success action with result
          map(res => new appStoreActions.LoadAppStoreSuccessAction(res)),
          // If request fails, dispatch failed action
          catchError((err: Error) => observableOf(new appStoreActions.LoadAppStoreFailAction(err)))
        )
      )
      );
  }

}
