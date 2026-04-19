// // priority: 0

// // Visit the wiki for more info - https://kubejs.com/
// const $FluidProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.FluidProperty');
// const $FluidBuilder = Java.loadClass('com.gregtechceu.gtceu.api.fluids.FluidBuilder');
// const $FluidStorageKeys = Java.loadClass('com.gregtechceu.gtceu.api.fluids.store.FluidStorageKeys');
// Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.Material'); 


// GTCEuStartupEvents.registry('gtceu:material', event => {

//     // Platinum Group
//     event.create('platinum_residue')
//         .dust()
//         .color(0x170B0B)
//         .formula('Pt?') // Complex residue, usually represented with a ? or general formula

//     event.create('platinum_salt')
//         .dust()
//         .color(0x616142)
//         .formula('(PtCl6)Na2')

//     // Potassium Disulfate
//     event.create('potassium_disulfate')
//         .fluid()
//         .dust()
//         .color(0xF2F2A2)
//         .formula('K2S2O7')
    
//     event.create('sodium_nitrate')
//         .dust()
//         .color(0x1F3080)
//         .formula('NaNO3')

//     // Palladium Line
//     event.create('palladium_enriched_ammonia')
//         .fluid()
//         .color(0x608E94)
//         .formula('Pd(NH3)2Cl2') // Dichlorodiamminepalladium(II)

//     event.create('palladium_metallic_powder')
//         .dust()
//         .color(0x3E4039)
//         .formula('Pd?') // Impure Palladium powder

//     event.create('reprecipitated_palladium')
//         .dust()
//         .color(0xC1C1C1)
//         .formula('Pd') // Pure refined Palladium

//     event.create('palladium_salt_dust')
//         .dust()
//         .color(0xB0BA83)
//         .formula('PdCl2') // Palladium(II) Chloride
    



// })


// GTCEuStartupEvents.materialModification(event => {
//     // Adds the fluid property to the existing material
//     GTMaterials.get('ammonium_chloride').setProperty(PropertyKey.FLUID, new $FluidProperty($FluidStorageKeys.LIQUID, new $FluidBuilder()));
//     GTMaterials.get('ruthenium_tetroxide').setProperty(PropertyKey.FLUID, new $FluidProperty($FluidStorageKeys.LIQUID, new $FluidBuilder()));
// });