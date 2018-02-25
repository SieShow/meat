import { CanLoad, Route } from '@angular/router'
import { LoginService } from './login/login.service'

export class LoggedInGuard implements CanLoad {

    constructor(private loginService: LoginService) { }

    canLoad(route: Route): boolean {
        const logedIn = this.loginService.isLoggedIn()
        if (!logedIn) {
            this.loginService.handleLogin()
        }
        return logedIn
    }
}
