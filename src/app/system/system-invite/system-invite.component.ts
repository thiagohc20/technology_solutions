import { StatusService } from './../../core/status.service';
import { InviteService } from '../../core/invite.service';
import { Component, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { SelectModule } from 'primeng/select';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ReactiveFormsModule } from '@angular/forms';
import { Tag } from 'primeng/tag';

import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
  FormsModule,
} from '@angular/forms';
import { FloatLabel } from 'primeng/floatlabel';
import { CommonModule } from '@angular/common';

interface Status {
  id: number;
  name: string;
}

interface Invite {
  id: number;
  statusId: number;
  email: string;
  created_at: string;
  upated_at: string;
}

interface Severity {
  id: number;
  name: 'success' | 'info' | 'danger';
}
@Component({
  selector: 'app-system-invite',
  providers: [StatusService],
  imports: [
    Tag,
    TableModule,
    DialogModule,
    FormsModule,
    ButtonModule,
    InputTextModule,
    SelectModule,
    ReactiveFormsModule,
    CommonModule,
    FloatLabel,
  ],
  templateUrl: './system-invite.component.html',
  styleUrl: './system-invite.component.css',
})
export class SystemInviteComponent implements OnInit {
  search: string = '';
  form!: FormGroup;
  loading: boolean = false;
  status: Status[] = [];
  invites: Invite[] = [];
  visible: boolean = false;
  severity: Severity[] = [
    {
      id: 1,
      name: 'success',
    },
    {
      id: 2,
      name: 'info',
    },
    {
      id: 3,
      name: 'danger',
    },
  ];

  constructor(
    private fb: FormBuilder,
    private statusService: StatusService,
    private inviteService: InviteService
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.email]),
    });

    this.getInvites();
    this.getAllStatus();
  }

  getInvites() {
    this.loading = true;
    this.inviteService.getInvites().subscribe(
      (data) => {
        this.invites = data.map((item) => {
          return {
            ...item,
            created_at: item.created_at
              .split('T')[0]
              .split('-')
              .reverse()
              .join('/'),
          };
        });
      },
      (error) => {
        alert(error.error.message);
      }
    );
    this.loading = false;
  }

  getAllStatus() {
    this.loading = true;
    this.statusService.getStatus().subscribe(
      (data) => {
        this.status = data;
      },
      (error) => {
        alert(error.error.message);
      }
    );
    this.loading = false;
  }

  getStatus(id: number) {
    return this.status.find((item) => item.id == id)?.name!;
  }

  getSeverity(id: number) {
    return this.severity.find((item) => item.id == id)?.name!;
  }

  setIsVisible() {
    this.visible = true;
  }

  setLoading() {
    this.loading = !this.loading;
  }

  async onSubmit() {
    if (this.form.valid) {
      this.setLoading();
      await this.inviteService
        .sendInvite(this.form.get('email')?.value)
        .subscribe(
          (data) => {
            this.getInvites();
            this.form.reset();
          },
          (error) => {
            alert(error.error.message);
          }
        );
      this.setLoading();
    }
  }

  get filteredInvites() {
    return this.invites.filter(
      (invite) =>
        invite.email.toLowerCase().includes(this.search.toLowerCase()) ||
        invite.created_at.toLowerCase().includes(this.search.toLowerCase())
    );
  }

  get email() {
    return this.form.get('email');
  }
}
