// Interface para registros

// Lista TODO
export interface IListTodo {
  id: number;
  title: string;
  description?: string;
  completed: boolean;
  dueDate?: Date;
  category?: string;
  priority?: string;
  subtasks?: IListTodo[];
  attachments?: string[];
  comments?: string[];
}

// Usuario
export interface IUser {
  fullName: string;
  email: string;
  password: string;
  dateOfBirth: string;
  gender: string;
  phoneNumber: string;
  physicalAddress: string;
  preferredLanguage: string;
  username: string;
  profilePicture: string;
  securityQuestions: string[];
  notificationPreferences: string[];
  purchaseHistory: string[];
  systemActivityHistory: string[];
  creditCard: string;
  paymentInformation: string;
}

// Contratos
export interface IContract {
  id: string;
  client: {
    name: string;
    email: string;
    phone: string;
    document: string;
    address: {
      street: string;
      number: string;
      complement?: string;
      neighborhood: string;
      city: string;
      state: string;
      country: string;
      postalCode: string;
    }
  };
  startDate: Date;
  endDate: Date;
  value: number;
  discount?: {
    type: 'fixed' | 'percentage';
    value: number;
  };
  services: {
    id: number;
    name: string;
    description?: string;
    price: number;
    taxes?: {
      type: 'fixed' | 'percentage';
      value: number;
    }[];
  }[];
  payment: {
    method: 'Credit Card' | 'Debit Card' | 'Bank Slip' | 'PIX' | 'Transfer';
    installments?: number;
    installmentValue?: number;
    paymentDate?: Date;
  };
  fine?: {
    type: 'fixed' | 'percentage';
    value: number;
    gracePeriod?: number;
  };
  interest?: {
    type: 'fixed' | 'percentage';
    value: number;
    gracePeriod?: number;
  };
  status: 'Draft' | 'Signed' | 'Active' | 'Inactive' | 'Canceled' | 'Expired';
  notes?: string;
}


// Financeiro
export interface IFinancial {
  cashFlow: number;
  financialBalance: number;
  salesHistory: string[];
  purchaseHistory: string[];
  revenue: number;
  expenses: number;
  grossProfit: number;
  netProfit: number;
  taxes: number;
  paymentsMade: number;
  pendingPayments: number;
  invoicesIssued: string[];
  pendingInvoices: string[];
  accountsReceivable: number;
  accountsPayable: number;
  cashFlowReport: string[];
  salesReport: string[];
  expenseReport: string[];
  budgets: string[];
  financialProjections: string[];
}

// Transação
export interface ITransaction {
  cashFlowType: string; // sale, purchase, expense, revenue, taxes
  paymentMethod: string;
  transactionDate: string;
  transactionNumber: string;
  transactionDescription: string;
  responsible: string;
  transactionValue: number;
  changeValue: number;
  transactionStatus: string;
  clientOrSupplierID?: string;
  notes: string;
}

// Produto
export interface IProduct {
  name: string;
  barcode: string;
  purchasePrice: number;
  salePrice: number;
  stockQuantity: number;
  unitOfMeasurement: string;
  supplier: string;
  expirationDate: string;
  productCategory: string;
  stockLocation: string;
  serialNumber?: string;
  batchNumber?: string;
  productDescription: string;
  productWeight?: number;
  productDimensions?: string;
  lowStockAlert: number;
  highStockAlert: number;
  salesHistory: string[];
  purchaseHistory: string[];
  productImage: string;
}

// Fornecedor
export interface ISupplier {
  name: string;
  address: string;
  email: string;
  phone: string;
  fax: string;
  contactPerson: string;
  paymentTerms: string;
  lastPurchaseDate: string;
  lastPurchaseValue: number;
  purchaseHistory: string[];
  deliveryHistory: string[];
  productsSupplied: string[];
  productPrices: number[];
  productQuality: string;
  deliveryTime: string;
  serviceLevel: string;
  supplierCode: string;
  supplierStatus: string;
  notes: string;
  supplierRating: string; // good, regular or bad
}

// Serviço
export interface IService {
  name: string;
  description: string;
  price: number;
  duration: string;
  availability: string[];
  code: string;
  salesHistory: string[];
  popularity: number;
  complexityLevel: string;
  experienceLevel: string;
  status: string;
  notes: string;
  executionDifficulty: number;
  categories: string[];
  customizationOptions: string[];
  promotions: string[];
  satisfactionLevel: number;
  feedback: string[];
  requiredResources: string[];
  averageWaitTime: string;
}
