ServerEvents.recipes(event => {

    event.remove({ id: 'gtceu:electrolyzer/decomposition_electrolyzing_clay' });

    event.recipes.gtceu.electrolyzer('clay_to_alumina')
        .itemInputs('13x gtceu:clay_dust')
        .itemOutputs(
            '1x gtceu:alumina_dust', 
            '2x gtceu:silicon_dioxide_dust', 
            '1x gtceu:lithium_dust', 
            '1x gtceu:sodium_dust'
        )
        .outputFluids('minecraft:water 1000')
        .duration(600)
        .EUt(30); // LV Tier

    event.remove({ id: 'gtceu:electrolyzer/decomposition_electrolyzing_kaolinite' });
    event.recipes.gtceu.electrolyzer('kaolinite_to_alumina')
        .itemInputs('17x gtceu:kaolinite_dust')
        .itemOutputs(
            '1x gtceu:alumina_dust', 
            '2x gtceu:silicon_dioxide_dust'
        )
        .outputFluids('minecraft:water 2000') // Releases 2 buckets of water
        .duration(400)
        .EUt(30); // LV Tier

});