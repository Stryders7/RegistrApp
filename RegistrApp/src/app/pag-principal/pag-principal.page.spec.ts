import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PagPrincipalPage } from './pag-principal.page';

describe('PagPrincipalPage', () => {
  let component: PagPrincipalPage;
  let fixture: ComponentFixture<PagPrincipalPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PagPrincipalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
