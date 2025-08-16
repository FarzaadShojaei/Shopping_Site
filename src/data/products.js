export const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 99.99,
    description: "High-quality wireless headphones with noise cancellation feature.",
    icon: "fas fa-headphones",
    category: "Electronics",
    features: ["Bluetooth 5.0", "30hr Battery", "Noise Cancelling", "Foldable Design"],
    inStock: true,
    detailedDescription: "Experience premium sound quality with our advanced wireless headphones. Featuring cutting-edge noise cancellation technology, these headphones deliver crystal-clear audio whether you're commuting, working out, or relaxing at home. The ergonomic design ensures comfortable wear for extended periods.",
    specifications: {
      "Driver Size": "40mm",
      "Frequency Response": "20Hz - 20kHz",
      "Impedance": "32 Ohms",
      "Weight": "250g",
      "Connectivity": "Bluetooth 5.0, 3.5mm jack",
      "Battery Life": "30 hours",
      "Charging Time": "2 hours",
      "Range": "10 meters"
    },
    images: ["headphones-1.jpg", "headphones-2.jpg", "headphones-3.jpg"],
    reviews: [
      { name: "John D.", rating: 5, comment: "Amazing sound quality! The noise cancellation is fantastic." },
      { name: "Sarah M.", rating: 4, comment: "Very comfortable for long listening sessions. Great value for money." },
      { name: "Mike R.", rating: 5, comment: "Perfect for my daily commute. Battery lasts all week!" }
    ],
    warranty: "2 years manufacturer warranty",
    shipping: "Free shipping on orders over $50"
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 249.99,
    description: "Feature-rich smartwatch with health monitoring and GPS.",
    icon: "fas fa-clock",
    category: "Electronics",
    features: ["Heart Rate Monitor", "GPS Tracking", "Waterproof", "7-day Battery"],
    inStock: true,
    detailedDescription: "Stay connected and healthy with our advanced smartwatch. Track your fitness goals, monitor your health metrics, and receive notifications right on your wrist. With built-in GPS and waterproof design, it's perfect for any lifestyle.",
    specifications: {
      "Display": "1.4\" AMOLED",
      "Resolution": "454 x 454 pixels",
      "Battery Life": "7 days typical use",
      "Water Resistance": "5ATM (50 meters)",
      "Sensors": "Heart rate, GPS, Accelerometer, Gyroscope",
      "Compatibility": "iOS 10+, Android 6+",
      "Storage": "4GB",
      "Connectivity": "Bluetooth 5.0, WiFi"
    },
    images: ["smartwatch-1.jpg", "smartwatch-2.jpg", "smartwatch-3.jpg"],
    reviews: [
      { name: "Emily K.", rating: 5, comment: "Love tracking my workouts! The heart rate monitor is very accurate." },
      { name: "David L.", rating: 4, comment: "Great battery life and the GPS works perfectly for running." },
      { name: "Lisa P.", rating: 5, comment: "Stylish design and so many useful features. Highly recommend!" }
    ],
    warranty: "1 year manufacturer warranty",
    shipping: "Free shipping on orders over $50"
  },
  {
    id: 3,
    name: "Running Shoes",
    price: 79.99,
    description: "Comfortable running shoes perfect for daily workouts.",
    icon: "fas fa-running",
    category: "Sports",
    features: ["Breathable Material", "Cushioned Sole", "Lightweight", "Durable"],
    inStock: true
  },
  {
    id: 4,
    name: "Coffee Maker",
    price: 159.99,
    description: "Premium coffee maker with multiple brewing options.",
    icon: "fas fa-coffee",
    category: "Home",
    features: ["12-cup Capacity", "Programmable Timer", "Auto Shut-off", "Thermal Carafe"],
    inStock: true
  },
  {
    id: 5,
    name: "Laptop Backpack",
    price: 45.99,
    description: "Spacious laptop backpack with multiple compartments.",
    icon: "fas fa-backpack",
    category: "Accessories",
    features: ["Water Resistant", "USB Charging Port", "Padded Laptop Compartment", "Anti-theft"],
    inStock: true
  },
  {
    id: 6,
    name: "Bluetooth Speaker",
    price: 69.99,
    description: "Portable Bluetooth speaker with excellent sound quality.",
    icon: "fas fa-volume-up",
    category: "Electronics",
    features: ["360° Sound", "Waterproof", "20hr Battery", "Voice Assistant"],
    inStock: true
  },
  {
    id: 7,
    name: "Fitness Tracker",
    price: 89.99,
    description: "Advanced fitness tracker to monitor your daily activities.",
    icon: "fas fa-heartbeat",
    category: "Health",
    features: ["Sleep Tracking", "Step Counter", "Calorie Monitor", "Smartphone Notifications"],
    inStock: false
  },
  {
    id: 8,
    name: "Wireless Mouse",
    price: 29.99,
    description: "Ergonomic wireless mouse with precision tracking.",
    icon: "fas fa-mouse",
    category: "Electronics",
    features: ["Ergonomic Design", "Long Battery Life", "Precision Tracking", "Silent Clicks"],
    inStock: true
  },
  {
    id: 9,
    name: "Gaming Keyboard",
    price: 119.99,
    description: "Mechanical gaming keyboard with RGB backlighting.",
    icon: "fas fa-keyboard",
    category: "Gaming",
    features: ["Mechanical Switches", "RGB Backlighting", "Programmable Keys", "Gaming Mode"],
    inStock: true
  },
  {
    id: 10,
    name: "Tablet Stand",
    price: 24.99,
    description: "Adjustable tablet stand for comfortable viewing angles.",
    icon: "fas fa-tablet-alt",
    category: "Accessories",
    features: ["Adjustable Angle", "Foldable", "Non-slip Base", "Universal Compatibility"],
    inStock: true
  }
];
