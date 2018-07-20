// 20180719110957
// https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22nome%2C%20ak%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys

{
  "query": {
    "count": 1,
    "created": "2018-07-19T08:09:56Z",
    "lang": "en-US",
    "results": {
      "channel": {
        "units": {
          "distance": "mi",
          "pressure": "in",
          "speed": "mph",
          "temperature": "F"
        },
        "title": "Yahoo! Weather - Nome, AK, US",
        "link": "http://us.rd.yahoo.com/dailynews/rss/weather/Country__Country/*https://weather.yahoo.com/country/state/city-2460286/",
        "description": "Yahoo! Weather for Nome, AK, US",
        "language": "en-us",
        "lastBuildDate": "Thu, 19 Jul 2018 12:09 AM AKDT",
        "ttl": "60",
        "location": {
          "city": "Nome",
          "country": "United States",
          "region": " AK"
        },
        "wind": {
          "chill": "46",
          "direction": "225",
          "speed": "22"
        },
        "atmosphere": {
          "humidity": "85",
          "pressure": "1017.0",
          "rising": "0",
          "visibility": "16.1"
        },
        "astronomy": {
          "sunrise": "0:52 am",
          "sunset": "5:22 am"
        },
        "image": {
          "title": "Yahoo! Weather",
          "width": "142",
          "height": "18",
          "link": "http://weather.yahoo.com",
          "url": "http://l.yimg.com/a/i/brand/purplelogo//uh/us/news-wea.gif"
        },
        "item": {
          "title": "Conditions for Nome, AK, US at 11:00 PM AKDT",
          "lat": "64.499474",
          "long": "-165.405792",
          "link": "http://us.rd.yahoo.com/dailynews/rss/weather/Country__Country/*https://weather.yahoo.com/country/state/city-2460286/",
          "pubDate": "Wed, 18 Jul 2018 11:00 PM AKDT",
          "condition": {
            "code": "26",
            "date": "Wed, 18 Jul 2018 11:00 PM AKDT",
            "temp": "51",
            "text": "Cloudy"
          },
          "forecast": [
            {
              "code": "26",
              "date": "19 Jul 2018",
              "day": "Thu",
              "high": "53",
              "low": "51",
              "text": "Cloudy"
            },
            {
              "code": "28",
              "date": "20 Jul 2018",
              "day": "Fri",
              "high": "60",
              "low": "52",
              "text": "Mostly Cloudy"
            },
            {
              "code": "28",
              "date": "21 Jul 2018",
              "day": "Sat",
              "high": "63",
              "low": "57",
              "text": "Mostly Cloudy"
            },
            {
              "code": "11",
              "date": "22 Jul 2018",
              "day": "Sun",
              "high": "61",
              "low": "56",
              "text": "Showers"
            },
            {
              "code": "39",
              "date": "23 Jul 2018",
              "day": "Mon",
              "high": "59",
              "low": "55",
              "text": "Scattered Showers"
            },
            {
              "code": "34",
              "date": "24 Jul 2018",
              "day": "Tue",
              "high": "59",
              "low": "53",
              "text": "Mostly Sunny"
            },
            {
              "code": "30",
              "date": "25 Jul 2018",
              "day": "Wed",
              "high": "64",
              "low": "57",
              "text": "Partly Cloudy"
            },
            {
              "code": "28",
              "date": "26 Jul 2018",
              "day": "Thu",
              "high": "62",
              "low": "58",
              "text": "Mostly Cloudy"
            },
            {
              "code": "30",
              "date": "27 Jul 2018",
              "day": "Fri",
              "high": "62",
              "low": "55",
              "text": "Partly Cloudy"
            },
            {
              "code": "30",
              "date": "28 Jul 2018",
              "day": "Sat",
              "high": "61",
              "low": "55",
              "text": "Partly Cloudy"
            }
          ],
          "description": "<![CDATA[<img src=\"http://l.yimg.com/a/i/us/we/52/26.gif\"/>\n<BR />\n<b>Current Conditions:</b>\n<BR />Cloudy\n<BR />\n<BR />\n<b>Forecast:</b>\n<BR /> Thu - Cloudy. High: 53Low: 51\n<BR /> Fri - Mostly Cloudy. High: 60Low: 52\n<BR /> Sat - Mostly Cloudy. High: 63Low: 57\n<BR /> Sun - Showers. High: 61Low: 56\n<BR /> Mon - Scattered Showers. High: 59Low: 55\n<BR />\n<BR />\n<a href=\"http://us.rd.yahoo.com/dailynews/rss/weather/Country__Country/*https://weather.yahoo.com/country/state/city-2460286/\">Full Forecast at Yahoo! Weather</a>\n<BR />\n<BR />\n<BR />\n]]>",
          "guid": {
            "isPermaLink": "false"
          }
        }
      }
    }
  }
}