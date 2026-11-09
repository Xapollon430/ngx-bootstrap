import "@angular/compiler";
import "bootstrap/dist/css/bootstrap.min.css";
import { Component, signal } from "@angular/core";
import { ReactiveFormsModule, FormControl } from "@angular/forms";
import { bootstrapApplication } from "@angular/platform-browser";
import { provideAnimations } from "@angular/platform-browser/animations";
import { TypeaheadModule } from "ngx-bootstrap/typeahead";
class Demo {
  control = new FormControl("");
  disabled = signal(false);
  changes = signal(0);
  fruits = ["Apple", "Apricot", "Banana"];
  ngOnInit() {
    window.getState = () => ({
      value: this.control.value,
      disabled: this.control.disabled,
      events: this.changes(),
    });
  }
  arm() {
    setTimeout(() => {
      this.disabled.set(true);
      this.control.disable({ emitEvent: false });
    }, 2500);
  }
  selected() {
    this.changes.update((n) => n + 1);
  }
}
Component({
  selector: "app-demo",
  standalone: true,
  imports: [ReactiveFormsModule, TypeaheadModule],
  template: `<main><h1>ngx-bootstrap Typeahead</h1><p>Type A in Fruit, wait until it disables, then choose Apricot.</p><button id="arm" (click)="arm()">Disable in 2.5 seconds</button><p id="status">Disabled: {{disabled()}}</p><label for="fruit">Fruit</label><input class="form-control" id="fruit" [formControl]="control" [typeahead]="fruits" (typeaheadOnSelect)="selected()"><p id="value">Value: {{control.value}}</p><p id="events">Selection events: {{changes()}}</p></main>`,
  styles: [
    `main{font:18px system-ui;margin:55px auto;max-width:650px;background:white;padding:30px;border:1px solid #ddd;border-radius:12px}#arm{padding:10px;margin:8px 0}#status,#value,#events{font:19px ui-monospace;margin:16px 0}`,
  ],
})(Demo);
document.body.innerHTML = "<app-demo></app-demo>";
await bootstrapApplication(Demo, { providers: [provideAnimations()] });
