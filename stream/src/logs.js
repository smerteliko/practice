ko.components.register('logVM', {
    viewModel: LogViewModel,
    template: {element: 'logTemplate'}
});

function LogViewModel(params) {
    const self = this;

    let privateStuffLog = {};
    privateStuffLog.logs       = ko.observableArray([]);
    privateStuffLog.status     = ko.observableArray([]);
    self.getText = function () {
        $.ajax({
            url: params.url,
            data: true,
            dataType: 'json',
            contentType: "application/json; charset=utf-8",
        }).success(self.setText).error(self.textError);
    };

    self.setText = function (data, msg) {
        for(let i = 0; i < data.logs.length; i++) {
            privateStuffLog.logs(data.logs);
        }
        console.log('ajax call ' + msg);
    };
    self.textError = function (msg) {
        console.log('ajax call ' + msg);
    };
    self.getText();

    self.getStatus = function (status) {
        return status === "ok" ? "success" : "danger";
    };

    self.getLogs = function () {
        return privateStuffLog.logs;
    }
}

let logData = {
    url: "data/data.json",
};