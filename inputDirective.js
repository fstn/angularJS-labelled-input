/**
 * Created by SZA on 03/05/2016.
 */

angular.module('moduleName')
    .directive('directiveName', [function () {
        return {
            restrict: 'AE',
            require: '?ngModel',
            scope: {
            id: '@',
                label: '@'
            },
            link: function (scope, element, attrs, ngModel) {
                // Check if ngModel is there else go out
                if (!ngModel)
                    return;
                // Fix on input element
                var input = angular.element(element[0]);

                input.wrap('<div class="form-group padding-5px no-margin full-with no-wrap ">' +
                    '<label for="'+scope.id+'" class="col-xs-12 col-md-6 col-lg-4 control-label padding-5px"> ' +
                    ''+scope.label+' </label> ' +
                    '</div>');

                input.wrap(
                    '<div class="col-xs-12 col-md-6 col-lg-8 padding-5px"> ' +
                    '</div> ');


                input.addClass('form-control col-xs-12 col-md-6 col-lg-8 padding-5px');
                /**
                 * TODO gestion erreur
                // Check if error message is set
                input.after('<small class="text-danger" style="display:none;"></small>');
                scope.$watch('itError', function (value) {
                    if (!input[0].offsetParent) {
                        return;
                    }
                    var elementDiv = input[0].offsetParent.children;
                    angular.forEach(elementDiv, function (divHtml) {
                        var div = angular.element(divHtml);
                        if (div.hasClass('text-danger')) {
                            div.text(value);
                            if (value != '' && value != undefined) {
                                div.removeClass('ng-hide');
                                div.addClass('ng-show');
                                div.css('display', 'block');
                            } else {
                                div.removeClass('ng-show');
                                div.addClass('ng-hide');
                                div.css('display', 'none');
                            }
                        }
                    });
                });
                if (input.val() === null || input.val() == "undefined" || input.val() === "") {
                    input.addClass('empty');
                }
                // Watch value and update to move floating label
                scope.$watch(function () {
                    return ngModel.$modelValue;
                }, function (value, oldValue) {
                    if (value === null || value == undefined || value === "") {
                        input.addClass('empty');
                    } else {
                        input.removeClass('empty');
                    }
                });

                // wait for input
                input.on('change', function () {
                    if (input.val() === null || input.val() == "undefined" || input.val() === "") {
                        input.addClass('empty');
                    } else {
                        input.removeClass('empty');
                    }
                });
                 */
            }
        }
    }]);
