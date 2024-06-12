
export const DOMAIN = 'http://localhost:3000';
// export const DOMAIN = 'https://www.chainsawmanmanga.in.net';


export const MANGA_DESCRIPTION = `Set in the Viking era, this manga follows Thorfinn's quest for revenge and his dream of finding the legendary land of Vinland. Filled with action and historical drama, <a href="${DOMAIN}"><u>Vinland Saga</u></a> is a thrilling story about battles, honor, and the search for peace. Perfect for fans of exciting, historical tales. Experience the gripping adventures of Thorfinn as he navigates through the tumultuous Viking world, facing formidable challenges and discovering his own path to redemption.`;

export const MANGA_NAME = 'Chainsaw Man';
export const MANGA_AUTHOR = 'Tatsuki Fujimoto';
export const MANGA_RELEASE = '2018';
export const MANGA_STATUS = 'Ongoing';
export const MANGA_ARTIST = 'Tatsuki Fujimoto';
export const MANGA_STUDIO = 'MAPPA';
export const MANGA_GENRE = 'Action, Comedy, Drama, Dark Fantasy, Horror';

export const CHAPTER_PREFIX = 'chainsaw-man-chapter';
export const IMAGE_PREFIX = 'images/chainsaw-man';
export const NEXT_PREVIOUS_PREFIX = 'manga/chainsaw-man-chapter';
export const URL_PREFIX = 'manga/chainsaw-man-chapter';

export const AUTHOR_PAGE = `${DOMAIN}/chainsaw-man-team`;
export const LOGO_URL = `${DOMAIN}/logo.webp`;
export const COVER_IMG = `${DOMAIN}/cover.webp`;
export const BEHIND_COVER_IMG = "https://m.media-amazon.com/images/M/MV5BZTllZTBmNWItYWYyNC00ZWYwLWFmZWEtNDhmOTk0ZjdjYmRhXkEyXkFqcGdeQXVyMTM0NTgxMzc2._V1_.jpg";



export const APP_DESCRIPTION = `Read "${MANGA_NAME}" manga online at "${DOMAIN}". Enjoy high-quality scans, latest chapters, and connect with fans in our vibrant community.`;

export const DISQUS_SHORTNAME = "my-cms-7";


export const MANGA_SUMMARY = [
    {
        id: 1,
        content: "Vinland Saga is a gripping manga and anime series that plunges viewers into the tumultuous world of Vikings during the Viking Age. At its core is the compelling story of Thorfinn, a young boy whose life is shattered when his father, Thors, a renowned warrior, is killed. Driven by an unquenchable thirst for vengeance, Thorfinn embarks on a perilous journey to avenge his father's death."
    },
    {
        id: 2,
        content: "As the series unfolds, viewers are taken on a gripping adventure filled with intense battles, complex characters, and moral dilemmas. Thorfinn's quest for revenge leads him into the heart of the Viking world, where he encounters warlords, mercenaries, and fellow warriors, each with their own motivations and agendas."
    },
    {
        id: 3,
        content: "Yet, amidst the chaos of battle and the brutality of Viking society, Thorfinn's journey also becomes one of self-discovery and redemption. Along the way, he grapples with questions of honor, loyalty, and the true meaning of strength. As Thorfinn confronts the harsh realities of his world, he begins to question his desire for vengeance and yearns for a life of peace and purpose."
    },
    {
        id: 4,
        content: "The concept of Vinland, a legendary land across the sea where conflict is replaced by harmony, serves as both a literal and metaphorical destination for Thorfinn. It represents his ultimate goal – a place where he can escape the cycle of violence and find a new beginning."
    },
    {
        id: 5,
        content: "Through stunning artwork, intricate storytelling, and rich historical detail, Vinland Saga captivates audiences with its exploration of themes such as justice, identity, and the human spirit. It challenges viewers to confront the complexities of morality and the consequences of one's actions, all within the vivid backdrop of Viking-era Scandinavia."
    },
    {
        id: 6,
        content: "In the end, Vinland Saga is not just a tale of revenge, but a profound saga of growth, redemption, and the enduring search for meaning in a world torn apart by conflict."
    }
];


// Navbar
export const logo = <img src={`${LOGO_URL}`} alt="Logo" className="h-[75px] w-[185px] mr-5 md:ml-0 ml-4 md:pb-2 md:my-0 my-1" />

export const APP_NAME = 'Chainsaw Man';
export const NavbarName = "Chainsaw Man";

export const navLinks = [
    { text: 'Home', href: `${DOMAIN}` },
    { text: 'DMCA', href: `${DOMAIN}/dmca` },
    { text: 'Terms & Conditions', href: `${DOMAIN}/terms-and-conditions` },
];

