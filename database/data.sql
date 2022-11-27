  insert into "users" (
    "username",
    "hashedPassword"
  )
  values
  (
    'Kaladin',
    'pass321'
  ),
  (
    'Demo',
    '$argon2i$v=19$m=16,t=2,p=1$VElUQU5JVU0xMjNLSU5H$/w4XQQZlghw79NuPQBtDVQ'
  ),
  (
    'Vin',
    'pass123'
  ),
  (
    'Waxillium',
    'wax123'
  ),
  (
    'Vivenna',
    'Vi123'
  ),
  (
    'Shallan',
    'Shal123'
  );

insert into "gyms" (
  "name",
  "address",
  "geodata",
  "type",
  "imageURL",
  "description",
  "userId"
  )
  values
  (
    'Exceed Performance',
    'Anaheim, CA',
    '{"latitude":"33.835293","longitude":"-117.914505"}',
    '{"powerlifting","weightlifting"}',
    'https://images.squarespace-cdn.com/content/v1/5f1121d3454d3d642df2c2a0/1594959199899-ZR1KADRBX6O6CCD2I3RR/IMG_8029.jpg?format=1500w',
    'Our mission at Exceed Performance is to cultivate and inspire individuals in all aspects of strength training, powerlifting, weightlifting, and overall health. We aspire to unlock the potential of our members both mentally and physically. We welcome everyone from novices to world class athletes and to share their journey of endless growth with us.',
    1
  ),
  (
    'Bayside Boxing',
    'Torrance, CA',
    '{"latitude":"33.840763","longitude":"-118.345413"}',
    'boxing',
    'https://images.unsplash.com/photo-1561532325-7d5231a2dede?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80',
    'Our mission is to train the warriors of tomorrow, no matter the gender, origins, or creed.',
    1
  ),
  (
    'Regal Climbing Gym',
    'Mankato, MN',
    '{"latitude":"44.1635775","longitude":"-93.9993996"}',
    'climbing',
    'https://images.unsplash.com/photo-1543398971-17eea343659e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
    'No height is insurmountable. We train those who will reach the peaks of the world. Call us now to start your climb.',
    2
  ),
  (
    'Tiger Taekwondo',
    'Duluth, GA',
    '{"latitude":"34.005329","longitude":"-84.144180"}',
    'taekwondo',
    'https://res.cloudinary.com/dueu3vco1/image/upload/v1666406461/Colosseum/assets/tiger-vector-logo-orange_gjxaku.png',
    'Taekwondo is a discipline that shows ways of enhancing our spirit and life through training our body and mind. Today, it has become a global sport that has gained an international reputation, and stands among the official games in the Olympics. Please stop on by for a free trial class.',
    1
  ),
  (
    'Crimson Peaks',
    'Topeka, Kansas',
    '{"latitude":"39.056198","longitude":"-95.695312"}',
    'commercial',
    'https://images.unsplash.com/photo-1593079831268-3381b0db4a77?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80',
    'Function and Form. That is the pillars of Crimson Peaks. Welcome to your new gym. Where the do-ers get things done, one rep at a time. Come in for a free consultation with personal trainer today.',
    1
  ),
  (
    'Mad Horse CrossFit',
    'Houston, TX',
    '{"latitude":"29.749907","longitude":"-95.358421"}',
    'crossfit',
    'https://images.unsplash.com/photo-1578762560042-46ad127c95ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    'Welcome to your new gym. Where the do-ers get things done, one rep at a time. We house some of the best athletes in the world of CrossFit. Come in for a free consultation with personal trainer today.',
    1
  );

insert into "reviews" (
  "userId",
  "username",
  "gymId",
  "rating",
  "description"
)
values(
  3,
  'Vin',
  1,
  5,
  'One of the best gyms I have ever been to. A bit small but they have all the equipment that you need.'
),
(
  2,
  'Demo',
  1,
  4,
  'Pretty nice gym. Could be a bit bigger and cleaner.'
),
(
  6,
  'Shallan',
  1,
  4,
  'I love the 24 hour access for members!'
),
(
  2,
  'Demo',
  2,
  4,
  'Great boxing gym. Coach Booker really knows his stuff!'
),
(
  1,
  'Kaladin',
  2,
  4,
  'I got a really good work out here. I definitely am thinking about coming back.'
),
(
  4,
  'Waxillium',
  2,
  3,
  'I appreciate the work and attention that the coaches put into each fighter here. The only issue is that how much focus they''re putting on the Philly Shell defense. That style is not meant for everyone.'
),
(
  3,
  'Vin',
  3,
  3,
  'Really nice walls but the front desk really need to work on their customer service.'
),
(
  1,
  'Kaladin',
  3,
  5,
  'Great climbs here. Everyone is so friendly.'
),
(
  5,
  'Vivenna',
  3,
  4,
  'They have really interesting walls. Great place to practice your sends'
);
