(function () {
    'use strict';

    angular.module('Ekzamen', [])
        .controller('Controller', Controller)
        .service('Service', Service);

    Controller.$inject = ['Service'];

    function Controller(Service) {
        var buy = this;
        buy.listBuy = Service.getBuy();
        buy.sell = function (index) {
            Service.sell(index);
        }
        buy.hide = function(index){
            Service.hide(index)
        }
         buy.show = function(index){
            Service.show(index)
        }
    }
    function Service() {
        var service = this;

        var listBuy = [
            {
                mark: "Danone",
                quantity: 66,
                isVisible : true
            },
            {
                mark: "Actimel",
                quantity: 13,
                 isVisible : true
            },
            {
                mark: "МОлокія",
                quantity: 11,
                 isVisible : true
            },
            {
                mark: "Галичина",
                quantity: 2,
                 isVisible : true
            },
            {
                mark: "Франківський",
                quantity: 3,
                 isVisible : true
            },
            {
                mark: "Амон",
                quantity: 9999,
                 isVisible : true
            },
        ];

        service.getBuy = function () {
            return listBuy;
        };

        service.sell = function (index) {
            listBuy.splice(index, 1);
        };
        service.hide = function(index)
        {
            listBuy[index].isVisible = false;
        }
        service.show = function(index)
        {
            listBuy[index].isVisible = true;
        }
    }
})();
