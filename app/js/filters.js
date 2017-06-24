angular.module('orsApp.ors-filters', [])
    .filter('duration', () => {
        return (input) => {
            const days = Math.floor(input / 86400);
            const hours = Math.floor(input / 3600);
            input %= 3600;
            minutes = Math.floor(input / 60);
            seconds = input % 60;
            if (days < 1 && hours < 1 && minutes < 1) {
                return '<b>' + '< 1' + '</b>' + ' min';
            } else {
                let dayStr = '';
                if (days > 0) {
                    dayStr = days + 'd' + ' ';
                }
                let HHMM = [];
                if (hours.toString()
                    .length == 1) HHMM.push('0' + hours);
                else HHMM.push(hours);
                if (minutes.toString()
                    .length == 1) HHMM.push('0' + minutes);
                else HHMM.push(minutes);
                return '<b>' + dayStr + HHMM.join(':') + '</b>';
            }
        };
    })
    .filter('distance', ['orsSettingsFactory', (orsSettingsFactory) => {
        function distance(input, round) {
            input = parseInt(input);
            let units = orsSettingsFactory.getUserOptions()
                .units;
            if (units == 'km') {
                units = ' m';
                if (input >= 1000) {
                    if (round) {
                        input = (input / 1000)
                            .toFixed();
                    } else {
                        input = (input / 1000)
                            .toFixed(2);
                    }
                    units = ' km';
                } else {
                    input = input.toFixed();
                }
            } else if (units == 'mi') {
                /** convert meters to miles */
                if (round) {
                    input = (input * 0.000621371192)
                        .toFixed();
                } else {
                    input = (input * 0.000621371192)
                        .toFixed(2);
                }
                if (input < 0.5 && input > 0.2) {
                    /** yards */
                    input = (input * 1760)
                        .toFixed();
                    units = ' yd';
                } else if (input <= 0.1) {
                    /** feet */
                    input = (input * 1760 * 3)
                        .toFixed();
                    units = ' ft';
                }
            }
            input = '<b>' + input + '</b>' + units;
            return input;
        }
        distance.$stateful = true;
        return distance;
    }])
    .filter('area', ['orsSettingsFactory', (orsSettingsFactory) => {
        function distance(input, round) {
            input = parseInt(input);
            let units = orsSettingsFactory.getUserOptions()
                .units;
            if (units == 'km') {
                input = (input / 1000000)
                    .toFixed(2);
            } else if (units == 'mi') {
                input = (input / 2589988.11034)
                    .toFixed(2);
            }
            input = input + ' ' + units + '<sup>2</sup>';
            return input;
        }
        distance.$stateful = true;
        return distance;
    }]);