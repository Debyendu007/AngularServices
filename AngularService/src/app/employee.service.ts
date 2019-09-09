import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getEmployees()
  {
      return [
          {"id": 1, "name": "Raja", "age": 22},
          {"id": 2, "name": "Papai", "age": 23},
          {"id": 3, "name": "Palash", "age": 24},
          {"id": 4, "name": "Dibyendu", "age": 25},
          {"id": 5, "name": "DivX", "age": 26},
      ]
  }
}
