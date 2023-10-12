import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor(private toast: ToastrService) { 

  }

  showNotify(type: string, massage: string){
    if (type == "success"){
      this.toast.success(massage);
    }
    if (type == "error"){
      this.toast.error(massage);
    }
    if (type == "warning"){
      this.toast.warning(massage);
    }
    

  }
}
