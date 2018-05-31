import { fakeAsync, TestBed, tick } from "@angular/core/testing";
import { AppStoreEffects } from "./app-store.effects";
import { AppStoreService } from "./app-store.service";

describe('AppStoreEffects', () => {
  let runner, appStoreEffects, appStoreService;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [],
    providers: [
      AppStoreEffects,
      {
        provide: AppStoreService,
        useValue: jasmine.createSpyObj('appStoreService', ['get'])
      }
    ]
  }));

  beforeEach(() => {
    appStoreEffects = TestBed.get(AppStoreEffects);
    appStoreService = TestBed.get(AppStoreService);
  });

  describe('appStore$', () => {

    it('should return a LOAD_APP_STORE_SUCCESS action, on success', function () {

    });

    it('should return a LOAD_APP_STORE_FAIL action, on error', function () {

    });

  });

});
