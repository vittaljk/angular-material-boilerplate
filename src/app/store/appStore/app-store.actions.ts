import { Action } from "@ngrx/store";

export const LOAD_APP_STORE = "[AppStore] Load AppStore";
export const LOAD_APP_STORE_SUCCESS = "[AppStore] Load AppStore Success";
export const LOAD_APP_STORE_FAIL = "[AppStore] Load AppStore Fail";

/**
 * Load AppStore Actions
 */
export class LoadAppStoreAction implements Action {
    readonly type = LOAD_APP_STORE;

    constructor(public payload: any) {}
}

export class LoadAppStoreSuccessAction implements Action {
    readonly type = LOAD_APP_STORE_SUCCESS;

    constructor(public payload: any) {}
}

export class LoadAppStoreFailAction implements Action {
    readonly type = LOAD_APP_STORE_FAIL;

    constructor(public error: Error) {}
}

export type Actions =
    | LoadAppStoreAction
    | LoadAppStoreSuccessAction
    | LoadAppStoreFailAction;
