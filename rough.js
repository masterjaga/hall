var g = [
    { id: 36, name: 'AAA', goal: 'yes' },
    { id: 40, name: 'BBB', goal: 'yes' },
    { id: 57, name: 'CCC', goal: 'yes' },
    { id: 4, name: 'DDD', goal: 'yes' },
    { id: 39, name: 'EEE', goal: 'yes' },
    { id: 37, name: 'FFF', goal: 'yes' },
    { id: 59, name: 'GGG', goal: 'yes' },
    { id: 50, name: 'III', goal: 'yes' },
    { id: 43, name: 'HHH', goal: 'yes' },
    { id: 35, name: 'JJJ', goal: 'yes' }
],
c = [
    { id: 36, name: 'AAA', circle: 'yes' },
    { id: 40, name: 'BBB', circle: 'yes' },
    { id: 57, name: 'CCC', circle: 'yes' },
    { id: 42, name: 'ZZZ', circle: 'yes' },
    { id: 4, name: 'DDD', circle: 'yes' },
    { id: 39, name: 'EEE', circle: 'yes' },
    { id: 37, name: 'FFF', circle: 'yes' },
    { id: 59, name: 'GGG', circle: 'yes' },
    { id: 43, name: 'HHH', circle: 'yes' },
    { id: 35, name: 'JJJ', circle: 'yes' },
    { id: 100, name: 'JJJ', circle: 'yes' }
],
arrayList = [], obj_c_processed = [];

for (var i in g) {
var obj = {id: g[i].id, name: g[i].name, goal: g[i].goal};

for (var j in c) {
    if (g[i].id == c[j].id) {
        obj.circle = c[j].circle;
        obj_c_processed[c[j].id] = true;
    }
}

obj.circle = obj.circle || 'no';
arrayList.push(obj);
}

for (var j in c){
if (typeof obj_c_processed[c[j].id] == 'undefined') {
    arrayList.push({id: c[j].id, name: c[j].name, goal: 'no', circle: c[j].circle});
}
}

console.log(arrayList);