/**
 * Created by Vaibhav Soni on 10/4/14.
 */

/**
 * handles the behaviour of flipping card.
 */
/*    vaibhavPortfolioApp.directive('flippy', function() {
        return {
            restrict: 'AE',
            scope: {},
            link: function($scope, $elem, $attrs) {

                var flip = function() {
                    $elem.toggleClass('flipped');
                }

                if ($attrs.clickToggle) {
                    $elem.bind('click', flip);
                }
                if ($attrs.mouseoverToggle) {
                    $elem.bind('mouseenter', flip);
                    $elem.bind('mouseleave', flip);
                }

            }
        };
    });*/

vaibhavPortfolioApp.directive('keepInTouch', function () {
    return {
        restrict: 'AE',
        replace: true,
        transclude: true,
        template:'<div id="open">'+
            '<div class="in">Selectively</div>'+
            '<br>'+
            '<div id="introduce">FREELANCING</div>'+

            '<div id="contact-cta" style="margin-top: 0px;">'+
            '<span class="in">Hello.</span>'+
            '</div>'+
            '</div>'
        ,
        link: function(scope, element, attrs){
            element.bind('mouseover', function(){
                element.css('height', '270px');
            });
            element.on('mouseleave', function() {
                element.css('height', '77px');
            })

        }
    }
});
vaibhavPortfolioApp.directive('open', function () {
    return {
        restrict: 'AE',
        link: function(scope, element, attrs){

            element.bind('mouseover', function(){
                element.css('height', '340px');
                element.css('padding','30px 2%');
            });
            element.on('mouseleave', function() {
                element.css('height', '70px');
                element.css('padding','13px 20px 10px 30px');
            })

        }
    }
});
vaibhavPortfolioApp.directive('helloWorld', function() {
    return {
        restrict: 'AE',
        replace: true,
        template: '<p style="background-color:{{color}}">Hello World',
        link: function(scope, elem, attrs) {
            elem.bind('click', function() {
                elem.css('background-color', 'white');
                scope.$apply(function() {
                    scope.color = "white";
                });
            });
            elem.bind('mouseover', function() {
                elem.css('cursor', 'pointer');
            });
        }
    };
});
/*
vaibhavPortfolioApp.directive('sayHello', function () {
    return {
        restrict:'AE',
        transclude:true,
        scope:{ title:'@title'},
        */
/*template:'<div ng-mouseenter="data.active = true" ng-mouseleave="data.active = false" ng-transclude>' +
            '<h3>{{title}}<span >' +
            '<a href="{{add}}" ng-show="data.active && add">Add</a>' +
            '<a href="{{edit}}" ng-show="data.active && edit">Edit</a></span></h3>' +
            '<div' +
            '</div>',*//*

        template:'<div class="panel">' +
            '<h3>{{title}}</h3>' +
            '<div class="panel-content" ng-transclude></div>' +
            '</div>',
        controller:function ($scope) {
            $scope.data = { active: false };

            $scope.toggle = function () {
                $scope.data.active = !$scope.data.active;
            };
        },
        replace:true
    };
});*/
