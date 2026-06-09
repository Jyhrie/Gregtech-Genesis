ServerEvents.recipes(event => {

    // Massive 14A EV Lightning Strike Recipe
    event.recipes.gtceu.lightning_catcher('ev_4a_lightning_strike')
        .chancedInput('gtceu:small_ostrum_dust', 50, 1)
        .duration(2)                       
        .EUt(-32768)            
        .thunder(0.3)             

});