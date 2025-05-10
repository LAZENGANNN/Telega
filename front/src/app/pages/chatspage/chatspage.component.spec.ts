import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatspageComponent } from './chatspage.component';

describe('ChatspageComponent', () => {
  let component: ChatspageComponent;
  let fixture: ComponentFixture<ChatspageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatspageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
