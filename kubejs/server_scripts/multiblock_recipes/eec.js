
ServerEvents.recipes(event => {
    event.recipes.gtceu.eec('scylla_eec')
        // Non-consumed catalyst
        .notConsumable('kubejs:soulgem_scylla')
        
        .itemOutputs('3x cataclysm:essence_of_the_storm')
        .itemOutputs('16x gtceu:stellite_100_plate')
        .itemOutputs('4x gtceu:stellite_100_block')
        
        // Requirements
        .duration(7200) 
        .EUt(1920);    // EV Tier

    event.recipes.gtceu.eec('leviathan_eec')
        // Non-consumed catalyst
        .notConsumable('kubejs:soulgem_leviathan')
        .itemOutputs('3x cataclysm:amethyst_crab_meat')
        .itemOutputs('4x terramity:cracked_microcosm')
        .itemOutputs('16x gtceu:tantalloy_61_plate')
        .itemOutputs('4x gtceu:tantalloy_61_block')
        
        // Requirements
        .duration(7200) 
        .EUt(1920);    // EV Tier

    event.recipes.gtceu.eec('netherite_monstrosity_eec')
        // Non-consumed catalyst
        .notConsumable('kubejs:soulgem_netherite_monstrosity')
        
        .itemOutputs('12x cataclysm:lava_power_cell')
        .itemOutputs('16x gtceu:nitinol_plate')
        .itemOutputs('4x gtceu:nitinol_block')

        // Requirements
        .duration(7200) 
        .EUt(1920);    // EV Tier
    
    event.recipes.gtceu.eec('harbinger_eec')
        // Non-consumed catalyst
        .notConsumable('kubejs:soulgem_harbinger')
        
        .itemOutputs('3x cataclysm:witherite_ingot')
        .itemOutputs('16x gtceu:staballoy_plate')
        .itemOutputs('4x gtceu:staballoy_block')
        
        // Requirements
        .duration(7200) 
        .EUt(1920);    // EV Tier
        
    event.recipes.gtceu.eec('ignis_eec')
        // Non-consumed catalyst
        .notConsumable('kubejs:soulgem_ignis')
        
        .itemOutputs('16x cataclysm:ignitium_ingot')
        .itemOutputs('4x cataclysm:ignitium_block')
        
        // Requirements
        .duration(7200) 
        .EUt(1920);    // EV Tier
    
    event.recipes.gtceu.eec('ancient_remnant_eec')
        // Non-consumed catalyst
        .notConsumable('kubejs:soulgem_ancient_remnant')
        
        .itemOutputs('16x cataclysm:ancient_metal_ingot')
        .itemOutputs('4x cataclysm:ancient_metal_block')
        
        // Requirements
        .duration(7200) 
        .EUt(1920);    // EV Tier

    event.recipes.gtceu.eec('maledictus_eec')
        // Non-consumed catalyst
        .notConsumable('kubejs:soulgem_maledictus')
        
        .itemOutputs('16x cataclysm:cursium_ingot')
        .itemOutputs('4x cataclysm:cursium_block')
        
        // Requirements
        .duration(7200) 
        .EUt(1920);    // EV Tier


    event.recipes.gtceu.eec('ender_guardian_eec')
        // Non-consumed catalyst
        .notConsumable('kubejs:soulgem_ender_guardian')
        
        .itemOutputs('32x cataclysm:void_stone')
        .itemOutputs('16x cataclysm:void_crystal')
        .itemOutputs('8x cataclysm:void_lantern_block')

        // Requirements
        .duration(7200) 
        .EUt(1920);    // EV Tier

    event.recipes.gtceu.eec('captain_cornelia_eec')
        // Non-consumed catalyst
        .notConsumable('kubejs:soulgem_captain_cornelia')
        
        .itemOutputs('16x aquamirae:treasure_pouch')
        .itemOutputs('4x aquamirae:ship_graveyard_echo')
        .itemOutputs('16x gtceu:niobium_carbide_plate')
        .itemOutputs('4x gtceu:niobium_carbide_block')

        // Requirements
        .duration(7200) 
        .EUt(1920);    // EV Tier

    
});