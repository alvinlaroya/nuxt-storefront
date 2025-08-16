export default defineEventHandler(async (event) => {
    const storefront = useStorefront()

    const handle = getRouterParam(event, 'handle')

    console.log("HANDLE PARAM", handle)

    const menu = await storefront.request(`#graphql
        query getAllMene($handle: String!){
            menu(handle: $handle) {
                title
                items {
                    title
                    url
                    tags
                    items {
                        id
                        title
                        url
                    }
                }
            }
        }    
    `, {
        variables: {
            handle: 'main-menu'
        }
    }
    )

    const collection = await storefront.request(`#graphql
        query FetchCollectionsByHandle($handle: String!, $first: Int!, $sortKey: ProductCollectionSortKeys, $reverse: Boolean, $after: String, $filters: [ProductFilter!]) {
            collectionByHandle(handle: $handle) { 
                    id
                    title
                    description
                    handle  
                    seo {
                    title
                    description
                }
                products(first: $first, sortKey: $sortKey, reverse: $reverse, after: $after, filters: $filters) {
                    edges {
                        node {
                        id
                        title
                        handle
                        tags
                        variants(first: 30) {
                            edges {
                            node {
                                    id
                                    title
                                    quantityAvailable
                                    selectedOptions {
                                        name
                                        value
                                    }
                                    image {
                                        url
                                    }
                                    price {
                                        amount
                                        currencyCode
                                    }
                                }
                            }
                        }
                        featuredImage {
                            id
                            url
                            altText
                            height
                            width
                        }
                        compareAtPriceRange {
                            maxVariantPrice {
                                amount
                                currencyCode
                            }
                            minVariantPrice {
                                amount
                                currencyCode
                            }
                        }
                        priceRange {
                            maxVariantPrice {
                                amount
                                currencyCode
                            }
                            minVariantPrice {
                                amount
                                currencyCode
                            }
                        }
                        }
                    }
                    filters {
                        id
                        label
                        type
                        values {
                            count
                            id
                            label
                            input
                        }
                    }
                    pageInfo {
                        startCursor
                        hasNextPage
                        hasPreviousPage
                        endCursor
                    }
                }
            }
        }
    `, {
        variables: {
            handle,
            first: 20,
            firstMedia: 10,
            firstCollections: 10,
            filters: [
                /* {
                    "productMetafield": {
                        "namespace": "custom",
                        "key": "color_families",
                        "value": "Blacks"
                    }
                } */
            ]
        },
    })

    return {
        menu: menu.data || {},
        collections: collection?.data?.collectionByHandle || []
    }
})