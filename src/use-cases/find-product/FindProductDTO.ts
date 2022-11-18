enum WarehouseTypes {
  ECOMMERCE = 'ECOMMERCE',
  PHYSICAL_STORE = 'PHYSICAL_STORE',
}

export interface Warehouses {
  locality: string;
  quantity: number;
  type: string;
}

export interface Inventory {
  quantity: number,
  warehouses: Warehouses[];
}

export interface ICreateProductRequestDTO {
  sku: number;
  name: string;
  inventory: Inventory;
  isMarketable: boolean;
}
