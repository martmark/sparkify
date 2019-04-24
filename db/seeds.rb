# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



### USERS

martin = User.create({ username: 'martin', password: 'martinsparkify' })
spark = User.create({ username: 'Sparkify', password: 'martinsparkify' })
demo = User.create({ username: 'DemoUser', password: 'sparkifyonline' })


### ARTISTS

frank = Artist.create({ 
  name: 'Frank Ocean', 
  bio: 'coming soon', 
  image_url: 'https://66.media.tumblr.com/cf6e5522c26fbdcab113cb70eb3908ee/tumblr_pqfxpxLIzk1vud73ko2_1280.jpg'
})

jack = Artist.create({ 
  name: 'Jack Johnson', 
  bio: 'coming soon', 
  image_url: 'https://66.media.tumblr.com/d69d621e2f38787d28fbfcbe95c85fa9/tumblr_pqfxpxLIzk1vud73ko3_1280.jpg'
})

tune = Artist.create({
  name: 'tUnE-yArDs',
  bio: 'coming',
  image_url: 'https://66.media.tumblr.com/bad55a2c484d0be57183d822a124d0b2/tumblr_pqfxpxLIzk1vud73ko8_1280.jpg'
})

air = Artist.create({ 
  name: 'Air', 
  bio: 'coming soon', 
  image_url: 'https://66.media.tumblr.com/d630bb21f54c6b4bdc8aa4a162499dde/tumblr_pqft7jLN6y1vud73ko1_1280.jpg'
})

can = Artist.create({ 
  name: 'Can', 
  bio: 'coming soon', 
  image_url: 'https://66.media.tumblr.com/0356a83e1e09193be09af15f3abb757a/tumblr_pqftbii0dD1vud73ko1_1280.jpg'
})

elliott = Artist.create({ 
  name: 'Elliott Smith', 
  bio: 'coming soon', 
  image_url: 'https://66.media.tumblr.com/b2f63220929d644fd12c08ef11314bc9/tumblr_pqfxpxLIzk1vud73ko1_1280.jpg'
})

floyd = Artist.create({ 
  name: 'Pink Floyd', 
  bio: 'coming soon', 
  image_url: 'https://66.media.tumblr.com/de7eac93cc7b29b0db9a4d040ffd6896/tumblr_pqftwrvkQ01vud73ko1_1280.jpg'
})

billie = Artist.create({ 
  name: 'Billie Eilish', 
  bio: 'coming soon', 
  image_url: 'https://66.media.tumblr.com/f42a75f3919494be841e0b9cb357257e/tumblr_pqftotfBnp1vud73ko1_1280.jpg'
})

regina = Artist.create({
  name: 'Regina Spektor',
  bio: "coming",
  image_url: "https://66.media.tumblr.com/2b80af84a2f85030a8fc45f88d7fd875/tumblr_pqfyr0N7fQ1vud73ko1_1280.jpg"
})

michael = Artist.create({
   name: 'Michael Jackson',
   bio: 'coming soon',
   image_url: 'https://66.media.tumblr.com/f7e77f9a6446bc0c9a3f0587538a9f78/tumblr_pqfxuy2rrw1vud73ko1_1280.jpg'
})

sufjan = Artist.create({
   name: 'Sufjan Stevens',
   bio: 'coming soon',
   image_url: 'https://66.media.tumblr.com/499b1c7bbd3f2cc4c3d9346459e227da/tumblr_pqfxpxLIzk1vud73ko7_1280.jpg'
})

theroots = Artist.create({
   name: 'The Roots',
   bio: 'coming soon',
   image_url: 'https://66.media.tumblr.com/15a14ba857d9a2d23d6b3f2b23fa66ce/tumblr_pqg00iAow61vud73ko1_1280.jpg'
})

rihanna = Artist.create({
   name: 'Rihanna',
   bio: 'coming soon',
   image_url: 'https://66.media.tumblr.com/dab657e3cd9b411b05d829dc9c8effbc/tumblr_pqfy9tV3Qz1vud73ko1_1280.jpg'
})

smiths = Artist.create({
  name: 'The Smiths',
  bio: 'coming',
  image_url: 'https://66.media.tumblr.com/f5ab97e18f0cd44338b1601548e7a4e2/tumblr_pqfyxlEoNM1vud73ko1_1280.jpg'
})

nirvana = Artist.create({
   name: 'Nirvana',
   bio: 'coming soon',
   image_url: 'https://66.media.tumblr.com/ebeca8813a17b699bc40841b5a3eb6f0/tumblr_pqfzveKOHw1vud73ko1_1280.jpg'
})

gin = Artist.create({ 
  name: 'Gin Blossoms', 
  bio: 'coming soon', 
  image_url: 'https://66.media.tumblr.com/d85e08743b08bea322e751f3bf0811aa/tumblr_pqg1m59PW41vud73ko1_1280.jpg'
})

jimi = Artist.create({ 
  name: 'Jimi Hendrix', 
  bio: 'coming soon', 
  image_url: 'https://66.media.tumblr.com/a07c8b63e8ce85c6c2944eb34ac9ee63/tumblr_pqg1s9X30V1vud73ko1_1280.jpg'
})

kraft = Artist.create({ 
  name: 'Kraftwerk', 
  bio: 'coming soon', 
  image_url: 'https://66.media.tumblr.com/59ce8f9c82df12bf5384cb5d45fdecbc/tumblr_pqg21rHAg81vud73ko1_1280.jpg'
})

vogue = Artist.create({ 
  name: 'En Vogue', 
  bio: 'coming soon', 
  image_url: 'https://66.media.tumblr.com/e62ae63646c845fab3e2ce268347ebc7/tumblr_pqg25rrppX1vud73ko1_1280.jpg'
})

celine = Artist.create({ 
  name: 'Celine Dion', 
  bio: 'coming soon', 
  image_url: 'https://66.media.tumblr.com/569e2c863b28dbfc9cf76f1967072f30/tumblr_pqg2d1XeO61vud73ko1_1280.jpg'
})

blood = Artist.create({ 
  name: 'Blood Orange', 
  bio: 'coming soon', 
  image_url: 'https://66.media.tumblr.com/91a2aac79c055dd9452f01b05606d486/tumblr_pqcbuxwbES1vud73ko5_1280.jpg'
})

bomba = Artist.create({ 
  name: 'Bomba Estereo', 
  bio: 'coming soon', 
  image_url: 'https://66.media.tumblr.com/ca2e6a269d222858c4b813eae5bde7c6/tumblr_pqg2g64TBM1vud73ko1_1280.jpg'
})

william = Artist.create({ 
  name: 'William Onyeabor', 
  bio: 'coming soon', 
  image_url: 'https://66.media.tumblr.com/49e049a229811b79a8c14fcb3265651b/tumblr_pqg2nmysMf1vud73ko1_1280.jpg'
})

dylan = Artist.create({ 
  name: 'Bob Dylan', 
  bio: 'coming soon', 
  image_url: 'https://66.media.tumblr.com/abd4abe15e43dfd5bb46c5aa873905ee/tumblr_pqg2ukPqUM1vud73ko1_1280.jpg'
})

gogol = Artist.create({
  name: 'Gogol Bordello',
  bio: 'coming',
  image_url: 'https://66.media.tumblr.com/e3b5e06eb23737b15ec64d1f9f46ff56/tumblr_pqg2y49xXi1vud73ko1_1280.jpg'
})

amy = Artist.create({ 
  name: 'Amy Winehouse', 
  bio: 'coming soon', 
  image_url: 'https://66.media.tumblr.com/2653d0146b3115245ddf3a4e7addfcc3/tumblr_pqg32imeZq1vud73ko1_1280.jpg'
})

beatles = Artist.create({
  name: 'The Beatles',
  bio: 'coming soon',
  image_url: 'https://66.media.tumblr.com/090648bbbc76b885ae11f18828e372fd/tumblr_pqg3c8zKwW1vud73ko1_1280.jpg'
})

madonna = Artist.create({ 
  name: 'Madonna', 
  bio: 'coming soon', 
  image_url: 'https://66.media.tumblr.com/2e45c032c781a0e2406df14d2070d586/tumblr_pqg3njwXlA1vud73ko1_1280.jpg'
})

britney = Artist.create({ 
  name: 'Britney Spears', 
  bio: 'coming soon', 
  image_url: 'https://66.media.tumblr.com/a58514c7ed6fe12a3ff43dd092b64e47/tumblr_pqg3uep8031vud73ko1_1280.jpg'
})

jayz = Artist.create({
  name: 'Jay-Z',
  bio: 'coming',
  image_url: 'https://66.media.tumblr.com/36b5de5c042605fb2f8372d6855ab434/tumblr_pqg45sn8yP1vud73ko1_1280.jpg'
})

cranberries = Artist.create({ 
  name: 'The Cranberries', 
  bio: 'coming soon', 
  image_url: 'https://66.media.tumblr.com/61f9abccdbe3b81f9cc4d4c91dae715b/tumblr_pqcbwvDrs51vud73ko1_1280.jpg'
})

yeah = Artist.create({ 
  name: 'Yeah Yeah Yeahs', 
  bio: 'coming soon', 
  image_url: 'https://66.media.tumblr.com/c14b8313ba33ee5cb708aca6b36bab1e/tumblr_pqg4ia3uUr1vud73ko1_640.jpg'
})

pearl = Artist.create({
  name: 'Pearl Jam',
  bio: 'coming',
  image_url: 'https://66.media.tumblr.com/fb45fb7aa7377d8f558ceedeb6b32e7f/tumblr_pqg4os6rQK1vud73ko1_1280.jpg'
})

