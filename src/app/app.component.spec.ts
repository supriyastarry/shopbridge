import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { IndividualConfig } from 'ngx-toastr';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';

describe('AppComponent', () => {
let fixture: ComponentFixture<AppComponent>;
let instance: AppComponent;
const toastrService = {
  success: (message?: string, title?: string, override?: Partial<IndividualConfig>) => { },
  error: (message?: string, title?: string, override?: Partial<IndividualConfig>) => { }
};
  
beforeEach(async () => {
    TestBed.resetTestEnvironment();
    TestBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());
  
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        FormsModule,
        AppModule,
        NoopAnimationsModule,
        RouterTestingModule.withRoutes([]),
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        {provide: toastrService, useValue: toastrService}
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    instance = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(()=>{
    fixture.destroy();
  });

  it('should create the app', () => {
    expect(instance).toBeTruthy();
  });

   
  it(`should have as title 'shopbridge'`, () => {
    expect(instance.title).toEqual('shopbridge');
  });

});
