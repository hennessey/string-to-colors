const HSL_pastelHSL = (hsl) => {
    const {hue, sat, light } = hsl;
    const pastelLightRange = [0.75, 1];

    return {
        hue,
        sat: maybeGetPastelSat(sat),
        light: maybeGetPastelLight(light)
    };
};

const maybeGetPastelSat = (sat) => {
    const pastelSatRange = [0, 0.66];

    if (sat <= pastelSatRange[1] || sat >= pastelSatRange[0]) {
        return sat * (pastelSatRange[1] - pastelSatRange[0]) + pastelSatRange[0]
    }

    return sat;
}

const maybeGetPastelLight = (light) => {
    const pastelLightRange = [0.66, 1];

    if (light <= pastelLightRange[1] || light >= pastelLightRange[0]) {
        return light * (pastelLightRange[1] - pastelLightRange[0]) + pastelLightRange[0]
    }

    return light;
}

module.exports = HSL_pastelHSL;
