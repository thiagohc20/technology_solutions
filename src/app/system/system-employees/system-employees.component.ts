import { Component, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { SelectModule } from 'primeng/select';
import { InputText } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ReactiveFormsModule } from '@angular/forms';
import { EmployeesService } from '../../core/employees.service';
import { ProfileService } from '../../core/profile.service';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
  FormsModule,
} from '@angular/forms';
import { FloatLabel } from 'primeng/floatlabel';
import { CommonModule } from '@angular/common';

interface Employee {
  id: number;
  name: string;
  email: string;
  cpf: string;
}

interface EmployeeSelected extends Employee {
  telephone: string;
  zipcode: string;
  uf: string;
  neighborhood: string;
  publicPlace: string;
  locality: string;
  userId: number;
  created_at: string;
  user: User;
}

interface User {
  id: number;
  profile: Profile;
  created_at: string;
  updated_at: string;
}
interface Profile {
  id: number;
  name: string;
}
@Component({
  selector: 'app-system-employees',
  providers: [EmployeesService, ProfileService],
  imports: [
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
  templateUrl: './system-employees.component.html',
  styleUrl: './system-employees.component.css',
})
export class SystemEmployeesComponent implements OnInit {
  search: string = '';
  loading: boolean = false;
  form!: FormGroup;
  visible: boolean = false;
  isEditing: boolean = false;
  employees: Employee[] = [];
  profiles: Profile[] = [];
  selectedEmployee: EmployeeSelected | null = null;

  constructor(
    private employeeService: EmployeesService,
    private profileService: ProfileService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      userId: new FormControl(''),
      employeeId: new FormControl(''),
      profileId: new FormControl('', [Validators.required]),
      password: new FormControl('', []),
    });

    this.form.get('profile')?.valueChanges.subscribe((profile) => {
      const passwordControl = this.form.get('password');
      if (profile.id === 1 || profile.id === 2) {
        passwordControl?.setValidators([Validators.required]);
      } else {
        passwordControl?.setValidators([]);
      }

      passwordControl?.updateValueAndValidity();
    });

    this.getEmployees();
    this.getProfiles();
  }

  get filteredEmployees(): Employee[] {
    return this.employees.filter((employee) =>
      employee.name.toLowerCase().includes(this.search.toLowerCase())
    );
  }

  get profileId() {
    return this.form.get('profileId');
  }

  get password() {
    return this.form.get('password');
  }
  getEmployees() {
    this.employeeService.getEmployees().subscribe((data) => {
      this.employees = data.sort((a, b) => a.name.localeCompare(b.name));
    });
  }

  getProfiles() {
    this.profileService.getProfile().subscribe((data) => {
      this.profiles = data;
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.loading = true;
      this.employeeService.updateEmploye(this.form.value).subscribe(
        (data) => {
          this.getEmployees();
          alert('Colaborador Atualizado');
          this.isEditing = false;
          this.visible = false;
          this.form.reset();
        },
        (error) => {
          alert(error.error.message);
        }
      );
      this.loading = false;
    }
  }

  selected(employee: Employee) {
    this.loading = true;
    this.employeeService.getEmployee(employee.id).subscribe(
      (data) => {
        this.selectedEmployee = data;
        this.visible = true;
        this.form.patchValue({
          profileId: data.user.profile,
          userId: data.user.id,
          employeeId: data.id,
        });
      },
      (error) => {
        alert(error.error.message);
      }
    );
    this.loading = false;
  }

  showDialog() {
    this.visible = true;
  }

  downloadFile() {
    this.employeeService.export(this.search).subscribe(
      (blob: Blob) => {
        const url = window.URL.createObjectURL(blob); // Cria uma URL temporária para o Blob

        // Criando o link de download
        const a = document.createElement('a');
        a.href = url;
        a.download = 'arquivo.xlsx'; // Nome do arquivo que será baixado
        a.click(); // Simula o clique para o download

        // Libera o URL após o download
        window.URL.revokeObjectURL(url);
      },
      (error) => {
        alert(error.error.message);
      }
    );
  }
}
