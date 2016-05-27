import { async, beforeEachProviders, describe, it, inject } from '@angular/core/testing';
import { ComponentFixture, TestComponentBuilder } from '@angular/compiler/testing';
import { Component } from '@angular/core';

@Component({
  selector: 'test-component',
  template: `<div person-input></div>`
})
class TestComponent {
}

describe('PersonInput Directive', () => {
  beforeEachProviders((): any[] => []);

  it('should ...', async(inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
    return tcb.createAsync(TestComponent).then((fixture: ComponentFixture<any>) => {
      fixture.detectChanges();
    });
  })));
});
