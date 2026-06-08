ServerEvents.recipes(event => {
    // Remove the default Create recipe for the Andesite Funnel
    event.remove({ output: 'create:andesite_funnel' });
    event.shaped(
        '2x create:andesite_funnel', // Output (2 funnels)
        [
            'A', // Top: Andesite Alloy
            'R'  // Bottom: Rubber Plate
        ],
        {
            A: 'create:andesite_alloy',
            R: 'gtceu:rubber_plate'
        }
    ).id('kubejs:andesite_funnel_with_rubber');

    event.remove({ output: 'create:brass_funnel' });
    event.shaped(
        '2x create:brass_funnel', // Output (2 funnels)
        [   'E',
            'A', 
            'R' 
        ],
        {
            A: '#forge:ingots/brass',
            R: 'gtceu:rubber_plate',
            E: 'create:electron_tube'
        }
    ).id('kubejs:brass_funnel_rubber');

        event.remove({ output: 'create:belt_connector' });
    event.shaped(
        'create:belt_connector', // Output (2 funnels)
        [  
            'RRR'  // Bottom: Rubber Plate
        ],
        {
            R: 'gtceu:rubber_plate',
        }
    ).id('kubejs:belt_connector_rubber');
});