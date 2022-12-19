console.log("start");
class Tour {
    constructor(ob) {
        this.tour_name = ob.tour_name;
        this.tour_img = ob.tour_img;
        this.tour_master = ob.tour_master;
        this.tour_info_link = ob.tour_info_link;

    }

    render() {
        return `<article>
        <a href="${this.tour_info_link}">
            <img src="${this.tour_img}" alt="tour image">
            <h3>${this.tour_name}</h3>
            <ul>
                <li class="mar-b-05"><i class="fa-solid fa-check"></i>${this.tour_master[0]}</li>
                <li class="mar-b-05"><i class="fa-solid fa-check"></i>${this.tour_master[1]}</li>
                <li class="mar-b-05"><i class="fa-solid fa-check"></i>${this.tour_master[2]}</li>
                <li class="mar-b-05"><i class="fa-solid fa-check"></i>${this.tour_master[3]}</li>
                <li class="mar-b-05"><i class="fa-solid fa-check"></i>${this.tour_master[4]}</li>
            </ul>
        </a>
    </article>`;

    }
};

class TopTour {
    constructor(tourUrl) {
        this._tourUrl = tourUrl;
    }

    Download(targetElement) {
        fetch(`${this._tourUrl}/latest`)
            .then(result => {
                result.json().then(jsob => {
                    // filter
                    const filteredTour = jsob.record.filter(filter => filter.top);
                    console.log(filteredTour);
                    gebi(targetElement).insertAdjacentHTML("afterbegin", filteredTour.map(map => {
                        const _map = new Tour(map);
                        return _map.render();
                    }).reduce((p, c) => p + c, "")
                    );

                })
            })
            .catch(error => {
                console.log(error)
                console.log("error catch")
            }
            )

    }

};

const gebi = id => document.getElementById(id);
const tours = new TopTour("https://api.jsonbin.io/v3/b/638c829bccc1f33a9e639da5");
tours.Download("articles_top");

