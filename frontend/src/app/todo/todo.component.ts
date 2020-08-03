import { Component, OnInit } from '@angular/core';
import { TodoService } from '../shared/todo.service';
import { NgForm } from '@angular/forms';
import { Todo } from '../shared/todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  providers: [TodoService]
})
export class TodoComponent implements OnInit {

  toDoListArray: any[];
  task: string;

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.task = "";
    this.refreshTodoList();

  }

  onAdd() {

    let newTodo: Todo;

    newTodo = {
      _id: "",
      task: this.task,
      isChecked: false
    }

    this.todoService.postTodo(newTodo).subscribe((res) => {
      console.log(res);
    });

    this.refreshTodoList();

  }

  alterCheck(todo: Todo) {

    todo.isChecked = !todo.isChecked;

    this.todoService.putTodo(todo).subscribe((res) => {
      console.log(res);
    });

    this.refreshTodoList();

  }

  onDelete(_id: string) {
    this.todoService.deleteTodo(_id).subscribe((res) => {
      this.refreshTodoList();
    });
  }

  refreshTodoList() {
    this.todoService.getTodoList().subscribe((res) => {
      this.toDoListArray = res as Todo[];
    });
  }

}
