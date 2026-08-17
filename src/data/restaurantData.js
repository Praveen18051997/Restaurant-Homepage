export const RESTAURANT_INFO = {
  name: "TasteNest",
  tagline: "The Best Food Collection 2024",
  subheading: "Freshly prepared gourmet pizzas, handcrafted burgers, crispy golden fries, and mouth-watering fried chicken delivered hot to your door.",
  phone: "+1 (800) 234-5678",
  email: "order@tastenest-restaurant.com",
  address: "742 Gourmet Boulevard, Food District, NY 10012",
  discountBadge: "20% OFF",
  hours: [
    { days: "Monday - Friday", time: "8:00 AM - 10:00 PM" },
    { days: "Saturday - Sunday", time: "9:00 AM - 11:00 PM" },
  ]
};

export const PROMO_BANNERS = [
  {
    id: "promo-1",
    subtitle: "Up To 30% OFF",
    title: "Delicious & Hot Pizza",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=600",
    bgColor: "from-stone-900 via-stone-900 to-amber-950/40",
    buttonText: "Order Now"
  },
  {
    id: "promo-2",
    subtitle: "Crispy & Crunchy",
    title: "Special French Fries",
    image: "https://images.unsplash.com/photo-1576107232684-1279f3908594?auto=format&fit=crop&q=80&w=600",
    bgColor: "from-amber-600 to-orange-700",
    buttonText: "Order Now"
  },
  {
    id: "promo-3",
    subtitle: "Combo Super Deal",
    title: "Crispy Chicken & Burger",
    image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&q=80&w=600",
    bgColor: "from-orange-800 to-amber-900",
    buttonText: "Order Now"
  }
];

export const ABOUT_STATS = [
  { value: "250+", label: "Master Chefs" },
  { value: "80+", label: "Restaurant Outlets" },
  { value: "25+", label: "Food Variants" }
];

export const CHEF_INFO = {
  name: "Chef Marco Rossi",
  title: "Executive Head Chef",
  bio: "Crafting legendary recipes with 100% fresh, locally sourced organic ingredients and passionate perfection.",
  avatar: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&q=80&w=400"
};

export const CATEGORY_TABS = [
  { id: "all", label: "All Items", icon: "Utensils" },
  { id: "pizza", label: "Pizzas", icon: "Pizza" },
  { id: "fries", label: "Fries & Snacks", icon: "Fries" },
  { id: "burgers", label: "Burgers & Wings", icon: "Hamburger" }
];

export const HOT_DELICIOUS_ITEMS = [
  {
    id: "h-1",
    category: "pizza",
    name: "Savory Deep Dish Pizza",
    description: "Melted mozzarella, Italian pepperoni, fresh basil & artisan tomato sauce.",
    price: "$14.99",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "h-2",
    category: "fries",
    name: "Crispy Seasoned French Fries",
    description: "Golden fried potatoes tossed in sea salt, paprika, and garlic herbs.",
    price: "$6.99",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1576107232684-1279f3908594?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "h-3",
    category: "burgers",
    name: "Buffalo Spicy Chicken Wings",
    description: "Crispy jumbo wings tossed in signature red hot buffalo sauce with ranch dip.",
    price: "$12.99",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "h-4",
    category: "burgers",
    name: "Double Bacon Cheese Burger",
    description: "Angus beef patties, smoked cheddar, crispy bacon, caramelized onion & secret sauce.",
    price: "$11.99",
    rating: 5.0,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=600"
  }
];

export const ASYMMETRIC_OFFERS = [
  {
    id: "ao-1",
    tag: "Special Offer",
    title: "Special Delicious Pizza",
    description: "Loaded with fresh bell peppers, mozzarella, black olives & smoked sausage.",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=800",
    cols: "lg:col-span-6 lg:row-span-2",
    price: "$19.99"
  },
  {
    id: "ao-2",
    tag: "Hot Deal",
    title: "Cheesy Garlic Pizza",
    price: "$25.00",
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&q=80&w=600",
    cols: "lg:col-span-3",
    bgColor: "bg-amber-700/80"
  },
  {
    id: "ao-3",
    tag: "Trending",
    title: "Super Delicious Burger",
    price: "$15.99",
    image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&q=80&w=600",
    cols: "lg:col-span-3"
  },
  {
    id: "ao-4",
    tag: "Snack Time",
    title: "Fresh Food Variety",
    price: "$9.99",
    image: "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?auto=format&fit=crop&q=80&w=600",
    cols: "lg:col-span-3",
    bgColor: "bg-orange-800/80"
  },
  {
    id: "ao-5",
    tag: "Crispy Delight",
    title: "Special Crispy Chicken",
    price: "$16.99",
    image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&q=80&w=600",
    cols: "lg:col-span-3"
  }
];

