export interface SetData {
    name: string;
    setNum: string;
    year: number;
    themeId: number;
    numParts: number;
    setImgUrl: string;
    setUrl: string;
    // userId: string;
}

export interface SetDataJSON {
    name: string;
    id: number;
    createdAt: Date;
    updatedAt: Date;
    set_num: string;
    year: number;
    theme_id: number;
    num_parts: number;
    set_img_url: string;
    set_url: string;
    collectionId: number;
    // user_id: string;
}

export interface MultipleSetsDataJSON {
    count: number,
    next: string | null,
    previous: string | null,
    results: SetDataJSON[],
}

export interface TestDataJSON{
    loading: boolean,
    setsData: MultipleSetsDataJSON | null
}

export const headers = {
    "Accept": "application/json",
    "Authorization": `key ${process.env.REBRICKABLE_KEY}`
}



export const testData = {
    count: 82,
    next: null,
    previous: null,
    results: [
        // {
        //     set_num: '10075-1',
        //     name: 'Spider-Man Action Pack',
        //     year: 2002,
        //     theme_id: 706,
        //     num_parts: 25,
        //     set_img_url: 'https://cdn.rebrickable.com/media/sets/10075-1/110451.jpg',
        //     set_url: 'https://rebrickable.com/sets/10075-1/spider-man-action-pack/',
        //     last_modified_dt: '2022-10-02T23:48:03.782040Z'
        // },
        // {
        //     set_num: '10607-1',
        //     name: 'Spider-Man Web-Bike Workshop',
        //     year: 2015,
        //     theme_id: 630,
        //     num_parts: 13,
        //     set_img_url: 'https://cdn.rebrickable.com/media/sets/10607-1/4977.jpg',
        //     set_url: 'https://rebrickable.com/sets/10607-1/spider-man-web-bike-workshop/',
        //     last_modified_dt: '2018-05-15T13:16:37.945528Z'
        // },
        // {
        //     set_num: '10608-1',
        //     name: 'Spider-Man Spider Truck Adventure',
        //     year: 2015,
        //     theme_id: 630,
        //     num_parts: 28,
        //     set_img_url: 'https://cdn.rebrickable.com/media/sets/10608-1/2664.jpg',
        //     set_url: 'https://rebrickable.com/sets/10608-1/spider-man-spider-truck-adventure/',
        //     last_modified_dt: '2018-05-15T13:16:20.242723Z'
        // },
        // {
        //     set_num: '10665-1',
        //     name: 'Spider-Man: Spider-Car Pursuit',
        //     year: 2014,
        //     theme_id: 596,
        //     num_parts: 55,
        //     set_img_url: 'https://cdn.rebrickable.com/media/sets/10665-1/17380.jpg',
        //     set_url: 'https://rebrickable.com/sets/10665-1/spider-man-spider-car-pursuit/',
        //     last_modified_dt: '2019-06-19T20:44:27.865967Z'
        // },
        // {
        //     set_num: '10687-1',
        //     name: 'Spider-Man Hideout',
        //     year: 2015,
        //     theme_id: 596,
        //     num_parts: 137,
        //     set_img_url: 'https://cdn.rebrickable.com/media/sets/10687-1/16786.jpg',
        //     set_url: 'https://rebrickable.com/sets/10687-1/spider-man-hideout/',
        //     last_modified_dt: '2019-06-19T20:44:18.223541Z'
        // },
        // {
        //     set_num: '10754-1',
        //     name: 'Spider-Man vs. Scorpion Street Showdown',
        //     year: 2018,
        //     theme_id: 596,
        //     num_parts: 125,
        //     set_img_url: 'https://cdn.rebrickable.com/media/sets/10754-1/11262.jpg',
        //     set_url: 'https://rebrickable.com/sets/10754-1/spider-man-vs-scorpion-street-showdown/',
        //     last_modified_dt: '2018-10-29T06:02:24.919889Z'
        // },
        // {
        //     set_num: '10781-1',
        //     name: "Spider-Man's Techno Trike",
        //     year: 2022,
        //     theme_id: 755,
        //     num_parts: 59,
        //     set_img_url: 'https://cdn.rebrickable.com/media/sets/10781-1/96438.jpg',
        //     set_url: 'https://rebrickable.com/sets/10781-1/spider-mans-techno-trike/',
        //     last_modified_dt: '2024-01-08T06:15:07.707064Z'
        // },
        // {
        //     set_num: '10783-1',
        //     name: "Spider-Man at Doc Ock's Lab",
        //     year: 2022,
        //     theme_id: 755,
        //     num_parts: 131,
        //     set_img_url: 'https://cdn.rebrickable.com/media/sets/10783-1/96454.jpg',
        //     set_url: 'https://rebrickable.com/sets/10783-1/spider-man-at-doc-ocks-lab/',
        //     last_modified_dt: '2024-01-08T06:15:13.279819Z'
        // },
        // {
        //     set_num: '10784-1',
        //     name: 'Spider-Man Webquarters Hangout',
        //     year: 2022,
        //     theme_id: 755,
        //     num_parts: 155,
        //     set_img_url: 'https://cdn.rebrickable.com/media/sets/10784-1/96462.jpg',
        //     set_url: 'https://rebrickable.com/sets/10784-1/spider-man-webquarters-hangout/',
        //     last_modified_dt: '2024-01-08T06:15:02.049360Z'
        // },
        // {
        //     set_num: '10789-1',
        //     name: "Spider-Man's Car and Doc Ock",
        //     year: 2023,
        //     theme_id: 755,
        //     num_parts: 48,
        //     set_img_url: 'https://cdn.rebrickable.com/media/sets/10789-1/132258.jpg',
        //     set_url: 'https://rebrickable.com/sets/10789-1/spider-mans-car-and-doc-ock/',
        //     last_modified_dt: '2024-01-08T06:14:14.346603Z'
        // },
        // {
        //     set_num: '10876-1',
        //     name: 'Spider-Man & Hulk Adventures',
        //     year: 2018,
        //     theme_id: 630,
        //     num_parts: 38,
        //     set_img_url: 'https://cdn.rebrickable.com/media/sets/10876-1/6809.jpg',
        //     set_url: 'https://rebrickable.com/sets/10876-1/spider-man-hulk-adventures/',
        //     last_modified_dt: '2018-06-03T14:06:08.845963Z'
        // },
        // {
        //     set_num: '10893-1',
        //     name: 'Spider-Man vs. Electro',
        //     year: 2019,
        //     theme_id: 630,
        //     num_parts: 29,
        //     set_img_url: 'https://cdn.rebrickable.com/media/sets/10893-1/17331.jpg',
        //     set_url: 'https://rebrickable.com/sets/10893-1/spider-man-vs-electro/',
        //     last_modified_dt: '2024-01-13T21:28:02.146887Z'
        // },
        // {
        //     set_num: '10940-1',
        //     name: 'Spider-Man Headquarters',
        //     year: 2021,
        //     theme_id: 630,
        //     num_parts: 36,
        //     set_img_url: 'https://cdn.rebrickable.com/media/sets/10940-1/87495.jpg',
        //     set_url: 'https://rebrickable.com/sets/10940-1/spider-man-headquarters/',
        //     last_modified_dt: '2021-05-14T13:38:07.251833Z'
        // },
        // {
        //     set_num: '10963-1',
        //     name: 'Spider-Man & Friends: Funfair Adventure',
        //     year: 2022,
        //     theme_id: 630,
        //     num_parts: 41,
        //     set_img_url: 'https://cdn.rebrickable.com/media/sets/10963-1/102181.jpg',
        //     set_url: 'https://rebrickable.com/sets/10963-1/spider-man-friends-funfair-adventure/',
        //     last_modified_dt: '2022-06-22T15:15:39.188671Z'
        // },
        // {
        //     set_num: '10995-1',
        //     name: "Spider-Man's House",
        //     year: 2023,
        //     theme_id: 630,
        //     num_parts: 25,
        //     set_img_url: 'https://cdn.rebrickable.com/media/sets/10995-1/132162.jpg',
        //     set_url: 'https://rebrickable.com/sets/10995-1/spider-mans-house/',
        //     last_modified_dt: '2023-01-01T05:16:54.838993Z'
        // },
        // {
        //     set_num: '1376-1',
        //     name: 'Spider-Man Action Studio',
        //     year: 2002,
        //     theme_id: 706,
        //     num_parts: 249,
        //     set_img_url: 'https://cdn.rebrickable.com/media/sets/1376-1/120619.jpg',
        //     set_url: 'https://rebrickable.com/sets/1376-1/spider-man-action-studio/',
        //     last_modified_dt: '2020-06-12T00:30:21.908123Z'
        // },
        // {
        //     set_num: '242001-1',
        //     name: 'Spider-Man',
        //     year: 2020,
        //     theme_id: 706,
        //     num_parts: 20,
        //     set_img_url: 'https://cdn.rebrickable.com/media/sets/242001-1/134299.jpg',
        //     set_url: 'https://rebrickable.com/sets/242001-1/spider-man/',
        //     last_modified_dt: '2022-10-06T17:36:14.296847Z'
        // },
        // {
        //     set_num: '242214-1',
        //     name: 'Spider-Man',
        //     year: 2022,
        //     theme_id: 706,
        //     num_parts: 1,
        //     set_img_url: 'https://cdn.rebrickable.com/media/sets/242214-1/134312.jpg',
        //     set_url: 'https://rebrickable.com/sets/242214-1/spider-man/',
        //     last_modified_dt: '2022-07-14T13:19:27.871176Z'
        // },
        // {
        //     set_num: '30302-1',
        //     name: 'Spider-Man Glider',
        //     year: 2014,
        //     theme_id: 706,
        //     num_parts: 45,
        //     set_img_url: 'https://cdn.rebrickable.com/media/sets/30302-1/3724.jpg',
        //     set_url: 'https://rebrickable.com/sets/30302-1/spider-man-glider/',
        //     last_modified_dt: '2020-06-12T00:23:06.343940Z'
        // },
        // {
        //     set_num: '30305-1',
        //     name: 'Spider-Man Super Jumper',
        //     year: 2015,
        //     theme_id: 706,
        //     num_parts: 38,
        //     set_img_url: 'https://cdn.rebrickable.com/media/sets/30305-1/1324.jpg',
        //     set_url: 'https://rebrickable.com/sets/30305-1/spider-man-super-jumper/',
        //     last_modified_dt: '2022-07-23T10:10:53.332145Z'
        // },
        // {
        //     set_num: '30443-1',
        //     name: 'Spider-Man Bridge Battle',
        //     year: 2022,
        //     theme_id: 706,
        //     num_parts: 45,
        //     set_img_url: 'https://cdn.rebrickable.com/media/sets/30443-1/96525.jpg',
        //     set_url: 'https://rebrickable.com/sets/30443-1/spider-man-bridge-battle/',
        //     last_modified_dt: '2022-02-22T09:42:40.774457Z'
        // },
        // {
        //     set_num: '30448-1',
        //     name: 'Spider-Man vs. The Venom Symbiote',
        //     year: 2016,
        //     theme_id: 706,
        //     num_parts: 49,
        //     set_img_url: 'https://cdn.rebrickable.com/media/sets/30448-1/71544.jpg',
        //     set_url: 'https://rebrickable.com/sets/30448-1/spider-man-vs-the-venom-symbiote/',
        //     last_modified_dt: '2020-06-12T00:24:07.587775Z'
        // },
        // {
        //     set_num: '30451-1',
        //     name: "Spider-Man's Mini Spider Crawler",
        //     year: 2019,
        //     theme_id: 706,
        //     num_parts: 73,
        //     set_img_url: 'https://cdn.rebrickable.com/media/sets/30451-1/15507.jpg',
        //     set_url: 'https://rebrickable.com/sets/30451-1/spider-mans-mini-spider-crawler/',
        //     last_modified_dt: '2020-06-11T21:54:02.858511Z'
        // },
        // {
        //     set_num: '3114-2',
        //     name: 'Spider-Man 2 Pen',
        //     year: 2004,
        //     theme_id: 739,
        //     num_parts: 12,
        //     set_img_url: 'https://cdn.rebrickable.com/media/sets/3114-2/85965.jpg',
        //     set_url: 'https://rebrickable.com/sets/3114-2/spider-man-2-pen/',
        //     last_modified_dt: '2022-09-10T10:24:13.249431Z'
        // },
        // {
        //     set_num: '31209-1',
        //     name: 'The Amazing Spider-Man',
        //     year: 2023,
        //     theme_id: 709,
        //     num_parts: 2099,
        //     set_img_url: 'https://cdn.rebrickable.com/media/sets/31209-1/131761.jpg',
        //     set_url: 'https://rebrickable.com/sets/31209-1/the-amazing-spider-man/',
        //     last_modified_dt: '2023-06-28T09:41:05.484090Z'
        // },
        // {
        //     set_num: '40343-1',
        //     name: 'Spider-Man and the Museum Break-In',
        //     year: 2019,
        //     theme_id: 706,
        //     num_parts: 49,
        //     set_img_url: 'https://cdn.rebrickable.com/media/sets/40343-1/11827.jpg',
        //     set_url: 'https://rebrickable.com/sets/40343-1/spider-man-and-the-museum-break-in/',
        //     last_modified_dt: '2020-06-12T00:25:34.501221Z'
        // },
        // {
        //     set_num: '40454-1',
        //     name: 'Spider-Man versus Venom and Iron Venom',
        //     year: 2021,
        //     theme_id: 706,
        //     num_parts: 63,
        //     set_img_url: 'https://cdn.rebrickable.com/media/sets/40454-1/83592.jpg',
        //     set_url: 'https://rebrickable.com/sets/40454-1/spider-man-versus-venom-and-iron-venom/',
        //     last_modified_dt: '2021-03-02T21:55:21.157195Z'
        // },
        // {
        //     set_num: '40670-1',
        //     name: 'Iron Spider-Man',
        //     year: 2024,
        //     theme_id: 610,
        //     num_parts: 91,
        //     set_img_url: 'https://cdn.rebrickable.com/media/sets/40670-1/135381.jpg',
        //     set_url: 'https://rebrickable.com/sets/40670-1/iron-spider-man/',
        //     last_modified_dt: '2024-01-03T08:18:08.523785Z'
        // },
        // {
        //     set_num: '41497-1',
        //     name: 'Spider-Man & Venom',
        //     year: 2017,
        //     theme_id: 610,
        //     num_parts: 144,
        //     set_img_url: 'https://cdn.rebrickable.com/media/sets/41497-1/4908.jpg',
        //     set_url: 'https://rebrickable.com/sets/41497-1/spider-man-venom/',
        //     last_modified_dt: '2021-09-18T13:37:20.356180Z'
        // },
        // {
        //     set_num: '4850-1',
        //     name: "Spider-Man's First Chase",
        //     year: 2003,
        //     theme_id: 706,
        //     num_parts: 191,
        //     set_img_url: 'https://cdn.rebrickable.com/media/sets/4850-1/120691.jpg',
        //     set_url: 'https://rebrickable.com/sets/4850-1/spider-mans-first-chase/',
        //     last_modified_dt: '2020-06-12T00:19:55.308600Z'
        // },
        // {
        //     set_num: '4853-1',
        //     name: "Spider-Man's Street Chase",
        //     year: 2004,
        //     theme_id: 706,
        //     num_parts: 82,
        //     set_img_url: 'https://cdn.rebrickable.com/media/sets/4853-1/8704.jpg',
        //     set_url: 'https://rebrickable.com/sets/4853-1/spider-mans-street-chase/',
        //     last_modified_dt: '2020-06-12T00:20:53.024546Z'
        // },
        // {
        //     set_num: '4855-1',
        //     name: "Spider-Man's Train Rescue",
        //     year: 2004,
        //     theme_id: 706,
        //     num_parts: 298,
        //     set_img_url: 'https://cdn.rebrickable.com/media/sets/4855-1/86160.jpg',
        //     set_url: 'https://rebrickable.com/sets/4855-1/spider-mans-train-rescue/',
        //     last_modified_dt: '2020-06-12T00:20:59.634417Z'
        // },
        // {
        //     set_num: '5004815-1',
        //     name: 'Ultimate Spider-man Collection',
        //     year: 2015,
        //     theme_id: 706,
        //     num_parts: 0,
        //     set_img_url: 'https://cdn.rebrickable.com/media/sets/5004815-1/102306.jpg',
        //     set_url: 'https://rebrickable.com/sets/5004815-1/ultimate-spider-man-collection/',
        //     last_modified_dt: '2022-05-06T16:45:08.221633Z'
        // },
        // {
        //     set_num: '5005883-1',
        //     name: 'Spider-Man: Far From Home Art Print',
        //     year: 2019,
        //     theme_id: 736,
        //     num_parts: 0,
        //     set_img_url: 'https://cdn.rebrickable.com/media/sets/5005883-1/14882.jpg',
        //     set_url: 'https://rebrickable.com/sets/5005883-1/spider-man-far-from-home-art-print/',
        //     last_modified_dt: '2022-09-10T06:09:15.092528Z'
        // },
        // {
        //     set_num: '5005884-1',
        //     name: 'Spider-Man: Far From Home Black & White Art Print',
        //     year: 2019,
        //     theme_id: 736,
        //     num_parts: 0,
        //     set_img_url: 'https://cdn.rebrickable.com/media/sets/5005884-1/16129.jpg',
        //     set_url: 'https://rebrickable.com/sets/5005884-1/spider-man-far-from-home-black-white-art-print/',
        //     last_modified_dt: '2022-09-10T06:07:54.988328Z'
        // },
        // {
        //     set_num: '5007043-1',
        //     name: 'Spider-Man Comic Print',
        //     year: 2021,
        //     theme_id: 736,
        //     num_parts: 0,
        //     set_img_url: 'https://cdn.rebrickable.com/media/sets/5007043-1/99823.jpg',
        //     set_url: 'https://rebrickable.com/sets/5007043-1/spider-man-comic-print/',
        //     last_modified_dt: '2022-11-27T14:36:38.031923Z'
        // },
        // {
        //     set_num: '65518-1',
        //     name: 'Spider-Man Co-Pack 1',
        //     year: 2004,
        //     theme_id: 706,
        //     num_parts: 0,
        //     set_img_url: 'https://cdn.rebrickable.com/media/sets/65518-1/1368.jpg',
        //     set_url: 'https://rebrickable.com/sets/65518-1/spider-man-co-pack-1/',
        //     last_modified_dt: '2021-10-06T19:18:48.822364Z'
        // },
        // {
        //     set_num: '65572-1',
        //     name: 'Spider-Man Co-Pack',
        //     year: 2005,
        //     theme_id: 706,
        //     num_parts: 0,
        //     set_img_url: 'https://cdn.rebrickable.com/media/sets/65572-1/3397.jpg',
        //     set_url: 'https://rebrickable.com/sets/65572-1/spider-man-co-pack/',
        //     last_modified_dt: '2020-06-12T00:21:07.532971Z'
        // },
        // {
        //     set_num: '65708-1',
        //     name: 'Spider-man Co-pack',
        //     year: 2004,
        //     theme_id: 287,
        //     num_parts: 0,
        //     set_img_url: 'https://cdn.rebrickable.com/media/sets/65708-1/89192.jpg',
        //     set_url: 'https://rebrickable.com/sets/65708-1/spider-man-co-pack/',
        //     last_modified_dt: '2021-06-13T20:40:23.435085Z'
        // },
        // {
        //     set_num: '682306-1',
        //     name: 'Spider-Man',
        //     year: 2023,
        //     theme_id: 706,
        //     num_parts: 23,
        //     set_img_url: 'https://cdn.rebrickable.com/media/sets/682306-1/134366.jpg',
        //     set_url: 'https://rebrickable.com/sets/682306-1/spider-man/',
        //     last_modified_dt: '2023-11-02T05:38:51.842864Z'
        // },
        // {
        //     set_num: '682404-1',
        //     name: 'Spider-Man with Spider-Crawler',
        //     year: 2024,
        //     theme_id: 706,
        //     num_parts: 40,
        //     set_img_url: 'https://cdn.rebrickable.com/media/sets/682404-1/143042.jpg',
        //     set_url: 'https://rebrickable.com/sets/682404-1/spider-man-with-spider-crawler/',
        //     last_modified_dt: '2024-07-21T17:56:23.453930Z'
        // },
        // {
        //     set_num: '6873-1',
        //     name: "Spider-Man's Doc Ock Ambush",
        //     year: 2012,
        //     theme_id: 706,
        //     num_parts: 296,
        //     set_img_url: 'https://cdn.rebrickable.com/media/sets/6873-1/47278.jpg',
        //     set_url: 'https://rebrickable.com/sets/6873-1/spider-mans-doc-ock-ambush/',
        //     last_modified_dt: '2020-06-12T00:21:29.998571Z'
        // },
        // {
        //     set_num: '76004-1',
        //     name: 'Spider-Man: Spider-Cycle Chase',
        //     year: 2013,
        //     theme_id: 706,
        //     num_parts: 238,
        //     set_img_url: 'https://cdn.rebrickable.com/media/sets/76004-1/13666.jpg',
        //     set_url: 'https://rebrickable.com/sets/76004-1/spider-man-spider-cycle-chase/',
        //     last_modified_dt: '2020-06-12T00:22:05.727415Z'
        // },
        // {
        //     set_num: '76005-1',
        //     name: 'Spider-Man: Daily Bugle Showdown',
        //     year: 2013,
        //     theme_id: 706,
        //     num_parts: 477,
        //     set_img_url: 'https://cdn.rebrickable.com/media/sets/76005-1/6644.jpg',
        //     set_url: 'https://rebrickable.com/sets/76005-1/spider-man-daily-bugle-showdown/',
        //     last_modified_dt: '2020-06-12T00:21:38.559000Z'
        // },
        // {
        //     set_num: '76057-1',
        //     name: 'Spider-Man: Web Warriors Ultimate Bridge Battle',
        //     year: 2016,
        //     theme_id: 706,
        //     num_parts: 1093,
        //     set_img_url: 'https://cdn.rebrickable.com/media/sets/76057-1/32379.jpg',
        //     set_url: 'https://rebrickable.com/sets/76057-1/spider-man-web-warriors-ultimate-bridge-battle/',
        //     last_modified_dt: '2020-06-12T00:24:19.522906Z'
        // },
        // {
        //     set_num: '76058-1',
        //     name: 'Spider-Man: Ghost Rider Team-up',
        //     year: 2016,
        //     theme_id: 706,
        //     num_parts: 218,
        //     set_img_url: 'https://cdn.rebrickable.com/media/sets/76058-1/35128.jpg',
        //     set_url: 'https://rebrickable.com/sets/76058-1/spider-man-ghost-rider-team-up/',
        //     last_modified_dt: '2020-06-12T00:23:58.399190Z'
        // },
        // {
        //     set_num: '76059-1',
        //     name: "Spider-Man: Doc Ock's Tentacle Trap",
        //     year: 2016,
        //     theme_id: 706,
        //     num_parts: 447,
        //     set_img_url: 'https://cdn.rebrickable.com/media/sets/76059-1/31559.jpg',
        //     set_url: 'https://rebrickable.com/sets/76059-1/spider-man-doc-ocks-tentacle-trap/',
        //     last_modified_dt: '2020-06-12T00:23:49.269128Z'
        // },
        // {
        //     set_num: '76064-1',
        //     name: 'Mighty Micros: Spider-Man vs. Green Goblin',
        //     year: 2016,
        //     theme_id: 696,
        //     num_parts: 85,
        //     set_img_url: 'https://cdn.rebrickable.com/media/sets/76064-1/32228.jpg',
        //     set_url: 'https://rebrickable.com/sets/76064-1/mighty-micros-spider-man-vs-green-goblin/',
        //     last_modified_dt: '2020-06-12T00:23:39.775101Z'
        // },
        // {
        //     set_num: '76071-1',
        //     name: 'Mighty Micros: Spider-Man vs. Scorpion',
        //     year: 2017,
        //     theme_id: 696,
        //     num_parts: 79,
        //     set_img_url: 'https://cdn.rebrickable.com/media/sets/76071-1/27470.jpg',
        //     set_url: 'https://rebrickable.com/sets/76071-1/mighty-micros-spider-man-vs-scorpion/',
        //     last_modified_dt: '2020-06-12T00:24:40.408534Z'
        // },
        // {
        //     set_num: '76113-1',
        //     name: 'Spider-Man Bike Rescue',
        //     year: 2019,
        //     theme_id: 706,
        //     num_parts: 243,
        //     set_img_url: 'https://cdn.rebrickable.com/media/sets/76113-1/10718.jpg',
        //     set_url: 'https://rebrickable.com/sets/76113-1/spider-man-bike-rescue/',
        //     last_modified_dt: '2024-01-13T21:36:05.696878Z'
        // },
        // {
        //     set_num: '76114-1',
        //     name: "Spider-Man's Spider Crawler",
        //     year: 2019,
        //     theme_id: 706,
        //     num_parts: 426,
        //     set_img_url: 'https://cdn.rebrickable.com/media/sets/76114-1/16079.jpg',
        //     set_url: 'https://rebrickable.com/sets/76114-1/spider-mans-spider-crawler/',
        //     last_modified_dt: '2024-01-13T21:36:22.080090Z'
        // },
        // {
        //     set_num: '76133-1',
        //     name: 'Spider-Man Car Chase',
        //     year: 2019,
        //     theme_id: 706,
        //     num_parts: 52,
        //     set_img_url: 'https://cdn.rebrickable.com/media/sets/76133-1/10009.jpg',
        //     set_url: 'https://rebrickable.com/sets/76133-1/spider-man-car-chase/',
        //     last_modified_dt: '2024-01-13T21:36:11.588867Z'
        // },
        // {
        //     set_num: '76134-1',
        //     name: 'Spider-Man: Doc Ock Diamond Heist',
        //     year: 2019,
        //     theme_id: 706,
        //     num_parts: 151,
        //     set_img_url: 'https://cdn.rebrickable.com/media/sets/76134-1/15011.jpg',
        //     set_url: 'https://rebrickable.com/sets/76134-1/spider-man-doc-ock-diamond-heist/',
        //     last_modified_dt: '2024-01-13T21:36:16.735457Z'
        // },
        // {
        //     set_num: '76146-1',
        //     name: 'Spider-Man Mech',
        //     year: 2020,
        //     theme_id: 706,
        //     num_parts: 160,
        //     set_img_url: 'https://cdn.rebrickable.com/media/sets/76146-1/15172.jpg',
        //     set_url: 'https://rebrickable.com/sets/76146-1/spider-man-mech/',
        //     last_modified_dt: '2021-09-01T14:08:53.644342Z'
        // },
        // {
        //     set_num: '76148-1',
        //     name: 'Spider-Man vs. Doc Ock',
        //     year: 2020,
        //     theme_id: 706,
        //     num_parts: 242,
        //     set_img_url: 'https://cdn.rebrickable.com/media/sets/76148-1/15174.jpg',
        //     set_url: 'https://rebrickable.com/sets/76148-1/spider-man-vs-doc-ock/',
        //     last_modified_dt: '2020-06-11T21:50:27.882265Z'
        // },
        // {
        //     set_num: '76172-1',
        //     name: 'Spider-Man and Sandman Showdown',
        //     year: 2021,
        //     theme_id: 706,
        //     num_parts: 45,
        //     set_img_url: 'https://cdn.rebrickable.com/media/sets/76172-1/75862.jpg',
        //     set_url: 'https://rebrickable.com/sets/76172-1/spider-man-and-sandman-showdown/',
        //     last_modified_dt: '2020-11-18T17:00:45.539448Z'
        // },
        // {
        //     set_num: '76173-1',
        //     name: 'Spider-Man and Ghost Rider vs. Carnage',
        //     year: 2021,
        //     theme_id: 706,
        //     num_parts: 221,
        //     set_img_url: 'https://cdn.rebrickable.com/media/sets/76173-1/75872.jpg',
        //     set_url: 'https://rebrickable.com/sets/76173-1/spider-man-and-ghost-rider-vs-carnage/',
        //     last_modified_dt: '2020-11-18T17:01:05.234482Z'
        // },
        // {
        //     set_num: '76174-1',
        //     name: "Spider-Man's Monster Truck vs. Mysterio",
        //     year: 2021,
        //     theme_id: 706,
        //     num_parts: 447,
        //     set_img_url: 'https://cdn.rebrickable.com/media/sets/76174-1/75882.jpg',
        //     set_url: 'https://rebrickable.com/sets/76174-1/spider-mans-monster-truck-vs-mysterio/',
        //     last_modified_dt: '2020-11-18T17:00:05.914095Z'
        // },
        // {
        //     set_num: '76184-1',
        //     name: "Spider-Man vs. Mysterio's Drone Attack",
        //     year: 2021,
        //     theme_id: 706,
        //     num_parts: 73,
        //     set_img_url: 'https://cdn.rebrickable.com/media/sets/76184-1/89824.jpg',
        //     set_url: 'https://rebrickable.com/sets/76184-1/spider-man-vs-mysterios-drone-attack/',
        //     last_modified_dt: '2023-04-23T13:09:47.800891Z'
        // },
        // {
        //     set_num: '76185-1',
        //     name: 'Spider-Man at the Sanctum Workshop',
        //     year: 2021,
        //     theme_id: 706,
        //     num_parts: 371,
        //     set_img_url: 'https://cdn.rebrickable.com/media/sets/76185-1/89818.jpg',
        //     set_url: 'https://rebrickable.com/sets/76185-1/spider-man-at-the-sanctum-workshop/',
        //     last_modified_dt: '2021-07-01T18:15:53.593032Z'
        // },
        // {
        //     set_num: '76195-1',
        //     name: "Spider-Man's Drone Duel",
        //     year: 2021,
        //     theme_id: 706,
        //     num_parts: 206,
        //     set_img_url: 'https://cdn.rebrickable.com/media/sets/76195-1/89821.jpg',
        //     set_url: 'https://rebrickable.com/sets/76195-1/spider-mans-drone-duel/',
        //     last_modified_dt: '2023-04-23T13:10:11.039314Z'
        // },
        // {
        //     set_num: '76198-1',
        //     name: 'Spider-Man & Doctor Octopus Mech Battle',
        //     year: 2021,
        //     theme_id: 706,
        //     num_parts: 312,
        //     set_img_url: 'https://cdn.rebrickable.com/media/sets/76198-1/85815.jpg',
        //     set_url: 'https://rebrickable.com/sets/76198-1/spider-man-doctor-octopus-mech-battle/',
        //     last_modified_dt: '2021-04-01T19:01:42.488844Z'
        // },
        // {
        //     set_num: '76219-1',
        //     name: 'Spider-Man & Green Goblin Mech Battle',
        //     year: 2022,
        //     theme_id: 706,
        //     num_parts: 296,
        //     set_img_url: 'https://cdn.rebrickable.com/media/sets/76219-1/98923.jpg',
        //     set_url: 'https://rebrickable.com/sets/76219-1/spider-man-green-goblin-mech-battle/',
        //     last_modified_dt: '2022-02-17T05:45:03.105927Z'
        // },
        // {
        //     set_num: '76226-1',
        //     name: 'Spider-Man',
        //     year: 2022,
        //     theme_id: 706,
        //     num_parts: 262,
        //     set_img_url: 'https://cdn.rebrickable.com/media/sets/76226-1/106874.jpg',
        //     set_url: 'https://rebrickable.com/sets/76226-1/spider-man/',
        //     last_modified_dt: '2022-08-04T07:57:32.593030Z'
        // },
        // {
        //     set_num: '76261-1',
        //     name: 'Spider-Man Final Battle',
        //     year: 2023,
        //     theme_id: 706,
        //     num_parts: 906,
        //     set_img_url: 'https://cdn.rebrickable.com/media/sets/76261-1/130017.jpg',
        //     set_url: 'https://rebrickable.com/sets/76261-1/spider-man-final-battle/',
        //     last_modified_dt: '2023-05-26T15:08:05.078941Z'
        // },
        // {
        //     set_num: '76275-1',
        //     name: 'Motorcycle Chase: Spider-Man vs. Doc Ock',
        //     year: 2024,
        //     theme_id: 706,
        //     num_parts: 77,
        //     set_img_url: 'https://cdn.rebrickable.com/media/sets/76275-1/134472.jpg',
        //     set_url: 'https://rebrickable.com/sets/76275-1/motorcycle-chase-spider-man-vs-doc-ock/',
        //     last_modified_dt: '2024-01-01T01:13:01.260581Z'
        // },
        // {
        //     set_num: '76279-1',
        //     name: 'Spider-Man Race Car & Venom Green Goblin',
        //     year: 2024,
        //     theme_id: 706,
        //     num_parts: 227,
        //     set_img_url: 'https://cdn.rebrickable.com/media/sets/76279-1/134524.jpg',
        //     set_url: 'https://rebrickable.com/sets/76279-1/spider-man-race-car-venom-green-goblin/',
        //     last_modified_dt: '2024-01-01T01:12:52.534715Z'
        // },
        // {
        //     set_num: '76280-1',
        //     name: 'Spider-Man vs. Sandman: Final Battle',
        //     year: 2024,
        //     theme_id: 706,
        //     num_parts: 347,
        //     set_img_url: 'https://cdn.rebrickable.com/media/sets/76280-1/134479.jpg',
        //     set_url: 'https://rebrickable.com/sets/76280-1/spider-man-vs-sandman-final-battle/',
        //     last_modified_dt: '2024-01-01T01:12:41.644422Z'
        // },
        // {
        //     set_num: '76285-1',
        //     name: "Spider-Man's Mask",
        //     year: 2024,
        //     theme_id: 706,
        //     num_parts: 487,
        //     set_img_url: 'https://cdn.rebrickable.com/media/sets/76285-1/132958.jpg',
        //     set_url: 'https://rebrickable.com/sets/76285-1/spider-mans-mask/',
        //     last_modified_dt: '2023-12-01T10:27:55.532069Z'
        // },
        // {
        //     set_num: '76293-1',
        //     name: 'Spider-Man Advent Calendar 2024',
        //     year: 2024,
        //     theme_id: 751,
        //     num_parts: 255,
        //     set_img_url: 'https://cdn.rebrickable.com/media/sets/76293-1/140081.jpg',
        //     set_url: 'https://rebrickable.com/sets/76293-1/spider-man-advent-calendar-2024/',
        //     last_modified_dt: '2024-09-01T12:39:23.800388Z'
        // },
        // {
        //     set_num: '76298-1',
        //     name: 'Iron Spider-Man Construction Figure',
        //     year: 2024,
        //     theme_id: 696,
        //     num_parts: 303,
        //     set_img_url: 'https://cdn.rebrickable.com/media/sets/76298-1/137821.jpg',
        //     set_url: 'https://rebrickable.com/sets/76298-1/iron-spider-man-construction-figure/',
        //     last_modified_dt: '2024-03-01T15:34:28.531223Z'
        // },
        // {
        //     set_num: '850507-1',
        //     name: 'Spider-Man Key Chain',
        //     year: 2012,
        //     theme_id: 503,
        //     num_parts: 0,
        //     set_img_url: 'https://cdn.rebrickable.com/media/sets/850507-1/822.jpg',
        //     set_url: 'https://rebrickable.com/sets/850507-1/spider-man-key-chain/',
        //     last_modified_dt: '2021-12-14T05:45:52.933670Z'
        // },
        // {
        //     set_num: '850666-1',
        //     name: 'Spider-Man Magnet',
        //     year: 2013,
        //     theme_id: 734,
        //     num_parts: 0,
        //     set_img_url: 'https://cdn.rebrickable.com/media/sets/850666-1/84406.jpg',
        //     set_url: 'https://rebrickable.com/sets/850666-1/spider-man-magnet/',
        //     last_modified_dt: '2022-09-10T08:36:01.416011Z'
        // },
        // {
        //     set_num: '853950-1',
        //     name: 'Spider-Man Key Chain',
        //     year: 2019,
        //     theme_id: 503,
        //     num_parts: 0,
        //     set_img_url: 'https://cdn.rebrickable.com/media/sets/853950-1/13205.jpg',
        //     set_url: 'https://rebrickable.com/sets/853950-1/spider-man-key-chain/',
        //     last_modified_dt: '2021-12-14T05:45:39.390455Z'
        // },
        // {
        //     set_num: '854290-1',
        //     name: 'Spider-Man Key Chain',
        //     year: 2024,
        //     theme_id: 503,
        //     num_parts: 0,
        //     set_img_url: 'https://cdn.rebrickable.com/media/sets/854290-1/133772.jpg',
        //     set_url: 'https://rebrickable.com/sets/854290-1/spider-man-key-chain/',
        //     last_modified_dt: '2023-12-06T14:34:06.876035Z'
        // },
        // {
        //     set_num: 'COMCON023-1',
        //     name: 'Spider-Man in Black Venom Symbiote Costume',
        //     year: 2012,
        //     theme_id: 706,
        //     num_parts: 4,
        //     set_img_url: 'https://cdn.rebrickable.com/media/sets/comcon023-1/12730.jpg',
        //     set_url: 'https://rebrickable.com/sets/COMCON023-1/spider-man-in-black-venom-symbiote-costume/',
        //     last_modified_dt: '2021-02-16T00:29:27.733828Z'
        // },
        // {
        //     set_num: 'COMCON028-1',
        //     name: 'Spider-Man',
        //     year: 2013,
        //     theme_id: 706,
        //     num_parts: 3,
        //     set_img_url: 'https://cdn.rebrickable.com/media/sets/comcon028-1/8558.jpg',
        //     set_url: 'https://rebrickable.com/sets/COMCON028-1/spider-man/',
        //     last_modified_dt: '2021-02-16T00:29:15.150208Z'
        // },
        // {
        //     set_num: 'COMIC-1',
        //     name: 'Build Your Own Spider-Man Comic',
        //     year: 2022,
        //     theme_id: 759,
        //     num_parts: 0,
        //     set_img_url: 'https://cdn.rebrickable.com/media/sets/comic-1/111346.jpg',
        //     set_url: 'https://rebrickable.com/sets/COMIC-1/build-your-own-spider-man-comic/',
        //     last_modified_dt: '2024-01-21T04:13:18.976108Z'
        // },
        // {
        //     set_num: 'K1376-1',
        //     name: 'Spider-Man Adventure Kit',
        //     year: 2003,
        //     theme_id: 706,
        //     num_parts: 0,
        //     set_img_url: 'https://cdn.rebrickable.com/media/sets/k1376-1/8576.jpg',
        //     set_url: 'https://rebrickable.com/sets/K1376-1/spider-man-adventure-kit/',
        //     last_modified_dt: '2020-06-12T00:30:15.098437Z'
        // },
        {
            set_num: 'K4852-1',
            name: 'Spider-Man Movie Kit',
            year: 2003,
            theme_id: 706,
            num_parts: 0,
            set_img_url: 'https://cdn.rebrickable.com/media/sets/k4852-1/3242.jpg',
            set_url: 'https://rebrickable.com/sets/K4852-1/spider-man-movie-kit/',
            last_modified_dt: '2020-06-12T00:30:00.009946Z'
        },
        {
            set_num: 'SDCC2019-1',
            name: 'PS4 Spider-Man',
            year: 2019,
            theme_id: 706,
            num_parts: 3,
            set_img_url: 'https://cdn.rebrickable.com/media/sets/sdcc2019-1/15494.jpg',
            set_url: 'https://rebrickable.com/sets/SDCC2019-1/ps4-spider-man/',
            last_modified_dt: '2020-06-12T00:26:01.559287Z'
        },
        // {
        //     set_num: 'TRUSPIDERMAN-1',
        //     name: 'Spider-Man',
        //     year: 2022,
        //     theme_id: 706,
        //     num_parts: 43,
        //     set_img_url: 'https://cdn.rebrickable.com/media/sets/truspiderman-1/111209.jpg',
        //     set_url: 'https://rebrickable.com/sets/TRUSPIDERMAN-1/spider-man/',
        //     last_modified_dt: '2022-10-24T05:00:30.097844Z'
        // }
    ]
}

const setNumArr = testData.results.map((item) => item.set_num);