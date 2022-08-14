import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {IProduct} from "../../models/product";
import {ProductService} from "../../services/product.service";
import {ModalService} from "../../services/modal.service";

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
  title = 'angular app'
  products$: Observable<IProduct[]>
  loading = false
  term = ''

  constructor(public productService: ProductService,
              public modalService: ModalService) {
  }

  ngOnInit(): void {
    this.loading = true
    this.productService.getAll().subscribe(() => {
      this.loading = false
    })
  }
}
