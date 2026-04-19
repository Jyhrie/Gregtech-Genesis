//packer into sandstone first
ServerEvents.recipes(event => {
    event.recipes.gtceu.macerator('modified_ruby_to_alumina')
        .itemInputs('gtceu:ruby_dust')
        .itemOutputs('gtceu:chromium_dust', '5x gtceu:alumina_dust')
        .duration(100).EUt(8)   
})