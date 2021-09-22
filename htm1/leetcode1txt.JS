1. Two Sum
let sentToAirport = true;
var twoSum = function (nums, target) {
    let map1 = new Map();
    for (let i = 0; i < nums.length; i++) {
        map1.set = (nums[i], i);
    }
    for (let j = 0; j < nums.length; j++) {
        let a = target - nums[j];
        if (map1.has(a) && a != map1.get(a)) {
            return [j, map1.get(a)];
        }
    }
};
let a = twoSum([2, 7, 11, 15], 9);
alert(a);