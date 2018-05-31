import { reducer } from './app-store.reducer';
import * as fromAppStore from './app-store.reducer';

describe('AppStoreReducer', () => {

  describe('undefined action', () => {
    it('should return the default state', () => {
      const action = {} as any;

      const result = reducer(undefined, action);
      expect(result).toEqual(fromAppStore.initialState);
  });
});

});