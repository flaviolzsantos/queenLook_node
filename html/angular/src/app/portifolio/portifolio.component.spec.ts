import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortifolioComponent } from './portifolio.component';

describe('PortifolioComponent', () => {
  let component: PortifolioComponent;
  let fixture: ComponentFixture<PortifolioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortifolioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortifolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
