StartupEvents.registry('item', event => {
    
    // Tier 1: Basic
    event.create('algae_basic')
        .displayName('Green Spirulina')
        .tooltip('§7A simple, nutrient-rich blue-green algae.')
        .texture('kubejs:item/algae_basic');

    event.create('algae_rare')
        .displayName('Irish Moss')
        .tooltip('§aA versatile red algae used as a stabilizing agent.')
        .texture('kubejs:item/algae_common');

    event.create('algae_epic')
        .displayName('Bull Kelp')
        .tooltip('§eMassive marine algae capable of rapid growth.')
        .texture('kubejs:item/algae_industrial');

    event.create('algae_unique')
        .displayName('Red Nori')
        .tooltip('§cHighly sought after for specialized bio-processing.')
        .texture('kubejs:item/algae_exotic');

    event.create('algae_legendary')
        .displayName('Bioluminescent Algae')
        .tooltip('§bA rare strain that converts energy into a bright blue glow.')
        .texture('kubejs:item/algae_radiotrophic');

})