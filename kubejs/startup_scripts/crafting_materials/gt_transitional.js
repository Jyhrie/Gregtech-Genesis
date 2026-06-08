StartupEvents.registry('item', event => {
    event.create('titanite_gem')
         .displayName('Titanite Crystal')

    event.create('graphene_coated_alumina')
        .displayName('Graphene-Coated Alumina Dust')
        .texture('layer0', 'minecraft:item/gunpowder')
        .color(0, 0x94C1E0); // Sleek light-blue hex tint applied to layer 0
});