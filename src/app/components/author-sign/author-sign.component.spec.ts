import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorSignComponent } from './author-sign.component';

describe('AuthorSignComponent', () => {
  let component: AuthorSignComponent;
  let fixture: ComponentFixture<AuthorSignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthorSignComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AuthorSignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
