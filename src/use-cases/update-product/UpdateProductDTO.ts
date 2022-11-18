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
  warehouses: Warehouses[];
}

export interface IUpdateProductRequestDTO {
  sku: number;
  name: string;
  inventory: Inventory;
}
