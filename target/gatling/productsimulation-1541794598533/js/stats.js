var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "1000",
        "ok": "993",
        "ko": "7"
    },
    "minResponseTime": {
        "total": "898",
        "ok": "898",
        "ko": "14959"
    },
    "maxResponseTime": {
        "total": "16847",
        "ok": "12859",
        "ko": "16847"
    },
    "meanResponseTime": {
        "total": "1739",
        "ok": "1642",
        "ko": "15545"
    },
    "standardDeviation": {
        "total": "1519",
        "ok": "984",
        "ko": "600"
    },
    "percentiles1": {
        "total": "1268",
        "ok": "1245",
        "ko": "15326"
    },
    "percentiles2": {
        "total": "2081",
        "ok": "2080",
        "ko": "15698"
    },
    "percentiles3": {
        "total": "2836",
        "ok": "2717",
        "ko": "16540"
    },
    "percentiles4": {
        "total": "9162",
        "ok": "5216",
        "ko": "16786"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 0,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 485,
        "percentage": 49
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 508,
        "percentage": 51
    },
    "group4": {
        "name": "failed",
        "count": 7,
        "percentage": 1
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "13.333",
        "ok": "13.24",
        "ko": "0.093"
    }
},
contents: {
"req_live-price-8893e": {
        type: "REQUEST",
        name: "Live Price",
path: "Live Price",
pathFormatted: "req_live-price-8893e",
stats: {
    "name": "Live Price",
    "numberOfRequests": {
        "total": "1000",
        "ok": "993",
        "ko": "7"
    },
    "minResponseTime": {
        "total": "898",
        "ok": "898",
        "ko": "14959"
    },
    "maxResponseTime": {
        "total": "16847",
        "ok": "12859",
        "ko": "16847"
    },
    "meanResponseTime": {
        "total": "1739",
        "ok": "1642",
        "ko": "15545"
    },
    "standardDeviation": {
        "total": "1519",
        "ok": "984",
        "ko": "600"
    },
    "percentiles1": {
        "total": "1268",
        "ok": "1245",
        "ko": "15326"
    },
    "percentiles2": {
        "total": "2081",
        "ok": "2080",
        "ko": "15698"
    },
    "percentiles3": {
        "total": "2836",
        "ok": "2717",
        "ko": "16540"
    },
    "percentiles4": {
        "total": "9162",
        "ok": "5216",
        "ko": "16786"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 0,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 485,
        "percentage": 49
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 508,
        "percentage": 51
    },
    "group4": {
        "name": "failed",
        "count": 7,
        "percentage": 1
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "13.333",
        "ok": "13.24",
        "ko": "0.093"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
