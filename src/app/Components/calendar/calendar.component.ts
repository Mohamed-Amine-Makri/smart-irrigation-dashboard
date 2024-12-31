import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Task {
  date: string;
  description: string;
}

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.css'
})
export class CalendarComponent implements OnInit {
  currentMonth: string;
  currentYear: number;
  weekDays: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  calendarDays: number[][];
  tasks: { [key: string]: string[] } = {};
  selectedDay: number | null = null;
  newTask: string = '';
  daysInMonth: number;

  constructor() {
    const now = new Date();
    this.currentMonth = now.toLocaleString('default', { month: 'long' });
    this.currentYear = now.getFullYear();
    this.calendarDays = this.generateCalendar(now.getMonth(), now.getFullYear());
    this.daysInMonth = new Date(this.currentYear, this.getMonthIndex(this.currentMonth) + 1, 0).getDate();
  }

  ngOnInit(): void {
    // Initialize component if needed
  }

  prevMonth(): void {
    const currentDate = new Date(this.currentYear, this.getMonthIndex(this.currentMonth), 1);
    currentDate.setMonth(currentDate.getMonth() - 1);
    this.updateCalendar(currentDate);
  }

  nextMonth(): void {
    const currentDate = new Date(this.currentYear, this.getMonthIndex(this.currentMonth), 1);
    currentDate.setMonth(currentDate.getMonth() + 1);
    this.updateCalendar(currentDate);
  }

  generateCalendar(month: number, year: number): number[][] {
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const calendar: number[][] = [];

    let day = 1;
    for (let i = 0; i < 6; i++) {
      const week: number[] = [];
      for (let j = 0; j < 7; j++) {
        if (i === 0 && j < firstDay) {
          week.push(0);
        } else if (day > daysInMonth) {
          week.push(0);
        } else {
          week.push(day);
          day++;
        }
      }
      calendar.push(week);
      if (day > daysInMonth) break;
    }

    return calendar;
  }

  hasTask(day: number): boolean {
    const dateKey = `${this.currentYear}-${this.currentMonth}-${day}`;
    return this.tasks[dateKey] && this.tasks[dateKey].length > 0;
  }

  isCurrentDay(day: number): boolean {
    const today = new Date();
    return (
      day === today.getDate() &&
      this.currentMonth === today.toLocaleString('default', { month: 'long' }) &&
      this.currentYear === today.getFullYear()
    );
  }

  selectDay(day: number): void {
    if (day !== 0) {
      this.selectedDay = day;
    }
  }

  addTask(): void {
    if (this.selectedDay && this.newTask) {
      const dateKey = `${this.currentYear}-${this.currentMonth}-${this.selectedDay}`;
      if (!this.tasks[dateKey]) {
        this.tasks[dateKey] = [];
      }
      this.tasks[dateKey].push(this.newTask);
      this.newTask = '';
      this.selectedDay = null;
    }
  }

  getAllTasks(): Task[] {
    const allTasks: Task[] = [];
    for (const [date, taskList] of Object.entries(this.tasks)) {
      taskList.forEach(task => {
        allTasks.push({ date, description: task });
      });
    }
    return allTasks.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  }

  deleteTask(task: Task): void {
    const taskList = this.tasks[task.date];
    if (taskList) {
      const index = taskList.indexOf(task.description);
      if (index > -1) {
        taskList.splice(index, 1);
      }
      if (taskList.length === 0) {
        delete this.tasks[task.date];
      }
    }
  }

  openTaskModal(): void {
    // Implement modal opening logic if needed
    console.log('Open task modal');
  }

  private updateCalendar(date: Date): void {
    this.currentMonth = date.toLocaleString('default', { month: 'long' });
    this.currentYear = date.getFullYear();
    this.calendarDays = this.generateCalendar(date.getMonth(), date.getFullYear());
    this.daysInMonth = new Date(this.currentYear, this.getMonthIndex(this.currentMonth) + 1, 0).getDate();
  }

  private getMonthIndex(monthName: string): number {
    return new Date(`${monthName} 1, 2000`).getMonth();
  }
}