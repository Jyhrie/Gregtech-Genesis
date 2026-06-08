ServerEvents.recipes(event => {
    // Re-adds the default Create Precision Mechanism Sequenced Assembly
    event.recipes.create.sequenced_assembly(
        ['create:precision_mechanism'],         // Output
        '#forge:plates/gold',                  // Input (Starts the sequence)
        [
            // Step 1: Deploy a small cogwheel
            event.recipes.create.deploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', 'create:cogwheel']),
            
            // Step 2: Deploy a large cogwheel
            event.recipes.create.deploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', 'create:large_cogwheel']),
            
            // Step 3: Deploy an iron nugget
            event.recipes.create.deploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', '#forge:nuggets/iron'])
        ]
    ).transitionalItem('create:incomplete_precision_mechanism')
     .loops(5) // Must pass through the sequence 5 times
     .id('kubejs:precision_mechanism_fix');
});