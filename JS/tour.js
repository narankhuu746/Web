[
    {
        tour_name: "Scenes of National Parks",
        tour_img: "/PICTURES/tour1.webp",
        tour_master: [
            "3 Days 2 Nights",
            "Exploring varied natural landscapes",
            "Visiting cultural heritage sites",
            "Experiencing nomad culture",
            "Hiking"
        ],
        tour_info_link: "/HTML/tour_info.html"
    },
    {
        tour_name: "Contrasts of Mongolia",
        tour_img: "/PICTURES/tour3.webp",
        tour_master: [
            "8 Days 7 Nights",
            "Vast & diverse Gobi desert",
            "Taiga & Khuvsgul Lake",
            "Wildlife Watching",
            "Luxury accommodation"
        ],
        tour_info_link: "/HTML/tour_info.html"
    },
    {
        tour_name: "On Horseback to Mystical Taiga",
        tour_img: "/PICTURES/tour2.webp",
        tour_master: [
            "12 Days 11 Nights",
            "Explore the Mystical Taiga",
            "Visit Reindeer & Khuvsgul lake",
            "Stay with Tsaachin family",
            "Luxury accommodation"
        ],
        tour_info_link: "/HTML/tour_info.html"
    },
    {
        tour_name: "The Heritage of the Sacred Land",
        tour_img: "/PICTURES/tour3.webp",
        tour_master: [
            "6 Days 5 Nights",
            "Enjoy Chinggis Khaan statue",
            "Visit cultural heritage",
            "Spotting wild sheep<",
            "Explore historical site"
        ],
        tour_info_link: "/HTML/tour_info.html"
    },
    {
        tour_name: "Treasures of Mongolia",
        tour_img: "/PICTURES/tour1.webp",
        tour_master: [
            "12 Days 11 Nights",
            "Explore the Gobi Desert",
            "Visit Orkhon Waterfall",
            "Stay with yak herders",
            "Family fun"
        ],
        tour_info_link: "/HTML/tour_info.html"
    },
    {
        tour_name: "Snow Leopard Quest",
        tour_img: "/PICTURES/tour2.webp",
        tour_master: [
            "12 Days 11 Nights",
            "Visit ethnic groups",
            "Spotting wild cats",
            "Hiking through high mountains",
            "Experiencing unique nomadic life"
        ],
        tour_info_link: "/HTML/tour_info.html"
    }

];

class Tour {
    constructor(tour_name, tour_img, tour_master, tour_info_link) {
        this.tour_name = tour_name;
        this.tour_img = tour_img;
        this.tour_master = tour_master;
        this.tour_info_link = tour_info_link;

    }
[
    {
        tour_name: "Scenes of National Parks",
        tour_img: "/PICTURES/tour1.webp",
        tour_master: [
            "3 Days 2 Nights",
            "Exploring varied natural landscapes",
            "Visiting cultural heritage sites",
            "Experiencing nomad culture",
            "Hiking"
        ],
        tour_info_link: "/HTML/tour_info.html"
    },
    {
        tour_name: "Contrasts of Mongolia",
        tour_img: "/PICTURES/tour3.webp",
        tour_master: [
            "8 Days 7 Nights",
            "Vast & diverse Gobi desert",
            "Taiga & Khuvsgul Lake",
            "Wildlife Watching",
            "Luxury accommodation"
        ],
        tour_info_link: "/HTML/tour_info.html"
    },
    {
        tour_name: "On Horseback to Mystical Taiga",
        tour_img: "/PICTURES/tour2.webp",
        tour_master: [
            "12 Days 11 Nights",
            "Explore the Mystical Taiga",
            "Visit Reindeer & Khuvsgul lake",
            "Stay with Tsaachin family",
            "Luxury accommodation"
        ],
        tour_info_link: "/HTML/tour_info.html"
    },
    {
        tour_name: "The Heritage of the Sacred Land",
        tour_img: "/PICTURES/tour3.webp",
        tour_master: [
            "6 Days 5 Nights",
            "Enjoy Chinggis Khaan statue",
            "Visit cultural heritage",
            "Spotting wild sheep<",
            "Explore historical site"
        ],
        tour_info_link: "/HTML/tour_info.html"
    },
    {
        tour_name: "Treasures of Mongolia",
        tour_img: "/PICTURES/tour1.webp",
        tour_master: [
            "12 Days 11 Nights",
            "Explore the Gobi Desert",
            "Visit Orkhon Waterfall",
            "Stay with yak herders",
            "Family fun"
        ],
        tour_info_link: "/HTML/tour_info.html"
    },
    {
        tour_name: "Snow Leopard Quest",
        tour_img: "/PICTURES/tour2.webp",
        tour_master: [
            "12 Days 11 Nights",
            "Visit ethnic groups",
            "Spotting wild cats",
            "Hiking through high mountains",
            "Experiencing unique nomadic life"
        ],
        tour_info_link: "/HTML/tour_info.html"
    }

];

class Tour {
    constructor(tour_name, tour_img, tour_master, tour_info_link) {
        this.tour_name = tour_name;
        this.tour_img = tour_img;
        this.tour_master = tour_master;
        this.tour_info_link = tour_info_link;

    }
    render() {
        return `<article>
                    <a href="${this.tour_info_link}">
                        <img src="${this.tour_img}" alt="tour image">
                        <h3>${this.tour_name}</h3>
                        <ul>
                            <li>${this.tour_master[0]}</li>
                            <li>${this.tour_master[1]}</li>
                            <li>${this.tour_master[2]}</li>
                            <li>${this.tour_master[3]}</li>
                            <li>${this.tour_master[4]}</li>
                        </ul>
                    </a>
                 </article>`;
    }