dua = Artist.create({ 
  name: 'Dua Lipa', 
  bio: 'coming soon', 
  image_url: 'https://66.media.tumblr.com/798dc6fc69aa7022cad7f4be73e6ab97/tumblr_pqcbwvDrs51vud73ko3_1280.jpg'
})

ariana = Artist.create({ 
  name: 'Ariana Grande', 
  bio: 'coming soon', 
  image_url: 'https://66.media.tumblr.com/e64e65a2374062e69ec39e89279ef429/tumblr_pqg54ucEmx1vud73ko1_1280.jpg'
})

gaga = Artist.create({
  name: 'Lady Gaga',
  bio: 'coming soon',
  image_url: 'https://66.media.tumblr.com/a39be3c58390fc0a67df26396b998c84/tumblr_pqg5t0A3aF1vud73ko1_1280.jpg'
})

waits = Artist.create({ 
  name: 'Tom Waits', 
  bio: 'coming soon', 
  image_url: 'https://66.media.tumblr.com/776c9f9c96e7dacc742500a05fe5b2de/tumblr_pqcbzr4PUE1vud73ko1_1280.jpg'
})

toro = Artist.create({ 
  name: 'Toro Y Moi', 
  bio: 'coming soon', 
  image_url: 'https://66.media.tumblr.com/60ccee3d576acd8c84eeb2091426087f/tumblr_pqcbzbXTLl1vud73ko7_1280.jpg'
})

blake = Artist.create({ 
  name: 'James Blake', 
  bio: 'coming soon', 
  image_url: 'https://66.media.tumblr.com/74cba11920d9de2f30056bd186a6064c/tumblr_pqdt04J9C21vud73ko2_1280.jpg'
})

miles = Artist.create({
  name: 'Miles Davis',
  bio: 'coming soon',
  image_url: 'https://66.media.tumblr.com/dd397e20e0411dbe7abd4c09cce864a2/tumblr_pqdt04J9C21vud73ko9_1280.jpg'
})

jbalvin = Artist.create({
  name: 'J Balvin',
  bio: 'coming',
  image_url: 'https://66.media.tumblr.com/0905d6c04100abf8fa7cc789eeecef31/tumblr_pqfxpxLIzk1vud73ko9_1280.jpg'
})

marvin = Artist.create({
  name: 'Marvin Gaye',
  bio: 'coming',
  image_url: 'https://66.media.tumblr.com/5e5646095bc623e83e4b142b7c904186/tumblr_pqg66qoPsi1vud73ko1_1280.jpg'
})

maluma = Artist.create({
  name: 'Maluma',
  bio: 'coming',
  image_url: 'https://66.media.tumblr.com/0c95db78243d59c22a36ad82bfef3743/tumblr_pqfxpxLIzk1vud73ko4_1280.jpg'
})

metro = Artist.create({
  name: 'Metronomy',
  bio: 'coming',
  image_url: 'https://66.media.tumblr.com/88707535ec4c3585033a4f4662c757e0/tumblr_pqg6hbof2L1vud73ko1_1280.jpg'
})

lauryn = Artist.create({
  name: 'Lauryn Hill',
  bio: 'coming',
  image_url: 'https://66.media.tumblr.com/cb25fb2919e475fcf604c88c278ff284/tumblr_pqdt04J9C21vud73ko5_1280.jpg'
})

leon = Artist.create({
  name: 'Leon Bridges',
  bio: 'coming',
  image_url: 'https://66.media.tumblr.com/c2928bafe4689c34bc794babd500217b/tumblr_pqdt04J9C21vud73ko6_1280.jpg'
})


### ALBUMS

asleep = billie.albums.create({ 
  title: 'WHEN WE ALL FALL ASLEEP, WHERE DO WE GO?', 
  genre: 'Pop', year: 2019,
  image_url: 'https://66.media.tumblr.com/e494f36def51bc1e72f9354386f57589/tumblr_pqc3esA8Lt1vud73ko2_1280.jpg'
})

onandon = jack.albums.create({ 
  title: 'On and On', 
  genre: 'Acoustic', 
  year: 2003,
  image_url: 'https://66.media.tumblr.com/707ea101f1162bc4a5798dfbbb3deb36/tumblr_pqc3eb7DCZ1vud73ko7_640.jpg'
})

talkie = air.albums.create({ 
  title: 'Talkie Walkie', 
  genre: 'Electronic', 
  year: 2004, 
  image_url: 'https://66.media.tumblr.com/567eed828e244bae114d028fb278ccc9/tumblr_pqc3esA8Lt1vud73ko1_400.jpg' 
})

ege = can.albums.create({ 
  title: 'Ege Bamyasi', 
  genre: 'Rock', 
  year: 1972,
  image_url: 'https://66.media.tumblr.com/8da43d2c22187c31e757f5c6f58a63df/tumblr_pqh9jxjOKj1vud73ko1_400.jpg'
})

blonde = frank.albums.create({ 
  title: 'Blonde', 
  genre: 'Hip-Hop', 
  year: 2016 ,
  image_url: 'https://66.media.tumblr.com/ef3756ed57dd995f2caabe87f59066b7/tumblr_pqc3eb7DCZ1vud73ko2_640.jpg'
})

vital = pearl.albums.create({
  title: 'Vitalogy',
  genre: 'Rock',
  year: 1993,
  image_url: 'https://66.media.tumblr.com/65cac1b59f0c7deec40fd058dccbf3da/tumblr_pqg7towvJ31vud73ko2_500.jpg'
})

doubt = jayz.albums.create({
  title: "Reasonable Doubt",
  genre: "Hip-Hop",
  year: 1995,
  image_url: 'https://66.media.tumblr.com/b36490aa9e4ce9be493c9178f790b164/tumblr_pqg7t3L2Ej1vud73ko7_500.jpg'
})

puravida = gogol.albums.create({
  title: 'Pura Vida Conspiracy',
  genre: 'Alternative',
  year: 2012,
  image_url: 'https://66.media.tumblr.com/4fc1b13422927315343dd7c3fa72c09c/tumblr_pqg7t3L2Ej1vud73ko5_500.jpg'
})

either = elliott.albums.create({ 
  title: 'Either/Or', 
  genre: 'Acoustic', 
  year: 1997,
  image_url: 'https://66.media.tumblr.com/ad6fb7e7bdd44f231bdf7d14d4649c77/tumblr_pqc3eb7DCZ1vud73ko5_400.jpg'
})

moon = floyd.albums.create({ 
  title: 'Dark Side of the Moon', 
  genre: 'Rock', 
  year: 1972,
  image_url: 'https://66.media.tumblr.com/977c66295149f4861a6ba132e1edd52e/tumblr_pqc3eb7DCZ1vud73ko3_1280.jpg'
})

black = amy.albums.create({
  title: 'Back To Black',
  genre: 'Alternative',
  year: 2006,
  image_url: 'https://66.media.tumblr.com/c38c0b60e5e482ee86e8bb1a0d076bb6/tumblr_pqduavefa41vud73ko5_1280.jpg'
})

round = miles.albums.create({
  title: "`Round About Midnight",
  genre: 'Jazz',
  year: 1957,
  image_url: 'https://66.media.tumblr.com/b04ec0336996cebe6bedf968c9f8da96/tumblr_pqduc6BOk31vud73ko5_1280.jpg'
})

whois = william.albums.create({
  title: "Who Is William Onyeabor?",
  genre: "Funk",
  year: 1992,
  image_url: "https://66.media.tumblr.com/97366fe38dabf53b1287bf88d53dfb18/tumblr_pqdud29vBu1vud73ko2_500.jpg"
})

rubber = beatles.albums.create({
  title: "Rubber Soul",
  genre: 'Rock',
  year: 1964,
  image_url: 'https://66.media.tumblr.com/3f45bc020ba7e06c290e4b802c081136/tumblr_pqg7towvJ31vud73ko7_1280.jpg'
})

born = gaga.albums.create({
  title: 'Born This Way',
  genre: 'Pop',
  year: 2010,
  image_url: 'https://66.media.tumblr.com/65325c0d8e15a63b63ae0273091eca8e/tumblr_pqg7t3L2Ej1vud73ko4_540.jpg'
})

carrie = sufjan.albums.create({
  title: "Carrie & Lowell",
  genre: "Alternative",
  year: 2014,
  image_url: "https://66.media.tumblr.com/b72c1d1638169faacc2a2e1ec3eee618/tumblr_pqduavefa41vud73ko9_1280.jpg"
})

vibras = jbalvin.albums.create({
  title: 'Vibras',
  genre: 'Latin',
  year: 2017,
  image_url: 'https://66.media.tumblr.com/1ea58f185d4ea28bfecb6b452625292d/tumblr_pqdud29vBu1vud73ko1_500.jpg'
})

aman = bomba.albums.create({
  title: 'Amanecer',
  genre: 'Latin',
  year: 2014,
  image_url: 'https://66.media.tumblr.com/6f61ba1ccc4cd550ba05c0d93867d3ac/tumblr_pqduavefa41vud73ko8_640.jpg'
})

badasme = waits.albums.create({
  title: "Bad As Me",
  genre: "Rock",
  year: 2010,
  image_url: 'https://66.media.tumblr.com/35c8e230fa3de08c60551be09b1381fd/tumblr_pqduavefa41vud73ko2_400.png'
})

