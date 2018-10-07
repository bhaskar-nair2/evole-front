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
    let min_nav = 150;

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
            type: 'circle',
            size: 10
        },

    },
    plots: {
        "newyork": {
            "latitude": 40.667,
            "longitude": -74.0060,
            tooltip: {content: "New York, USA"},

        },
        "mumbai": {
            "latitude": 19.0760,
            "longitude": 72.8777,
            tooltip: {content: "Mumbai, India"},

        },
        "bangalore": {
            "latitude": 12.9716,
            "longitude": 77.5946,
            tooltip: {content: "Bangalore, India"},

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
        },
        "london": {
            "latitude": 51.5074,
            "longitude": 0.1278,
            tooltip: {content: "London, UK"},
        },
        "helsinki": {
            "latitude": 60.1699,
            "longitude": 24.9384,
            tooltip: {content: "Helsinki, Finland"},
        },
        "chicago": {
            "latitude": 41.8781,
            "longitude": -87.6298,
            tooltip: {content: "Chicago, USA"},
        }
    }
});
