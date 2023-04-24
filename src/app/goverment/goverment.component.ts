import { Component,OnInit} from '@angular/core';
import { GovListService} from '../service/gov-list/gov-list.service';

@Component({
  selector: 'app-goverment',
  templateUrl: './goverment.component.html',
  styleUrls: ['./goverment.component.css']
})
export class GovermentComponent implements OnInit {
  
  constructor(private service:GovListService){}
  govList:any;
  ngOnInit():void{
this.govList=this.service.studGov;
  }
}
  
// }
// export class GovermentComponent{
// govList=govList;
// }
