ServerEvents.recipes(event => {
    // 1. Wipe EVERY recipe from Tom's Simple Storage
    event.remove({ mod: 'toms_storage' });

    // 3. Re-add the Storage Terminal (Using GTCEu & Create items)
    event.shaped(
        'toms_storage:ts.storage_terminal', // Output
        [
            'PLP', // Top Row
            'FVF', // Middle Row
            'PAP'  // Bottom Row
        ],
        {
            P: '#forge:glass', // The 4 corners
            F: 'create:andesite_funnel',     // The 2 funnels
            V: 'create:item_vault',          // The vault
            A: '#forge:plates/steel',      // The robotic arm
            L: '#gtceu:circuits/ulv'          
        }
    ).id('kubejs:toms_storage_terminal');

    event.remove({ output: 'toms_storage:ts.crafting_terminal' });
    event.recipes.create.sequenced_assembly(
        ['toms_storage:ts.crafting_terminal'],
        'toms_storage:ts.storage_terminal', 
        [
            event.recipes.create.deploying('toms_storage:ts.storage_terminal', ['toms_storage:ts.storage_terminal', 'minecraft:crafting_table']),
            
            event.recipes.create.deploying('toms_storage:ts.storage_terminal', ['toms_storage:ts.storage_terminal', 'create:precision_mechanism']),
            event.recipes.create.deploying('toms_storage:ts.storage_terminal', ['toms_storage:ts.storage_terminal', 'create:precision_mechanism']),
            
            event.recipes.create.deploying('toms_storage:ts.storage_terminal', ['toms_storage:ts.storage_terminal', 'minecraft:diamond']),
            event.recipes.create.deploying('toms_storage:ts.storage_terminal', ['toms_storage:ts.storage_terminal', 'minecraft:diamond']),
            
            event.recipes.create.pressing('toms_storage:ts.storage_terminal', 'toms_storage:ts.storage_terminal')
        ]
    ).transitionalItem('toms_storage:ts.storage_terminal')
     .loops(1)
     .id('kubejs:toms_sequenced_crafting_terminal');
});