ServerEvents.recipes(event => {

    // CROP_DATA.forEach(crop => {
    //     const seed = `kubejs:${crop.id}_seeds`;
    //     const product = `kubejs:${crop.id}`;

    //     // Define our batch sizes
    //     const sizes = [1, 8, 25];

    //     sizes.forEach(size => {
    //         // Calculate efficiency: Larger batches are slightly faster/cheaper per item
    //         let duration = size * 80;  // 4 seconds per crop base
    //         let energy = 16;           // Base LV energy

    //         // Apply "Bulk Discount" for the 25x recipe
    //         if (size === 25) {
    //             duration = size * 60; // 3 seconds per crop
    //             energy = 30;          // Higher tier requirement for bulk
    //         }

    //         event.recipes.gtceu.crop_farm(`${crop.id}_batch_${size}`)
    //             .itemInputs(`${size}x ${seed}`)
    //             .itemOutputs(`${size}x ${product}`)
    //             // Optional: add a chance for seed return if you want sustainability 
    //             // .chancedOutput(`${seed}`, 1000, 0) 
    //             .duration(duration)
    //             .EUt(energy);
    //     });
    // });
});