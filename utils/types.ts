export interface LinkArrayType {
  link: string[];
}
export interface LinkType {
  title: string;
  link: LinkArrayType[];
  starred: boolean;
}

export interface SubCategoryType {
  title: string;
  links: LinkType[];
}

export interface CategoryType {
  title: string;
  links: LinkType[];
  subCategory: SubCategoryType[];
}