export const FooterLinks = [
    { text: 'About', href: `${DOMAIN}/about` },
    { text: 'Contact', href: `${DOMAIN}/contact` },
    { text: 'Disclaimer', href: `${DOMAIN}/disclaimer` },
    { text: 'Privacy Policy', href: `${DOMAIN}/privacy-policy` },
    { text: 'Terms & Conditions', href: `${DOMAIN}/terms-and-conditions` }
];


export const RelatedMangaLinks = [
    {
        imageUrl: `${DOMAIN}/related/frieran.webp`,
        title: 'Frieran',
        link: 'https://www.frieranmanga.in.net',
    },
    {
        imageUrl: `${DOMAIN}/related/one-punch-man.webp`,
        title: 'One Punch Man',
        link: 'https://www.onepunchmanmanga.in.net',
    },
    {
        imageUrl: `${DOMAIN}/related/vinland-saga.webp`,
        title: 'Vinland Saga',
        link: 'https://www.vinlandsagamanga.in.net',
    },
    {
        imageUrl: `${DOMAIN}/related/jujutsu-kaisen.webp`,
        title: 'Jujutsu Kaisen',
        link: 'https://www.jujutsukaisenmanga.in.net',
    },
    {
        imageUrl: `${DOMAIN}/related/black-clover.webp`,
        title: 'Black Clover',
        link: 'https://www.blackclovermanga.in.net',
    },
    {
        imageUrl: `${DOMAIN}/related/chainsaw-man.webp`,
        title: 'Chainsaw Man',
        link: 'https://www.chainsawmanmanga.in.net',
    },
    {
        imageUrl: `${DOMAIN}/related/mushoku-tensei.webp`,
        title: 'Mushoku Tensei',
        link: 'https://www.mushokutenseimanga.in.net',
    },
];




