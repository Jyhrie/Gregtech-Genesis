ServerEvents.recipes(event => {

    // Massive 14A EV Lightning Strike Recipe
    event.recipes.gtceu.lunar_array('lunar_array')
        .chancedInput('gtceu:small_desh_dust', 5, 1)
        .duration(2)                       
        .EUt(-2048)                   
        .daytime(true)

});