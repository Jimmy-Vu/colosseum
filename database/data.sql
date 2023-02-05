-- USERS
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
    'vi123'
  ),
  (
    'Shallan',
    'shal123'
  ),
  (
    'Wayne',
    'wa123'
  ),
  (
    'Vasher',
    'va123'
  ),
  (
    'Teofil',
    'te123'
  ),
  (
    'Susebron',
    'su123'
  );

  -- GYMS

insert into "gyms" (
  "gymName",
  "address",
  "geodata",
  "type",
  "imageURL",
  "description",
  "userId"
  )
  values
  (
    'Beyond Performance',
    'Anaheim, CA',
    '{"latitude":"33.835293","longitude":"-117.914505"}',
    '{"powerlifting","weightlifting"}',
    'https://images.unsplash.com/photo-1671321666765-f4630f7eb5f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    'Our mission at Beyond Performance is to cultivate and inspire individuals in all aspects of strength training, powerlifting, weightlifting, and overall health. We aspire to unlock the potential of our members both mentally and physically. We welcome everyone from novices to world class athletes and to share their journey of endless growth with us.',
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
    'Mad Horse Crossfit',
    'Houston, TX',
    '{"latitude":"29.749907","longitude":"-95.358421"}',
    'crossfit',
    'https://images.unsplash.com/photo-1578762560042-46ad127c95ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    'Welcome to your new gym. Where the do-ers get things done, one rep at a time. We house some of the best athletes in the world of CrossFit. Come in for a free consultation with personal trainer today.',
    1
  ),
  (
    'Warrior Muay Thai',
    'New York, NY',
    '{"latitude":"40.730610","longitude":"-73.935242"}',
    'muay thai',
    'https://images.unsplash.com/photo-1612261125197-6ab43f72f1c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
    'Warrior Muay Thai is a state-of-the-art training facility dedicated to the art of Muay Thai. Our experienced instructors provide personalized training to help students reach their full potential. With a spacious training area, a full range of equipment, and a welcoming atmosphere, Warrior Muay Thai is the perfect place to learn and perfect the sport of Muay Thai.',
    2
  ),
  (
    'Iron Palace MMA',
    'Los Angeles, CA',
    '{"latitude":"34.052235","longitude":"-118.243683"}',
    '{"boxing","kickboxing","muay-thai","brazilian-ji-jijutsu","wrestling"}',
    'https://images.unsplash.com/photo-1569514234036-af76a871db4b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80',
    'Iron Palace MMA is the ultimate destination for anyone looking to master the art of martial arts. Our state-of-the-art facilities and experienced instructors offer a comprehensive range of training in boxing, kickboxing, Muay Thai, Brazilian Jiu Jitsu, and wrestling. Come and experience the excitement of Iron Palace MMA and take your training to the next level.',
    2
  );

-- REVIEWS

insert into "reviews" (
  "userId",
  "username",
  "gymId",
  "rating",
  "description"
)
-- Beyond Performance
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
-- Bayside Boxing
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
-- Regal Climbing Gym
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
),
-- Tiger Taekwondo
(
  7,
  'Wayne',
  4,
  3,
  'I recently joined Tiger Taekwondo and I''ve been enjoying my time here. The instructors are knowledgeable and patient, and the facilities are clean and well-maintained. However, the class sizes can be quite large and the schedule could be more flexible. Overall, it''s a good place to learn Taekwondo.'
),
(
  1,
  'Kaladin',
  4,
  5,
  'I''ve been training at Tiger Taekwondo for several years now and I can''t imagine training anywhere else. The instructors are incredible, the facilities are world-class, and the classes are always challenging and rewarding. I have nothing but good things to say about Tiger Taekwondo.'
),
(
  8,
  'Vasher',
  4,
  4,
  'Tiger Taekwondo is a fantastic place to train. The instructors are friendly and knowledgeable, and the classes are always challenging and fun. The facilities are top-notch and the schedule is flexible. I highly recommend it.'
),
-- Crimson Peaks
(
  9,
  'Teofil',
  5,
  2,
  'I''ve been a member here for a few months and I''m disappointed with the cleanliness of the gym. The equipment is not always cleaned after use and the bathrooms are often dirty. The staff is friendly, but the facilities need some improvement.'
),
-- Mad Horse Crossfit
(
  10,
  'Susebron',
  6,
  4,
  'Mad Horse is a great gym for families. My kids love the youth fitness program and I appreciate the variety of classes offered. The staff is always friendly and helpful. Overall, a great gym for the whole family!'
),
-- Warrior Muay Thai
(
  6,
  'Shallan',
  7,
  2,
  'I was really excited to start training at Warrior Muay Thai, but I was disappointed with my experience. The equipment is outdated and the facilities are not well-maintained. The instructors can be unprofessional and lack enthusiasm. I would not recommend Warrior Muay Thai to anyone looking for a high-quality Muay Thai gym.'
),
-- Iron Palace MMA
(
  10,
  'Susebron',
  8,
  4,
  'I''ve been a member at Iron Palace MMA for several months now and I''ve been thoroughly impressed. The facilities are state-of-the-art and the staff is knowledgeable and friendly. I love the variety of classes offered, from boxing to Brazilian Jiu Jitsu, there''s something for everyone. The only downside is the class sizes can be quite large, but the quality of the instruction more than makes up for it. I highly recommend Iron Palace MMA to anyone looking to train in martial arts.'
);
