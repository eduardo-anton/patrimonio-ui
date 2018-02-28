import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable()
export class ItemService {

  itensUrl = 'https://shrouded-depths-31744.herokuapp.com/itens';

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<any[]>(this.itensUrl);
  }

  adicionar(item :any) {
    return this.http.post(this.itensUrl, item);
  }

}
