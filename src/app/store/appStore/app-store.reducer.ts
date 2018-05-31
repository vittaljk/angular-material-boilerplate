import * as appStore from './app-store.actions';

export interface AppStoreState {
  loading: boolean;
  entities: { [id: string]: any };
  result: string[];
  error: Error;
  type: string;
};

export const initialState: AppStoreState = {
  loading: false,
  entities: {},
  result: [],
  error: null,
  type: ''
};

export function reducer(state = initialState, action: appStore.Actions): AppStoreState {
  switch (action.type) {
    case appStore.LOAD_APP_STORE: {
      return {
        ...state,
        loading: true,
        error: null,
        type: action.type
      }
    }

    case appStore.LOAD_APP_STORE_SUCCESS: {
      return {
        ...state,
        result: action.payload,
        loading: false,
        error: null,
        type: action.type
      };
    }

    case appStore.LOAD_APP_STORE_FAIL: {
      return {
        ...state,
        loading: false,
        error: action.error,
        type: action.type
      };
    }

    default: {
      return state;
    }
  }
}
