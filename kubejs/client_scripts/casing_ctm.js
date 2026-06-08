ItemEvents.clientProperties(event => {
    // This tells the game to use the GT connected texture renderer for your block
    event.addCustomModel('gtceu:shipping_casing', (block, model) => {
        model.ctm("kubejs:block/casings/solid/shipping_casing_ctm"); 
    });

    event.addCustomModel('gtceu:corrosion_resistant_composite_casing', (block, model) => {
        model.ctm("kubejs:block/casings/solid/casing_corrosion_resistant_composite_ctm"); 
    });

    event.addCustomModel('gtceu:casing_originium_laced', (block, model) => {
        model.ctm("kubejs:block/casings/solid/casing_originium_laced_ctm"); 
    });
});