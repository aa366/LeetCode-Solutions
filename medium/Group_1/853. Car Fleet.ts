

//  problem => There are n cars at given miles away from the starting mile 0, traveling to reach the mile target.

// You are given two integer arrays position and speed, both of length n, where position[i] is the starting mile of the ith car and speed[i] is the speed of the ith car in miles per hour.
// A car cannot pass another car, but it can catch up and then travel next to it at the speed of the slower car.
// A car fleet is a single car or a group of cars driving next to each other. The speed of the car fleet is the minimum speed of any car in the fleet.
// If a car catches up to a car fleet at the mile target, it will still be considered as part of the car fleet.
// Return the number of car fleets that will arrive at the destination.


function carFleet(target: number, position: number[], speed: number[]): number {

   
    var combined: number[][] = [];

    for (let i = 0; i < position.length; i++) {
        combined.push([position[i], speed[i]])
    }
    // make a array list each element has the car and its speed 



    combined.sort((a, b) => b[0] - a[0]);
    // sort by the postion 



    let reachingTime = 0;
    let fleet = 0;



    for (let [pos, spd] of combined) {
        let time = (target - pos) / spd;
        //  loop on every car check time need to flee
        // time = distance (= end point - current postion ) / speed 

        if (time > reachingTime) {
            // if the car time to pass the distance bigger than reaching time then car fleet
            fleet++;
            reachingTime = time;
            // reassign reaching time to time of previous car need to flee 
        }
    }

    return fleet;
};

console.log(carFleet(12, [10, 8, 0, 5, 3], [2, 4, 1, 1, 3]));
console.log(carFleet(100, [0, 2, 4], [4, 2, 1]));

console.log(carFleet(10, [3], [3]));











