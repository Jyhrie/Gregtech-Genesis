StartupEvents.registry('block', event => {
    event.create('shipping_casing')
        .mapColor('metal')
        .soundType('metal')
        .hardness(5.0)
        .resistance(10.0)
        .requiresTool(true)
        .tagBlock('mineable/pickaxe')

    event.create('sterile_casing')
        .mapColor('metal')
        .soundType('metal')
        .hardness(5.0)
        .resistance(10.0)
        .requiresTool(true)
        .tagBlock('mineable/pickaxe') 

    event.create('radiation_shielding_casing') //nuclear reactor
        .mapColor('metal')
        .soundType('metal')
        .hardness(5.0)
        .resistance(10.0)
        .requiresTool(true)
        .tagBlock('mineable/pickaxe')
    
    event.create('waterproof_lined_concrete_casing') //algae farm
        .mapColor('metal')
        .soundType('metal')
        .hardness(5.0)
        .resistance(10.0)
        .requiresTool(true)
        .tagBlock('mineable/pickaxe')
});