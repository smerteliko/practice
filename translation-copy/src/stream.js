$(document).ready(function () {
    viewModel = new ButtonsViewModel();
    viewModel.setContainers(buttonsData.window);
    viewModel.setSources(buttonsData.channels);
    ko.applyBindings(viewModel);
});

function ButtonsViewModel () {
    const self = this;

    let privateStuff = {};
    privateStuff.containers     = ko.observableArray([]);
    privateStuff.sources        = ko.observableArray([]);

    self.disconnect = function (container) {
        const parent = document.getElementById(container.id);
        jwplayer(parent).remove();
        parent.innerHTML = '';
        parent.style = null;
    };

    self.connect = function (container) {
        if (!container.selectedSource()) {
            return;
        }

        jwplayer(container.id).setup({
            sources: [{
                file: container.selectedSource()
            }],
            autostart: false,
            width: "100%",
            height: "100%",
            primary: "flash"
        });
    };

    self.reconnect = function (container) {
        self.disconnect(container);
        self.connect(container);
    };

    self.onContainerChange = function () {
        for (let i = 0; i < privateStuff.containers().length; i++) {
            let container = privateStuff.containers()[i];
            if (container.activeSource() !== container.selectedSource()) {
                if (container.selectedSource()) {
                    self.connect(container);
                    container.activeSource(container.selectedSource());
                } else {
                    self.disconnect(container);
                    container.activeSource(null);
                }
            }
        }
    };

    self.setContainers = function (data) {
        for (let i = 0; i < data.length; i++) {
            data[i].selectedSource = ko.observable();
            data[i].activeSource = ko.observable();
            data[i].selectedSource.subscribe(self.onContainerChange);
        }
        privateStuff.containers(data);
    };

    self.getContainers = function () {
        return privateStuff.containers;
    };

    self.setSources = function (data) {
        privateStuff.sources(data);
    };

    self.getSources = function () {
        return privateStuff.sources;
    };
}

let buttonsData = {
    channels: [
        {
            label: 'Moscow office',
            code: 'msk',
            stream: ''
        },
        {
            label: 'Austria office',
            code: 'au',
            stream: ''
        },
        {
            label: 'Slovakia office',
            code: 'sk',
            stream: ''
        }
    ],
    window: [
        {id: "Window1", name: 'Window TL'},
        {id: "Window2", name: 'Window TR'},
        {id: "Window3", name: 'Window BR'},
    ]
};