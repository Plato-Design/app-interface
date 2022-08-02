"use strict";
exports.__esModule = true;
exports.serialize = void 0;
function serialize(v) {
    if (typeof v === "string" || typeof v === "number" || typeof v === "boolean") {
        return v;
    }
    if (v === null || v === undefined) {
        return v;
    }
    if (Array.isArray(v)) {
        return v.map(serialize);
    }
    if (v instanceof Date) {
        return v.toISOString();
    }
    if (typeof v === "object") {
        var out = {};
        for (var key in v) {
            out[key] = serialize(v[key]);
        }
        return out;
    }
    return v + "";
}
exports.serialize = serialize;
