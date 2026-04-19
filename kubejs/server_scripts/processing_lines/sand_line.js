//packer into sandstone first
ServerEvents.recipes(event => {
    event.recipes.gtceu.macerator('sandstone_to_dust')
        .itemInputs('minecraft:sandstone')
        .itemOutputs('gtceu:sandstone_dust')
        .duration(100).EUt(8)
        
    event.recipes.gtceu.centrifuge('sandstone_dust_separation')
        .itemInputs('gtceu:sandstone_dust')
        .itemOutputs('gtceu:quartz_sand_dust', 'gtceu:salt_dust', 'gtceu:tiny_fluorite_dust')
        .duration(400).EUt(30)

    event.recipes.gtceu.large_chemical_reactor('fluorite_acid_extraction')
            .itemInputs('gtceu:fluorite_dust')
            .inputFluids(Fluid.of('gtceu:sulfuric_acid', 1000))
            .itemOutputs('gtceu:gypsum_dust')
            .outputFluids(Fluid.of('gtceu:hydrofluoric_acid', 2000))
            .duration(200).EUt(120)


})