letsget = marvin.albums.create({
  title: "Let's Get It On",
  genre: "Soul",
  year: 1972,
  image_url: 'https://66.media.tumblr.com/5b8d9ef328272bf3a70228fed1e17000/tumblr_pqg7t3L2Ej1vud73ko9_640.jpg'
})

figure = elliott.albums.create({
  title: 'Figure 8',
  genre: 'Alternative',
  year: 1999,
  image_url: 'https://66.media.tumblr.com/efeae70827f57811e96c5a393280aa3b/tumblr_pqg7t3L2Ej1vud73ko3_400.jpg'
})

creep = tune.albums.create({
  title: "I Can Feel You Creep Into My Private Life",
  genre: 'Alternative',
  year: 2017,
  image_url: 'https://66.media.tumblr.com/81befb8b21b6b76e06f5cf40e700f48c/tumblr_pqg7t3L2Ej1vud73ko2_640.jpg'
})

cheap = regina.albums.create({
  title: 'What We Saw From The Cheap Seats',
  genre: 'Alternative',
  year: 2011,
  image_url: 'https://66.media.tumblr.com/6682eaf5482d4fa57ba0d7d7ee5310ea/tumblr_pqg7towvJ31vud73ko5_400.jpg'
})

dua_album = dua.albums.create({
  title: "Dua Lipa",
  genre: 'Pop',
  year: 2016,
  image_url: 'https://66.media.tumblr.com/c3e82aa7289b920cab882c7a37ab6e1d/tumblr_pqdubhNjAt1vud73ko2_400.jpg'
})

revolver = beatles.albums.create({
  title: 'Revolver',
  genre: 'Rock',
  year: 1965,
  image_url: 'https://66.media.tumblr.com/738a0c14ee5238b29224ccdec93a34b5/tumblr_pqg7towvJ31vud73ko6_1280.jpg'
})

joanne = gaga.albums.create({
  title: 'Joanne',
  genre: 'Pop',
  year: 2015,
  image_url: 'https://66.media.tumblr.com/cd052e0baf3f76cc7b64d4e8256b6ef7/tumblr_pqg7t3L2Ej1vud73ko8_1280.jpg'
})

oops = britney.albums.create({
  title: "Oops!... I Did It Again",
  genre: "Pop",
  year: 1999,
  image_url: 'https://66.media.tumblr.com/51b9137d99127191b02fec4e162a932e/tumblr_pqduc6BOk31vud73ko7_640.jpg'
})

sweet = ariana.albums.create({
  title: "Sweetener",
  genre: "Pop",
  year: 2017,
  image_url: 'https://66.media.tumblr.com/0b4e2e2b5b8bdaffc1cb9720aea8f4aa/tumblr_pqducoOQAG1vud73ko2_400.png'
})

argue = cranberries.albums.create({
  title: "No Need To Argue",
  genre: "Alternative",
  year: 1993,
  image_url: "https://66.media.tumblr.com/644deb6f59c18e6e3da1591d2f275c83/tumblr_pqduavefa41vud73ko4_400.jpg"
})

thriller = michael.albums.create({
  title: "Thriller",
  genre: "Pop",
  year: 1982,
  image_url: 'https://66.media.tumblr.com/3789f02d47cb48080886ae874263f022/tumblr_pqducoOQAG1vud73ko6_500.jpg'
})

ten = pearl.albums.create({
  title: 'Ten',
  genre: 'Rock',
  year: 1990,
  image_url: 'https://66.media.tumblr.com/59333d78d5ce814c17822c9f9428ee42/tumblr_pqg7towvJ31vud73ko3_400.jpg'
})

unplugged = nirvana.albums.create({
  title: "MTV Unplugged in New York",
  genre: 'Alternative',
  year: 1993,
  image_url: 'https://66.media.tumblr.com/22c53b2a458a3ede009431f6f0062227/tumblr_pqducoOQAG1vud73ko9_540.jpg'
})

outer = toro.albums.create({
  title: "Outer Peace",
  genre: "Alternative",
  year: 2018,
  image_url: 'https://66.media.tumblr.com/b57483926bc5b8a203297c0ce9a50e99/tumblr_pqducoOQAG1vud73ko7_500.jpg'
})

smiths_album = smiths.albums.create({
  title: 'The Smiths',
  genre: 'Alternative',
  year: 1983,
  image_url: 'https://66.media.tumblr.com/d007f6713b31922bbd8da1a6c30a3a20/tumblr_pqg7towvJ31vud73ko8_400.jpg'
})

fame = maluma.albums.create({
  title: 'F.A.M.E',
  genre: 'Latin',
  year: 2017,
  image_url: 'https://66.media.tumblr.com/faab4f8e903dfb77e3a25798cf974a48/tumblr_pqduc6BOk31vud73ko4_400.jpg'
})

nevermind = nirvana.albums.create({
  title: 'Nevermind',
  genre: 'Alternative',
  year: 1990,
  image_url: 'https://66.media.tumblr.com/cd4ff673bbebfceef24b3e35e9d54c49/tumblr_pqfcpyajHc1vud73ko1_1280.jpg'
})

blueprint = jayz.albums.create({
  title: 'The Blueprint',
  genre: 'Hip-Hop',
  year: 2000,
  image_url: 'https://66.media.tumblr.com/16366c0202a03e7f7a15f4cb138d898e/tumblr_pqg7t3L2Ej1vud73ko1_1280.jpg'
})

nights = metro.albums.create({
  title: 'Nights Out',
  genre: 'Electronic',
  year: 2008,
  image_url: 'https://66.media.tumblr.com/9077961ba17a1d0898a238e491af8928/tumblr_pqgwvfkQ4b1vud73ko1_500.jpg'
})

english = metro.albums.create({
  title: 'The English Riviera',
  genre: 'Electronic',
  year: 2010,
  image_url: 'https://66.media.tumblr.com/3528ab36280c0422df43339b3e981a53/tumblr_pqdubhNjAt1vud73ko5_540.jpg'
})

whatsgoing = marvin.albums.create({
  title: "What's Going On",
  genre: 'Soul',
  year: 1970,
  image_url: 'https://66.media.tumblr.com/d74e707503a459f85bb8aca0fd9e99bc/tumblr_pqg7t3L2Ej1vud73ko6_500.jpg'
})

whokill = tune.albums.create({
  title: "W H O K I L L",
  genre: 'Alternative',
  year: 2010,
  image_url: 'https://66.media.tumblr.com/4fe46323ebe6abf2b5f403909df6023e/tumblr_pqg7u2RsvO1vud73ko1_640.jpg'
})

anti = rihanna.albums.create({
  title: 'ANTI',
  genre: 'R&B',
  year: 2015,
  image_url: 'https://66.media.tumblr.com/6740afa6a06b06eca3ae3c39fbef8ecb/tumblr_pqh9czxbur1vud73ko1_640.jpg'
})

bestone = smiths.albums.create({
  title: 'The Best Of... Vol. 1',
  genre: 'Alternative',
  year: 1991,
  image_url: 'https://66.media.tumblr.com/d7ff879281ce5e054808a57d2c827654/tumblr_pqg7towvJ31vud73ko9_400.jpg'
})

remember = regina.albums.create({
  title: "Remember Us To Life",
  genre: 'Alternative',
  year: 2015,
  image_url: 'https://66.media.tumblr.com/310118934d248979a0fb30fe32c50e82/tumblr_pqg7towvJ31vud73ko1_400.png'
})

mised = lauryn.albums.create({
  title: 'The Miseducation Of Lauryn Hill',
  genre: "R&B",
  year: 1997,
  image_url: 'https://66.media.tumblr.com/2e4852fcd8ee3d203c740a7dce04a42a/tumblr_pqdubhNjAt1vud73ko9_640.jpg'
})

queen = smiths.albums.create({
  title: 'The Queen Is Dead',
  genre: 'Rock',
  year: 1985,
  image_url: 'https://66.media.tumblr.com/c86ce8d29500b283282fb97e738b7423/tumblr_pqg7towvJ31vud73ko4_640.jpg'
})

exper = jimi.albums.create({
  title: 'Are You Experienced',
  genre: 'Rock',
  year: 1967,
  image_url: "https://66.media.tumblr.com/db9cbfd1ef26d21440e76263e93e8fd9/tumblr_pqdubhNjAt1vud73ko6_1280.jpg"
})

phren = theroots.albums.create({
  title: 'Phrenology',
  genre: 'Hip-Hop',
  year: 2001,
  image_url: 'https://66.media.tumblr.com/724b3e551e68f612017c2d1f1296a481/tumblr_pqduc6BOk31vud73ko9_640.jpg'
})

blitz = yeah.albums.create({
  title: "It's Blitz",
  genre: 'Alternative',
  year: 2008,
  image_url: 'https://66.media.tumblr.com/2b20050df19efe2d5f786b135fc69364/tumblr_pqduavefa41vud73ko7_1280.jpg'
})

cominghome = leon.albums.create({
  title: 'Coming Home',
  genre: 'Soul',
  year: 2015,
  image_url: 'https://66.media.tumblr.com/edc9c7c1f002853e099e45c91c329639/tumblr_pqduc6BOk31vud73ko1_400.jpg'
})

trans = kraft.albums.create({
  title: "Trans Europe Express",
  genre: "Electronic",
  year: 1976,
  image_url: 'https://66.media.tumblr.com/7fe9d4882e7d7529da159ff79e01ade0/tumblr_pqducoOQAG1vud73ko8_1280.jpg'
})

outside = gin.albums.create({
  title: "Outside Looking In: The Best Of The Gin Blossoms",
  genre: 'Alternative',
  year: 1998,
  image_url: 'https://66.media.tumblr.com/cc5233144ea91763026fbe59b430ba1f/tumblr_pqdubhNjAt1vud73ko7_500.jpg'
})

