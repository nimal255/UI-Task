import { Component ,TemplateRef, ViewEncapsulation } from '@angular/core';
import { NgbOffcanvas,OffcanvasDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class QuotesComponent {
  closeResult: string='';
  QuoteList:any=[
    {"quoteNo": "002142302","companyName":"Acme corporation","LastModified":'02/14/2023',"DealerName":"Div Dealer","DealerRepName":"Divya Nair","TotalCost":"$17,000","status":"Submitted"},
    {"quoteNo": "63110142101","companyName":"NEC Corporation of America","LastModified":'11/05/2021',"DealerName":"Able Telephone Systems","DealerRepName":"Test Dealer","TotalCost":"$6,255","status":"Submitted"},
    {"quoteNo": "167411052106","companyName":"Globex Corporation","LastModified":'11/05/2021',"DealerName":"Blueprint Technologies","DealerRepName":"Aleeta A","TotalCost":"$700,000","status":"Submitted"},
    {"quoteNo": "167412082102","companyName":"Soylent Corp","LastModified":'12/08/2021',"DealerName":"Blueprint Technologies","DealerRepName":"Jeremey Smith","TotalCost":"$400,000","status":"Submitted"},
    {"quoteNo": "167411052106","companyName":"Initech","LastModified":'01/05/2022',"DealerName":"Able Telephone Systems","DealerRepName":"Test Dealer","TotalCost":"$1,000","status":"Submitted"},
    {"quoteNo": "167411052106","companyName":"Umbrella Corporation","LastModified":'10/07/2021',"DealerName":"Test Delear","DealerRepName":"Abbot Name","TotalCost":"$560,000","status":"Submitted"},
    {"quoteNo": "003182101","companyName":"Vehement Capital Partners","LastModified":'11/05/2021',"DealerName":"Blueprint Technologies","DealerRepName":"Aleeta A","TotalCost":"$600,000","status":"Submitted"},
    {"quoteNo": "63110142101","companyName":"NEC Corporation of America","LastModified":'11/05/2021',"DealerName":"Able Telephone Systems","DealerRepName":"Test Dealer","TotalCost":"$6,255","status":"Active"},
    {"quoteNo": "167412082102","companyName":"Massive Dynamic","LastModified":'12/08/2021',"DealerName":"Blueprint Technologies","DealerRepName":"Jeremey Smith","TotalCost":"$400,000","status":"Cancelled"},
    {"quoteNo": "167412082102","companyName":"Soylent Corp","LastModified":'12/08/2021',"DealerName":"Blueprint Technologies","DealerRepName":"Jeremey Smith","TotalCost":"$400,00","status":"Active"},
  ]

  
  constructor(private offcanvasService: NgbOffcanvas){}


  open(content:any) {
		this.offcanvasService.open(content,{ ariaLabelledBy: 'offcanvas-basic-title',position:'end',panelClass:'wide-panel'}).result.then(
			(result) => {
				this.closeResult = `Closed with: ${result}`;
			},
			(reason) => {
				this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
			},
		);
	}

  private getDismissReason(reason: any): string {
		if (reason === OffcanvasDismissReasons.ESC) {
			return 'by pressing ESC';
		} else if (reason === OffcanvasDismissReasons.BACKDROP_CLICK) {
			return 'by clicking on the backdrop';
		} else {
			return `with: ${reason}`;
		}
	}

 

}
