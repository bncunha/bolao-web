import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';
import { RouterService } from 'src/app/services/core/router.service';
import { SeoService } from 'src/app/services/core/seo.service';
import { ToastService } from 'src/app/services/core/toast.service';
import { LoginDto } from './dto/LoginDto';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  model = new LoginDto();
  loading = false;

  constructor(
    private authService: AuthService,
    private router: RouterService,
    private toastService: ToastService,
    seoService: SeoService
  ) {
    seoService.changeTitle('Login')
  }

  ngOnInit() {
    this.authService.logout();
  }

  onSubmit(f: NgForm) {
    if (f.valid) {
      this.loading = true;
      this.authService.login(f.value).subscribe(() => {
        this.loading = false;
        this.router.toInicio(true);
      }, err => {
        this.loading = false;
        this.toastService.alerta('Usuário ou senha estão incorretos!');
      })
    }
  }

}