falling = celine.albums.create({
  title: "Falling Into You",
  genre: "Pop",
  year: 1995,
  image_url: "https://66.media.tumblr.com/645684383a8ab062a6695dd4bfd76370/tumblr_pqdubhNjAt1vud73ko1_400.jpg"
})

electric = vogue.albums.create({
  title: 'Electric Café',
  genre: 'R&B',
  year: 2017,
  image_url: 'https://66.media.tumblr.com/55d89475d7bc0998381ce4750f833b6a/tumblr_pqdubhNjAt1vud73ko4_400.jpg'
})

prayer = madonna.albums.create({
  title: 'Like A Prayer',
  genre: 'Pop',
  year: 1988,
  image_url: 'https://66.media.tumblr.com/544e1f71e6293722395cfccff1f17fed/tumblr_pqduc6BOk31vud73ko3_500.jpg'
})

channel = frank.albums.create({
  title: 'channel ORANGE',
  genre: 'R&B',
  year: 2012,
  image_url: 'https://66.media.tumblr.com/5132350b1202938f2d0c8ce384ff5f8b/tumblr_pqf73gwbp91vud73ko1_1280.jpg'
})

swan = blood.albums.create({
  title: 'Negro Swan',
  genre: 'R&B',
  year: 2018,
  image_url: 'https://66.media.tumblr.com/d84282eda49c4437225abb26a1765bc2/tumblr_pqducoOQAG1vud73ko1_540.png'
})

selfportrait = dylan.albums.create({
  title: 'Self Portrait',
  genre: 'Folk',
  year: 1970,
  image_url: 'https://66.media.tumblr.com/0e97ec0b8a940a9cb95f1cab1bd1bab6/tumblr_pqdubhNjAt1vud73ko3_400.jpg'
})

overgrown = blake.albums.create({
  title: 'Overgrown',
  genre: 'Alternative',
  year: 2013,
  image_url: 'https://66.media.tumblr.com/ed722a6ca5d134c45081a42a64477e53/tumblr_pqduavefa41vud73ko6_640.jpg'
})

### SONGS

asleep.songs.create([  
  { title: '!!!!!!!', duration: '0:14' },
  { title: 'bad guy', duration: '3:14' },
  { title: 'xanny', duration: '4:04' },
  { title: 'you should see me in a crown', duration: '3:01' },
  { title: 'all the good girls go to hell', duration: '2:49' },
  { title: 'wish you were gay', duration: '3:42' },
  { title: 'when the party''s over', duration: '3:16' },
  { title: '8', duration: '2:53' },
  { title: 'my strange addiction', duration: '3:00' },
  { title: 'bury a friend', duration: '3:13' },
  { title: 'ilomilo', duration: '2:36' },
  { title: 'listen before i go', duration: '4:03' },
  { title: 'i love you', duration: '4:52' },
  { title: 'goodbye', duration: '1:59' }
])

doubt.songs.create([
  {title: "Can't Knock The Hustle", duration: "5:17"},
  {title: "Politics As Usual", duration: "3:41"},
  {title: "Brooklyn's Finest", duration: "4:37"},
  {title: "Dead Presidents II", duration: "4:27"},
  {title: "Feelin' It", duration: "3:49"},
  {title: "D' Evils", duration: "3:32"},
  {title: "22 Two's", duration: "3:30"},
  {title: "Can I Live", duration: "4:10"},
  {title: "Ain't No N***a", duration: "4:04"},
  {title: "Friend Or Foe", duration: "1:49"},
  {title: "Coming Of Age", duration: "3:59"},
  {title: "Cashmere Thoughts", duration: "2:57"},
  {title: "Bring It On", duration: "5:01"},
  {title: "Regrets", duration: "4:34"},
  {title: "Can't Knock The Hustle (Fools Paradise Remix)", duration: "3:57"}
])

onandon.songs.create([ 
  { title: 'Times Like These', duration: '2:22' },
  { title: 'The Horizon Has Been Defeated', duration: '2:34' },
  { title: 'Traffic In The Sky', duration: '2:51' },
  { title: 'Taylor', duration: '3:59' },
  { title: 'Gone', duration: '2:10' },
  { title: 'Cupid', duration: '1:06' },
  { title: 'Wasting Time', duration: '3:50' },
  { title: 'Holes To Heaven', duration: '2:55' },
  { title: 'Dreams Be Dreams', duration: '2:13' },
  { title: 'Tomorrow Morning', duration: '2:51' },
  { title: 'Fall Line', duration: '1:36' },
  { title: 'Cookie Jar', duration: '2:57' },
  { title: 'Rodeo Clowns', duration: '2:38' },
  { title: 'Cocoon', duration: '4:11' },
  { title: 'Mediocre Bad Guys', duration: '3:00' },
  { title: 'Symbol In My Driveway', duration: '2:50' },
])

talkie.songs.create([
  { title: 'Venus', duration: '4:05' },
  { title: 'Cherry Blossom Girl', duration: '3:40' },
  { title: 'Run', duration: '4:12' },
  { title: 'Universal Traveler', duration: '4:22' },
  { title: 'Mike Mills', duration: '4:27' },
  { title: 'Surfing on a Rocket', duration: '3:43' },
  { title: 'Another Day', duration: '3:21' },
  { title: 'Alpha Beta Gaga', duration: '4:40' },
  { title: 'Biological', duration: '6:05' },
  { title: 'Alone in Kyoto', duration: '4:51' }
])

nights.songs.create([
  {title: "Nights Out", duration: "2:41"},
  {title: "The End Of You Too", duration: "3:45"},
  {title: "Radio Ladio", duration: "3:35"},
  {title: "My Heart Rate Rapid", duration: "4:11"},
  {title: "Heartbreaker", duration: "4:14"},
  {title: "On The Motorway", duration: "2:36"},
  {title: "Side 2", duration: "3:31"},
  {title: "Holiday", duration: "4:16"},
  {title: "A Thing For Me", duration: "3:30"},
  {title: "Back On The Motorway", duration: "3:56"},
  {title: "On Dancefloors", duration: "4:45"},
  {title: "Nights Outro", duration: "3:12"}
])

ege.songs.create([
  { title: 'Pinch', duration: '9:29' },
  { title: 'Sing Swan Song', duration: '4:49' },
  { title: 'One More Night', duration: '5:35' },
  { title: 'Vitamin C', duration: '3:34' },
  { title: 'Soup', duration: '10:32' },
  { title: "I'm So Green", duration: '3:05' },
  { title: 'Spoon', duration: '3:06' }
])

revolver.songs.create([
  {title: "Taxman", duration: "2:39"},
  {title: "Eleanor Rigby", duration: "2:07"},
  {title: "I'm Only Sleeping", duration: "3:00"},
  {title: "Love You To", duration: "3:00"},
  {title: "Here, There And Everywhere", duration: "2:25"},
  {title: "Yellow Submarine", duration: "2:39"},
  {title: "She Said She Said", duration: "2:36"},
  {title: "Good Day Sunshine", duration: "2:09"},
  {title: "And Your Bird Can Sing", duration: "2:00"},
  {title: "For No One", duration: "2:00"},
  {title: "Doctor Robert", duration: "2:14"},
  {title: "I Want To Tell You", duration: "2:28"},
  {title: "Got To Get You Into My Life", duration: "2:29"},
  {title: "Tomorrow Never Knows", duration: "3:02"}
])

blonde.songs.create([  
  { title: 'Nikes', duration: '5:14' },
  { title: 'Ivy', duration: '4:09' },
  { title: 'Pink + White', duration: '3:05' },
  { title: 'Be Yourself', duration: '1:27' },
  { title: 'Solo', duration: '4:17' },
  { title: 'Skyline To', duration: '3:05' },
  { title: 'Self Control', duration: '4:10' },
  { title: 'Good Guy', duration: '1:07' },
  { title: 'Nights', duration: '5:07' },
  { title: 'Solo (Reprise)', duration: '1:19' },
  { title: 'Pretty Sweet', duration: '2:38' },
  { title: 'Facebook Story', duration: '1:09' },
  { title: 'Close To You', duration: '1:26' },
  { title: 'White Ferrari', duration: '4:09' },
  { title: 'Seigfried', duration: '5:35' },
  { title: 'Godspeed', duration: '2:58' },
  { title: 'Futura Free', duration: '9:24' }
])

whokill.songs.create([
  {title: "My Country", duration: "3:40"},
  {title: "Es-So", duration: "3:30"},
  {title: "Gangsta", duration: "3:59"},
  {title: "Powa", duration: "5:04"},
  {title: "Riotriot", duration: "4:13"},
  {title: "Bizness", duration: "4:24"},
  {title: "Doorstep", duration: "4:17"},
  {title: "You Yes You", duration: "3:33"},
  {title: "Wooly Wolly Gong", duration: "6:07"},
  {title: "Killa", duration: "3:12"}
])

either.songs.create([
  { title: 'Speed Trials', duration: '3:01' },
  { title: 'Alameda', duration: '3:43' },
  { title: 'Ballad Of Big Nothing', duration: '2:48' },
  { title: 'Between the Bars', duration: '2:21' },
  { title: 'Pictores Of Me', duration: '3:47' },
  { title: 'No Name No. 5', duration: '3:43' },
  { title: 'Rose Parade', duration: '3:28' },
  { title: 'Punch And Judy', duration: '2:26' },
  { title: 'Angeles', duration: '2:57' },
  { title: 'Cupid''s Trick', duration: '3:05' },
  { title: '2:45 AM', duration: '3:19' },
  { title: 'Say Yes', duration: '2:19' },
])

