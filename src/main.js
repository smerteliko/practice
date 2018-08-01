$(document).ready(function () {
    ko.applyBindings(new MyViewModel());
});

function MyViewModel() {

    var self = this;

    HTML_DATA();
    JSON_DATA();
    PHP_REQUEST();
    SHOW_WEATHER();

    function HTML_DATA () {
        /*
        *  Function for calling html text
        *  (simple button to get text)
        * */
        self.htmlText = ko.observableArray([]);

        self.getTextHtml = function () {
            $.ajax({
                type: "GET",
                url: "data/data.html",
                data: true,
                dataType: "html",
                processData: false,
                contentType: false,
            }).success(self.successHandlerHtml)
                .error(self.errorHandlerHtml);
        };
        self.successHandlerHtml = function (data, msg) {
            self.htmlText(data);
            console.log("HTML " + msg);
        };
        self.errorHandlerHtml = function (msg) {
            console.log("HTML " + msg);
        };
    }
    function JSON_DATA () {
        /*
        *  Function for calling Json data
        *  (simple button to get text)
        * */
        self.call = ko.observableArray();

        self.getTextJson = function () {
            $.getJSON("data/data.json")
                .success(self.successHandlerJson)
                .error(self.errorHandlerJson)
        };
        self.successHandlerJson = function (data, msg) {
            self.call(data.result);
            console.log("JSON " + msg);
        };
        self.errorHandlerJson = function (msg) {
            console.log("JSON " + msg)
        };
    }

    function PHP_REQUEST () {
        /*
        *  Function for calling PHP data
        *  simple button and input fields,
        *  wich send data to PHP server,
        *  server reverse words, and bring them back
        * */
        self.user = {
            login: ko.observable(),
            password: ko.observable()
        };

        self.getPhpData = function () {
            var userInfo = ko.toJS(self.user);
            $.ajax({
                url: 'data/data.php',
                data: userInfo,
                type: 'POST',
                contentType: 'application/x-www-form-urlencoded'
            }).success(self.successHandlerPHP)
                .error(self.errorHandlerPHP);
        };
        self.successHandlerPHP = function (data, msg) {
            self.user.login(data.login);
            self.user.password(data.password);
            console.log("PHP " + msg)
        };
        self.errorHandlerPHP = function (msg) {
            console.log("PHP " + msg);
        };
    }

    function SHOW_WEATHER() {
        /*
        * Function for calling Json data
        * from openweathermap.org
        * */
        self.data = {
            city: ko.observableArray(),
            temp: ko.observableArray(),
            weather: ko.observableArray()
        };

        self.getWeatherData = function () {
            navigator.geolocation.getCurrentPosition(successHandlerWeatherPosition,error);
            function successHandlerWeatherPosition (position) {
                console.log(position.coords);
                $.getJSON("https://api.openweathermap.org/data/2.5/forecast?lat="
                    +position.coords.latitude+"&lon="+
                    position.coords.longitude+
                    "&units=metric&APPID=65123116875e9604b8d5d5d14c59c5b8")
                .success(function (data) {
                    console.log(data);
                    self.data.city(data.city.name);
                    self.data.temp(data.list[0].main.temp);
                    self.data.weather(data.list[0].weather[0].description);
                })

            }
            function error(err) {
                console.log(err);
            }

        };
    }
}

