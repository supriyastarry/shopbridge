import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastrService } from 'ngx-toastr';
import { AppComponent } from 'src/app/app.component';
import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
 let toastServiceRef: ToastrService;

  beforeEach(() => {
    TestBed.resetTestEnvironment();
    TestBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());
    TestBed.configureTestingModule({
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
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(()=>{
    fixture.destroy();
  });
  
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('to get item details ', () => {
    component.getitemList();
    expect(component.getitemList).toHaveBeenCalled;
  });

  // it('to delete item ', () => {
  //   component.deleteItem(0);
  //   expect(component.deleteItem).toHaveBeenCalled;
  // });

});