export const chaptersData = [
    {
        "chapterNumber": "1",
        "numImages": 52
    },
    {
        "chapterNumber": "2",
        "numImages": 25
    },
    {
        "chapterNumber": "3",
        "numImages": 22
    },
    {
        "chapterNumber": "4",
        "numImages": 16
    },
    {
        "chapterNumber": "5",
        "numImages": 15
    },
    {
        "chapterNumber": "6",
        "numImages": 18
    },
    {
        "chapterNumber": "7",
        "numImages": 14
    },
    {
        "chapterNumber": "8",
        "numImages": 14
    },
    {
        "chapterNumber": "9",
        "numImages": 17
    },
    {
        "chapterNumber": "10",
        "numImages": 15
    },
    {
        "chapterNumber": "11",
        "numImages": 15
    },
    {
        "chapterNumber": "12",
        "numImages": 15
    },
    {
        "chapterNumber": "13",
        "numImages": 17
    },
    {
        "chapterNumber": "14",
        "numImages": 17
    },
    {
        "chapterNumber": "15",
        "numImages": 18
    },
    {
        "chapterNumber": "16",
        "numImages": 16
    },
    {
        "chapterNumber": "17",
        "numImages": 17
    },
    {
        "chapterNumber": "18",
        "numImages": 16
    },
    {
        "chapterNumber": "19",
        "numImages": 15
    },
    {
        "chapterNumber": "20",
        "numImages": 17
    },
    {
        "chapterNumber": "21",
        "numImages": 14
    },
    {
        "chapterNumber": "22",
        "numImages": 19
    },
    {
        "chapterNumber": "23",
        "numImages": 17
    },
    {
        "chapterNumber": "24",
        "numImages": 16
    },
    {
        "chapterNumber": "25",
        "numImages": 17
    },
    {
        "chapterNumber": "26",
        "numImages": 16
    },
    {
        "chapterNumber": "27",
        "numImages": 14
    },
    {
        "chapterNumber": "28",
        "numImages": 0
    },
    {
        "chapterNumber": "29",
        "numImages": 17
    },
    {
        "chapterNumber": "30",
        "numImages": 14
    },
    {
        "chapterNumber": "31",
        "numImages": 15
    },
    {
        "chapterNumber": "32",
        "numImages": 16
    },
    {
        "chapterNumber": "33",
        "numImages": 17
    },
    {
        "chapterNumber": "34",
        "numImages": 13
    },
    {
        "chapterNumber": "35",
        "numImages": 16
    },
    {
        "chapterNumber": "36",
        "numImages": 14
    },
    {
        "chapterNumber": "37",
        "numImages": 10
    },
    {
        "chapterNumber": "38",
        "numImages": 24
    },
    {
        "chapterNumber": "39",
        "numImages": 16
    },
    {
        "chapterNumber": "40",
        "numImages": 14
    },
    {
        "chapterNumber": "41",
        "numImages": 19
    },
    {
        "chapterNumber": "42",
        "numImages": 16
    },
    {
        "chapterNumber": "43",
        "numImages": 19
    },
    {
        "chapterNumber": "44",
        "numImages": 15
    },
    {
        "chapterNumber": "45",
        "numImages": 13
    },
    {
        "chapterNumber": "46",
        "numImages": 20
    },
    {
        "chapterNumber": "47",
        "numImages": 14
    },
    {
        "chapterNumber": "48",
        "numImages": 17
    },
    {
        "chapterNumber": "49",
        "numImages": 17
    },
    {
        "chapterNumber": "50",
        "numImages": 17
    },
    {
        "chapterNumber": "51",
        "numImages": 16
    },
    {
        "chapterNumber": "52",
        "numImages": 18
    },
    {
        "chapterNumber": "53",
        "numImages": 19
    },
    {
        "chapterNumber": "54",
        "numImages": 16
    },
    {
        "chapterNumber": "55",
        "numImages": 19
    },
    {
        "chapterNumber": "56",
        "numImages": 16
    },
    {
        "chapterNumber": "57",
        "numImages": 16
    },
    {
        "chapterNumber": "58",
        "numImages": 14
    },
    {
        "chapterNumber": "59",
        "numImages": 20
    },
    {
        "chapterNumber": "60",
        "numImages": 17
    },
    {
        "chapterNumber": "61",
        "numImages": 14
    },
    {
        "chapterNumber": "62",
        "numImages": 15
    },
    {
        "chapterNumber": "63",
        "numImages": 18
    },
    {
        "chapterNumber": "64",
        "numImages": 15
    },
    {
        "chapterNumber": "65",
        "numImages": 16
    },
    {
        "chapterNumber": "66",
        "numImages": 16
    },
    {
        "chapterNumber": "67",
        "numImages": 18
    },
    {
        "chapterNumber": "68",
        "numImages": 13
    },
    {
        "chapterNumber": "69",
        "numImages": 14
    },
    {
        "chapterNumber": "70",
        "numImages": 16
    },
    {
        "chapterNumber": "71",
        "numImages": 19
    },
    {
        "chapterNumber": "72",
        "numImages": 19
    },
    {
        "chapterNumber": "73",
        "numImages": 18
    },
    {
        "chapterNumber": "74",
        "numImages": 17
    },
    {
        "chapterNumber": "75",
        "numImages": 13
    },
    {
        "chapterNumber": "76",
        "numImages": 12
    },
    {
        "chapterNumber": "77",
        "numImages": 16
    },
    {
        "chapterNumber": "78",
        "numImages": 14
    },
    {
        "chapterNumber": "79",
        "numImages": 20
    },
    {
        "chapterNumber": "80",
        "numImages": 16
    },
    {
        "chapterNumber": "81",
        "numImages": 14
    },
    {
        "chapterNumber": "82",
        "numImages": 16
    },
    {
        "chapterNumber": "83",
        "numImages": 13
    },
    {
        "chapterNumber": "84",
        "numImages": 14
    },
    {
        "chapterNumber": "85",
        "numImages": 23
    },
    {
        "chapterNumber": "86",
        "numImages": 13
    },
    {
        "chapterNumber": "87",
        "numImages": 14
    },
    {
        "chapterNumber": "88",
        "numImages": 15
    },
    {
        "chapterNumber": "89",
        "numImages": 13
    },
    {
        "chapterNumber": "90",
        "numImages": 12
    },
    {
        "chapterNumber": "91",
        "numImages": 19
    },
    {
        "chapterNumber": "92",
        "numImages": 16
    },
    {
        "chapterNumber": "93",
        "numImages": 17
    },
    {
        "chapterNumber": "94",
        "numImages": 16
    },
    {
        "chapterNumber": "95",
        "numImages": 17
    },
    {
        "chapterNumber": "96",
        "numImages": 16
    },
    {
        "chapterNumber": "97",
        "numImages": 21
    },
    {
        "chapterNumber": "98",
        "numImages": 44
    },
    {
        "chapterNumber": "99",
        "numImages": 18
    },
    {
        "chapterNumber": "100",
        "numImages": 17
    },
    {
        "chapterNumber": "101",
        "numImages": 13
    },
    {
        "chapterNumber": "102",
        "numImages": 0
    },
    {
        "chapterNumber": "103",
        "numImages": 16
    },
    {
        "chapterNumber": "104",
        "numImages": 18
    },
    {
        "chapterNumber": "105",
        "numImages": 13
    },
    {
        "chapterNumber": "106",
        "numImages": 14
    },
    {
        "chapterNumber": "107",
        "numImages": 17
    },
    {
        "chapterNumber": "108",
        "numImages": 16
    },
    {
        "chapterNumber": "109",
        "numImages": 16
    },
    {
        "chapterNumber": "110",
        "numImages": 18
    },
    {
        "chapterNumber": "111",
        "numImages": 14
    },
    {
        "chapterNumber": "112",
        "numImages": 24
    },
    {
        "chapterNumber": "113",
        "numImages": 16
    },
    {
        "chapterNumber": "114",
        "numImages": 23
    },
    {
        "chapterNumber": "115",
        "numImages": 11
    },
    {
        "chapterNumber": "116",
        "numImages": 16
    },
    {
        "chapterNumber": "117",
        "numImages": 16
    },
    {
        "chapterNumber": "118",
        "numImages": 13
    },
    {
        "chapterNumber": "119",
        "numImages": 15
    },
    {
        "chapterNumber": "120",
        "numImages": 14
    },
    {
        "chapterNumber": "121",
        "numImages": 15
    },
    {
        "chapterNumber": "122",
        "numImages": 17
    },
    {
        "chapterNumber": "123",
        "numImages": 14
    },
    {
        "chapterNumber": "124",
        "numImages": 15
    },
    {
        "chapterNumber": "125",
        "numImages": 14
    },
    {
        "chapterNumber": "126",
        "numImages": 13
    },
    {
        "chapterNumber": "127",
        "numImages": 15
    },
    {
        "chapterNumber": "128",
        "numImages": 10
    },
    {
        "chapterNumber": "129",
        "numImages": 16
    },
    {
        "chapterNumber": "130",
        "numImages": 15
    },
    {
        "chapterNumber": "131",
        "numImages": 15
    },
    {
        "chapterNumber": "132",
        "numImages": 12
    },
    {
        "chapterNumber": "133",
        "numImages": 13
    },
    {
        "chapterNumber": "134",
        "numImages": 14
    },
    {
        "chapterNumber": "135",
        "numImages": 19
    },
    {
        "chapterNumber": "136",
        "numImages": 11
    },
    {
        "chapterNumber": "137",
        "numImages": 13
    },
    {
        "chapterNumber": "138",
        "numImages": 18
    },
    {
        "chapterNumber": "139",
        "numImages": 13
    },
    {
        "chapterNumber": "140",
        "numImages": 15
    },
    {
        "chapterNumber": "141",
        "numImages": 14
    },
    {
        "chapterNumber": "142",
        "numImages": 12
    },
    {
        "chapterNumber": "143",
        "numImages": 14
    },
    {
        "chapterNumber": "144",
        "numImages": 11
    },
    {
        "chapterNumber": "145",
        "numImages": 14
    },
    {
        "chapterNumber": "146",
        "numImages": 15
    },
    {
        "chapterNumber": "147",
        "numImages": 12
    },
    {
        "chapterNumber": "148",
        "numImages": 14
    },
    {
        "chapterNumber": "149",
        "numImages": 18
    },
    {
        "chapterNumber": "150",
        "numImages": 14
    },
    {
        "chapterNumber": "151",
        "numImages": 14
    },
    {
        "chapterNumber": "152",
        "numImages": 16
    },
    {
        "chapterNumber": "153",
        "numImages": 17
    },
    {
        "chapterNumber": "154",
        "numImages": 15
    },
    {
        "chapterNumber": "155",
        "numImages": 10
    },
    {
        "chapterNumber": "156",
        "numImages": 14
    },
    {
        "chapterNumber": "157",
        "numImages": 14
    },
    {
        "chapterNumber": "158",
        "numImages": 15
    },
    {
        "chapterNumber": "159",
        "numImages": 13
    },
    {
        "chapterNumber": "160",
        "numImages": 13
    },
    {
        "chapterNumber": "161",
        "numImages": 13
    },
    {
        "chapterNumber": "162",
        "numImages": 15
    },
    {
        "chapterNumber": "163",
        "numImages": 16
    },
    {
        "chapterNumber": "164",
        "numImages": 15
    },
    {
        "chapterNumber": "165",
        "numImages": 12
    },
    {
        "chapterNumber": "166",
        "numImages": 15
    },
    {
        "chapterNumber": "167",
        "numImages": 14
    }
];