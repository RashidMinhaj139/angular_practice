import { Component } from '@angular/core';
import { Data } from '@angular/router';
export class Todo {
  constructor(
    public id: number,
    public desc: string,
    public done: boolean,
    public targetdate: Data
  ) {}
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrl: './list-todos.component.css',
})
export class ListTodosComponent {
  //   todos = [
  //     { id: 1, desc: 'java' },
  //     { id: 2, desc: 'java' },
  //     { id: 3, desc: 'java' },
  //   ];

  //   //second list
  //   data = [
  //     { id: 1, desc: 'cricket' },
  //     { id: 2, desc: 'football' },
  //     { id: 3, desc: 'hockey' },
  //   ];

  todos = [
    new Todo(1, 'cricket', false, new Date()),
    new Todo(2, 'cricket', false, new Date()),
    new Todo(3, 'cricket', false, new Date()),
    new Todo(4, 'cricket', false, new Date()),
  ];
}
