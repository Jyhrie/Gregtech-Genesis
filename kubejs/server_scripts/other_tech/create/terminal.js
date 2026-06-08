// ServerEvents.recipes(event => {
//     // Remove the default, easier recipe for the Vault Terminal
//     event.remove({ output: 'create_vault_terminal:vault_terminal' });
//     event.shaped(
//         'create_vault_terminal:vault_terminal', // Output
//         [
//             'PLP', // Top Row
//             'FVF', // Middle Row
//             'PAP'  // Bottom Row
//         ],
//         {
//             P: '#forge:glass', // The 4 corners
//             F: 'create:andesite_funnel',     // The 2 funnels
//             V: 'create:item_vault',          // The vault
//             A: '#forge:plates/steel',      // The robotic arm
//             L: '#gtceu:circuits/ulv'          
//         }
//     ).id('kubejs:harder_vault_terminal'); // Gives the recipe a unique ID
// });