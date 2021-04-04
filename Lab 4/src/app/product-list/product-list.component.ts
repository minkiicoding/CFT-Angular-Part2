import { QueryList } from '@angular/core';
import { Component, OnInit, ViewChildren } from '@angular/core';
import { Product } from '../product';
import { ProductItemComponent } from '../product-item/product-item.component';

@Component({
selector: 'app-product-list',
templateUrl: './product-list.component.html',
styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
    @ViewChildren(ProductListComponent)
    productItems!: QueryList<ProductItemComponent>;

products: Product[];

constructor() {
this.products = [];
}

ngOnInit() {}
selectedProduct(productComponent: ProductItemComponent) {
alert(`Product ${productComponent.product.name} selected`);
this.productItems.forEach((p: { isSelected: boolean; }) => {
    p.isSelected = false;
});
productComponent.isSelected = true;
}
}

