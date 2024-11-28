import { PipeTransform, Pipe } from '@angular/core';
import { Products } from '../../models/products_model';

@Pipe({
    name: 'productFilter'
})

export class ProductFilterPipe implements PipeTransform {
    transform(product: Products[], searchTerm: string): Products[] {
        
        if(!searchTerm || !product) {
            return product;
        }

        return product.filter(product => product.productName.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);

    }
}