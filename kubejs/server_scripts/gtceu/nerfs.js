ServerEvents.recipes(event => {
    // Remove the recipe by its specific ID
    event.remove({ id: 'gtceu:shaped/good_circuit_board' })
})