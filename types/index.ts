
// we can use interface or type for data
export interface ICollectionResponse<T> {
    data: T,
    meta: IResourceMeta,
}
//  Types for meta
export interface IResourceMeta {
    pagination: {
        page: number,
        pageSize: number,
        pageCount: number,
        total: number
    }
}

//  Types for Categoy
export interface ICategory {
    id: number,
    attributes: ICategoryAtirbute,
}
export interface ICategoryAtirbute {
    Title: string,
    Slug: string,
}


// Type of Categories Objest, and ICategory already defined 
export interface IPropType {
    categories: {
        items: ICategory[]
    },
    articles:{
        items:IArticle[]
    }
}

// Types for Articles
export interface IArticle {
    id: number,
    attributes: IArticleAttribute
}
export interface IArticleAttribute {
    Title: string,
    Body: string,
    Slug: string,
    createdAt: string,
    Img: IImageDat,
    auther: IAuthor,
    // updatedAt: string,
    // publishedAt: string,
}
export interface IImageDat {
    data: {
        attributes: {
            url: string,
            format: {
                small: {
                    url: string
                }
            }
        }
    }
}
export interface IAuthor {
    data: {
        atributes: {
            firstname: string,
            lastname: string,
            avatar: {
                data: {
                    atributes: {
                        format: {
                            thumbnail: {
                                url: string
                            }
                        }
                    }
                }
            }
        }
    }
}