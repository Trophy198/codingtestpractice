function solution(bridge_length, weight, truck_weights) {
    let time = 0;
    let bridge = new Array(bridge_length).fill(0);
    let weightOnBridge = 0;

    while (bridge.length) {
        console.log(bridge.shift())
        weightOnBridge -= bridge.shift();
        time += 1;

        if (truck_weights.length) {
            if (weightOnBridge + truck_weights[0] <= weight) {
                let truck = truck_weights.shift();
                bridge.push(truck);
                weightOnBridge += truck;
            } else {
                bridge.push(0);
            }
        }
    }
    return time;
}

console.log(solution(2,10,[7,4,5,6]));