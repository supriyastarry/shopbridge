import { TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastrService } from 'ngx-toastr';
import { AppComponent } from '../app.component';

import { ItemService } from './item.service';

describe('ItemService', () => {
  let toastServiceRef: ToastrService;
  let itemServiceRef: ItemService;

  
  beforeEach(async () => {
    TestBed.resetTestEnvironment();
    TestBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());
    
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        NoopAnimationsModule,
        RouterTestingModule.withRoutes([]),
      ],
      providers: [
        {provide: ToastrService, useValue: ToastrService}
      ]
    }).compileComponents();
    toastServiceRef = TestBed.inject(ToastrService);
    itemServiceRef = TestBed.inject(ItemService);
  });

  it('should create', () => {
    expect(itemServiceRef).toBeTruthy();
  });

  it('to get item details ', () => {
    const index = 0;
    itemServiceRef.getitemDetails(index);
    expect(itemServiceRef.getitemDetails).toHaveBeenCalled;
  });  
 
});
