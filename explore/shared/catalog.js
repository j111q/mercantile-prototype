// Shared catalog pulled from the real mercantile.wordpress.org product list.
// Prices are reasonable estimates; images are placeholders.
window.MERCANTILE_CATALOG = [
  // Apparel
  { id: 'i-love-wp-tee',        name: 'I ♥ WP T-Shirt',                          cat: 'apparel',    price: 25, tags: ['unisex', 'classic'],    blurb: 'The declaration. Unisex fit, soft cotton, zero subtlety.' },
  { id: 'i-love-wp-womens-tee', name: "I ♥ WP Women's T-Shirt",                 cat: 'apparel',    price: 25, tags: ['women', 'classic'],     blurb: 'Same love, tailored fit.' },
  { id: 'unisex-pride-tee',     name: 'Unisex WordPress Pride T-Shirt',         cat: 'apparel',    price: 28, tags: ['pride', 'unisex'],      blurb: 'Open-source love, fully public.' },
  { id: 'rainbow-wapuu-tee',    name: 'Unisex WordPress Rainbow Wapuu T-Shirt', cat: 'apparel',    price: 28, tags: ['pride', 'wapuu'],       blurb: 'Our mascot, every color.' },
  { id: 'code-is-poetry-tee',   name: "Women's Code Is Poetry T-Shirt",         cat: 'apparel',    price: 28, tags: ['women', 'poetry'],      blurb: 'Ship it with stanzas.' },
  { id: 'black-crewneck',       name: 'WordPress Black Crewneck Sweatshirt',    cat: 'apparel',    price: 55, tags: ['unisex', 'staple'],     blurb: 'For 11pm deploys.' },
  { id: 'tackle-twill',         name: 'Signature Tackle Twill Sweatshirt',      cat: 'apparel',    price: 72, tags: ['heritage', 'unisex'],   blurb: 'Stitched letters, varsity energy.' },
  { id: 'tie-dye-hoodie',       name: 'WordPress Tie-Dye Hoodie',               cat: 'apparel',    price: 65, tags: ['tie-dye', 'summer'],    blurb: 'Chaos, but make it comfortable.' },
  { id: 'tie-dye-joggers',      name: 'WordPress Tie-Dye Joggers',              cat: 'apparel',    price: 55, tags: ['tie-dye', 'summer'],    blurb: 'Matching set agenda.' },
  { id: 'tie-dye-shorts',       name: 'WordPress Tie-Dye Shorts',               cat: 'apparel',    price: 40, tags: ['tie-dye', 'summer'],    blurb: 'For the summer of open source.' },
  { id: 'joggers',              name: 'WordPress Joggers',                       cat: 'apparel',    price: 55, tags: ['unisex', 'staple'],     blurb: 'Cozy enough to push to main.' },
  { id: 'muscle-tank',          name: 'WordPress Muscle Tank',                   cat: 'apparel',    price: 30, tags: ['unisex', 'summer'],     blurb: 'Lift the web.' },
  { id: 'north-face-jacket',    name: 'The North Face Edge Stretch Soft Shell', cat: 'apparel',    price: 145, tags: ['heritage', 'unisex'],   blurb: 'Ship outside.' },

  // Drinkware
  { id: 'blue-water-bottle',    name: 'Blue WordPress 32oz Water Bottle',        cat: 'drinkware',  price: 32, tags: ['bottle'],              blurb: 'Hydrate before you commit.' },
  { id: 'cozy-mug',             name: 'Cozy Collection Ceramic Mug',             cat: 'drinkware',  price: 18, tags: ['cozy'],                blurb: 'Holds coffee, code reviews, quiet mornings.' },
  { id: 'fall-tumbler',         name: 'WordPress 12oz Fall Tumbler',             cat: 'drinkware',  price: 24, tags: ['seasonal'],            blurb: 'Seasonal pumpkin-patch energy.' },
  { id: 'fall-cold-cup',        name: 'WordPress 16oz Fall Cold Cup',            cat: 'drinkware',  price: 22, tags: ['seasonal'],            blurb: 'Iced drinks, autumn sweaters.' },

  // Accessories
  { id: 'cozy-pins',            name: 'Cozy Collection Pin Set',                 cat: 'accessories', price: 14, tags: ['cozy', 'pins'],        blurb: 'Four pins. Infinite flex.' },
  { id: 'cozy-stickers',        name: 'Cozy Collection Sticker Pack',            cat: 'accessories', price: 8,  tags: ['cozy', 'stickers'],    blurb: 'Decorate laptop, notebook, mood.' },
  { id: 'dont-worry-pin-set',   name: "Don't Worry, Press Happy Patch + Pin",    cat: 'accessories', price: 18, tags: ['pins', 'patches'],     blurb: 'A gentle operating principle.' },
  { id: 'wapuu-patch',          name: 'Wapuu Iron-On Patch',                     cat: 'accessories', price: 9,  tags: ['wapuu', 'patches'],    blurb: 'Put Wapuu on anything.' },
  { id: 'wapuu-disco',          name: 'Wapuu Pride Disco Ball Sticker',          cat: 'accessories', price: 5,  tags: ['wapuu', 'pride'],      blurb: 'Discography of one.' },
  { id: 'wapuu-pride-sticker',  name: 'Wapuu Pride Sticker',                     cat: 'accessories', price: 4,  tags: ['wapuu', 'pride'],      blurb: 'Small sticker, big heart.' },
  { id: 'wapuu-popsocket',      name: 'Wapuu Rainbow Swirl MagSafe PopSocket',   cat: 'accessories', price: 16, tags: ['wapuu', 'tech'],       blurb: 'Grip it. Spin it. Ship it.' },
  { id: 'tech-gloves',          name: 'WordPress Tech Gloves',                   cat: 'accessories', price: 22, tags: ['tech', 'winter'],      blurb: 'For typing in the cold.' },
  { id: 'fair-isle-tote',       name: 'WordPress Fair Isle Print Tote',          cat: 'accessories', price: 24, tags: ['bags'],                blurb: 'Knit-pattern tote for groceries and gospel.' },
];

