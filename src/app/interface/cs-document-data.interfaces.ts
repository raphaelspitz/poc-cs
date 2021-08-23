export interface Additions {
    [key: string]: any;
}
export interface Customizable {
    additions?: Additions;
}
export interface DocumentLibraryMarkAsReadRequest extends Customizable {
    documentId?: string;
    status?: string;
    dateTime?: string;
    CIF?: string;
    BU?: string;
}
export interface PersonalDocumentMarkAsReadRequest extends Customizable {
    documentExchangeDataId?: string;
    CIF?: string;
    BU?: string;
    Id?: string;
}
export interface TemporaryDocumentRequest extends Customizable {
    CIF?: string;
    BU?: string;
    FileName?: string;
    FileContent?: string;
}
export interface UploadDocumentRequest extends Customizable {
    CIF?: string;
    BU?: string;
    DocumentExchangeDataId?: string;
    FileName?: string;
    FileContent?: string;
    Checksum?: string;
}
export interface UploadDocumentMetaDataRequest extends Customizable {
    CIF?: string;
    BU?: string;
    DocumentExchangeDataId?: string;
    RMUserId?: string;
    CategoryTypeId?: string;
    Comments?: string;
    DocumentTypeId?: string;
    DocumentCount?: number;
    TemplateType?: string;
}
export interface ConfirmPackageRequest extends Customizable {
    CIF?: string;
    BU?: string;
    categoryTypeId?: string;
    checksum?: string;
    comments?: string;
    documentTypeId?: string;
    fileName?: string;
    fileContent?: string;
    layoutId?: string;
    packageId?: string;
    rmId?: string;
    templateType?: string;
    userInfos?: Array<Userinfo>;
}
export interface Userinfo extends Customizable {
    userId?: string;
    userFirstName?: string;
    userLastName?: string;
}
export interface SignTransactionRequest extends Customizable {
    CIF?: string;
    BU?: string;
    PackageId?: string;
    DocumentId?: string;
    ApprovalId?: string;
    Comments?: string;
}
export interface DraftTransactionRequest extends Customizable {
    CIF?: string;
    BU?: string;
    categoryTypeId?: string;
    checksum?: string;
    comments?: string;
    documentTypeId?: string;
    fileName?: string;
    fileContent?: string;
    layoutId?: string;
    packageId?: string;
    rmId?: string;
    templateType?: string;
    userInfos?: Array<Userinfo>;
}
export interface DocumentLibraryCount extends Customizable {
    documentCount?: any;
}
export interface ErrorDocumentLibraryCount extends Customizable {
    message: string;
}
export interface DocumentLibraryList extends Customizable {
    eDocs?: Array<DocumentLibraryListItem>;
    nextId?: any;
}
export interface DocumentLibraryListItem extends Customizable {
    documentDate?: string;
    enDocumentId?: string;
    documentSubTypeDesc?: string;
    portfolioId?: string;
    transactionId?: string;
    documentType?: string;
    documentSubType?: string;
    documentCategory?: string;
    documentTypeName?: string;
    documentStatus?: string;
    documentId?: string;
    addressId?: string;
}
export interface ErrorDocumentLibraryList extends Customizable {
    message: string;
}
export interface DocumentLibraryMarkRead extends Customizable {
    documentId?: string;
    status?: string;
}
export interface ErrorDocumentLibraryMarkRead extends Customizable {
    message: string;
}
export interface PersonalDocumentCount extends Customizable {
    documentCount?: any;
}
export interface ErrorPersonalDocumentCount extends Customizable {
    message: string;
}
export interface PersonalDocumentList extends Customizable {
    documentDataSummary?: Array<PersonalDocumentListItem>;
    nextdDocumentDataId?: any;
}
export interface PersonalDocumentListItem extends Customizable {
    TemplateType?: string;
    RMName?: string;
    CategoryCode?: string;
    Comments?: string;
    OverallESignTrasanctionStatus?: string;
    ESignTransactionDetails?: EsignTransactionDetails;
    RMPid?: string;
    PartyName?: string;
    ESignStatus?: string;
    DocumentTypeId?: number;
    CategoryTypeId?: number;
    Status?: string;
    RequestMetadataId?: number;
    ModifiedDate?: string;
    CreatedDate?: string;
    FileNetDocumentCount?: number;
    ParentRequestMetadataId?: number;
    IsRead?: boolean;
    enCif?: string;
    DocumentType?: string;
    DocumentCount?: number;
    ESignMetadataId?: number;
}
export interface EsignTransactionDetails extends Customizable {
    TotalUnsigned?: number;
    TotalSigned?: number;
    TotalNonConfirmedSignatures?: number;
    TotalSigners?: number;
    TotalDeclined?: number;
}
export interface ErrorPersonalDocumentList extends Customizable {
    message: string;
}
export interface PersonalDocumentMarkRead extends Customizable {
    status?: string;
}
export interface ErrorPersonalDocumentMarkRead extends Customizable {
    message: string;
}
export type Categories = Array<{
    CategoryCode?: string;
    CategoryName?: string;
    CategoryTypeId?: number;
    Types?: Array<TypeItem>;
}>;
export interface TypeItem extends Customizable {
    DocumentTypeId?: number;
    DocumentTypeName?: string;
}
export interface ErrorCategories extends Customizable {
    message: string;
}
export interface TemporaryDocument extends Customizable {
    Id?: string;
}
export interface ErrorTemporaryDocument extends Customizable {
    message: string;
}
export interface ErrorUploadDocument extends Customizable {
    message: string;
}
export interface ErrorUploadDocumentMetadata extends Customizable {
    message: string;
}
export interface ErrorConfirmPackage extends Customizable {
    message: string;
}
export type Layouts = Array<LayoutItem>;
export interface LayoutItem extends Customizable {
    documents?: Array<DocumentDetails>;
    layoutId?: string;
    layoutName?: string;
}
export interface DocumentDetails extends Customizable {
    documentId?: string;
    numberOfSigners?: number;
}
export interface ErrorLayouts extends Customizable {
    message: string;
}
export type SignatoryDetails = Array<SignatoryDetailsItem>;
export interface SignatoryDetailsItem extends Customizable {
    firstName?: string;
    lastName?: string;
    partyId?: string;
    userId?: string;
}
export interface ErrorSignatoryDetails extends Customizable {
    message: string;
}
export interface Approval extends Customizable {
    accepted?: string;
    data?: string;
    fields?: Array<ApprovalField>;
    id?: string;
    name?: string;
    role?: string;
    signed?: string;
}
export interface ApprovalField extends Customizable {
    binding?: string;
    data?: string;
    extract?: boolean;
    extractAnchor?: string;
    height?: number;
    id?: string;
    left?: number;
    name?: string;
    page?: number;
    subtype?: string;
    top?: number;
    type?: string;
    validation?: string;
    value?: string;
    width?: number;
}
export interface ErrorSignTransaction extends Customizable {
    message: string;
}
export interface SignTransaction extends Customizable {
    Id?: string;
}
export interface ErrorDeclineTransaction extends Customizable {
    message: string;
}
export interface ErrorConfirmTransaction extends Customizable {
    message: string;
}
export type DocumentExchangeDetails = Array<DocumentExchangeDetailsItem>;
export interface DocumentExchangeDetailsItem extends Customizable {
    TemplateType?: string;
    RMName?: string;
    DocumentTypeName?: string;
    CategoryCode?: string;
    Comments?: string;
    PartyName?: string;
    ESignStatus?: string;
    DocumentTypeId?: number;
    CategoryTypeId?: number;
    Status?: string;
    ModifiedDate?: string;
    CreatedDate?: string;
    ParentRequestMetadataId?: number;
    Documents?: Array<DocExchangeDocuments>;
    Id?: number;
    FilenetDocumentCount?: number;
    enCif?: string;
    DocumentCount?: number;
    ESignMetadataId?: number;
}
export interface DocExchangeDocuments extends Customizable {
    RequestMetadataId?: number;
    FilenetDocumentId?: string;
    FileName?: string;
    IsRead?: boolean;
}
export interface ErrorDocumentExchangeDetails extends Customizable {
    message: string;
}
export interface DraftTransaction extends Customizable {
    autocomplete?: boolean;
    bulkSendable?: boolean;
    completed?: string;
    consent?: string;
    created?: string;
    data?: ParentData;
    description?: string;
    documents?: Array<Document>;
    due?: string;
    emailMessage?: string;
    id?: string;
    language?: string;
    limits?: string;
    messages?: Array<string>;
    name?: string;
    notarized?: boolean;
    notaryRoleId?: string;
    roles?: Array<Role>;
    sender?: Sender;
    settings?: Settings;
    signedDocumentDelivery?: string;
    status?: string;
    trashed?: boolean;
    type?: string;
    updated?: string;
    visibility?: string;
}
export interface ParentData extends Customizable {
    currentSignerProgress?: CurrentSignerProgress;
    origin?: string;
    overallProgress?: OverallProgress;
    sdk?: string;
}
export interface Sender extends Customizable {
    account?: Account;
    activated?: string;
    address?: SenderAddress;
    company?: string;
    created?: string;
    data?: SenderData;
    email?: string;
    external?: string;
    firstName?: string;
    hasDelegates?: boolean;
    id?: string;
    language?: string;
    lastName?: string;
    locked?: string;
    memberships?: Array<string>;
    name?: string;
    phone?: string;
    professionalIdentityFields?: Array<string>;
    signature?: string;
    specialTypes?: Array<string>;
    status?: string;
    title?: string;
    type?: string;
    updated?: string;
    userCustomFields?: Array<string>;
}
export interface Settings extends Customizable {
    ceremony?: Ceremony;
}
export interface CurrentSignerProgress extends Customizable {
    approvalsConfirmedCount?: string;
    approvalsToConfirmCount?: string;
    approvalsToSignNowCount?: string;
    documentsConfirmedCount?: string;
    documentsPartiallyCompletedCount?: string;
    documentsToConfirmCount?: string;
}
export interface OverallProgress extends Customizable {
    documentsCompletedCount?: string;
    documentsConfirmedCount?: string;
    documentsPartiallyCompletedCount?: string;
    documentsToCompleteCount?: string;
    documentsToConfirmCount?: string;
}
export interface Document extends Customizable {
    approvals?: Array<Approval>;
    data?: DocumentData;
    description?: string;
    external?: string;
    extract?: boolean;
    extractionTypes?: Array<string>;
    fields?: Array<string>;
    id?: string;
    index?: number;
    name?: string;
    pages?: Array<Page>;
    signedHash?: string;
    signerVerificationToken?: string;
    size?: number;
    status?: string;
    tagged?: boolean;
}
export interface DocumentData extends Customizable {
    ese_document_texttag_extract_needed?: string;
}
export interface Page extends Customizable {
    height?: number;
    id?: number;
    index?: number;
    left?: number;
    top?: number;
    version?: number;
    width?: number;
}
export interface Role extends Customizable {
    attachmentRequirements?: Array<string>;
    data?: string;
    emailMessage?: {
        content?: string;
    };
    id?: string;
    index?: number;
    locked?: boolean;
    name?: string;
    reassign?: boolean;
    signers?: Array<Signer>;
    specialTypes?: Array<string>;
    type?: string;
}
export interface Signer extends Customizable {
    address?: string;
    auth?: Auth;
    company?: string;
    created?: string;
    data?: string;
    delivery?: Delivery;
    email?: string;
    external?: string;
    firstName?: string;
    group?: string;
    id?: string;
    knowledgeBasedAuthentication?: string;
    language?: string;
    lastName?: string;
    name?: string;
    phone?: string;
    professionalIdentityFields?: Array<string>;
    signature?: string;
    specialTypes?: Array<string>;
    title?: string;
    updated?: string;
    userCustomFields?: Array<string>;
}
export interface Auth extends Customizable {
    challenges?: Array<string>;
    scheme?: string;
}
export interface Delivery extends Customizable {
    download?: boolean;
    email?: boolean;
    provider?: boolean;
}
export interface Account extends Customizable {
    company?: CompanyData;
    created?: string;
    customFields?: Array<string>;
    data?: string;
    id?: string;
    licenses?: Array<License>;
    logoAltTextKey?: string;
    logoUrl?: string;
    name?: string;
    owner?: string;
    providers?: string;
    updated?: string;
}
export interface SenderAddress extends Customizable {
    address1?: string;
    address2?: string;
    city?: string;
    country?: string;
    state?: string;
    zipcode?: string;
}
export interface SenderData extends Customizable {
    serviceCredentials?: string;
    showIntro?: boolean;
}
export interface CompanyData extends Customizable {
    address?: SenderAddress;
    data?: string;
    id?: string;
    name?: string;
}
export interface License extends Customizable {
    created?: string;
    paidUntil?: string;
    plan?: Plan;
    status?: string;
    transactions?: Array<string>;
}
export interface Plan extends Customizable {
    contract?: string;
    cycle?: string;
    data?: string;
    description?: string;
    features?: string;
    freeCycles?: string;
    group?: string;
    id?: string;
    name?: string;
    original?: string;
    price?: Price;
    quotas?: Array<Quota>;
}
export interface Price extends Customizable {
    amount?: number;
    currency?: Currency;
}
export interface Currency extends Customizable {
    data?: string;
    id?: string;
    name?: string;
}
export interface Quota extends Customizable {
    cycle?: string;
    limit?: number;
    scope?: string;
    target?: string;
}
export interface Ceremony extends Customizable {
    ada?: boolean;
    declineButton?: boolean;
    declineReasons?: Array<string>;
    disableDeclineOther?: boolean;
    disableDownloadForUncompletedPackage?: boolean;
    disableFirstInPersonAffidavit?: boolean;
    disableInPersonAffidavit?: boolean;
    disableOptOutOther?: boolean;
    disableSecondInPersonAffidavit?: boolean;
    documentToolbarOptions?: string;
    enforceCaptureSignature?: boolean;
    events?: Events;
    extractAcroFields?: boolean;
    extractTextTags?: boolean;
    handOver?: string;
    hideCaptureText?: boolean;
    hideLanguageDropdown?: boolean;
    hidePackageOwnerInPerson?: boolean;
    hideWatermark?: boolean;
    inPerson?: boolean;
    layout?: CeremonyLayout;
    maxAuthFailsAllowed?: number;
    optOutButton?: boolean;
    optOutReasons?: Array<string>;
    style?: string;
}
export interface Events extends Customizable {
    complete?: {
        dialog?: boolean;
        redirect?: string;
    };
}
export interface CeremonyLayout extends Customizable {
    brandingBar?: string;
    footer?: string;
    header?: Header;
    iframe?: boolean;
    navigator?: boolean;
}
export interface Header extends Customizable {
    breadcrumbs?: boolean;
    feedback?: boolean;
    globalActions?: GlobalActions;
    globalNavigation?: boolean;
    sessionBar?: boolean;
    titleBar?: TitleBar;
}
export interface GlobalActions extends Customizable {
    confirm?: boolean;
    download?: boolean;
    hideEvidenceSummary?: boolean;
    saveAsLayout?: boolean;
}
export interface TitleBar extends Customizable {
    progressBar?: boolean;
    title?: boolean;
}
export interface ErrorEsignTransaction extends Customizable {
    message: string;
}
export interface ErrorDraftTransaction extends Customizable {
    message: string;
}
