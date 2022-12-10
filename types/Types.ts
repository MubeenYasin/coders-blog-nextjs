
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
        items: ICategory[]
    },
    articles: {
        items: IArticle[]
    }
    users:{
        items: IUser[]
    }
}

//  Types for Categoy
export interface ICategory {
    id: number,
    attributes: {
        Title:string,
        Slug: string
    }
}
// export interface ICategoryAtirbute {
//     Title: string,
//     Slug: string,
// }

// Types for Articles
export interface IArticle {
    id: number,
    attributes: {
        Title: string,
        Body: string,
        Slug: string,
        createdAt: string,
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
    }
}
// export interface IArticleAttribute {
//     Title: string,
//     Body: string,
//     Slug: string,
//     createdAt: string,
//     // Image: IImageData,
//     Image: {
//         data: {
//             attributes: {
//                 formats: {
//                     small: {
//                         url: string
//                     }
//                 }
//             }
//         }
//     },
//     auther: IAuthor,

// }
// export interface IImageData {
//     data: {
//         attributes: {
//             formats: {
//                 small: {
//                     url: string
//                 }
//             }
//         }
//     }
// }
// export interface IAuthor {
//     data: {
//         attributes: {
//             username: string,
//             avatar: {
//                 data: {
//                     atributes: {
//                         formats: {
//                             thumbnail: {
//                                 url: string
//                             }
//                         }
//                     }
//                 }
//             }
//         }
//     }
// }

export interface IUser{
    id: number,
    username: string,
    avatar:{
        formats:{
            thumbnail:{
                url: string
            },
            small:{
                url:string
            }
        }
    }
}