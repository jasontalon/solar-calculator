import {Load} from "./Load";

describe('load item', () => {

    it.each([
        {watts: 10, quantity: 1, hours: 8, expected: 80},
        {watts: 12, quantity: 2, hours: 8, expected: 192}])
    ('should expect $expected watt-hour consumption with: ' +
        '\n\t$watts watts' +
        '\n\t$quantity quantity ' +
        '\n\t$hours hours', (
        {
            watts,
            quantity,
            hours,
            expected
        }) => {
        let load: Load = Load.Init({watts, hours, quantity});
        expect(load.consumption()).toBe(expected);
    });

});

