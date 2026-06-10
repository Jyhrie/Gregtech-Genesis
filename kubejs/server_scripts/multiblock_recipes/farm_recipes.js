ServerEvents.recipes(event => {
    
    // 1. Updated recipe array to match your new signature: 
    // [seed, return_seed_qty, fruit, fruit_qty, bonus, bonus_qty, bonus_chance]
    const farmRecipes = [
        ['minecraft:wheat_seeds', 1, 'minecraft:wheat', 1, null, 0, 0],
        ['minecraft:pumpkin_seeds', 1, 'minecraft:pumpkin', 1, null, 0, 0],
        ['minecraft:melon_seeds', 1, 'minecraft:melon_slice', 4, null, 0, 0],
        ['minecraft:beetroot_seeds', 1, 'minecraft:beetroot', 2, null, 0, 0],
        ['minecraft:carrot', 1, 'minecraft:carrot', 2, null, 0, 0],
        ['minecraft:potato', 1, 'minecraft:potato', 2, 'minecraft:poisonous_potato', 6, 2000],

        ['farmersdelight:cabbage_seeds', 1, 'farmersdelight:cabbage', 3, null, 0, 0],
        ['farmersdelight:tomato_seeds', 1, 'farmersdelight:tomato', 3, 'farmersdelight:rotten_tomato', 6, 2000],
        ['farmersdelight:onion', 1, 'farmersdelight:onion', 3, null, 0, 0],
        ['farmersdelight:rice', 1, 'farmersdelight:rice_panicle', 3, null, 0, 0],

        ['culturaldelights:cucumber_seeds', 1, 'culturaldelights:cucumber', 3, null, 0, 0],
        ['culturaldelights:eggplant_seeds', 1, 'culturaldelights:eggplant', 3, null, 0, 0],
        ['culturaldelights:corn_kernels', 1, 'culturaldelights:corn_cob', 1, null, 0, 0],

        ['delightful:cantaloupe_seeds', 1, 'delightful:cantaloupe', 1, null, 0, 0],

        ['upgrade_aquatic:pickerelweed', 1, 'upgrade_aquatic:pickerelweed', 2, null, 0, 0],

        ['hearthandharvest:cotton_seeds', 1, 'hearthandharvest:cotton', 3, null, 0, 0],
        ['hearthandharvest:blueberries', 1, 'hearthandharvest:blueberries', 3, null, 0, 0],
        ['hearthandharvest:raspberry', 1, 'hearthandharvest:raspberry', 3, null, 0, 0],
        ['hearthandharvest:red_grapes', 1, 'hearthandharvest:red_grapes', 3, null, 0, 0],
        ['hearthandharvest:green_grapes', 1, 'hearthandharvest:green_grapes', 3, null, 0, 0],
        ['hearthandharvest:peanut', 1, 'hearthandharvest:peanut', 3, null, 0, 0],

        ['youkaisfeasts:tea_seeds', 1, 'youkaisfeasts:tea_leaves', 3, null, 0, 0],
        ['youkaisfeasts:cucumber_seeds', 1, 'youkaisfeasts:cucumber', 3, null, 0, 0],
        ['youkaisfeasts:red_grape_seeds', 1, 'youkaisfeasts:red_grape', 3, null, 0, 0],
        ['youkaisfeasts:black_grape_seeds', 1, 'youkaisfeasts:black_grape', 3, null, 0, 0],
        ['youkaisfeasts:white_grape_seeds', 1, 'youkaisfeasts:white_grape', 3, null, 0, 0],
        ['youkaisfeasts:soybean', 1, 'youkaisfeasts:pods', 3, null, 0, 0],
        ['youkaisfeasts:redbean', 1, 'youkaisfeasts:redbean', 3, null, 0, 0],
        ['youkaisfeasts:udumbara_leaves', 1, 'youkaisfeasts:udumbara_flower', 1, null, 0, 0],

        ['aquamirae:wisteria_niveis', 0.25, 'aquamirae_delight:wisteria_leaves', 1, 'aquamirae_delight:ground_wisteria', 8, 5000],
    ];

    // 2. Your updated custom method with GTCEu formatting
    function registerFarmRecipe(seed, returnSeedQty, fruit, fruitQty, bonus, bonusQty, bonusChance) {
        let recipeBuilder = event.recipes.gtceu.conventional_farming(seed) 
            .itemInputs(`25x ${seed}`)
            .itemOutputs(`${returnSeedQty * 8}x ${seed}`)
            .itemOutputs(`${fruitQty * 8}x ${fruit}`) 
            .duration(1200) 
            .EUt(4);       

        // Dynamic check for optional bonus drops
        if (bonus && bonusQty && bonusChance) {
            // GTCEu syntax: item string, chance (0-10000), slot boost modifier (usually 0 or 1000)
            recipeBuilder.chancedOutput(`${bonusQty}x ${bonus}`, bonusChance, 0);
        }
    }

    // 3. Updated ForEach loop to destructure all 7 variables
    farmRecipes.forEach(recipe => {
        const [seed, return_seed_qty, fruit, fruit_qty, bonus, bonus_qty, bonus_chance] = recipe;
        
        registerFarmRecipe(seed, return_seed_qty, fruit, fruit_qty, bonus, bonus_qty, bonus_chance);
    });

});