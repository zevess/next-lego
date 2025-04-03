// export interface SetData {
//     name: string;
//     setNum: string;
//     year: number;
//     themeId: number;
//     numParts: number;
//     setImgUrl: string;
//     setUrl: string;
//     // userId: string;
// }

import { User } from "@prisma/client";
import { JsonValue } from "@prisma/client/runtime/library";
import { JSX } from "react";

export interface SetData {
    name: string,
    id?: number,
    createdAt?: Date,
    updatedAt?: Date,
    set_num: string,
    year: number,
    theme_id: number,
    num_parts: number,
    set_img_url: string,
    set_url: string,
    collectionId?: string | null,
    wishesId?: string | null,
    productId?: string | null
    user_id?: string;
}

export interface MultipleSetsData {
    count: number, //101 максимум на одной странице
    next: string | null,
    previous: string | null,
    results: SetData[],
}

export interface TestDataJSON {
    loading: boolean,
    setsData: MultipleSetsData | null
}

export const headers = {
    "Accept": "application/json",
    "Authorization": `${process.env.REBRICKABLE_KEY}`
}

export interface SetPageProps {
    set: SetData;
    isOwn: boolean;
    isWish: boolean;
    userId: string
}

export type TabType = {
    [key: string]: JSX.Element;
}

export const TestSetPageProps = {
    set: {
        set_num: '10075-1',
        name: 'Spider-Man Action Pack',
        year: 2002,
        theme_id: 706,
        num_parts: 25,
        set_img_url: 'https://cdn.rebrickable.com/media/sets/10075-1/110451.jpg',
        set_url: 'https://rebrickable.com/sets/10075-1/spider-man-action-pack/',
        last_modified_dt: '2022-10-02T23:48:03.782040Z'
    },
    isWish: false,
    isOwn: true,
    userId: ""
}

export interface SetThemesData {
    id: number,
    parent_id: number | null,
    name: string
}


export interface ProductData {
    id?: string,
    title: string,
    description: string,
    location: string,
    price: number,
    userId?: string | null,
    images: string[]
    sets: SetData[],
    createdAt?: Date,
    updatedAt?: Date,
    user?: User
}



export interface NewProductData {
    message: string,
    newProduct: ProductData

}

export interface SessionData {
    user: {
        name: string,
        email: string,
        image: string,
        id: string
    },
    expires: string
}

export const testData = {
    count: 82,
    next: null,
    previous: null,
    results: [
        {
            set_num: '10075-1',
            name: 'Spider-Man Action Pack',
            year: 2002,
            theme_id: 706,
            num_parts: 25,
            set_img_url: 'https://cdn.rebrickable.com/media/sets/10075-1/110451.jpg',
            set_url: 'https://rebrickable.com/sets/10075-1/spider-man-action-pack/',
            last_modified_dt: '2022-10-02T23:48:03.782040Z'
        },
        {
            set_num: '10607-1',
            name: 'Spider-Man Web-Bike Workshop',
            year: 2015,
            theme_id: 630,
            num_parts: 13,
            set_img_url: 'https://cdn.rebrickable.com/media/sets/10607-1/4977.jpg',
            set_url: 'https://rebrickable.com/sets/10607-1/spider-man-web-bike-workshop/',
            last_modified_dt: '2018-05-15T13:16:37.945528Z'
        },
        {
            set_num: '10075-1',
            name: 'Spider-Man Action Pack',
            year: 2002,
            theme_id: 706,
            num_parts: 25,
            set_img_url: 'https://cdn.rebrickable.com/media/sets/10075-1/110451.jpg',
            set_url: 'https://rebrickable.com/sets/10075-1/spider-man-action-pack/',
            last_modified_dt: '2022-10-02T23:48:03.782040Z'
        },
        {
            set_num: '10607-1',
            name: 'Spider-Man Web-Bike Workshop',
            year: 2015,
            theme_id: 630,
            num_parts: 13,
            set_img_url: 'https://cdn.rebrickable.com/media/sets/10607-1/4977.jpg',
            set_url: 'https://rebrickable.com/sets/10607-1/spider-man-web-bike-workshop/',
            last_modified_dt: '2018-05-15T13:16:37.945528Z'
        },
    ]
}

const testUserDataArr = [
    {
        id: 1,
        set_num: 'SDCC2019-1',
        name: 'PS4 Spider-Man',
        year: 2019,
        theme_id: 706,
        num_parts: 3,
        set_img_url: 'https://cdn.rebrickable.com/media/sets/sdcc2019-1/15494.jpg',
        set_url: 'https://rebrickable.com/sets/SDCC2019-1/ps4-spider-man/',
        collectionId: 9,
        createdAt: "2024-10-23T16:35:27.060Z",
        updatedAt: "2024-10-23T16:35:27.060Z"
    },
    {
        id: 2,
        set_num: 'SDCC2019-1',
        name: 'PS4 Spider-Man',
        year: 2019,
        theme_id: 706,
        num_parts: 3,
        set_img_url: 'https://cdn.rebrickable.com/media/sets/sdcc2019-1/15494.jpg',
        set_url: 'https://rebrickable.com/sets/SDCC2019-1/ps4-spider-man/',
        collectionId: 9,
        createdAt: "2024-10-23T16:39:44.705Z",
        updatedAt: "2024-10-23T16:39:44.705Z"
    },
    {
        id: 3,
        set_num: '40407-1',
        name: 'Death Star II Battle',
        year: 2020,
        theme_id: 158,
        num_parts: 235,
        set_img_url: 'https://cdn.rebrickable.com/media/sets/40407-1/71904.jpg',
        set_url: 'https://rebrickable.com/sets/40407-1/death-star-ii-battle/',
        collectionId: 9,
        createdAt: "2024-10-23T16:42:43.364Z",
        updatedAt: "2024-10-23T16:42:43.364Z"
    },
    {
        id: 4,
        set_num: '75018-1',
        name: "JEK-14's Stealth Starfighter",
        year: 2013,
        theme_id: 158,
        num_parts: 550,
        set_img_url: 'https://cdn.rebrickable.com/media/sets/75018-1/3497.jpg',
        set_url: 'https://rebrickable.com/sets/75018-1/jek-14s-stealth-starfighter/',
        collectionId: 9,
        createdAt: "2024-10-23T17:00:13.281Z",
        updatedAt: "2024-10-23T17:00:13.281Z"
    }
]

