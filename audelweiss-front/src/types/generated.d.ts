export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
  JSON: { input: any; output: any; }
  OrderItemItemDynamicZoneInput: { input: any; output: any; }
  PageContentDynamicZoneInput: { input: any; output: any; }
};

export type Article = {
  __typename?: 'Article';
  articleCategories: Array<Maybe<ArticleCategory>>;
  articleCategories_connection?: Maybe<ArticleCategoryRelationResponseCollection>;
  articleContent: ComponentBlocksSingleRichtext;
  articleDescription?: Maybe<Scalars['String']['output']>;
  articleSlug: Scalars['String']['output'];
  articleThumbnail: UploadFile;
  articleTitle: Scalars['String']['output'];
  articleCategories: Array<Maybe<ArticleCategory>>;
  articleCategories_connection?: Maybe<ArticleCategoryRelationResponseCollection>;
  articleContent: ComponentBlocksSingleRichtext;
  articleDescription?: Maybe<Scalars['String']['output']>;
  articleSlug: Scalars['String']['output'];
  articleThumbnail: UploadFile;
  articleTitle: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type ArticleArticleCategoriesArgs = {
  filters?: InputMaybe<ArticleCategoryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ArticleArticleCategories_ConnectionArgs = {
  filters?: InputMaybe<ArticleCategoryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ArticleCategory = {
  __typename?: 'ArticleCategory';
  articles: Array<Maybe<Article>>;
  articles_connection?: Maybe<ArticleRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  slug: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type ArticleCategoryArticlesArgs = {
  filters?: InputMaybe<ArticleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ArticleCategoryArticles_ConnectionArgs = {
  filters?: InputMaybe<ArticleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ArticleCategoryEntityResponseCollection = {
  __typename?: 'ArticleCategoryEntityResponseCollection';
  nodes: Array<ArticleCategory>;
  pageInfo: Pagination;
};

export type ArticleCategoryFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ArticleCategoryFiltersInput>>>;
  articles?: InputMaybe<ArticleFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ArticleCategoryFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ArticleCategoryFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ArticleCategoryInput = {
  articles?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type ArticleCategoryRelationResponseCollection = {
  __typename?: 'ArticleCategoryRelationResponseCollection';
  nodes: Array<ArticleCategory>;
};

export type ArticleEntityResponseCollection = {
  __typename?: 'ArticleEntityResponseCollection';
  nodes: Array<Article>;
  pageInfo: Pagination;
};

export type ArticleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ArticleFiltersInput>>>;
  articleCategories?: InputMaybe<ArticleCategoryFiltersInput>;
  articleContent?: InputMaybe<ComponentBlocksSingleRichtextFiltersInput>;
  articleDescription?: InputMaybe<StringFilterInput>;
  articleSlug?: InputMaybe<StringFilterInput>;
  articleTitle?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<ArticleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ArticleFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ArticleInput = {
  articleCategories?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  articleContent?: InputMaybe<ComponentBlocksSingleRichtextInput>;
  articleDescription?: InputMaybe<Scalars['String']['input']>;
  articleSlug?: InputMaybe<Scalars['String']['input']>;
  articleThumbnail?: InputMaybe<Scalars['ID']['input']>;
  articleTitle?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ArticleRelationResponseCollection = {
  __typename?: 'ArticleRelationResponseCollection';
  nodes: Array<Article>;
};

export type BooleanFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  contains?: InputMaybe<Scalars['Boolean']['input']>;
  containsi?: InputMaybe<Scalars['Boolean']['input']>;
  endsWith?: InputMaybe<Scalars['Boolean']['input']>;
  eq?: InputMaybe<Scalars['Boolean']['input']>;
  eqi?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['Boolean']['input']>;
  gte?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  lt?: InputMaybe<Scalars['Boolean']['input']>;
  lte?: InputMaybe<Scalars['Boolean']['input']>;
  ne?: InputMaybe<Scalars['Boolean']['input']>;
  nei?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<BooleanFilterInput>;
  notContains?: InputMaybe<Scalars['Boolean']['input']>;
  notContainsi?: InputMaybe<Scalars['Boolean']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  startsWith?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ComponentBlocksCardsList = {
  __typename?: 'ComponentBlocksCardsList';
  cards: Array<Maybe<ComponentComponentCard>>;
  heading?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
};


export type ComponentBlocksCardsListCardsArgs = {
  filters?: InputMaybe<ComponentComponentCardFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentBlocksFeaturedArticles = {
  __typename?: 'ComponentBlocksFeaturedArticles';
  articles: Array<Maybe<Article>>;
  articles_connection?: Maybe<ArticleRelationResponseCollection>;
  id: Scalars['ID']['output'];
  link?: Maybe<ComponentComponentSimpleLink>;
  title: Scalars['String']['output'];
};


export type ComponentBlocksFeaturedArticlesArticlesArgs = {
  filters?: InputMaybe<ArticleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ComponentBlocksFeaturedArticlesArticles_ConnectionArgs = {
  filters?: InputMaybe<ArticleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentBlocksFeaturedProducts = {
  __typename?: 'ComponentBlocksFeaturedProducts';
  blockLink?: Maybe<ComponentComponentSimpleLink>;
  headingBlock?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
  products: Array<Maybe<Product>>;
  products_connection?: Maybe<ProductRelationResponseCollection>;
};


export type ComponentBlocksFeaturedProductsProductsArgs = {
  filters?: InputMaybe<ProductFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ComponentBlocksFeaturedProductsProducts_ConnectionArgs = {
  filters?: InputMaybe<ProductFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentBlocksHighlightingCreations = {
  __typename?: 'ComponentBlocksHighlightingCreations';
  content?: Maybe<Scalars['JSON']['output']>;
  creations: Array<Maybe<Creation>>;
  creations_connection?: Maybe<CreationRelationResponseCollection>;
  id: Scalars['ID']['output'];
  link?: Maybe<ComponentComponentSimpleLink>;
  title: Scalars['String']['output'];
};


export type ComponentBlocksHighlightingCreationsCreationsArgs = {
  filters?: InputMaybe<CreationFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ComponentBlocksHighlightingCreationsCreations_ConnectionArgs = {
  filters?: InputMaybe<CreationFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentBlocksImageAndText = {
  __typename?: 'ComponentBlocksImageAndText';
  id: Scalars['ID']['output'];
  image: UploadFile;
  isImageLeft?: Maybe<Scalars['Boolean']['output']>;
  isImageTaller?: Maybe<Scalars['Boolean']['output']>;
  textWithImage: Scalars['JSON']['output'];
};

export type ComponentBlocksQuote = {
  __typename?: 'ComponentBlocksQuote';
  id: Scalars['ID']['output'];
  text: Scalars['String']['output'];
};

export type ComponentBlocksSingleRichtext = {
  __typename?: 'ComponentBlocksSingleRichtext';
  id: Scalars['ID']['output'];
  richtextContent: Scalars['JSON']['output'];
};

export type ComponentBlocksSingleRichtextFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentBlocksSingleRichtextFiltersInput>>>;
  not?: InputMaybe<ComponentBlocksSingleRichtextFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentBlocksSingleRichtextFiltersInput>>>;
  richtextContent?: InputMaybe<JsonFilterInput>;
};

export type ComponentBlocksSingleRichtextInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  richtextContent?: InputMaybe<Scalars['JSON']['input']>;
};

export type ComponentBlocksSingleSlider = {
  __typename?: 'ComponentBlocksSingleSlider';
  id: Scalars['ID']['output'];
  listSlides: Array<Maybe<ComponentComponentLargeSlide>>;
};


export type ComponentBlocksSingleSliderListSlidesArgs = {
  filters?: InputMaybe<ComponentComponentLargeSlideFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentComponentCard = {
  __typename?: 'ComponentComponentCard';
  backgroundImage?: Maybe<UploadFile>;
  description?: Maybe<Scalars['String']['output']>;
  heading: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  link?: Maybe<ComponentComponentSimpleLink>;
};

export type ComponentComponentCardFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentComponentCardFiltersInput>>>;
  description?: InputMaybe<StringFilterInput>;
  heading?: InputMaybe<StringFilterInput>;
  link?: InputMaybe<ComponentComponentSimpleLinkFiltersInput>;
  not?: InputMaybe<ComponentComponentCardFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentComponentCardFiltersInput>>>;
};

export type ComponentComponentCreationPresentation = {
  __typename?: 'ComponentComponentCreationPresentation';
  creationImage: UploadFile;
  creationLegend?: Maybe<Scalars['String']['output']>;
  creationLink?: Maybe<ComponentComponentSimpleLink>;
  id: Scalars['ID']['output'];
};

export type ComponentComponentLargeSlide = {
  __typename?: 'ComponentComponentLargeSlide';
  backgroundImage: UploadFile;
  id: Scalars['ID']['output'];
  slideContent?: Maybe<Scalars['String']['output']>;
  slideLink?: Maybe<ComponentComponentSimpleLink>;
  slideOvertitle?: Maybe<Scalars['String']['output']>;
  slideTitle: Scalars['String']['output'];
};

export type ComponentComponentLargeSlideFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentComponentLargeSlideFiltersInput>>>;
  not?: InputMaybe<ComponentComponentLargeSlideFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentComponentLargeSlideFiltersInput>>>;
  slideContent?: InputMaybe<StringFilterInput>;
  slideLink?: InputMaybe<ComponentComponentSimpleLinkFiltersInput>;
  slideOvertitle?: InputMaybe<StringFilterInput>;
  slideTitle?: InputMaybe<StringFilterInput>;
};

export type ComponentComponentReseaux = {
  __typename?: 'ComponentComponentReseaux';
  icon?: Maybe<UploadFile>;
  id: Scalars['ID']['output'];
  url?: Maybe<Scalars['String']['output']>;
};

export type ComponentComponentReseauxFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentComponentReseauxFiltersInput>>>;
  not?: InputMaybe<ComponentComponentReseauxFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentComponentReseauxFiltersInput>>>;
  url?: InputMaybe<StringFilterInput>;
};

export type ComponentComponentReseauxInput = {
  icon?: InputMaybe<Scalars['ID']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentComponentSimpleLink = {
  __typename?: 'ComponentComponentSimpleLink';
  id: Scalars['ID']['output'];
  label: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

export type ComponentComponentSimpleLinkFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentComponentSimpleLinkFiltersInput>>>;
  label?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentComponentSimpleLinkFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentComponentSimpleLinkFiltersInput>>>;
  url?: InputMaybe<StringFilterInput>;
};

export type ComponentNavigationGroup = {
  __typename?: 'ComponentNavigationGroup';
  heading?: Maybe<ComponentNavigationLink>;
  id: Scalars['ID']['output'];
};

export type ComponentNavigationGroupFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentNavigationGroupFiltersInput>>>;
  heading?: InputMaybe<ComponentNavigationLinkFiltersInput>;
  not?: InputMaybe<ComponentNavigationGroupFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentNavigationGroupFiltersInput>>>;
};

export type ComponentNavigationGroupInput = {
  heading?: InputMaybe<ComponentNavigationLinkInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type ComponentNavigationLink = {
  __typename?: 'ComponentNavigationLink';
  hasIconOnly?: Maybe<Scalars['Boolean']['output']>;
  hasShopMegamenu?: Maybe<Scalars['Boolean']['output']>;
  icon?: Maybe<UploadFile>;
  id: Scalars['ID']['output'];
  label: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

export type ComponentNavigationLinkFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentNavigationLinkFiltersInput>>>;
  hasIconOnly?: InputMaybe<BooleanFilterInput>;
  hasShopMegamenu?: InputMaybe<BooleanFilterInput>;
  label?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentNavigationLinkFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentNavigationLinkFiltersInput>>>;
  url?: InputMaybe<StringFilterInput>;
};

export type ComponentNavigationLinkInput = {
  hasIconOnly?: InputMaybe<Scalars['Boolean']['input']>;
  hasShopMegamenu?: InputMaybe<Scalars['Boolean']['input']>;
  icon?: InputMaybe<Scalars['ID']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentOrderItemDiscountReference = {
  __typename?: 'ComponentOrderItemDiscountReference';
  discount?: Maybe<Discount>;
  id: Scalars['ID']['output'];
};

export type ComponentOrderItemProductReference = {
  __typename?: 'ComponentOrderItemProductReference';
  id: Scalars['ID']['output'];
  product?: Maybe<Product>;
};

export type ComponentProductOption = {
  __typename?: 'ComponentProductOption';
  description?: Maybe<Scalars['String']['output']>;
  format?: Maybe<Enum_Componentproductoption_Format>;
  id: Scalars['ID']['output'];
  label: Scalars['String']['output'];
  options?: Maybe<Array<Maybe<ComponentProductOptionVariant>>>;
  product?: Maybe<Product>;
  required?: Maybe<Scalars['Boolean']['output']>;
};


export type ComponentProductOptionOptionsArgs = {
  filters?: InputMaybe<ComponentProductOptionVariantFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentProductOptionVariant = {
  __typename?: 'ComponentProductOptionVariant';
  id: Scalars['ID']['output'];
  image?: Maybe<UploadFile>;
  name: Scalars['String']['output'];
  price?: Maybe<Scalars['Float']['output']>;
  stock: Scalars['Int']['output'];
};

export type ComponentProductOptionVariantFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentProductOptionVariantFiltersInput>>>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentProductOptionVariantFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentProductOptionVariantFiltersInput>>>;
  price?: InputMaybe<FloatFilterInput>;
  stock?: InputMaybe<IntFilterInput>;
};

export type Creation = {
  __typename?: 'Creation';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  creationCategories: Array<Maybe<CreationCategory>>;
  creationCategories_connection?: Maybe<CreationCategoryRelationResponseCollection>;
  creationContent: ComponentBlocksSingleRichtext;
  creationDescription?: Maybe<Scalars['String']['output']>;
  creationGallery: Array<Maybe<UploadFile>>;
  creationGallery_connection?: Maybe<UploadFileRelationResponseCollection>;
  creationName: Scalars['String']['output'];
  creationSlug?: Maybe<Scalars['String']['output']>;
  creationThumbnail: UploadFile;
  creationTime: Scalars['String']['output'];
  documentId: Scalars['ID']['output'];
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type CreationCreationCategoriesArgs = {
  filters?: InputMaybe<CreationCategoryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type CreationCreationCategories_ConnectionArgs = {
  filters?: InputMaybe<CreationCategoryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type CreationCreationGalleryArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type CreationCreationGallery_ConnectionArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CreationCategory = {
  __typename?: 'CreationCategory';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  creations: Array<Maybe<Creation>>;
  creations_connection?: Maybe<CreationRelationResponseCollection>;
  documentId: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  slug: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type CreationCategoryCreationsArgs = {
  filters?: InputMaybe<CreationFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type CreationCategoryCreations_ConnectionArgs = {
  filters?: InputMaybe<CreationFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CreationCategoryEntityResponseCollection = {
  __typename?: 'CreationCategoryEntityResponseCollection';
  nodes: Array<CreationCategory>;
  pageInfo: Pagination;
};

export type CreationCategoryFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<CreationCategoryFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  creations?: InputMaybe<CreationFiltersInput>;
  documentId?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<CreationCategoryFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<CreationCategoryFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type CreationCategoryInput = {
  creations?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type CreationCategoryRelationResponseCollection = {
  __typename?: 'CreationCategoryRelationResponseCollection';
  nodes: Array<CreationCategory>;
};

export type CreationEntityResponseCollection = {
  __typename?: 'CreationEntityResponseCollection';
  nodes: Array<Creation>;
  pageInfo: Pagination;
};

export type CreationFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<CreationFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  creationCategories?: InputMaybe<CreationCategoryFiltersInput>;
  creationContent?: InputMaybe<ComponentBlocksSingleRichtextFiltersInput>;
  creationDescription?: InputMaybe<StringFilterInput>;
  creationName?: InputMaybe<StringFilterInput>;
  creationSlug?: InputMaybe<StringFilterInput>;
  creationTime?: InputMaybe<StringFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<CreationFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<CreationFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type CreationInput = {
  creationCategories?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  creationContent?: InputMaybe<ComponentBlocksSingleRichtextInput>;
  creationDescription?: InputMaybe<Scalars['String']['input']>;
  creationGallery?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  creationName?: InputMaybe<Scalars['String']['input']>;
  creationSlug?: InputMaybe<Scalars['String']['input']>;
  creationThumbnail?: InputMaybe<Scalars['ID']['input']>;
  creationTime?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type CreationRelationResponseCollection = {
  __typename?: 'CreationRelationResponseCollection';
  nodes: Array<Creation>;
};

export type DateTimeFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  contains?: InputMaybe<Scalars['DateTime']['input']>;
  containsi?: InputMaybe<Scalars['DateTime']['input']>;
  endsWith?: InputMaybe<Scalars['DateTime']['input']>;
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  eqi?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  ne?: InputMaybe<Scalars['DateTime']['input']>;
  nei?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<DateTimeFilterInput>;
  notContains?: InputMaybe<Scalars['DateTime']['input']>;
  notContainsi?: InputMaybe<Scalars['DateTime']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  startsWith?: InputMaybe<Scalars['DateTime']['input']>;
};

export type DeleteMutationResponse = {
  __typename?: 'DeleteMutationResponse';
  documentId: Scalars['ID']['output'];
};

export type Discount = {
  __typename?: 'Discount';
  code: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type DiscountEntityResponseCollection = {
  __typename?: 'DiscountEntityResponseCollection';
  nodes: Array<Discount>;
  pageInfo: Pagination;
};

export type DiscountFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<DiscountFiltersInput>>>;
  code?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<DiscountFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<DiscountFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type DiscountInput = {
  code?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export enum Enum_Componentproductoption_Format {
  Checkbox = 'checkbox',
  Radio = 'radio',
  TextInput = 'text_input'
}

export enum Enum_Page_Type {
  Account = 'account',
  Edito = 'edito',
  Home = 'home',
  ListingArticles = 'listing_articles',
  ListingCreations = 'listing_creations',
  Shop = 'shop',
  ShoppingCart = 'shopping_cart'
}

export enum Enum_Productvariant_Format {
  Checkbox = 'checkbox',
  Input = 'input',
  Radio = 'radio'
}

export type Error = {
  __typename?: 'Error';
  code: Scalars['String']['output'];
  message?: Maybe<Scalars['String']['output']>;
};

export type FileInfoInput = {
  alternativeText?: InputMaybe<Scalars['String']['input']>;
  caption?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type FloatFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  contains?: InputMaybe<Scalars['Float']['input']>;
  containsi?: InputMaybe<Scalars['Float']['input']>;
  endsWith?: InputMaybe<Scalars['Float']['input']>;
  eq?: InputMaybe<Scalars['Float']['input']>;
  eqi?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  ne?: InputMaybe<Scalars['Float']['input']>;
  nei?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<FloatFilterInput>;
  notContains?: InputMaybe<Scalars['Float']['input']>;
  notContainsi?: InputMaybe<Scalars['Float']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  startsWith?: InputMaybe<Scalars['Float']['input']>;
};

export type Footer = {
  __typename?: 'Footer';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  logo?: Maybe<UploadFile>;
  navigation?: Maybe<Array<Maybe<ComponentNavigationGroup>>>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  reseaux?: Maybe<Array<Maybe<ComponentComponentReseaux>>>;
  richtext?: Maybe<Scalars['JSON']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type FooterNavigationArgs = {
  filters?: InputMaybe<ComponentNavigationGroupFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type FooterReseauxArgs = {
  filters?: InputMaybe<ComponentComponentReseauxFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type FooterInput = {
  logo?: InputMaybe<Scalars['ID']['input']>;
  navigation?: InputMaybe<Array<InputMaybe<ComponentNavigationGroupInput>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  reseaux?: InputMaybe<Array<InputMaybe<ComponentComponentReseauxInput>>>;
  richtext?: InputMaybe<Scalars['JSON']['input']>;
};

export type GenericMorph = Article | ArticleCategory | ComponentBlocksCardsList | ComponentBlocksFeaturedArticles | ComponentBlocksFeaturedProducts | ComponentBlocksHero | ComponentBlocksHighlightingCreations | ComponentBlocksImageAndText | ComponentBlocksQuote | ComponentBlocksSingleRichtext | ComponentBlocksSingleSlider | ComponentComponentCard | ComponentComponentCreationPresentation | ComponentComponentLargeSlide | ComponentComponentSimpleLink | ComponentNavigationGroup | ComponentNavigationLink | ComponentOrderItemDiscountReference | ComponentOrderItemProductReference | ComponentProductOption | ComponentProductOptionVariant | Discount | Footer | Header | I18NLocale | Order | OrderItem | Page | Product | ProductCategory | ProductVariant | ProductVariantOption | Review | ReviewWorkflowsWorkflow | ReviewWorkflowsWorkflowStage | UploadFile | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsUser;

export type Header = {
  __typename?: 'Header';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  logo: UploadFile;
  navigation: Array<Maybe<ComponentNavigationGroup>>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type HeaderNavigationArgs = {
  filters?: InputMaybe<ComponentNavigationGroupFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type HeaderInput = {
  logo?: InputMaybe<Scalars['ID']['input']>;
  navigation?: InputMaybe<Array<InputMaybe<ComponentNavigationGroupInput>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type I18NLocale = {
  __typename?: 'I18NLocale';
  code?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type I18NLocaleEntityResponseCollection = {
  __typename?: 'I18NLocaleEntityResponseCollection';
  nodes: Array<I18NLocale>;
  pageInfo: Pagination;
};

export type I18NLocaleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  code?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<I18NLocaleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type IdFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  contains?: InputMaybe<Scalars['ID']['input']>;
  containsi?: InputMaybe<Scalars['ID']['input']>;
  endsWith?: InputMaybe<Scalars['ID']['input']>;
  eq?: InputMaybe<Scalars['ID']['input']>;
  eqi?: InputMaybe<Scalars['ID']['input']>;
  gt?: InputMaybe<Scalars['ID']['input']>;
  gte?: InputMaybe<Scalars['ID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  lt?: InputMaybe<Scalars['ID']['input']>;
  lte?: InputMaybe<Scalars['ID']['input']>;
  ne?: InputMaybe<Scalars['ID']['input']>;
  nei?: InputMaybe<Scalars['ID']['input']>;
  not?: InputMaybe<IdFilterInput>;
  notContains?: InputMaybe<Scalars['ID']['input']>;
  notContainsi?: InputMaybe<Scalars['ID']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  startsWith?: InputMaybe<Scalars['ID']['input']>;
};

export type IntFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  contains?: InputMaybe<Scalars['Int']['input']>;
  containsi?: InputMaybe<Scalars['Int']['input']>;
  endsWith?: InputMaybe<Scalars['Int']['input']>;
  eq?: InputMaybe<Scalars['Int']['input']>;
  eqi?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  ne?: InputMaybe<Scalars['Int']['input']>;
  nei?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<IntFilterInput>;
  notContains?: InputMaybe<Scalars['Int']['input']>;
  notContainsi?: InputMaybe<Scalars['Int']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  startsWith?: InputMaybe<Scalars['Int']['input']>;
};

export type JsonFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  contains?: InputMaybe<Scalars['JSON']['input']>;
  containsi?: InputMaybe<Scalars['JSON']['input']>;
  endsWith?: InputMaybe<Scalars['JSON']['input']>;
  eq?: InputMaybe<Scalars['JSON']['input']>;
  eqi?: InputMaybe<Scalars['JSON']['input']>;
  gt?: InputMaybe<Scalars['JSON']['input']>;
  gte?: InputMaybe<Scalars['JSON']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  lt?: InputMaybe<Scalars['JSON']['input']>;
  lte?: InputMaybe<Scalars['JSON']['input']>;
  ne?: InputMaybe<Scalars['JSON']['input']>;
  nei?: InputMaybe<Scalars['JSON']['input']>;
  not?: InputMaybe<JsonFilterInput>;
  notContains?: InputMaybe<Scalars['JSON']['input']>;
  notContainsi?: InputMaybe<Scalars['JSON']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  startsWith?: InputMaybe<Scalars['JSON']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Change user password. Confirm with the current password. */
  changePassword?: Maybe<UsersPermissionsLoginPayload>;
  createArticle?: Maybe<Article>;
  createArticleCategory?: Maybe<ArticleCategory>;
  createCreation?: Maybe<Creation>;
  createCreationCategory?: Maybe<CreationCategory>;
  createDiscount?: Maybe<Discount>;
  createOrder?: Maybe<Order>;
  createOrderItem?: Maybe<OrderItem>;
  createPage?: Maybe<Page>;
  createProduct?: Maybe<Product>;
  createProductCategory?: Maybe<ProductCategory>;
  createProductSubcategory?: Maybe<ProductSubcategory>;
  createProductVariant?: Maybe<ProductVariant>;
  createProductVariantOption?: Maybe<ProductVariantOption>;
  createReview?: Maybe<Review>;
  createReviewWorkflowsWorkflow?: Maybe<ReviewWorkflowsWorkflow>;
  createReviewWorkflowsWorkflowStage?: Maybe<ReviewWorkflowsWorkflowStage>;
  createSlugifySlug?: Maybe<SlugifySlug>;
  /** Create a new role */
  createUsersPermissionsRole?: Maybe<UsersPermissionsCreateRolePayload>;
  /** Create a new user */
  createUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  deleteArticle?: Maybe<DeleteMutationResponse>;
  deleteArticleCategory?: Maybe<DeleteMutationResponse>;
  deleteCreation?: Maybe<DeleteMutationResponse>;
  deleteCreationCategory?: Maybe<DeleteMutationResponse>;
  deleteDiscount?: Maybe<DeleteMutationResponse>;
  deleteFooter?: Maybe<DeleteMutationResponse>;
  deleteHeader?: Maybe<DeleteMutationResponse>;
  deleteOrder?: Maybe<DeleteMutationResponse>;
  deleteOrderItem?: Maybe<DeleteMutationResponse>;
  deletePage?: Maybe<DeleteMutationResponse>;
  deleteProduct?: Maybe<DeleteMutationResponse>;
  deleteProductCategory?: Maybe<DeleteMutationResponse>;
  deleteProductSubcategory?: Maybe<DeleteMutationResponse>;
  deleteProductVariant?: Maybe<DeleteMutationResponse>;
  deleteProductVariantOption?: Maybe<DeleteMutationResponse>;
  deleteReview?: Maybe<DeleteMutationResponse>;
  deleteReviewWorkflowsWorkflow?: Maybe<DeleteMutationResponse>;
  deleteReviewWorkflowsWorkflowStage?: Maybe<DeleteMutationResponse>;
  deleteSlugifySlug?: Maybe<DeleteMutationResponse>;
  deleteUploadFile?: Maybe<UploadFile>;
  /** Delete an existing role */
  deleteUsersPermissionsRole?: Maybe<UsersPermissionsDeleteRolePayload>;
  /** Delete an existing user */
  deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  /** Confirm an email users email address */
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
  /** Request a reset password token */
  forgotPassword?: Maybe<UsersPermissionsPasswordPayload>;
  login: UsersPermissionsLoginPayload;
  /** Register a user */
  register: UsersPermissionsLoginPayload;
  /** Reset user password. Confirm with a code (resetToken from forgotPassword) */
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  updateArticle?: Maybe<Article>;
  updateArticleCategory?: Maybe<ArticleCategory>;
  updateCreation?: Maybe<Creation>;
  updateCreationCategory?: Maybe<CreationCategory>;
  updateDiscount?: Maybe<Discount>;
  updateFooter?: Maybe<Footer>;
  updateHeader?: Maybe<Header>;
  updateOrder?: Maybe<Order>;
  updateOrderItem?: Maybe<OrderItem>;
  updatePage?: Maybe<Page>;
  updateProduct?: Maybe<Product>;
  updateProductCategory?: Maybe<ProductCategory>;
  updateProductSubcategory?: Maybe<ProductSubcategory>;
  updateProductVariant?: Maybe<ProductVariant>;
  updateProductVariantOption?: Maybe<ProductVariantOption>;
  updateReview?: Maybe<Review>;
  updateReviewWorkflowsWorkflow?: Maybe<ReviewWorkflowsWorkflow>;
  updateReviewWorkflowsWorkflowStage?: Maybe<ReviewWorkflowsWorkflowStage>;
  updateSlugifySlug?: Maybe<SlugifySlug>;
  updateUploadFile: UploadFile;
  /** Update an existing role */
  updateUsersPermissionsRole?: Maybe<UsersPermissionsUpdateRolePayload>;
  /** Update an existing user */
  updateUsersPermissionsUser: UsersPermissionsUserEntityResponse;
};


export type MutationChangePasswordArgs = {
  currentPassword: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
};


export type MutationCreateArticleArgs = {
  data: ArticleInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationCreateArticleCategoryArgs = {
  data: ArticleCategoryInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationCreateCreationArgs = {
  data: CreationInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationCreateCreationCategoryArgs = {
  data: CreationCategoryInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationCreateDiscountArgs = {
  data: DiscountInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationCreateOrderArgs = {
  data: OrderInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationCreateOrderItemArgs = {
  data: OrderItemInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationCreatePageArgs = {
  data: PageInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationCreateProductArgs = {
  data: ProductInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationCreateProductCategoryArgs = {
  data: ProductCategoryInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationCreateProductSubcategoryArgs = {
  data: ProductSubcategoryInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationCreateProductVariantArgs = {
  data: ProductVariantInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationCreateProductVariantOptionArgs = {
  data: ProductVariantOptionInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationCreateReviewArgs = {
  data: ReviewInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationCreateReviewWorkflowsWorkflowArgs = {
  data: ReviewWorkflowsWorkflowInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationCreateReviewWorkflowsWorkflowStageArgs = {
  data: ReviewWorkflowsWorkflowStageInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationCreateSlugifySlugArgs = {
  data: SlugifySlugInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationCreateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
};


export type MutationCreateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
};


export type MutationDeleteArticleArgs = {
  documentId: Scalars['ID']['input'];
};


export type MutationDeleteArticleCategoryArgs = {
  documentId: Scalars['ID']['input'];
};


export type MutationDeleteCreationArgs = {
  documentId: Scalars['ID']['input'];
};


export type MutationDeleteCreationCategoryArgs = {
  documentId: Scalars['ID']['input'];
};


export type MutationDeleteDiscountArgs = {
  documentId: Scalars['ID']['input'];
};


export type MutationDeleteOrderArgs = {
  documentId: Scalars['ID']['input'];
};


export type MutationDeleteOrderItemArgs = {
  documentId: Scalars['ID']['input'];
};


export type MutationDeletePageArgs = {
  documentId: Scalars['ID']['input'];
};


export type MutationDeleteProductArgs = {
  documentId: Scalars['ID']['input'];
};


export type MutationDeleteProductCategoryArgs = {
  documentId: Scalars['ID']['input'];
};


export type MutationDeleteProductSubcategoryArgs = {
  documentId: Scalars['ID']['input'];
};


export type MutationDeleteProductVariantArgs = {
  documentId: Scalars['ID']['input'];
};


export type MutationDeleteProductVariantOptionArgs = {
  documentId: Scalars['ID']['input'];
};


export type MutationDeleteReviewArgs = {
  documentId: Scalars['ID']['input'];
};


export type MutationDeleteReviewWorkflowsWorkflowArgs = {
  documentId: Scalars['ID']['input'];
};


export type MutationDeleteReviewWorkflowsWorkflowStageArgs = {
  documentId: Scalars['ID']['input'];
};


export type MutationDeleteSlugifySlugArgs = {
  documentId: Scalars['ID']['input'];
};


export type MutationDeleteUploadFileArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUsersPermissionsRoleArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUsersPermissionsUserArgs = {
  id: Scalars['ID']['input'];
};


export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String']['input'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String']['input'];
};


export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};


export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};


export type MutationResetPasswordArgs = {
  code: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
};


export type MutationUpdateArticleArgs = {
  data: ArticleInput;
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateArticleCategoryArgs = {
  data: ArticleCategoryInput;
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateCreationArgs = {
  data: CreationInput;
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateCreationCategoryArgs = {
  data: CreationCategoryInput;
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateDiscountArgs = {
  data: DiscountInput;
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateFooterArgs = {
  data: FooterInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateHeaderArgs = {
  data: HeaderInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateOrderArgs = {
  data: OrderInput;
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateOrderItemArgs = {
  data: OrderItemInput;
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdatePageArgs = {
  data: PageInput;
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateProductArgs = {
  data: ProductInput;
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateProductCategoryArgs = {
  data: ProductCategoryInput;
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateProductSubcategoryArgs = {
  data: ProductSubcategoryInput;
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateProductVariantArgs = {
  data: ProductVariantInput;
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateProductVariantOptionArgs = {
  data: ProductVariantOptionInput;
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateReviewArgs = {
  data: ReviewInput;
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateReviewWorkflowsWorkflowArgs = {
  data: ReviewWorkflowsWorkflowInput;
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateReviewWorkflowsWorkflowStageArgs = {
  data: ReviewWorkflowsWorkflowStageInput;
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateSlugifySlugArgs = {
  data: SlugifySlugInput;
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateUploadFileArgs = {
  id: Scalars['ID']['input'];
  info?: InputMaybe<FileInfoInput>;
};


export type MutationUpdateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
  id: Scalars['ID']['input'];
};

export type Order = {
  __typename?: 'Order';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  order_items: Array<Maybe<OrderItem>>;
  order_items_connection?: Maybe<OrderItemRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  user?: Maybe<UsersPermissionsUser>;
};


export type OrderOrder_ItemsArgs = {
  filters?: InputMaybe<OrderItemFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type OrderOrder_Items_ConnectionArgs = {
  filters?: InputMaybe<OrderItemFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type OrderEntityResponseCollection = {
  __typename?: 'OrderEntityResponseCollection';
  nodes: Array<Order>;
  pageInfo: Pagination;
};

export type OrderFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<OrderFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<OrderFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<OrderFiltersInput>>>;
  order_items?: InputMaybe<OrderItemFiltersInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  user?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type OrderInput = {
  order_items?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  user?: InputMaybe<Scalars['ID']['input']>;
};

export type OrderItem = {
  __typename?: 'OrderItem';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  item: Array<Maybe<OrderItemItemDynamicZone>>;
  order?: Maybe<Order>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  quantity: Scalars['Int']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type OrderItemEntityResponseCollection = {
  __typename?: 'OrderItemEntityResponseCollection';
  nodes: Array<OrderItem>;
  pageInfo: Pagination;
};

export type OrderItemFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<OrderItemFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<OrderItemFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<OrderItemFiltersInput>>>;
  order?: InputMaybe<OrderFiltersInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  quantity?: InputMaybe<IntFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type OrderItemInput = {
  item?: InputMaybe<Array<Scalars['OrderItemItemDynamicZoneInput']['input']>>;
  order?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
};

export type OrderItemItemDynamicZone = ComponentOrderItemDiscountReference | ComponentOrderItemProductReference | Error;

export type OrderItemRelationResponseCollection = {
  __typename?: 'OrderItemRelationResponseCollection';
  nodes: Array<OrderItem>;
};

export type OrderRelationResponseCollection = {
  __typename?: 'OrderRelationResponseCollection';
  nodes: Array<Order>;
};

export type Page = {
  __typename?: 'Page';
  content?: Maybe<Array<Maybe<PageContentDynamicZone>>>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  illustrationImage: UploadFile;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  slug: Scalars['String']['output'];
  title: Scalars['String']['output'];
  type: Enum_Page_Type;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type PageContentDynamicZone = ComponentBlocksCardsList | ComponentBlocksFeaturedArticles | ComponentBlocksFeaturedProducts | ComponentBlocksHighlightingCreations | ComponentBlocksImageAndText | ComponentBlocksQuote | ComponentBlocksSingleRichtext | ComponentBlocksSingleSlider | Error;

export type PageEntityResponseCollection = {
  __typename?: 'PageEntityResponseCollection';
  nodes: Array<Page>;
  pageInfo: Pagination;
};

export type PageFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<PageFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<PageFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<PageFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type PageInput = {
  content?: InputMaybe<Array<Scalars['PageContentDynamicZoneInput']['input']>>;
  illustrationImage?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Enum_Page_Type>;
};

export type Pagination = {
  __typename?: 'Pagination';
  page: Scalars['Int']['output'];
  pageCount: Scalars['Int']['output'];
  pageSize: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type PaginationArg = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  start?: InputMaybe<Scalars['Int']['input']>;
};

export type Product = {
  __typename?: 'Product';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description: Scalars['JSON']['output'];
  documentId: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  photos: Array<Maybe<UploadFile>>;
  photos_connection: UploadFileRelationResponseCollection;
  price: Scalars['Float']['output'];
  productSlug?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  reviews: Array<Maybe<Review>>;
  reviews_connection?: Maybe<ReviewRelationResponseCollection>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  variants: Array<Maybe<ProductVariant>>;
  variants_connection?: Maybe<ProductVariantRelationResponseCollection>;
};


export type ProductPhotosArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ProductPhotos_ConnectionArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ProductReviewsArgs = {
  filters?: InputMaybe<ReviewFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ProductReviews_ConnectionArgs = {
  filters?: InputMaybe<ReviewFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ProductVariantsArgs = {
  filters?: InputMaybe<ProductVariantFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ProductVariants_ConnectionArgs = {
  filters?: InputMaybe<ProductVariantFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ProductCategory = {
  __typename?: 'ProductCategory';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  illustration: UploadFile;
  name: Scalars['String']['output'];
  product_subcategories: Array<Maybe<ProductSubcategory>>;
  product_subcategories_connection?: Maybe<ProductSubcategoryRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  slug: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type ProductCategoryProduct_SubcategoriesArgs = {
  filters?: InputMaybe<ProductSubcategoryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ProductCategoryProduct_Subcategories_ConnectionArgs = {
  filters?: InputMaybe<ProductSubcategoryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ProductCategoryEntityResponseCollection = {
  __typename?: 'ProductCategoryEntityResponseCollection';
  nodes: Array<ProductCategory>;
  pageInfo: Pagination;
};

export type ProductCategoryFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ProductCategoryFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ProductCategoryFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ProductCategoryFiltersInput>>>;
  product_subcategories?: InputMaybe<ProductSubcategoryFiltersInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ProductCategoryInput = {
  illustration?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  product_subcategories?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type ProductEntityResponseCollection = {
  __typename?: 'ProductEntityResponseCollection';
  nodes: Array<Product>;
  pageInfo: Pagination;
};

export type ProductFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ProductFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<JsonFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ProductFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ProductFiltersInput>>>;
  price?: InputMaybe<FloatFilterInput>;
  productSlug?: InputMaybe<StringFilterInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  reviews?: InputMaybe<ReviewFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  variants?: InputMaybe<ProductVariantFiltersInput>;
};

export type ProductInput = {
  description?: InputMaybe<Scalars['JSON']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  photos?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  price?: InputMaybe<Scalars['Float']['input']>;
  productSlug?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  reviews?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  variants?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type ProductRelationResponseCollection = {
  __typename?: 'ProductRelationResponseCollection';
  nodes: Array<Product>;
};

export type ProductSubcategory = {
  __typename?: 'ProductSubcategory';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  illustration: UploadFile;
  name: Scalars['String']['output'];
  product_category?: Maybe<ProductCategory>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  slug: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ProductSubcategoryEntityResponseCollection = {
  __typename?: 'ProductSubcategoryEntityResponseCollection';
  nodes: Array<ProductSubcategory>;
  pageInfo: Pagination;
};

export type ProductSubcategoryFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ProductSubcategoryFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ProductSubcategoryFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ProductSubcategoryFiltersInput>>>;
  product_category?: InputMaybe<ProductCategoryFiltersInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ProductSubcategoryInput = {
  illustration?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  product_category?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type ProductSubcategoryRelationResponseCollection = {
  __typename?: 'ProductSubcategoryRelationResponseCollection';
  nodes: Array<ProductSubcategory>;
};

export type ProductVariant = {
  __typename?: 'ProductVariant';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  format: Enum_Productvariant_Format;
  name: Scalars['String']['output'];
  product?: Maybe<Product>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  required: Scalars['Boolean']['output'];
  sku?: Maybe<Scalars['String']['output']>;
  stock: Scalars['Int']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  variant_options: Array<Maybe<ProductVariantOption>>;
  variant_options_connection?: Maybe<ProductVariantOptionRelationResponseCollection>;
};


export type ProductVariantVariant_OptionsArgs = {
  filters?: InputMaybe<ProductVariantOptionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ProductVariantVariant_Options_ConnectionArgs = {
  filters?: InputMaybe<ProductVariantOptionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ProductVariantEntityResponseCollection = {
  __typename?: 'ProductVariantEntityResponseCollection';
  nodes: Array<ProductVariant>;
  pageInfo: Pagination;
};

export type ProductVariantFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ProductVariantFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  format?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ProductVariantFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ProductVariantFiltersInput>>>;
  product?: InputMaybe<ProductFiltersInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  required?: InputMaybe<BooleanFilterInput>;
  sku?: InputMaybe<StringFilterInput>;
  stock?: InputMaybe<IntFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  variant_options?: InputMaybe<ProductVariantOptionFiltersInput>;
};

export type ProductVariantInput = {
  format?: InputMaybe<Enum_Productvariant_Format>;
  name?: InputMaybe<Scalars['String']['input']>;
  product?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  required?: InputMaybe<Scalars['Boolean']['input']>;
  sku?: InputMaybe<Scalars['String']['input']>;
  stock?: InputMaybe<Scalars['Int']['input']>;
  variant_options?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type ProductVariantOption = {
  __typename?: 'ProductVariantOption';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  image?: Maybe<UploadFile>;
  label: Scalars['String']['output'];
  price?: Maybe<Scalars['Float']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  variant?: Maybe<ProductVariant>;
};

export type ProductVariantOptionEntityResponseCollection = {
  __typename?: 'ProductVariantOptionEntityResponseCollection';
  nodes: Array<ProductVariantOption>;
  pageInfo: Pagination;
};

export type ProductVariantOptionFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ProductVariantOptionFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  label?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ProductVariantOptionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ProductVariantOptionFiltersInput>>>;
  price?: InputMaybe<FloatFilterInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  variant?: InputMaybe<ProductVariantFiltersInput>;
};

export type ProductVariantOptionInput = {
  image?: InputMaybe<Scalars['ID']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Float']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  variant?: InputMaybe<Scalars['ID']['input']>;
};

export type ProductVariantOptionRelationResponseCollection = {
  __typename?: 'ProductVariantOptionRelationResponseCollection';
  nodes: Array<ProductVariantOption>;
};

export type ProductVariantRelationResponseCollection = {
  __typename?: 'ProductVariantRelationResponseCollection';
  nodes: Array<ProductVariant>;
};

export enum PublicationStatus {
  Draft = 'DRAFT',
  Published = 'PUBLISHED'
}

export type Query = {
  __typename?: 'Query';
  article?: Maybe<Article>;
  articleCategories: Array<Maybe<ArticleCategory>>;
  articleCategories_connection?: Maybe<ArticleCategoryEntityResponseCollection>;
  articleCategory?: Maybe<ArticleCategory>;
  articles: Array<Maybe<Article>>;
  articles_connection?: Maybe<ArticleEntityResponseCollection>;
  creation?: Maybe<Creation>;
  creationCategories: Array<Maybe<CreationCategory>>;
  creationCategories_connection?: Maybe<CreationCategoryEntityResponseCollection>;
  creationCategory?: Maybe<CreationCategory>;
  creations: Array<Maybe<Creation>>;
  creations_connection?: Maybe<CreationEntityResponseCollection>;
  discount?: Maybe<Discount>;
  discounts: Array<Maybe<Discount>>;
  discounts_connection?: Maybe<DiscountEntityResponseCollection>;
  footer?: Maybe<Footer>;
  header?: Maybe<Header>;
  i18NLocale?: Maybe<I18NLocale>;
  i18NLocales: Array<Maybe<I18NLocale>>;
  i18NLocales_connection?: Maybe<I18NLocaleEntityResponseCollection>;
  me?: Maybe<UsersPermissionsMe>;
  order?: Maybe<Order>;
  orderItem?: Maybe<OrderItem>;
  orderItems: Array<Maybe<OrderItem>>;
  orderItems_connection?: Maybe<OrderItemEntityResponseCollection>;
  orders: Array<Maybe<Order>>;
  orders_connection?: Maybe<OrderEntityResponseCollection>;
  page?: Maybe<Page>;
  pages: Array<Maybe<Page>>;
  pages_connection?: Maybe<PageEntityResponseCollection>;
  product?: Maybe<Product>;
  productCategories: Array<Maybe<ProductCategory>>;
  productCategories_connection?: Maybe<ProductCategoryEntityResponseCollection>;
  productCategory?: Maybe<ProductCategory>;
  productSubcategories: Array<Maybe<ProductSubcategory>>;
  productSubcategories_connection?: Maybe<ProductSubcategoryEntityResponseCollection>;
  productSubcategory?: Maybe<ProductSubcategory>;
  productVariant?: Maybe<ProductVariant>;
  productVariantOption?: Maybe<ProductVariantOption>;
  productVariantOptions: Array<Maybe<ProductVariantOption>>;
  productVariantOptions_connection?: Maybe<ProductVariantOptionEntityResponseCollection>;
  productVariants: Array<Maybe<ProductVariant>>;
  productVariants_connection?: Maybe<ProductVariantEntityResponseCollection>;
  products: Array<Maybe<Product>>;
  products_connection?: Maybe<ProductEntityResponseCollection>;
  review?: Maybe<Review>;
  reviewWorkflowsWorkflow?: Maybe<ReviewWorkflowsWorkflow>;
  reviewWorkflowsWorkflowStage?: Maybe<ReviewWorkflowsWorkflowStage>;
  reviewWorkflowsWorkflowStages: Array<Maybe<ReviewWorkflowsWorkflowStage>>;
  reviewWorkflowsWorkflowStages_connection?: Maybe<ReviewWorkflowsWorkflowStageEntityResponseCollection>;
  reviewWorkflowsWorkflows: Array<Maybe<ReviewWorkflowsWorkflow>>;
  reviewWorkflowsWorkflows_connection?: Maybe<ReviewWorkflowsWorkflowEntityResponseCollection>;
  reviews: Array<Maybe<Review>>;
  reviews_connection?: Maybe<ReviewEntityResponseCollection>;
  slugifySlug?: Maybe<SlugifySlug>;
  slugifySlugs: Array<Maybe<SlugifySlug>>;
  slugifySlugs_connection?: Maybe<SlugifySlugEntityResponseCollection>;
  uploadFile?: Maybe<UploadFile>;
  uploadFiles: Array<Maybe<UploadFile>>;
  uploadFiles_connection?: Maybe<UploadFileEntityResponseCollection>;
  usersPermissionsRole?: Maybe<UsersPermissionsRole>;
  usersPermissionsRoles: Array<Maybe<UsersPermissionsRole>>;
  usersPermissionsRoles_connection?: Maybe<UsersPermissionsRoleEntityResponseCollection>;
  usersPermissionsUser?: Maybe<UsersPermissionsUser>;
  usersPermissionsUsers: Array<Maybe<UsersPermissionsUser>>;
  usersPermissionsUsers_connection?: Maybe<UsersPermissionsUserEntityResponseCollection>;
};


export type QueryArticleArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryArticleCategoriesArgs = {
  filters?: InputMaybe<ArticleCategoryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryArticleCategories_ConnectionArgs = {
  filters?: InputMaybe<ArticleCategoryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryArticleCategoryArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryArticlesArgs = {
  filters?: InputMaybe<ArticleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryArticles_ConnectionArgs = {
  filters?: InputMaybe<ArticleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryCreationArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryCreationCategoriesArgs = {
  filters?: InputMaybe<CreationCategoryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryCreationCategories_ConnectionArgs = {
  filters?: InputMaybe<CreationCategoryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryCreationCategoryArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryCreationsArgs = {
  filters?: InputMaybe<CreationFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryCreations_ConnectionArgs = {
  filters?: InputMaybe<CreationFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryDiscountArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryDiscountsArgs = {
  filters?: InputMaybe<DiscountFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryDiscounts_ConnectionArgs = {
  filters?: InputMaybe<DiscountFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryFooterArgs = {
  status?: InputMaybe<PublicationStatus>;
};


export type QueryHeaderArgs = {
  status?: InputMaybe<PublicationStatus>;
};


export type QueryI18NLocaleArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryI18NLocalesArgs = {
  filters?: InputMaybe<I18NLocaleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryI18NLocales_ConnectionArgs = {
  filters?: InputMaybe<I18NLocaleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryOrderArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryOrderItemArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryOrderItemsArgs = {
  filters?: InputMaybe<OrderItemFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryOrderItems_ConnectionArgs = {
  filters?: InputMaybe<OrderItemFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryOrdersArgs = {
  filters?: InputMaybe<OrderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryOrders_ConnectionArgs = {
  filters?: InputMaybe<OrderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryPageArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryPagesArgs = {
  filters?: InputMaybe<PageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryPages_ConnectionArgs = {
  filters?: InputMaybe<PageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryProductArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryProductCategoriesArgs = {
  filters?: InputMaybe<ProductCategoryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryProductCategories_ConnectionArgs = {
  filters?: InputMaybe<ProductCategoryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryProductCategoryArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryProductSubcategoriesArgs = {
  filters?: InputMaybe<ProductSubcategoryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryProductSubcategories_ConnectionArgs = {
  filters?: InputMaybe<ProductSubcategoryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryProductSubcategoryArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryProductVariantArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryProductVariantOptionArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryProductVariantOptionsArgs = {
  filters?: InputMaybe<ProductVariantOptionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryProductVariantOptions_ConnectionArgs = {
  filters?: InputMaybe<ProductVariantOptionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryProductVariantsArgs = {
  filters?: InputMaybe<ProductVariantFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryProductVariants_ConnectionArgs = {
  filters?: InputMaybe<ProductVariantFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryProductsArgs = {
  filters?: InputMaybe<ProductFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryProducts_ConnectionArgs = {
  filters?: InputMaybe<ProductFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryReviewArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryReviewWorkflowsWorkflowArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryReviewWorkflowsWorkflowStageArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryReviewWorkflowsWorkflowStagesArgs = {
  filters?: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryReviewWorkflowsWorkflowStages_ConnectionArgs = {
  filters?: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryReviewWorkflowsWorkflowsArgs = {
  filters?: InputMaybe<ReviewWorkflowsWorkflowFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryReviewWorkflowsWorkflows_ConnectionArgs = {
  filters?: InputMaybe<ReviewWorkflowsWorkflowFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryReviewsArgs = {
  filters?: InputMaybe<ReviewFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryReviews_ConnectionArgs = {
  filters?: InputMaybe<ReviewFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QuerySlugifySlugArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QuerySlugifySlugsArgs = {
  filters?: InputMaybe<SlugifySlugFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QuerySlugifySlugs_ConnectionArgs = {
  filters?: InputMaybe<SlugifySlugFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryUploadFileArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryUploadFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryUploadFiles_ConnectionArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryUsersPermissionsRoleArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryUsersPermissionsRolesArgs = {
  filters?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryUsersPermissionsRoles_ConnectionArgs = {
  filters?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryUsersPermissionsUserArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryUsersPermissionsUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryUsersPermissionsUsers_ConnectionArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};

export type Review = {
  __typename?: 'Review';
  content?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  photos: Array<Maybe<UploadFile>>;
  photos_connection?: Maybe<UploadFileRelationResponseCollection>;
  product?: Maybe<Product>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  stars?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type ReviewPhotosArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ReviewPhotos_ConnectionArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ReviewEntityResponseCollection = {
  __typename?: 'ReviewEntityResponseCollection';
  nodes: Array<Review>;
  pageInfo: Pagination;
};

export type ReviewFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ReviewFiltersInput>>>;
  content?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<ReviewFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ReviewFiltersInput>>>;
  product?: InputMaybe<ProductFiltersInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  stars?: InputMaybe<IntFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ReviewInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  photos?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  product?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  stars?: InputMaybe<Scalars['Int']['input']>;
};

export type ReviewRelationResponseCollection = {
  __typename?: 'ReviewRelationResponseCollection';
  nodes: Array<Review>;
};

export type ReviewWorkflowsWorkflow = {
  __typename?: 'ReviewWorkflowsWorkflow';
  contentTypes: Scalars['JSON']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  stageRequiredToPublish?: Maybe<ReviewWorkflowsWorkflowStage>;
  stages: Array<Maybe<ReviewWorkflowsWorkflowStage>>;
  stages_connection?: Maybe<ReviewWorkflowsWorkflowStageRelationResponseCollection>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type ReviewWorkflowsWorkflowStagesArgs = {
  filters?: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ReviewWorkflowsWorkflowStages_ConnectionArgs = {
  filters?: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ReviewWorkflowsWorkflowEntityResponseCollection = {
  __typename?: 'ReviewWorkflowsWorkflowEntityResponseCollection';
  nodes: Array<ReviewWorkflowsWorkflow>;
  pageInfo: Pagination;
};

export type ReviewWorkflowsWorkflowFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ReviewWorkflowsWorkflowFiltersInput>>>;
  contentTypes?: InputMaybe<JsonFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ReviewWorkflowsWorkflowFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ReviewWorkflowsWorkflowFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  stageRequiredToPublish?: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>;
  stages?: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ReviewWorkflowsWorkflowInput = {
  contentTypes?: InputMaybe<Scalars['JSON']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  stageRequiredToPublish?: InputMaybe<Scalars['ID']['input']>;
  stages?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type ReviewWorkflowsWorkflowStage = {
  __typename?: 'ReviewWorkflowsWorkflowStage';
  color?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  workflow?: Maybe<ReviewWorkflowsWorkflow>;
};

export type ReviewWorkflowsWorkflowStageEntityResponseCollection = {
  __typename?: 'ReviewWorkflowsWorkflowStageEntityResponseCollection';
  nodes: Array<ReviewWorkflowsWorkflowStage>;
  pageInfo: Pagination;
};

export type ReviewWorkflowsWorkflowStageFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>>>;
  color?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  workflow?: InputMaybe<ReviewWorkflowsWorkflowFiltersInput>;
};

export type ReviewWorkflowsWorkflowStageInput = {
  color?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  workflow?: InputMaybe<Scalars['ID']['input']>;
};

export type ReviewWorkflowsWorkflowStageRelationResponseCollection = {
  __typename?: 'ReviewWorkflowsWorkflowStageRelationResponseCollection';
  nodes: Array<ReviewWorkflowsWorkflowStage>;
};

export type SlugifySlug = {
  __typename?: 'SlugifySlug';
  count?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type SlugifySlugEntityResponseCollection = {
  __typename?: 'SlugifySlugEntityResponseCollection';
  nodes: Array<SlugifySlug>;
  pageInfo: Pagination;
};

export type SlugifySlugFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<SlugifySlugFiltersInput>>>;
  count?: InputMaybe<IntFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<SlugifySlugFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<SlugifySlugFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type SlugifySlugInput = {
  count?: InputMaybe<Scalars['Int']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type StringFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  containsi?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  eq?: InputMaybe<Scalars['String']['input']>;
  eqi?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  nei?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<StringFilterInput>;
  notContains?: InputMaybe<Scalars['String']['input']>;
  notContainsi?: InputMaybe<Scalars['String']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type UploadFile = {
  __typename?: 'UploadFile';
  alternativeText?: Maybe<Scalars['String']['output']>;
  caption?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  ext?: Maybe<Scalars['String']['output']>;
  formats?: Maybe<Scalars['JSON']['output']>;
  hash: Scalars['String']['output'];
  height?: Maybe<Scalars['Int']['output']>;
  mime: Scalars['String']['output'];
  name: Scalars['String']['output'];
  previewUrl?: Maybe<Scalars['String']['output']>;
  provider: Scalars['String']['output'];
  provider_metadata?: Maybe<Scalars['JSON']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  related?: Maybe<Array<Maybe<GenericMorph>>>;
  size: Scalars['Float']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  url: Scalars['String']['output'];
  width?: Maybe<Scalars['Int']['output']>;
};

export type UploadFileEntityResponseCollection = {
  __typename?: 'UploadFileEntityResponseCollection';
  nodes: Array<UploadFile>;
  pageInfo: Pagination;
};

export type UploadFileFiltersInput = {
  alternativeText?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  caption?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  ext?: InputMaybe<StringFilterInput>;
  formats?: InputMaybe<JsonFilterInput>;
  hash?: InputMaybe<StringFilterInput>;
  height?: InputMaybe<IntFilterInput>;
  mime?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFileFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  previewUrl?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  provider_metadata?: InputMaybe<JsonFilterInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  size?: InputMaybe<FloatFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  url?: InputMaybe<StringFilterInput>;
  width?: InputMaybe<IntFilterInput>;
};

export type UploadFileRelationResponseCollection = {
  __typename?: 'UploadFileRelationResponseCollection';
  nodes: Array<UploadFile>;
};

export type UsersPermissionsCreateRolePayload = {
  __typename?: 'UsersPermissionsCreateRolePayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsDeleteRolePayload = {
  __typename?: 'UsersPermissionsDeleteRolePayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String']['input'];
  password: Scalars['String']['input'];
  provider?: Scalars['String']['input'];
};

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload';
  jwt?: Maybe<Scalars['String']['output']>;
  user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe';
  blocked?: Maybe<Scalars['Boolean']['output']>;
  confirmed?: Maybe<Scalars['Boolean']['output']>;
  documentId: Scalars['ID']['output'];
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  role?: Maybe<UsersPermissionsMeRole>;
  username: Scalars['String']['output'];
};

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  type?: Maybe<Scalars['String']['output']>;
};

export type UsersPermissionsPasswordPayload = {
  __typename?: 'UsersPermissionsPasswordPayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  action: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  role?: Maybe<UsersPermissionsRole>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type UsersPermissionsPermissionFiltersInput = {
  action?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UsersPermissionsPermissionRelationResponseCollection = {
  __typename?: 'UsersPermissionsPermissionRelationResponseCollection';
  nodes: Array<UsersPermissionsPermission>;
};

export type UsersPermissionsRegisterInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  documentId: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  permissions: Array<Maybe<UsersPermissionsPermission>>;
  permissions_connection?: Maybe<UsersPermissionsPermissionRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  users: Array<Maybe<UsersPermissionsUser>>;
  users_connection?: Maybe<UsersPermissionsUserRelationResponseCollection>;
};


export type UsersPermissionsRolePermissionsArgs = {
  filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type UsersPermissionsRolePermissions_ConnectionArgs = {
  filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type UsersPermissionsRoleUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type UsersPermissionsRoleUsers_ConnectionArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UsersPermissionsRoleEntityResponseCollection = {
  __typename?: 'UsersPermissionsRoleEntityResponseCollection';
  nodes: Array<UsersPermissionsRole>;
  pageInfo: Pagination;
};

export type UsersPermissionsRoleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  permissions?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  users?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type UsersPermissionsRoleInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type UsersPermissionsUpdateRolePayload = {
  __typename?: 'UsersPermissionsUpdateRolePayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  address?: Maybe<Scalars['String']['output']>;
  addressDetail?: Maybe<Scalars['String']['output']>;
  blocked?: Maybe<Scalars['Boolean']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  confirmed?: Maybe<Scalars['Boolean']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  email: Scalars['String']['output'];
  firstName?: Maybe<Scalars['String']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  orders: Array<Maybe<Order>>;
  orders_connection?: Maybe<OrderRelationResponseCollection>;
  phone?: Maybe<Scalars['String']['output']>;
  postalCode?: Maybe<Scalars['String']['output']>;
  provider?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  role?: Maybe<UsersPermissionsRole>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  username: Scalars['String']['output'];
};


export type UsersPermissionsUserOrdersArgs = {
  filters?: InputMaybe<OrderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type UsersPermissionsUserOrders_ConnectionArgs = {
  filters?: InputMaybe<OrderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UsersPermissionsUserEntityResponse = {
  __typename?: 'UsersPermissionsUserEntityResponse';
  data?: Maybe<UsersPermissionsUser>;
};

export type UsersPermissionsUserEntityResponseCollection = {
  __typename?: 'UsersPermissionsUserEntityResponseCollection';
  nodes: Array<UsersPermissionsUser>;
  pageInfo: Pagination;
};

export type UsersPermissionsUserFiltersInput = {
  address?: InputMaybe<StringFilterInput>;
  addressDetail?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  blocked?: InputMaybe<BooleanFilterInput>;
  city?: InputMaybe<StringFilterInput>;
  confirmed?: InputMaybe<BooleanFilterInput>;
  country?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  firstName?: InputMaybe<StringFilterInput>;
  lastName?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UsersPermissionsUserFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  orders?: InputMaybe<OrderFiltersInput>;
  phone?: InputMaybe<StringFilterInput>;
  postalCode?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  username?: InputMaybe<StringFilterInput>;
};

export type UsersPermissionsUserInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  addressDetail?: InputMaybe<Scalars['String']['input']>;
  blocked?: InputMaybe<Scalars['Boolean']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  confirmed?: InputMaybe<Scalars['Boolean']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  orders?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  password?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  postalCode?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  role?: InputMaybe<Scalars['ID']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UsersPermissionsUserRelationResponseCollection = {
  __typename?: 'UsersPermissionsUserRelationResponseCollection';
  nodes: Array<UsersPermissionsUser>;
};

export type CardsListFieldsFragment = { __typename?: 'ComponentBlocksCardsList', id: string, heading?: string | null, cards: Array<{ __typename?: 'ComponentComponentCard', id: string, heading: string, description?: string | null, link?: { __typename?: 'ComponentComponentSimpleLink', label: string, url: string } | null, backgroundImage?: { __typename?: 'UploadFile', documentId: string, alternativeText?: string | null, caption?: string | null, url: string } | null } | null> };

export type HighlightingCreationsFieldsFragment = { __typename?: 'ComponentBlocksHighlightingCreations', id: string, title: string, content?: any | null, link?: { __typename?: 'ComponentComponentSimpleLink', id: string, label: string, url: string } | null, creationsList?: Array<{ __typename?: 'ComponentComponentCreationPresentation', id: string, creationLegend?: string | null, creationImage: { __typename?: 'UploadFile', documentId: string, alternativeText?: string | null, caption?: string | null, url: string }, creationLink?: { __typename?: 'ComponentComponentSimpleLink', label: string, url: string } | null } | null> | null };

export type QuoteFieldsFragment = { __typename?: 'ComponentBlocksQuote', id: string, text: string };

export type SingleRichtextFieldsFragment = { __typename?: 'ComponentBlocksSingleRichtext', id: string, richtextContent: any };

export type SingleSliderFieldsFragment = { __typename?: 'ComponentBlocksSingleSlider', id: string, listSlides: Array<{ __typename?: 'ComponentComponentLargeSlide', id: string, slideContent?: string | null, slideOvertitle?: string | null, slideTitle: string, backgroundImage: { __typename?: 'UploadFile', documentId: string, alternativeText?: string | null, caption?: string | null, url: string }, slideLink?: { __typename?: 'ComponentComponentSimpleLink', label: string, url: string } | null } | null> };

export type ImageFieldsFragment = { __typename?: 'UploadFile', documentId: string, alternativeText?: string | null, caption?: string | null, url: string };

export type NavLinkFieldsFragment = { __typename?: 'ComponentNavigationLink', label: string, url: string, hasIconOnly?: boolean | null, icon?: { __typename?: 'UploadFile', url: string } | null };

export type SimpleLinkFieldsFragment = { __typename?: 'ComponentComponentSimpleLink', label: string, url: string };

export type HeaderQueryVariables = Exact<{ [key: string]: never; }>;


export type HeaderQuery = { __typename?: 'Query', header?: { __typename?: 'Header', logo: { __typename?: 'UploadFile', url: string }, navigation: Array<{ __typename?: 'ComponentNavigationGroup', id: string, heading?: { __typename?: 'ComponentNavigationLink', label: string, url: string, hasIconOnly?: boolean | null, hasShopMegamenu?: boolean | null, icon?: { __typename?: 'UploadFile', url: string } | null } | null } | null> } | null };

export type PagesQueryVariables = Exact<{
  filters?: InputMaybe<PageFiltersInput>;
}>;


export type PagesQuery = { __typename?: 'Query', pages: Array<{ __typename?: 'Page', title: string, slug: string, content?: Array<{ __typename: 'ComponentBlocksCardsList', id: string, heading?: string | null, cards: Array<{ __typename?: 'ComponentComponentCard', id: string, heading: string, description?: string | null, link?: { __typename?: 'ComponentComponentSimpleLink', label: string, url: string } | null, backgroundImage?: { __typename?: 'UploadFile', documentId: string, alternativeText?: string | null, caption?: string | null, url: string } | null } | null> } | { __typename: 'ComponentBlocksFeaturedArticles' } | { __typename: 'ComponentBlocksFeaturedProducts' } | { __typename: 'ComponentBlocksHero' } | { __typename: 'ComponentBlocksHighlightingCreations', id: string, title: string, content?: any | null, link?: { __typename?: 'ComponentComponentSimpleLink', id: string, label: string, url: string } | null, creationsList?: Array<{ __typename?: 'ComponentComponentCreationPresentation', id: string, creationLegend?: string | null, creationImage: { __typename?: 'UploadFile', documentId: string, alternativeText?: string | null, caption?: string | null, url: string }, creationLink?: { __typename?: 'ComponentComponentSimpleLink', label: string, url: string } | null } | null> | null } | { __typename: 'ComponentBlocksImageAndText' } | { __typename: 'ComponentBlocksQuote', id: string, text: string } | { __typename: 'ComponentBlocksSingleRichtext', id: string, richtextContent: any } | { __typename: 'ComponentBlocksSingleSlider', id: string, listSlides: Array<{ __typename?: 'ComponentComponentLargeSlide', id: string, slideContent?: string | null, slideOvertitle?: string | null, slideTitle: string, backgroundImage: { __typename?: 'UploadFile', documentId: string, alternativeText?: string | null, caption?: string | null, url: string }, slideLink?: { __typename?: 'ComponentComponentSimpleLink', label: string, url: string } | null } | null> } | { __typename: 'Error' } | null> | null } | null> };
