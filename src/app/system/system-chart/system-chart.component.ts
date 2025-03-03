import {
  Component,
  OnInit,
  ChangeDetectorRef,
  effect,
  inject,
  PLATFORM_ID,
} from '@angular/core';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { EmployeesService } from '../../core/employees.service';
import { InviteService } from '../../core/invite.service';
import { isPlatformBrowser } from '@angular/common';
import { ChartModule } from 'primeng/chart';

import { CommonModule } from '@angular/common';

interface Employee {
  id: number;
  name: string;
  email: string;
  cpf: string;
}

interface Invite {
  id: number;
  statusId: number;
  email: string;
  created_at: string;
  upated_at: string;
}

@Component({
  selector: 'app-system-employees',
  providers: [EmployeesService, InviteService],
  imports: [
    TableModule,
    ButtonModule,
    InputTextModule,
    CommonModule,
    ChartModule,
  ],
  templateUrl: './system-chart.component.html',
  styleUrl: './system-chart.component.css',
})
export class SystemChartComponent implements OnInit {
  search: string = '';
  loading: boolean = false;
  employees: Employee[] = [];
  invites: Invite[] = [];
  employeeData: any;
  inviteData: any;
  employeeOptions: any;
  inviteOptions: any;
  platformId = inject(PLATFORM_ID);

  constructor(
    private cd: ChangeDetectorRef,
    private employeeService: EmployeesService,
    private inviteService: InviteService
  ) {}

  ngOnInit() {
    this.getEmployees();
    this.getStatusInvitation();
  }

  getEmployees() {
    this.employeeService.getEmployees().subscribe((data) => {
      this.employees = data;
      this.checkIfDataLoaded();
    });
  }

  getStatusInvitation() {
    this.inviteService.getInvites().subscribe(
      (data) => {
        this.invites = data;
        this.checkIfDataLoaded();
      },
      (error) => {}
    );
  }

  checkIfDataLoaded() {
    if (this.employees.length > 0 && this.invites.length > 0) {
      this.onDataLoaded();
    }
  }

  onDataLoaded() {
    this.initChart();
  }

  getInviteLength(id: number): number {
    const invitesLength = this.invites.filter(
      (item: Invite) => item.statusId == id
    ).length;

    return invitesLength;
  }

  initChart() {
    if (isPlatformBrowser(this.platformId)) {
      const documentStyle = getComputedStyle(document.documentElement);
      const textColor = documentStyle.getPropertyValue('--p-text-color');
      const textColorSecondary = documentStyle.getPropertyValue(
        '--p-text-muted-color'
      );
      const surfaceBorder = documentStyle.getPropertyValue(
        '--p-content-border-color'
      );

      this.employeeData = {
        labels: ['Administrador', 'Gente e Cultura', 'Colaborador Comum'],
        datasets: [
          {
            label: 'Usuários Cadastrados',
            backgroundColor: documentStyle.getPropertyValue('--p-emerald-500'),
            borderColor: documentStyle.getPropertyValue('--p-emerald-500'),
            data: [65, 59, 80],
          },
        ],
      };

      this.inviteData = {
        labels: ['Finalizado', 'Em Aberto', 'Vencido'],
        datasets: [
          {
            label: 'Convidados',
            backgroundColor: documentStyle.getPropertyValue('--p-emerald-500'),
            borderColor: documentStyle.getPropertyValue('--p-emerald-500'),
            data: [
              this.getInviteLength(1),
              this.getInviteLength(2),
              this.getInviteLength(3),
            ],
          },
        ],
      };

      this.employeeOptions = {
        indexAxis: 'y',
        maintainAspectRatio: false,
        aspectRatio: 0.8,
        plugins: {
          legend: {
            labels: {
              color: textColor,
            },
          },
        },
        scales: {
          x: {
            ticks: {
              color: textColorSecondary,
              font: {
                weight: 500,
              },
            },
            grid: {
              color: surfaceBorder,
              drawBorder: false,
            },
          },
          y: {
            ticks: {
              color: textColorSecondary,
            },
            grid: {
              color: surfaceBorder,
              drawBorder: false,
            },
          },
        },
      };

      this.inviteOptions = {
        indexAxis: 'y',
        maintainAspectRatio: false,
        aspectRatio: 0.8,
        plugins: {
          legend: {
            labels: {
              color: textColor,
            },
          },
        },
        scales: {
          x: {
            ticks: {
              color: textColorSecondary,
              font: {
                weight: 500,
              },
            },
            grid: {
              color: surfaceBorder,
              drawBorder: false,
            },
          },
          y: {
            ticks: {
              color: textColorSecondary,
            },
            grid: {
              color: surfaceBorder,
              drawBorder: false,
            },
          },
        },
      };
      this.cd.markForCheck();
    }
  }
}