export const TRENDING_MENU = [
  {
    id: "tm-1",
    name: "CHICAGO DEEP PIZZA",
    description: "Its the perfect dining experience where Experience quick and efficient",
    price: "$22.00"
  },
  {
    id: "tm-2",
    name: "CHINESE PASTA",
    description: "Its the perfect dining experience where Experience quick and efficient",
    price: "$34.00"
  },
  {
    id: "tm-3",
    name: "Chicago Burger King.",
    description: "Its the perfect dining experience where Experience quick and efficient",
    price: "$26.00"
  },
  {
    id: "tm-4",
    name: "Chicago Chicken Wings.",
    description: "Its the perfect dining experience where Experience quick and efficient",
    price: "$39.00"
  },
  {
    id: "tm-5",
    name: "Chicago French Fries.",
    description: "Its the perfect dining experience where Experience quick and efficient",
    price: "$28.00"
  },
  {
    id: "tm-6",
    name: "Chicago Deep Pasta.",
    description: "Its the perfect dining experience where Experience quick and efficient",
    price: "$34.00"
  },
  {
    id: "tm-7",
    name: "Chicago Beef Jerky.",
    description: "Its the perfect dining experience where Experience quick and efficient",
    price: "$39.00"
  },
  {
    id: "tm-8",
    name: "Chicago Salad Recipes.",
    description: "Its the perfect dining experience where Experience quick and efficient",
    price: "$26.00"
  }
];

export const CAROUSEL_SLIDES = [
  {
    id: "cs-1",
    title: "Gourmet Charcoal Burger",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: "cs-2",
    title: "Extreme Cheese Pull Pizza",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: "cs-3",
    title: "Classic Cheeseburger & Fries",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: "cs-4",
    title: "Crispy Golden Wings",
    image: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: "cs-5",
    title: "Artisan Pepperoni Slice",
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&q=80&w=1000"
  }
];

export const HOW_WE_SERVE = [
  {
    step: "01",
    title: "Quality Food & Tasty",
    description: "Prepared fresh to order using 100% certified organic ingredients and secret chef spices."
  },
  {
    step: "02",
    title: "Fast & Free Delivery",
    description: "Guaranteed 30-minute hot delivery right to your doorstep, or your meal is on us!"
  },
  {
    step: "03",
    title: "Easy Ordering System",
    description: "Simple online ordering with custom ingredient add-ons and real-time live GPS tracking."
  }
];

export const BLOG_POSTS = [
  {
    id: "b-1",
    date: "15 Feb 2024",
    comments: "Comments (0)",
    category: "Burger",
    title: "Quick Cravings: Unraveling Fast Food Delights",
    description: "There are many variations of passages of Lorem Ipsum available, but majority have suffered Lorem haca ullamcorper donec ante habi believable. If you are going to use a passage...",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "b-2",
    date: "15 Feb 2024",
    comments: "Comments (0)",
    category: "Hot Dog",
    title: "Veggie Vibes: Garden Fresh Delightful Creations",
    description: "There are many variations of passages of Lorem Ipsum available, but majority have suffered Lorem haca ullamcorper donec ante habi believable. If you are going to use a passage...",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "b-3",
    date: "15 Feb 2024",
    comments: "Comments (2)",
    category: "Pasta",
    title: "Bold Bite: Exotic Flavors, Global Adventure",
    description: "There are many variations of passages of Lorem Ipsum available, but majority have suffered Lorem haca ullamcorper donec ante habi believable. If you are going to use a passage...",
    image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&q=80&w=800"
  }
];

export const GALLERY_RIBBON = [
  "https://images.unsplash.com/photo-1576107232684-1279f3908594?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&q=80&w=600"
];
