import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastrService } from 'ngx-toastr';
import { AppComponent } from 'src/app/app.component';
import { ItemService } from 'src/app/service/item.service';

import { AddItemComponent } from './add-item.component';

describe('AddItemComponent', () => {
  let component: AddItemComponent;
  let fixture: ComponentFixture<AddItemComponent>;
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
      declarations: [ AddItemComponent ],
      providers: [
        {provide: ToastrService, useValue: ToastrService},
        {provide: ItemService, useClass: ItemService}
      ]
    }).compileComponents();
    toastServiceRef = TestBed.inject(ToastrService);
    itemServiceRef = TestBed.inject(ItemService);
    fixture = TestBed.createComponent(AddItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(()=>{
    fixture.destroy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('to add items to inventory ', () => {
    const itemList = AppComponent.prototype.itemsList;
    component.addItem();
    expect(component.addItem).toHaveBeenCalled;
  });

  it('to get item details ', () => {
    const index = 0;
    component.getitemDetails(index);
    expect(component.getitemDetails).toHaveBeenCalled;
  });

});
