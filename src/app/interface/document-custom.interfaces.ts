import { TypeItem } from "./cs-document-data.interfaces";

export interface Additions {
  [key: string]: any;
}
export interface Customizable {
  additions?: Additions;
}
export interface ICategories extends Customizable {
  categoryCode: string;
  categoryName: string;
  CategoryTypeId: any;
  checked: boolean;
  Types: Array<TypeItem>;
}
export interface ISelectedCategories {
  categoryCode: string;
  categoryName: string;
  checked: boolean;
}
export interface SelectedCategory {
  CategoryCode?: string;
  CategoryName?: string;
  CategoryTypeId?: number;
}
export interface IStatusData {
  id: string;
  value: string;
  isSelected: boolean;
}
export interface CategoriesList {
  personalDocuments: ISelectedCategories[];
  documentLibrary: ISelectedCategories[];
}

export interface DocumentStatus {
  fileName: string;
  status: string;
}
export interface Filters {
  filteredCategories: ISelectedCategories[];
  selectedDates: SelectedDates;
  selectedStatus: IStatusData[];
}
export interface SelectedDates {
  startDate: string | null;
  endDate: string | null;
  isInValid?: boolean;
}
export interface DocumentParams {
  cif: string;
  bu: string;
  sortBy?: string;
  sortType?: string;
  pageSize?: number;
  pageNumber?: number;
  rmPid?: string;
  documentCategories?: string[];
  fromDate?: string;
  toDate?: string;
  documentStatus?: string;
  nextId?: number;
  transactionId?: string;
}

export interface DocumentParamsRM {
  cif: string;
  bu: string;
  sortBy?: string;
  sortType?: string;
  pageSize?: number;
  pageNumber?: number;
  userId?: string;
  rmPid?: string;
  documentCategories?: string[];
  fromDate?: string;
  toDate?: string;
  documentStatus?: string;
  nextId?: number;
}
export interface TemporaryDocumentRequestRM {
  CIF?: string;
  BU?: string;
  FileName?: string;
  FileContent?: string;
  UserId?: string;
}
export interface UploadDocumentRequestRM {
  CIF?: string;
  BU?: string;
  DocumentExchangeDataId?: string;
  UserId?: string;
  FileName?: string;
  FileContent?: string;
  Checksum?: string;
}
export interface UploadDocumentMetaDataRequestRM extends Customizable {
  CIF?: string;
  BU?: string;
  DocumentExchangeDataId?: string;
  UserId?: string;
  RMUserId?: string;
  CategoryTypeId?: string;
  Comments?: string;
  DocumentTypeId?: string;
  DocumentCount?: number;
  TemplateType?: string;
}