queen.songs.create([
  {title: "The Queen Is Dead (Take Me Back To Dear Old Blightly)", duration: "6:24"},
  {title: "Frankly, Mr Shankly", duration: "2:18"},
  {title: "I Know It's Over", duration: "5:48"},
  {title: "Never Had No One Ever", duration: "3:37"},
  {title: "Cemetry Gates", duration: "2:38"},
  {title: "Bigmouth Strikes Again", duration: "3:12"},
  {title: "The Boy With The Thorn In His Side", duration: "3:16"},
  {title: "Vicar In A Tutu", duration: "2:22"},
  {title: "There Is A Light That Never Goes Out", duration: "4:03"},
  {title: "Some Girls Are Bigger Than Others", duration: "3:16"}
])

letsget.songs.create([
  {title: "Let's Get It On", duration: "4:51"},
  {title: "Please Stay (Once You Go Away)", duration: "3:30"},
  {title: "If I Should Die Tonight", duration: "4:00"},
  {title: "Keep Gettin' It On", duration: "3:16"},
  {title: "Come Get To This", duration: "2:41"},
  {title: "Distant Lover", duration: "4:16"},
  {title: "You Sure Love To Ball", duration: "4:44"},
  {title: "Just To Keep You Satisfied", duration: "4:30"}
])

remember.songs.create([
  {title: "Bleeding Heart", duration: "3:59"},
  {title: "Older And Taller", duration: "3:56"},
  {title: "Grand Hotel", duration: "3:05"},
  {title: "Small Bill$", duration: "3:33"},
  {title: "Black And White", duration: "3:49"},
  {title: "The Light", duration: "4:57"},
  {title: "The Trapper And The Furrier", duration: "4:24"},
  {title: "Tornadoland", duration: "3:49"},
  {title: "Obsolete", duration: "6:37"},
  {title: "Sellers Of Flowers", duration: "4:01"},
  {title: "The Visit", duration: "4:24"},
  {title: "New Year", duration: "5:29"},
  {title: "The One Who Stayed And The One Who Left", duration: "4:59"},
  {title: "End Of Thought", duration: "3:20"}
])

born.songs.create([
  {title: "Marry The Night", duration: "4:25"},
  {title: "Born This Way", duration: "4:20"},
  {title: "Government Hooker", duration: "4:14"},
  {title: "Judas", duration: "4:09"},
  {title: "Americano", duration: "4:06"},
  {title: "Hair", duration: "5:08"},
  {title: "Scheiße", duration: "3:45"},
  {title: "Bloody Mary", duration: "4:05"},
  {title: "Bad Kids", duration: "3:51"},
  {title: "Highway Unicorn (Road To Love)", duration: "4:16"},
  {title: "Heavy Metal Lover", duration: "4:13"},
  {title: "Electric Chapel", duration: "4:13"},
  {title: "Yoü And I", duration: "5:07"},
  {title: "The Edge Of Glory", duration: "5:21"}
])

figure.songs.create([
  {title: "Son Of Sam", duration: "3:04"},
  {title: "Somebody That I Used To Know", duration: "2:09"},
  {title: "Junk Bond Trader", duration: "3:50"},
  {title: "Everything Reminds Me Of Her", duration: "2:38"},
  {title: "Everything Means Nothing To Me", duration: "2:24"},
  {title: "L.A.", duration: "3:14"},
  {title: "In The Lost And Found (Honky Back)/The Roost", duration: "4:33"},
  {title: "Stupidity Tries", duration: "4:24"},
  {title: "Easy Way Out", duration: "2:44"},
  {title: "Wouldn't Mama Be Proud", duration: "3:26"},
  {title: "Color Bars", duration: "2:20"},
  {title: "Happiness/The Gondola Man", duration: "5:04"},
  {title: "Pretty Mary K", duration: "2:36"},
  {title: "I Better Be Quiet Now", duration: "3:35"},
  {title: "Can't Make A Sound", duration: "4:19"},
  {title: "Bye", duration: "1:53"}
])

bestone.songs.create([
  {title: "This Charming Man", duration: "2:42"},
  {title: "William, It Was Really Nothing", duration: "2:10"},
  {title: "What Difference Does It Make?", duration: "3:51"},
  {title: "Stop Me If You Think You've Heard This One Before", duration: "3:34"},
  {title: "Girlfriend In A Coma", duration: "2:04"},
  {title: "Half A Person", duration: "3:36"},
  {title: "Rubber Ring", duration: "3:50"},
  {title: "How Soon Is Now?", duration: "6:47"},
  {title: "Hand In Glove", duration: "3:25"},
  {title: "Shoplifters Of The World Unite", duration: "3:00"},
  {title: "Sheila Take A Bow", duration: "2:42"},
  {title: "Some Girls Are Bigger Than Others", duration: "3:16"},
  {title: "Panic", duration: "2:20"},
  {title: "Please, Please, Please, Let Me Get What I Want", duration: "1:54"}
])

moon.songs.create([  
  { title: 'Speak to Me', duration: '1:07' },
  { title: 'Breath (In The Air)', duration: '2:50' },
  { title: 'On The Run', duration: '3:45' },
  { title: 'Time', duration: '6:53:' },
  { title: 'The Great Gig In The Sky', duration: '4:44' },
  { title: 'Money', duration: '6:23' },
  { title: 'Us And Them', duration: '7:49' },
  { title: 'Any Colour You Like', duration: '3:26' },
  { title: 'Brain Damage', duration: '3:47' },
  { title: 'Eclipse', duration: '2:13' }
])



black.songs.create([
  {title: 'Rehab', duration: '3:35'},
  {title: "You Know I'm No Good", duration: '4:17'},
  {title: "Me & Mr. Jones", duration: "2:33"},
  {title: "Just Friends", duration: "3:13"},
  {title: "Back To Black", duration: "4:01"},
  {title: "Love Is A Losing Game", duration: "2:35"},
  {title: "Tears Dry On Their Own", duration: "3:06"},
  {title: "Wake Up Alone", duration: "3:42"},
  {title: "Some Unholy War", duration: "2:23"},
  {title: "He Can Only Hold Her", duration: "3:20"},
  {title: "You Know I'm No Good [Remix]", duration: "3:23"}
])

round.songs.create([ 
  {title: "`Round Midnight`", duration: "5:58"},
  {title: "Ah-Leu-Cha", duration: "5:53"},
  {title: "All Of You", duration: "7:03"},
  {title: "Bye Bye Blackbird", duration: "7:57"},
  {title: "Tadd's Delight", duration: "4:29"},
  {title: "Dear Old Stockholm", duration: "7:52"},
  {title: "Two Bass Hit", duration: "3:45"},
  {title: "Little Melonae", duration: "7:22"},
  {title: "Budo", duration: "4:17"},
  {title: "Sweet Sue, Just You", duration: "3:40"}
])

whois.songs.create([  
  {title: "Body And Soul", duration: "10:09"},
  {title: "Atomic Bomb", duration: "8:00"},
  {title: "Good Name", duration: "10:06"},
  {title: "Something You Will Never Forget", duration: "10:08"},
  {title: "Why Go To War", duration: "9:04"},
  {title: "Love Is Blind", duration: "7:49"},
  {title: "Heaven And Hell", duration: "4:03"},
  {title: "Let's Fall In Love", duration: "7:19"},
  {title: "Fantastic Man", duration: "6:26"}
])

carrie.songs.create([
  {title: "Death With Dignity", duration: "4:00"},
  {title: "Should Have Known Better", duration: "5:08"},
  {title: "All Of Me Wants All Of You", duration: "3:42"},
  {title: "Drawn To The Blood", duration: "3:18"},
  {title: "Eugene", duration: "2:27"},
  {title: "Fourth Of July", duration: "4:39"},
  {title: "The Only Thing", duration: "4:44"},
  {title: "Carrie & Lowell", duration: "3:15"},
  {title: "John My Beloved", duration: "5:05"},
  {title: "No Shade In The Shadow Of The Cross", duration: "2:41"},
  {title: "Blue Bucket Of Gold", duration: "4:44"}
])

vibras.songs.create([
  {title: "Vibras", duration: "1:06"},
  {title: "Mi Gente", duration: "3:05"},
  {title: "Ambiente", duration: "4:09"},
  {title: "Cuando Tú Quieras", duration: "3:25"},
  {title: "No Es Justo", duration: "4:11"},
  {title: "Ahora", duration: "4:15"},
  {title: "Brillo", duration: "2:40"},
  {title: "En Mí (Interlude)", duration: "0:54"},
  {title: "En Mí", duration: "3:16"},
  {title: "Peligrosa", duration: "3:22"}, 
  {title: "Noches Pasadas", duration: "3:42"}, 
  {title: "Tu Verdad", duration: "3:25"}, 
  {title: "Dónde Estarás", duration: "3:12"},
  {title: "Machika", duration: "3:10"}
])

aman.songs.create([
  {title: "Amanecer", duration: "4:09"},
  {title: "Caderas", duration: "2:56"},
  {title: "Somos Dos", duration: "4:00"},
  {title: "Soy Yo", duration: "2:40"},
  {title: "Fiesta", duration: "3:39"},
  {title: "Voy", duration: "3:16"},
  {title: "Algo Está Cambiando", duration: "4:30"},
  {title: "Mar (Lo Que Siento)", duration: "3:50"},
  {title: "To My Love", duration: "4:00"},
  {title: "Sólo Tú", duration: "4:15"},
  {title: "Raíz", duration: "3:39"} 
])

