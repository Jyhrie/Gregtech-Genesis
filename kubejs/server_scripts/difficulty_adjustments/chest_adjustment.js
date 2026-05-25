ServerEvents.recipes(event => {
    event.remove({ output: 'minecraft:chest' })
    event.shaped(
        'minecraft:chest', 
        [
            'SPS',
            'PBP', 
            'XPX' 
        ],
        {
            S: 'gtceu:iron_screw',     
            P: '#minecraft:planks',      
            B: 'terramity:cardboard_box',  
            X: '#minecraft:logs'    
        }
    ).id('kubejs:nerfed_chest') 

    event.shaped(
        '2x minecraft:clay', 
        [
            'CCC',
            'CWC',
            'CCC'
        ],
        {
            C: 'minecraft:clay_ball',   
            W: 'minecraft:water_bucket' 
        }
    ).id('kubejs:wet_clay_blocks')
})