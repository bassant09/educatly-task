import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyBlogComponent } from './empty-blog.component';

describe('EmptyBlogComponent', () => {
  let component: EmptyBlogComponent;
  let fixture: ComponentFixture<EmptyBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmptyBlogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmptyBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
