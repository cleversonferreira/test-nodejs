enum WarehouseTypes {
  ECOMMERCE,
  PHYSICAL_STORE,
}

export interface Warehouses {
  locality: string;
  quantity: number;
  type: string;
}

export interface Inventory {
  quantity?: number,
  warehouses: Warehouses[];
}

export class IProduct {
  public sku: number;
  public name: string;
  public inventory: Inventory;
  public isMarketable?: boolean;

  constructor(props: IProduct) {
    // Object.assign(this, props);
    this.sku = props.sku;
    this.name = props.name;
    this.inventory = props.inventory;
    this.isMarketable = props.isMarketable;
  }
}
