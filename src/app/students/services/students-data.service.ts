import { Injectable } from '@angular/core';

import { QueryParams } from '../../shared/models/query-params.model';
import { TherapyTypes } from '../../therapies/enums/therapy-types.enum';
import { Student } from '../models/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentsDataService {
  students: Student[] = [
    {
      id: '1',
      name: 'Tabitha Lorena',
      therapies: [TherapyTypes.speech]
    },
    {
      id: '2',
      name: 'Tracey Luvenia',
      therapies: [TherapyTypes.speech, TherapyTypes.occupational]
    },
    {
      id: '3',
      name: 'Morris Cera',
      therapies: [TherapyTypes.speech]
    },
    {
      id: '4',
      name: 'Brenda Colton',
      therapies: [TherapyTypes.speech, TherapyTypes.behavioral]
    },
    {
      id: '5',
      name: 'Woodrow Rosemary',
      therapies: [TherapyTypes.speech]
    },
    {
      id: '6',
      name: 'Bentley Rusty',
      therapies: [TherapyTypes.speech]
    },
    {
      id: '7',
      name: 'Julius Darleen',
      therapies: [TherapyTypes.speech]
    },
    {
      id: '8',
      name: 'Sharona Jared',
      therapies: [TherapyTypes.speech]
    },
    {
      id: '9',
      name: 'Elenora Debbie',
      therapies: [TherapyTypes.speech]
    },
    {
      id: '10',
      name: 'Minnie Missie',
      therapies: [TherapyTypes.speech]
    },
    {
      id: '11',
      name: 'Nolan Walker',
      therapies: [TherapyTypes.speech]
    },
    {
      id: '12',
      name: 'Raylyn Lyndon',
      therapies: [TherapyTypes.speech]
    },
    {
      id: '13',
      name: 'Elea Wilmer',
      therapies: [TherapyTypes.occupational]
    },
    {
      id: '14',
      name: 'Roxanne Lavender',
      therapies: [TherapyTypes.occupational]
    },
    {
      id: '15',
      name: 'Iggy Lavone',
      therapies: [TherapyTypes.occupational]
    },
    {
      id: '16',
      name: 'Egbert Thankful',
      therapies: [TherapyTypes.occupational]
    },
    {
      id: '17',
      name: 'Andrew Murray',
      therapies: [TherapyTypes.behavioral]
    },
    {
      id: '18',
      name: 'Cindra Tammi',
      therapies: [TherapyTypes.behavioral]
    },
    {
      id: '19',
      name: 'Maleah Averill',
      therapies: [TherapyTypes.behavioral]
    },
    {
      id: '20',
      name: 'Kizzy Elyse',
      therapies: [TherapyTypes.behavioral]
    }
  ];

  getStudents(queryParams: Partial<QueryParams>): Student[] {
    let students = this.students;
    if (queryParams.sort) {
      const { active, direction } = queryParams.sort;
      students = students.sort(compareValues(active, direction));
    }
    students = students.slice(queryParams.offset, queryParams.offset + queryParams.limit);
    if (queryParams.text) {
      const filterText = queryParams.text.toLowerCase();
      students = students.filter(student => {
        return (
          student.name.toLowerCase().includes(filterText) ||
          !!student.therapies.filter(therapy => therapy.toLowerCase().includes(filterText)).length
        );
      });
    }
    return students;
  }

  getStudent(id: string): Student {
    return this.students.find(student => student.id === id);
  }

  createStudent(student: Student): Student {
    const newStudent = { ...student, id: String(this.students.length) };
    this.students.push(newStudent);
    return newStudent;
  }

  updateStudent(updatedStudent: Student): Student {
    const index = this.students.findIndex(student => student.id === updatedStudent.id);
    this.students[index] = updatedStudent;
    return updatedStudent;
  }

  deleteStudent(id: string): Student {
    const index = this.students.findIndex(student => student.id === id);
    const deletedStudent = this.students[index];
    this.students = this.students.filter(student => student.id !== id);
    return deletedStudent;
  }
}

function compareValues(key: string, order: string = 'asc') {
  return function innerSort(a, b) {
    if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
      // property doesn't exist on either object
      return 0;
    }

    const varA = typeof a[key] === 'string' ? a[key].toUpperCase() : a[key];
    const varB = typeof b[key] === 'string' ? b[key].toUpperCase() : b[key];

    let comparison = 0;
    if (varA > varB) {
      comparison = 1;
    } else if (varA < varB) {
      comparison = -1;
    }
    return order === 'desc' ? comparison * -1 : comparison;
  };
}