window.MERCANTILE_CATS = [
  { id: 'apparel',     label: 'Apparel' },
  { id: 'drinkware',   label: 'Drinkware' },
  { id: 'accessories', label: 'Accessories' },
];


// Real product image paths (relative to /explore/{dir}/).
window.MERCANTILE_IMAGES = {
  "i-love-wp-tee": "../../wp-content/uploads/2025/04/ILWP_Front.webp@w=600",
  "i-love-wp-womens-tee": "../../wp-content/uploads/2025/04/ILWP_DT188_Front.png@w=600",
  "unisex-pride-tee": "../../wp-content/uploads/2025/06/Untitled-design-7.png@w=600",
  "rainbow-wapuu-tee": "../../wp-content/uploads/2025/06/Untitled-design-6.png@w=600",
  "code-is-poetry-tee": "../../wp-content/uploads/2025/04/CIP_DT188_Front.png@w=600",
  "black-crewneck": "../../wp-content/uploads/2025/04/Sweatshirt_Front_Black-1.webp@w=600",
  "tackle-twill": "../../wp-content/uploads/2026/02/Howdy.png@w=600",
  "tie-dye-hoodie": "../../wp-content/uploads/2025/06/Untitled-design-1.png@w=600",
  "tie-dye-joggers": "../../wp-content/uploads/2025/06/Untitled-design-2.png@w=600",
  "tie-dye-shorts": "../../wp-content/uploads/2025/06/Untitled-design-3.png@w=600",
  "joggers": "../../wp-content/uploads/2025/04/Sweatpants_Front.webp@w=600",
  "muscle-tank": "../../wp-content/uploads/2025/06/Untitled-design-4.png@w=600",
  "north-face-jacket": "../../wp-content/uploads/2025/06/Untitled-design-5.png@w=600",
  "blue-water-bottle": "../../wp-content/uploads/2025/10/Howdy.png@w=600",
  "cozy-mug": "../../wp-content/uploads/2025/12/Howdy-17.png@w=600",
  "fall-tumbler": "../../wp-content/uploads/2025/11/Howdy-8.png@w=600",
  "fall-cold-cup": "../../wp-content/uploads/2025/11/Howdy-7.png@w=600",
  "cozy-pins": "../../wp-content/uploads/2025/12/Howdy-13.png@w=600",
  "cozy-stickers": "../../wp-content/uploads/2025/12/Howdy-14.png@w=600",
  "dont-worry-pin-set": "../../wp-content/uploads/2025/11/Howdy-4.png@w=600",
  "wapuu-patch": "../../wp-content/uploads/2026/02/Howdy-3.png@w=600",
  "wapuu-disco": "../../wp-content/uploads/2025/06/WP_PrideWapuuSticker_3.jpg@w=600",
  "wapuu-pride-sticker": "../../wp-content/uploads/2025/06/WP_PrideWapuuSticker_1.jpg@w=600",
  "wapuu-popsocket": "../../wp-content/uploads/2025/06/PopSockets_A8C-084.png@w=600",
  "tech-gloves": "../../wp-content/uploads/2025/11/Howdy.png@w=600",
  "fair-isle-tote": "../../wp-content/uploads/2025/12/Howdy-16.png@w=600"
};
