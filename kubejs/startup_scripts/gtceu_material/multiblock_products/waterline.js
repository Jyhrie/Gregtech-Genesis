// // startup_scripts/water_tiers.js
GTCEuStartupEvents.registry('gtceu:material', event => {
    // HV Tier
    event.create('deionized_water')
        .color(0x4FC3F7)
        .liquid()

    // EV Tier
    event.create('ultrapure_water')
        .color(0xE1F5FE)
        .liquid();

    // IV TIER
    event.create('intrinsically_pure_water')
    .color(0xB8FEFF)
    .liquid();
});