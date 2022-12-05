
// we can use interface or type for data
export interface ICollectionResponse<T> {
    data: T,
    meta: IResourceMeta,
}

export interface ICategory {
    data: number,
    attributes: ICategoryAtirbute,
}

export interface ICategoryAtirbute {
    Title: string,
    Slug: string,
}

export interface IResourceMeta{
    page: number,
    pageSize: number,
    pageCount: number,
    total: number
}