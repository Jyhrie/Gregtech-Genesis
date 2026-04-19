ItemEvents.clientProperties(event => {
    // This tells the game to use the GT connected texture renderer for your block
    event.addCustomModel('gtceu:shipping_casing', (block, model) => {
        model.ctm("kubejs:block/casings/solid/shipping_casing_ctm"); 
    });
});