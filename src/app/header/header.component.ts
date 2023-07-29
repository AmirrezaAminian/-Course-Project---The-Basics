import { Component , EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() featureSlected = new EventEmitter<string>()
  onSelect(feature:string){
 this.featureSlected.emit(feature)
  }
    
}
