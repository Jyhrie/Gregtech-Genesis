ServerEvents.recipes(event => {
    CROP_DATA.forEach(crop => {
        let inputItem = `kubejs:${crop.id}`;
        let outputSeeds = `kubejs:${crop.id}_seeds`;

        event.recipes.gtceu.seed_picking(`${crop.id}_extraction`)
            .itemInputs(inputItem)
            .itemOutputs(`2x ${outputSeeds}`)
            .duration(100) 
            .EUt(7); 
    });
    
});