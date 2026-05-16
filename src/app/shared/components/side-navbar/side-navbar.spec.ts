import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { SideNavbar } from './side-navbar';

describe('SideNavbar', () => {
  let component: SideNavbar;
  let fixture: ComponentFixture<SideNavbar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SideNavbar, RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(SideNavbar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
