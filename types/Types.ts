
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
// Type of IPropType 
export interface IPropType {
    categories: {
        items: ICategory[],
        pagination: IPagination[]
    },
    articles: {
        items: IArticle[],
        pagination: IPagination[]
    },
    pagination: {
        items: IPagination[]
    },
}
//  Types for Categoy
export interface ICategory {
    id: number,
    attributes: {
        Title: string,
        Slug: string
    },
    meta: {
        pagination: {
            page: number,
            pageSize: number,
            pageCount: number,
            total: number
        }
    }
}
// Types for Articles
export interface IArticle {
    id: number,
    attributes: {
        Title: string,
        Body: string,
        Slug: string,
        createdAt: string,
        shortDescription: string,
        Image: {
            data: {
                aatributes: {
                    formates: {
                        small: {
                            url: string
                        }
                    }
                }
            }
        },
        auther: {
            data: {
                attributes: {
                    username: string,
                    avatar: {
                        data: {
                            attributes: {
                                formats: {
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
    },
    meta: {
        pagination: {
            page: number,
            pageSize: number,
            pageCount: number,
            total: number
        }
    }
}
// Type Pagination
export interface IPagination {
    page: number,
    pageSize: number,
    pageCount: number,
    total: number
}
// Type of User
export interface IUser {
    id: number,
    username: string,
    avatar: {
        formats: {
            thumbnail: {
                url: string
            },
            small: {
                url: string
            }
        }
    }
}