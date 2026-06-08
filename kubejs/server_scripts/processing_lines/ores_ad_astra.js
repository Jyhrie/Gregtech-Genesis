ServerEvents.recipes(event => {

    event.recipes.gtceu.centrifuge('centrifuge_cynthilite')
        .itemInputs('gtceu:cynthilite_dust')
        .inputFluids('gtceu:nitric_acid 100') // Leaching reagent cost
        .itemOutputs(
            'gtceu:desh_dust',
            'gtceu:small_titanium_dust',
            'gtceu:small_neodymium_dust',
            'gtceu:small_gallium_dust'
        )
        .duration(300).EUt(480);

    event.recipes.gtceu.centrifuge('centrifuge_aresite')
        .itemInputs('gtceu:aresite_dust')
        .inputFluids('gtceu:sulfuric_acid 100') // Digestion acid cost
        .itemOutputs(
            'gtceu:ostrum_dust',
            'gtceu:small_tungsten_dust',
            'gtceu:small_niobium_dust',
            'gtceu:small_tantalum_dust'
        )
        .duration(400).EUt(1920);

    event.recipes.gtceu.centrifuge('centrifuge_cytherite')
        .itemInputs('gtceu:cytherite_dust')
        .inputFluids('gtceu:hydrofluoric_acid 100') // Extreme corrosive gate fluid
        .itemOutputs(
            'gtceu:calorite_dust',
            'gtceu:small_chromium_dust',
            'gtceu:small_yttrium_dust',   // Validated IV component drop
            'gtceu:small_samarium_dust'  // Hardcore semiconductor bypass
        )
        .duration(400).EUt(1920);

    event.recipes.gtceu.centrifuge('centrifuge_ymirite')
        .itemInputs('gtceu:ymirite_dust')
        .inputFluids('gtceu:aqua_regia 100') 
        .itemOutputs(
            'gtceu:etrium_dust',
            'gtceu:small_rhodium_dust',
            'gtceu:small_ruthenium_dust',
            'gtceu:small_palladium_dust'
        )
        .duration(400).EUt(7680);

});