$(document).ready(() => {
    $('#mynav').css({
        opacity: 1
    })
});

$(window).on("load", function () {
    $('#pre-loader').css({
        display: 'None'
    });
});

$(document).on('scroll', function (event) {
    let dh = $(document).height();
    let wh = $(window).height();
    let scroll = $(document).scrollTop() / (dh - wh) * 10000;
    console.log(scroll);
    let min_nav = 1500;

    if (scroll >= min_nav) {
        $('.navbar').addClass('navbar-min');
        $('.logo').addClass('logo-min')
    } else {
        $('.navbar').removeClass('navbar-min');
        $('.logo').removeClass('logo-min')
    }

});


$(".mapcontainer").mapael({
    map: {
        name: "world_countries_miller",
        defaultArea: {
            attrs: {
                fill: "#191a1c",
                stroke: "#00acff",
                "stroke-width": 0.3
            }
        },
        defaultPlot: {
            text: {
                attrs: {
                    fill: "#b4b4b4",
                    "font-weight": "normal"
                },
                attrsHover: {
                    fill: "#fff",
                    "font-weight": "bold"
                }
            },
            tooltip: {},
            type: 'circle'
        },

    },
    plots: {
        "newyork": {
            "latitude": 40.667,
            "longitude": -73.833,
            tooltip: {content: "New York, USA"},

        },
        "mumbai": {
            "latitude": 19.0760,
            "longitude": 72.8777,
            tooltip: {content: "Mumbai, India"},

        },
        "singapore": {
            "latitude": 1.3521,
            "longitude": 103.8198,
            tooltip: {content: "Singapore"},

        },
        "sydney": {
            "latitude": -33.917,
            "longitude": 151.167,
            tooltip: {content: "Sydney, Australia"},
        },
        "frankfurt": {
            "latitude": 50.1109,
            "longitude": 8.6821,
            tooltip: {content: "Frankfurt, Germany"},
        }
    }
});
