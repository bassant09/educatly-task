import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorBlogComponent } from './error-blog.component';

describe('ErrorBlogComponent', () => {
  let component: ErrorBlogComponent;
  let fixture: ComponentFixture<ErrorBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErrorBlogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ErrorBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
