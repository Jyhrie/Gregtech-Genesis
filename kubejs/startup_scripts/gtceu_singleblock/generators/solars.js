// // Load ResourceLocation and BlockStateProperties
// const ResourceLocation = Java.loadClass('net.minecraft.resources.ResourceLocation');
// const BlockStateProperties = Java.loadClass('net.minecraft.world.level.block.state.properties.BlockStateProperties');

// GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
//     event.create('solar')
//         .category('simple')
//         .setEUIO('out')
//         .setMaxIOSize(0,0,0,0)
//         .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
//         .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
//         .setSound(GTSoundEntries.BATH);
// });

// GTCEuStartupEvents.registry("gtceu:machine", event => {
//   event
//     .create("solar", "simple")
//     .tiers(GTValues.ULV)
//     .definition((tier, builder) => {
//       builder
//         .langValue("Solar Panel")
//         .recipeType("solar")
//         .model((ctx, prov, builder) => {
//             let baseCasing = new ResourceLocation("malum:block/arcane_rock/twisted/polished_twisted_rock");
//             let topTexture = new ResourceLocation("kubejs:block/panel_top");

//             // We pass BlockStateProperties.WATERLOGGED to satisfy the varargs requirement safely.
//             // Rhino understands this single object and naturally wraps it into the required array.
//             builder.forAllStatesModelsExcept(state => {
//                 return prov.models().nested()
//                     .parent(prov.models().getExistingFile(new ResourceLocation("minecraft:block/cube")))
//                     .texture("down", baseCasing)
//                     .texture("up", topTexture) // <- Sets your custom panel strictly to the top face
//                     .texture("north", baseCasing)
//                     .texture("south", baseCasing)
//                     .texture("west", baseCasing)
//                     .texture("east", baseCasing);
//             }, BlockStateProperties.WATERLOGGED); // <--- THE BYPASS

//             // Fallback/Item texture override 
//             builder.addTextureOverride("all", baseCasing);
//         })
//         .rotationState(RotationState.NON_Y_AXIS)
//     })
// })