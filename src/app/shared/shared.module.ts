import { NgModule, ModuleWithProviders } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { InputComponent } from './input/input.component'
import { RadioComponent } from './radio/radio.component'
import { RattingComponent } from '../ratting/ratting.component'
import { ShoppingCartService } from '../restaurant-detail/shopping-cart/shopping-cart.service'
import { RestaurantService } from '../restaurants/restaurants.service'
import { OrderService } from 'app/order/order.service'
import { SnackbarComponent } from '../shared/messages/snackbar/snackbar.component'
import { NotificationService } from './messages/notification.service'

@NgModule({
    declarations: [
        InputComponent,
        RadioComponent,
        RattingComponent,
        SnackbarComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule
    ],
    exports: [
        InputComponent,
        RadioComponent,
        RattingComponent,
        CommonModule,
        ReactiveFormsModule,
        SnackbarComponent,
        FormsModule
    ]
})
export class SharedModule {

    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [
                RestaurantService,
                ShoppingCartService,
                OrderService,
                NotificationService
            ]
        }
    }
}
