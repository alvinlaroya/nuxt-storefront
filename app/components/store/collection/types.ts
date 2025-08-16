type Price = {
    maxVariantPrice: {
        amount: string;
        currencyCode: string;
    };
    minVariantPrice: {
        amount: string;
        currencyCode: string;
    };
}

export type CardProps = {
    tags: Array<string>;
    title: string;
    featuredImage: {
        id: string;
        url: string;
        thumbhash: string;
        altText: string;
        height: number;
        width: number;
    };
    variants: Array<object>;
    priceRange: Price
    compareAtPriceRange: Price
}