badasme.songs.create([
  {title: "Chicago", duration: "2:15"},
  {title: "Raised Right Men", duration: "3:24"},
  {title: "Talking At The Same Time", duration: "4:14"},
  {title: "Get Lost", duration: "2:42"},
  {title: "Face To The Highway", duration: "3:43"},
  {title: "Pay Me", duration: "3:14"},
  {title: "Back In The Crowd", duration: "2:49"},
  {title: "Bad As Me", duration: "3:10"},
  {title: "Kiss Me", duration: "3:41"},
  {title: "Satisfied", duration: "4:05"}, 
  {title: "Last Leaf", duration: "2:56"}, 
  {title: "Hell Broke Luce", duration: "3:57"}, 
  {title: "New Year's Eve", duration: "4:26"}
])

vital.songs.create([
  {title: "Last Exit", duration: "2:55"},
  {title: "Spin The Black Circle", duration: "2:48"},
  {title: "Not For You", duration: "5:53"},
  {title: "Tremor Christ", duration: "4:12"},
  {title: "Nothingman", duration: "4:36"},
  {title: "Whipping", duration: "2:34"},
  {title: "Pry, To", duration: "1:03"},
  {title: "Corduroy", duration: "4:38"},
  {title: "Bugs", duration: "2:45"},
  {title: "Satan's Bed", duration: "3:31"},
  {title: "Better Man", duration: "4:29"},
  {title: "Aya Davanita", duration: "2:58"},
  {title: "Immortality", duration: "5:29"},
  {title: "Stupidmop", duration: "7:28"}
])

whatsgoing.songs.create([
  {title: "What's Going On", duration: "3:53"},
  {title: "What's Happening Brother", duration: "2:44"},
  {title: "Flyin' High (In The Friendly Sky)", duration: "3:50"},
  {title: "Save The Children", duration: "4:03"},
  {title: "God Is Love", duration: "1:42"},
  {title: "Mercy Mercy Me (The Ecology)", duration: "3:16"},
  {title: "Right On", duration: "7:32"},
  {title: "Wholy Holy", duration: "3:08"},
  {title: "Inner City Blues (Make Me Wanna Holler)", duration: "5:33"}
])

cheap.songs.create([
  {title: "Small Town Moon", duration: "3:03"},
  {title: "Oh Marcello", duration: "2:39"},
  {title: "Don't Leave Me (Ne Me Quitte Pas)", duration: "3:40"},
  {title: "Firewood", duration: "4:55"},
  {title: "Patron Saint", duration: "3:40"},
  {title: "How", duration: "4:48"},
  {title: "All The Rowboats", duration: "3:35"},
  {title: "Ballad Of A Politician", duration: "2:14"},
  {title: "Open", duration: "4:31"},
  {title: "The Party", duration: "2:28"},
  {title: "Jessica", duration: "1:45"}
])

dua_album.songs.create([
  {title: "Genesis", duration: "3:27"},
  {title: "Lost In Your Light", duration: "3:24"},
  {title: "Hotter Than Hell", duration: "3:10"},
  {title: "Be The One", duration: "3:25"},
  {title: "IDGAF", duration: "3:38"},
  {title: "Blow Your Mind (Mwah)", duration: "2:59"},
  {title: "Garden", duration: "3:48"},
  {title: "No Goodbyes", duration: "3:36"},
  {title: "Thinking 'bout You", duration: "2:53"},
  {title: "New Rules", duration: "3:32"},
  {title: "Begging", duration: "3:14"},
  {title: "Homesick", duration: "3:50"},
])

ten.songs.create([
  {title: "Once", duration: "3:52"},
  {title: "Even Flow", duration: "4:54"},
  {title: "Alive", duration: "5:41"},
  {title: "Why Go", duration: "3:20"},
  {title: "Black", duration: "5:44"},
  {title: "Jeremy", duration: "5:19"},
  {title: "Oceans", duration: "2:42"},
  {title: "Porch", duration: "3:31"},
  {title: "Garden", duration: "4:59"},
  {title: "Deep", duration: "4:18"},
  {title: "Release", duration: "9:06"}
])

joanne.songs.create([
  {title: "Diamond Heart", duration: "3:30"},
  {title: "A-YO", duration: "3:28"},
  {title: "Joanne", duration: "3:17"},
  {title: "John Wayne", duration: "2:54"},
  {title: "Dancin' In Circles", duration: "3:27"},
  {title: "Perfect Illusion", duration: "3:02"},
  {title: "Million Reasons", duration: "3:25"},
  {title: "Sinner's Prayer", duration: "3:43"},
  {title: "Come To Mama", duration: "4:15"},
  {title: "Hey Girl", duration: "4:15"},
  {title: "Angel Down", duration: "3:49"},
  {title: "Girgio Girls", duration: "3:00"},
  {title: "Just Another Day", duration: "2:58"},
  {title: "Angel Down (Work Tape)", duration: "2:20"}
])

oops.songs.create([
  {title: "Oops!... I Did It Again", duration: "3:31"},
  {title: "Stronger", duration: "3:23"},
  {title: "Don't Go Knockin' On My Door", duration: "3:44"},
  {title: "(I Can't Get No) Satisfaction", duration: "4:26"},
  {title: "Don't Let Me Be The Last To Know", duration: "3:51"},
  {title: "What U See (Is What U Get)", duration: "3:37"},
  {title: "Lucky", duration: "3:26"},
  {title: "One Kiss From You", duration: "3:26"},
  {title: "Where Are You Now", duration: "4:39"},
  {title: "Can't Make You Love Me", duration: "3:17"},
  {title: "When Your Eyes Say It", duration: "4:30"},
  {title: "Dear Diary", duration: "2:47"}
])

sweet.songs.create([
  {title: "Raindrops (An Angel Cried)", duration: "0:38"},
  {title: "Blazed", duration: "3:16"},
  {title: "The Light Is Coming", duration: "3:48"},
  {title: "R.E.M.", duration: "4:06"},
  {title: "God Is A Woman", duration: "3:18"},
  {title: "Sweetener", duration: "3:28"},
  {title: "Successful", duration: "3:47"},
  {title: "Everytime", duration: "2:52"},
  {title: "Breathin", duration: "3:18"},
  {title: "No Tears Left To Cry", duration: "3:26"},
  {title: "Borderline", duration: "2:58"},
  {title: "Better Off", duration: "2:51"},
  {title: "Goodnight N Go", duration: "3:10"},
  {title: "Pete Davidson", duration: "1:14"},
  {title: "Get Well Soon", duration: "5:22"}
])

argue.songs.create([
  {title: "Ode To My Family", duration: "4:31"},
  {title: "I Can't Be With You", duration: "3:08"},
  {title: "Twenty One", duration: "3:08"},
  {title: "Zombie", duration: "5:06"},
  {title: "Empty", duration: "3:26"},
  {title: "Everytihng I Said", duration: "3:53"},
  {title: "The Icicle Melts", duration: "2:54"},
  {title: "Disappointment", duration: "4:15"},
  {title: "Ridiculous Thoughts", duration: "4:31"},
  {title: "Dreaming My Dreams", duration: "3:37"},
  {title: "Yeat's Grave", duration: "3:00"},
  {title: "Daffodil Lament", duration: "6:14"},
  {title: "No Need To Argue", duration: "2:55"}
])

thriller.songs.create([
  {title: "Wanna Be Startin' Somethin'", duration: ":"},
  {title: "Baby Be Mine", duration: ":"},
  {title: "The Girl Is Mine", duration: ":"},
  {title: "Thriller", duration: ":"},
  {title: "Beat It", duration: ":"},
  {title: "Billie Jean", duration: ":"},
  {title: "Human Nature", duration: ":"},
  {title: "P.Y.T. (Pretty Young Thing)", duration: ":"},
  {title: "The Lady In My Life", duration: ":"},
  {title: "Excerpt From Thriller Voiceover Session", duration: ":"} 
])

creep.songs.create([
  {title: "Heart Attack", duration: "3:44"},
  {title: "Coast To Coast", duration: "3:56"},
  {title: "ABC 123", duration: "3:34"},
  {title: "Now As Then", duration: "3:52"},
  {title: "Honesty", duration: "3:39"},
  {title: "Colonizer", duration: "3:54"},
  {title: "Look At Your Hands", duration: "3:46"},
  {title: "Home", duration: "4:18"},
  {title: "Hammer", duration: "3:15"},
  {title: "Who Are You", duration: "3:18"},
  {title: "Private Life", duration: "3:20"},
  {title: "Free", duration: "3:42"}
])

rubber.songs.create([
  {title: "Drive My Car", duration: "2:29"},
  {title: "Norwegian Wood (This Bird Has Flown)", duration: "2:05"},
  {title: "You Won't See Me", duration: "3:20"},
  {title: "Nowhere Man", duration: "2:44"},
  {title: "Think For Yourself", duration: "2:19"},
  {title: "The Word", duration: "2:43"},
  {title: "Michelle", duration: "2:42"},
  {title: "What Goes On", duration: "2:49"},
  {title: "Girl", duration: "2:32"},
  {title: "I'm Looking Through You", duration: "2:26"},
  {title: "In My Life", duration: "2:26"},
  {title: "Wait", duration: "2:15"},
  {title: "If I Needed Someone", duration: "2:22"},
  {title: "Run For Your Life", duration: "2:23"}
])

