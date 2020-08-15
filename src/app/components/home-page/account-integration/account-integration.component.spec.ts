import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountIntegrationComponent } from './account-integration.component';

describe('AccountIntegrationComponent', () => {
  let component: AccountIntegrationComponent;
  let fixture: ComponentFixture<AccountIntegrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountIntegrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountIntegrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
