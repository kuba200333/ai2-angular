import { Component, signal, WritableSignal } from '@angular/core';
import { Random } from './random/random';
import { List } from './list/list';

@Component({
  selector: 'app-root',
  imports: [Random, List],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title: WritableSignal<string> = signal('LAB J Jakub Wierciński');
}