unplugged.songs.create([
  {title: "About A Girl", duration: "3:37"},
  {title: "Come As You Are", duration: "4:14"},
  {title: "Jesus Doesn't Want Me For A Sunbeam", duration: "4:37"},
  {title: "The Man Who Sold The World", duration: "4:21"},
  {title: "Pennyroyal Tea", duration: "3:41"},
  {title: "Dumb", duration: "2:53"},
  {title: "Polly", duration: "3:16"},
  {title: "On A Plain", duration: "3:45"},
  {title: "Something In The Way", duration: "4:02"},
  {title: "Plateau", duration: "3:38"},
  {title: "Oh, Me", duration: "3:26"},
  {title: "Lake Of Fire", duration: "2:56"},
  {title: "All Apologies", duration: "4:23"},
  {title: "Where Did You Sleep Last Night", duration: "5:06"}
])

outer.songs.create([
  {title: "Fading", duration: "3:17"},
  {title: "Ordinary Pleasure", duration: "3:04"},
  {title: "Laws Of The Universe", duration: "2:49"},
  {title: "Miss Me", duration: "3:01"},
  {title: "New House", duration: "2:31"},
  {title: "Baby Drive It Down", duration: "3:08"},
  {title: "Freelance", duration: "3:46"},
  {title: "Who Am I", duration: "3:29"},
  {title: "Monte Carlo", duration: "2:05"},
  {title: "50-50", duration: "3:27"}
])

smiths_album.songs.create([
  {title: "Reel Around The Fountain", duration: "5:56"},
  {title: "You've Got Everything Now", duration: "4:00"},
  {title: "Miserable Lie", duration: "4:28"},
  {title: "Pretty Girls Make Graves", duration: "3:43"},
  {title: "The Hand That Rocks The Cradle", duration: "4:38"},
  {title: "This Charming Man", duration: "2:43"},
  {title: "Still Ill", duration: "3:21"},
  {title: "Hand In Glove", duration: "3:23"},
  {title: "What Difference Does It Make?", duration: "3:50"},
  {title: "I Don't Owe You Anything", duration: "4:05"},
  {title: "Suffer Little Children", duration: "5:28"}
])

fame.songs.create([
  {title: "Intro - F.A.M.E.", duration: "1:40"},
  {title: "Corazón", duration: "3:05"},
  {title: "El Préstamo", duration: "3:40"},
  {title: "Cuenta A Saldo", duration: "3:17"},
  {title: "Hangover", duration: "4:02"},
  {title: "Mi Declaración", duration: "3:46"},
  {title: "How I Like It", duration: "2:51"},
  {title: "Marinero", duration: "3:09"},
  {title: "Delincuente", duration: "3:27"},
  {title: "Condena", duration: "3:30"},
  {title: "Ojos Que No Ven", duration: "3:40"},
  {title: "La Ex", duration: "3:12"},
  {title: "Unfollow", duration: "3:21"},
  {title: "Felices Los 4", duration: "3:50"},
  {title: "Felices Los 4 [Salsa Version]", duration: "4:02"},
])

nevermind.songs.create([
  {title: "Smells Like Teen Spirit", duration: "5:02"},
  {title: "In Bloom", duration: "4:15"},
  {title: "Come As You Are", duration: "3:39"},
  {title: "Breed", duration: "3:04"},
  {title: "Lithium", duration: "4:17"},
  {title: "Polly", duration: "2:57"},
  {title: "Territorial Pissings", duration: "2:23"},
  {title: "Drain You", duration: "3:44"},
  {title: "Lounge Act", duration: "2:37"},
  {title: "Stay Away", duration: "3:32"},
  {title: "On A Plain", duration: "3:16"},
  {title: "Something In The Way / Endless, Nameless", duration: "11:02"},
])

english.songs.create([
  {title: "The English Riviera", duration: "0:37"},
  {title: "We Broke Free", duration: "4:06"},
  {title: "Everything Goes My Way", duration: "3:30"},
  {title: "The Look", duration: "4:38"},
  {title: "She Wants", duration: "3:51"},
  {title: "Trouble", duration: "4:46"},
  {title: "The Bay", duration: "4:50"},
  {title: "Loving Arm", duration: "3:31"},
  {title: "Corinne", duration: "3:16"},
  {title: "Some Written", duration: "6:03"},
  {title: "Love Underlined", duration: "5:58"}
])

anti.songs.create([
  {title: "Consideration", duration: "2:41"},
  {title: "James Joint", duration: "1:12"},
  {title: "Kiss It Better", duration: "4:13"},
  {title: "Work", duration: "3:39"},
  {title: "Desperado", duration: "3:06"},
  {title: "Woo", duration: "3:56"},
  {title: "Needed Me", duration: "3:12"},
  {title: "Yeah, I Said It", duration: "2:13"},
  {title: "Some Ol' Mistakes", duration: "6:37"},
  {title: "Never Ending", duration: "3:23"},
  {title: "Love On The Brain", duration: "3:44"},
  {title: "Higher", duration: "2:01"},
  {title: "Close To You", duration: "3:43"}
])

mised.songs.create([
  {title: "Intro", duration: "0:47"},
  {title: "Lose Ones", duration: "5:34"},
  {title: "Ex-Factor", duration: "5:27"},
  {title: "To Zion", duration: "6:09"},
  {title: "Doo Wop (That Thing)", duration: "5:20"},
  {title: "Superstar", duration: "4:57"},
  {title: "Final Hour", duration: "4:16"},
  {title: "When It Hurts So Bad", duration: "5:42"},
  {title: "I Used To Love Him", duration: "5:40"},
  {title: "Forgive Them Father", duration: "5:15"},
  {title: "Every Ghetto, Every City", duration: "5:15"},
  {title: "Nothing Even Matters", duration: "5:51"},
  {title: "Everything Is Everything", duration: "4:53"},
  {title: "The Miseducation Of Lauryn Hill", duration: "4:17"},
  {title: "Can't Take My Eyes Off Of You", duration: "3:41"},
  {title: "Tell Him", duration: "4:41"}
])

exper.songs.create([
  {title: "Purple Haze", duration: "2:51"},
  {title: "Manic Depression", duration: "3:42"},
  {title: "Hey Joe", duration: "3:30"},
  {title: "Love Or Confusion", duration: "3:13"},
  {title: "May This Be Love", duration: "3:10"},
  {title: "I Don't Live Today", duration: "3:55"},
  {title: "The Wind Cries Mary", duration: "3:21"},
  {title: "Fire", duration: "2:44"},
  {title: "Third Stone From The Sun", duration: "6:44"},
  {title: "Foxey Lady", duration: "3:19"},
  {title: "Are You Experienced?", duration: "4:16"},
  {title: "Stone Free", duration: "3:36"},
  {title: "51st Anniversary", duration: "3:16"},
  {title: "Highway Chile", duration: "3:33"},
  {title: "Can You See Me", duration: "2:33"},
  {title: "Remember", duration: "2:49"},
  {title: "Red House", duration: "3:50"}
])

phren.songs.create([
  {title: "Phrentrow", duration: "0:18"},
  {title: "Rock You", duration: "3:13"},
  {title: "!!!!!!!", duration: "0:25"},
  {title: "Sacrifice", duration: "4:45"},
  {title: "Rolling With Heat", duration: "3:42"},
  {title: "WAOK (Ay) Rollcall", duration: "1:00"},
  {title: "Thought @ Work", duration: "4:59"},
  {title: "The Seed (2.0)", duration: "4:28"},
  {title: "Break You Off", duration: "7:27"},
  {title: "Water", duration: "10:24"},
  {title: "Quills", duration: "4:22"},
  {title: "P***y Galore", duration: "4:29"},
  {title: "Complexity", duration: "4:48"},
  {title: "Something In The Way Of Things (In Town)", duration: "7:16"}
])

puravida.songs.create([
  {title: "We Rise Again", duration: "3:42"},
  {title: "Dig Deep Enough", duration: "3:43"},
  {title: "Malandrino", duration: "3:33"},
  {title: "Lost Innocent World", duration: "4:26"},
  {title: "It Is The Way You Name Your Ship", duration: "3:38"},
  {title: "The Other Side Of Rainbow", duration: "3:16"},
  {title: "Amen", duration: "4:15"},
  {title: "I Just Realized", duration: "3:27"},
  {title: "My Gypsy Auto Pilot", duration: "3:48"},
  {title: "Hieroglyph", duration: "3:49"},
  {title: "John The Conqueror (Truth Is Always The Same)", duration: "3:30"},
  {title: "We Shall Sail", duration: "10:06"}
])

blitz.songs.create([
  {title: "Zero", duration: "4:26"},
  {title: "Heads Will Roll", duration: "3:42"},
  {title: "Soft Shock", duration: "3:53"},
  {title: "Skeletons", duration: "5:02"},
  {title: "Dull Life", duration: "4:08"},
  {title: "Shame And Fortune", duration: "3:31"},
  {title: "Runaway", duration: "5:13"},
  {title: "Dragon Queen", duration: "4:02"},
  {title: "Hysteric", duration: "3:52"},
  {title: "Little Shadow", duration: "3:57"},
])

cominghome.songs.create([
  {title: "Coming Home", duration: "3:26"},
  {title: "Better Man", duration: "2:21"},
  {title: "Brown Skin Girl", duration: "3:27"},
  {title: "Smooth Sailin'", duration: "3:07"},
  {title: "Shine", duration: "3:39"},
  {title: "Lisa Sawyer", duration: "4:05"},
  {title: "Flowers", duration: "2:57"},
  {title: "Pull Away", duration: "3:02"},
  {title: "Twistin' & Groovin'", duration: "4:14"},
  {title: "River", duration: "3:59"},
])

