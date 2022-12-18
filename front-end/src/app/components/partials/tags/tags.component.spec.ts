import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagsComponent } from './tags.component';

import '@types/jest';

describe('TagsComponent', () => {
  let component: TagsComponent;
  let fixture: ComponentFixture<TagsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TagsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
function beforeEach(arg0: () => Promise<void>) {
  throw new Error('Function not implemented.');
}

function expect(component: TagsComponent) {
  throw new Error('Function not implemented.');
}

