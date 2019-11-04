export function saveToLocal(id, key, value) {

    let lgzy = window.sessionStorage.__lgzy__;
    if (!lgzy) {
        lgzy = {};
        lgzy[id] = {};
    } else {
        lgzy = JSON.parse(lgzy);
        if (!lgzy[id]) {
            lgzy[id] = {};
        }
    }

    lgzy[id][key] = value;
    console.log(lgzy);
    window.sessionStorage.__lgzy__ = JSON.stringify(lgzy);
}

export function loadFromLocal(id, key, def) {
    let lgzy = window.sessionStorage.__lgzy__;
    if (!lgzy) {
        return def;
    }
    lgzy = JSON.parse(lgzy)[id];
    if (!lgzy) {
        return def;
    }
    return lgzy[key];
}