trans.songs.create([
  {title: "Europe Endless", duration: "9:42"},
  {title: "The Hall Of Mirrors", duration: "7:57"},
  {title: "Showroom Dummies", duration: "6:15"},
  {title: "Trans Europe Express", duration: "6:36"},
  {title: "Metal On Metal", duration: "2:12"},
  {title: "Abzug", duration: "4:55"},
  {title: "Franz Schubert", duration: "4:26"},
  {title: "Endless Endless", duration: "0:57"}
])

outside.songs.create([
  {title: "Follow You Down", duration: "4:30"},
  {title: "Hey Jealousy", duration: "3:56"},
  {title: "Until I Fall Away", duration: "3:52"},
  {title: "Allison Road", duration: "3:19"},
  {title: "Mrs. Rita", duration: "4:26"},
  {title: "Found Out About You", duration: "3:54"},
  {title: "Not Only Numb", duration: "3:08"},
  {title: "Whitewash [Live]", duration: "3:19"},
  {title: "Cajun Song", duration: "2:58"},
  {title: "Just South Of Nowhere", duration: "3:27"},
  {title: "Pieces Of The Night", duration: "4:34"},
  {title: "As Long As It Matters", duration: "4:31"},
  {title: "Day Job", duration: "3:52"},
  {title: "Til I Hear It From You", duration: "3:51"},
])

falling.songs.create([
  {title: "It's All Coming Back To Me Now", duration: "7:38"},
  {title: "Because You Loved Me", duration: "4:34"},
  {title: "Falling Into You", duration: "4:18"},
  {title: "Make You Happy", duration: "4:32"},
  {title: "Seduces Me", duration: "3:46"},
  {title: "All By Myself", duration: "5:13"},
  {title: "Declaration Of Love", duration: "4:21"},
  {title: "Dreamin' Of You", duration: "5:08"},
  {title: "I Love You", duration: "5:30"},
  {title: "If That's What It Takes", duration: "4:13"},
  {title: "I Don't Know", duration: "4:39"},
  {title: "River Deep, Mountain High", duration: "4:12"},
  {title: "Call The Man", duration: "6:08"},
  {title: "Fly", duration: "2:57"}
])

electric.songs.create([
  {title: "Blue Skies", duration: "5:25"},
  {title: "Deja Vu", duration: "4:34"},
  {title: "Rocket", duration: "3:52"},
  {title: "Reach 4 Me", duration: "3:51"},
  {title: "Electic Café", duration: "4:34"},
  {title: "Life", duration: "4:09"},
  {title: "Love The Way", duration: "3:48"},
  {title: "Oceans Deep", duration: "3:18"},
  {title: "Have A Seat", duration: "3:50"},
  {title: "I'm Good", duration: "4:05"},
  {title: "So Serious", duration: "4:46"}
])

prayer.songs.create([
  {title: "Like A Prayer", duration: "5:41"},
  {title: "Express Yourself", duration: "4:39"},
  {title: "Love Song", duration: "4:53"},
  {title: "Till Death Do Us Part", duration: "5:18"},
  {title: "Promise To Try", duration: "3:38"},
  {title: "Cherish", duration: "5:04"},
  {title: "Dear Jessie", duration: "4:21"},
  {title: "Oh Father", duration: "4:59"},
  {title: "Keep It Together", duration: "5:03"},
  {title: "Spanish Eyes", duration: "5:18"},
  {title: "Act Of Contrition", duration: "2:19"}
])

channel.songs.create([
  {title: "Start", duration: "0:45"},
  {title: "Thinkin Bout You", duration: "3:20"},
  {title: "Fertilizer", duration: "0:39"},
  {title: "Sierra Leone", duration: "2:28"},
  {title: "Sweet Life", duration: "4:22"},
  {title: "No! Just Money", duration: "0:59"},
  {title: "Super Rich Kids", duration: "5:04"},
  {title: "Pilot Jones", duration: "3:04"},
  {title: "Crack Rock", duration: "3:44"},
  {title: "Pyramids", duration: "9:53"},
  {title: "Lost", duration: "3:54"},
  {title: "White", duration: "1:16"},
  {title: "Monks", duration: "3:20"},
  {title: "Bad Religion", duration: "2:55"},
  {title: "Pink Matter", duration: "4:28"},
  {title: "Forrest Gump", duration: "3:14"},
  {title: "End", duration: "2:14"}
])

swan.songs.create([
  {title: "Orlando", duration: "3:02"},
  {title: "Saint", duration: "3:12"},
  {title: "Take Your Time", duration: "2:51"},
  {title: "Hope", duration: "3:59"},
  {title: "Jewelry", duration: "4:32"},
  {title: "Family", duration: "0:41"},
  {title: "Charcoal Baby", duration: "4:02"},
  {title: "Vulture Baby", duration: "1:14"},
  {title: "Chewing Gum", duration: "4:23"},
  {title: "Holy Will", duration: "4:22"},
  {title: "Dagenham Dream", duration: "2:45"},
  {title: "Nappy Wonder", duration: "2:38"},
  {title: "Runnin'", duration: "3:55"},
  {title: "Out of Your League", duration: "2:20"},
  {title: "Minetta Creek", duration: "1:58"},
  {title: "Some", duration: "3:33"}
])

blueprint.songs.create([
  {title: "The Ruler's Back", duration: "3:50"},
  {title: "Takeover", duration: "5:13"},
  {title: "Izzo (H.O.V.A.)", duration: "4:01"},
  {title: "Girls, Girls, Girls", duration: "4:35"},
  {title: "Jigga That N***a", duration: "3:24"},
  {title: "U Don't Know", duration: "3:19"},
  {title: "Hova' Hovito", duration: "4:33"},
  {title: "Heart Of The City (Ain't No Love)", duration: "3:43"},
  {title: "Never Change", duration: "3:59"},
  {title: "Song Cry", duration: "5:04"},
  {title: "All I Need", duration: "4:29"},
  {title: "Renegade", duration: "5:38"},
  {title: "Blueprint (Momma Loves Me)", duration: "12:08"}
])

selfportrait.songs.create([
  {title: "All The Tired Horses", duration: "3:12"},
  {title: "Alberta #1", duration: "2:57"},
  {title: "I Forgot More Than You'll Ever Know", duration: "2:23"},
  {title: "Days of `49`", duration: "5:27"},
  {title: "Early Mornin' Rain", duration: "3:34"},
  {title: "In Search of Little Sadie", duration: "2:27"},
  {title: "Let It be Me", duration: "3:00"},
  {title: "Little Sadie", duration: "2:00"},
  {title: "Woogie Boogie", duration: "2:06"},
  {title: "Belle Isle", duration: "2:30"},
  {title: "Living the Blues", duration: "2:42"},
  {title: "Like a Rolling Stone (Live)", duration: "5:18"},
  {title: "Copper Kettle", duration: "3:34"},
  {title: "Gotta Travel On", duration: "3:08"},
  {title: "Blue Moon", duration: "2:29"},
  {title: "The Boxer", duration: "2:48"},
  {title: "(Quinn the Eskimo) The Mighty Quinn (Live)", duration: "2:48"},
  {title: "Take Me as I Am (Or Let Me Go)", duration: "3:03"},
  {title: "Take a Message to Mary", duration: "2:46"},
  {title: "It Hurts Me Too", duration: "3:15"},
  {title: "Minstrel Boy (Live)", duration: "3:32"},
  {title: "She Belongs to Me (Live)", duration: "2:43"},
  {title: "Wigwam", duration: "3:09"},
  {title: "Alberta #2", duration: "3:12"}
])

overgrown.songs.create([
  {title: "Overgrown", duration: "5:00"},
  {title: "I Am Sold", duration: "4:04"},
  {title: "Life Round Here", duration: "3:37"},
  {title: "Take A Fall For Me", duration: "3:34"},
  {title: "Retrograde", duration: "3:43"},
  {title: "DLM", duration: "2:26"},
  {title: "Digital Lion", duration: "4:47"},
  {title: "Voyeur", duration: "4:17"},
  {title: "To The Last", duration: "4:19"},
  {title: "Our Love Comes Back", duration: "3:39"}
])


#### SPARKIFY PLAYLISTS

party = spark.playlists.create({title: 'Party Time'})
chill = spark.playlists.create({title: 'Chill Out'})
bedroom = spark.playlists.create({title: 'In the Bedroom'})
work = spark.playlists.create({title: "Gettin' to Work"})


#### DEMO USER PLAYLISTS

study = demo.playlists.create({title: 'Study Music'})
demo.followed_playlists << study
gym = demo.playlists.create({title: "Workout Music"})
demo.followed_playlists << gym

study.songs << asleep.songs[5]
study.songs << phren.songs[12]
study.songs << nevermind.songs[2]

gym.songs << outer.songs[6]
gym.songs << mised.songs[4]
gym.songs << trans.songs[3]
gym.songs << blitz.songs[1]
gym.songs << thriller.songs[4]


#### DEMO USER FOLLOWS

demo.followed_artists << theroots
demo.followed_artists << sufjan
demo.followed_artists << vogue
demo.followed_artists << waits

demo.followed_albums << asleep
demo.followed_albums << outer
demo.followed_albums << falling
demo.followed_albums << vibras

demo.followed_songs << selfportrait.songs[14]
demo.followed_songs << mised.songs[2]
demo.followed_songs << outside.songs[2]
demo.followed_songs << whois.songs[8]