// startup_scripts/nuclear_cells.js
StartupEvents.registry('item', event => {
    // Tier 1: Regular Uranium
    event.create('uranium_fuel_cell').displayName('Uranium Fuel Cell').maxStackSize(1);
    event.create('depleted_uranium_fuel_cell').displayName('Depleted Uranium Fuel Cell').maxStackSize(1);

    // Tier 2: MOX (Mixed Oxide)
    event.create('mox_fuel_cell').displayName('MOX Fuel Cell').maxStackSize(1);
    event.create('depleted_mox_fuel_cell').displayName('Depleted MOX Fuel Cell').maxStackSize(1);

    // Tier 3: Naquadah (The Core)
    event.create('naquadah_fuel_cell').displayName('Enriched Naquadah Fuel Cell').maxStackSize(1);
    event.create('depleted_naquadah_fuel_cell').displayName('Depleted Naquadah Fuel Cell').maxStackSize(1);

    event.create('coolant_cell')
        .displayName('Coolant Cell')
        .maxStackSize(1);
        
    event.create('superheated_coolant_cell')
        .displayName('Superheated Coolant Cell')
        .maxStackSize(1);

    event.create('advanced_coolant_cell')
        .displayName('Coolant Cell')
        .maxStackSize(1);
        
    event.create('superheated_advanced_coolant_cell')
        .displayName('Superheated Coolant Cell')
        .maxStackSize(1);

    event.create('elite_coolant_cell')
        .displayName('Coolant Cell')
        .maxStackSize(1);
        
    event.create('superheated_elite_coolant_cell')
        .displayName('Superheated Coolant Cell')
        .maxStackSize(1);
});

GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('dense_superheated_steam')
        .color(0xE0E0E0)
        .gas();
    event.create('supercritical_steam')
        .color(0xE0E0E0)
        .gas();
    event.create('hypercritical_steam')
        .color(0xE0E0E0)
        .gas();
});
