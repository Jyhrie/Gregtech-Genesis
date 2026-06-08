ServerEvents.recipes(event => {
    // Remove the recipe by its specific ID
    event.remove({ id: 'gtceu:shaped/good_circuit_board' })

    const evProcessorRecipes = [
        'gtceu:circuit_assembler/nano_processor_assembly_ev',
        'gtceu:circuit_assembler/nano_processor_assembly_ev_asmd',
        'gtceu:circuit_assembler/nano_processor_assembly_ev_soldering_alloy',
        'gtceu:circuit_assembler/nano_processor_assembly_ev_asmd_soldering_alloy'
    ];

    // Swap standard Electrum fine wire for Fluxed Electrum fine wire across all targeted IDs
    evProcessorRecipes.forEach(recipeId => {
        event.replaceInput({ id: recipeId }, '#forge:fine_wires/electrum', '16x gtceu:fine_fluxed_electrum_wire');
    });

    const ivProcessorRecipes = [
        'gtceu:circuit_assembler/nano_computer_iv_asmd',
        'gtceu:circuit_assembler/nano_computer_iv_asmd_soldering_alloy',
        'gtceu:circuit_assembler/nano_computer_iv',
        'gtceu:circuit_assembler/nano_computer_iv_soldering_alloy'
    ]; 

    // Swap standard Electrum fine wire for Fluxed Electrum fine wire across all targeted IDs
    ivProcessorRecipes.forEach(recipeId => {
        event.replaceInput({ id: recipeId }, '#forge:fine_wires/electrum', '16x gtceu:fine_fluxed_electrum_wire');
    });

})