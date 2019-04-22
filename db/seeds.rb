# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)




martin = User.create({ username: 'martin', password: 'martinsparkify' })
spark = User.create({ username: 'Sparkify', password: 'martinsparkify' })
demo = User.create({ username: 'DemoUser', password: 'sparkifyonline' })

chill = demo.playlists.create(title: 'Chill Music')
demo.followed_playlists << chill

james = Artist.create({ 
  name: 'James Brown', 
  bio: 'coming soon', 
  image_url: 'https://66.media.tumblr.com/54c414ae548800cd3cfe94852b8244d3/tumblr_pqc1w1dB371vud73ko9_1280.jpg'
})
caribe = Artist.create({ 
  name: 'El Caribefunk', 
  bio: 'coming soon', 
  image_url: 'https://66.media.tumblr.com/5d23e99e0c95d7db803813ae6bc29487/tumblr_pqc1w1dB371vud73ko4_1280.jpg'
})
jack = Artist.create({ 
  name: 'Jack Johnson', 
  bio: 'coming soon', 
  image_url: 'https://66.media.tumblr.com/6bd6d43596e3788f7680fb7f18d0fd9f/tumblr_pqc1w1dB371vud73ko8_1280.jpg'
})
air = Artist.create({ 
  name: 'Air', 
  bio: 'coming soon', 
  image_url: 'https://66.media.tumblr.com/614ffbd8dfcdada188e6106da6caa213/tumblr_pqc1w1dB371vud73ko1_1280.jpg'
})
devendra = Artist.create({ 
  name: 'Devendra Banhart', 
  bio: 'coming soon', 
  image_url: 'https://66.media.tumblr.com/d8749d92caefa2822c7c99a1ec91db79/tumblr_pqc1w1dB371vud73ko5_1280.jpg'
})
can = Artist.create({ 
  name: 'Can', 
  bio: 'coming soon', 
  image_url: 'https://66.media.tumblr.com/24685b0ff44bc89ab5e311b7deaeedcc/tumblr_pqc1w1dB371vud73ko3_1280.jpg'
})
frank = Artist.create({ 
  name: 'Frank Ocean', 
  bio: 'coming soon', 
  image_url: 'https://66.media.tumblr.com/51940d25f4a379bad209f11ce0d728ef/tumblr_pqc1w1dB371vud73ko7_1280.jpg'
})
elliott = Artist.create({ 
  name: 'Elliott Smith', 
  bio: 'coming soon', 
  image_url: 'https://66.media.tumblr.com/53ee4d0581349198a7636ec5c96bf721/tumblr_pqc1w1dB371vud73ko6_1280.jpg'
})
floyd = Artist.create({ 
  name: 'Pink Floyd', 
  bio: 'coming soon', 
  image_url: 'https://66.media.tumblr.com/726e68d09b4a5ed4ef724888ec130a12/tumblr_pqc243mo5z1vud73ko1_1280.jpg'
})
billie = Artist.create({ 
  name: 'Billie Eilish', 
  bio: 'coming soon', 
  image_url: 'https://66.media.tumblr.com/e86a0339a454e12a201b8fbfc27824f6/tumblr_pqc1w1dB371vud73ko2_1280.jpg'
})
outkast = Artist.create({ 
  name: 'OutKast', 
  bio: 'coming soon', 
  image_url: 'https://66.media.tumblr.com/393b8c8e941f99604e739cf996c2cfea/tumblr_pqc1w1dB371vud73ko10_1280.jpg'
})
whitney = Artist.create({
   name: 'Whitney Houston',
   bio: 'coming soon',
   image_url: 'https://66.media.tumblr.com/b88856b1b16772254585a5631daa0402/tumblr_pqca70losw1vud73ko1_1280.jpg'
})
sublime = Artist.create({
   name: 'Sublime',
   bio: 'coming soon',
   image_url: 'https://66.media.tumblr.com/348a1c99b2da93c6feb935ba2ad45249/tumblr_pqcbzbXTLl1vud73ko3_640.jpg'
})
michael = Artist.create({
   name: 'Michael Jackson',
   bio: 'coming soon',
   image_url: 'https://66.media.tumblr.com/17192fa4e6755ecde088fe66f7f20eb4/tumblr_pqcbxz2yiC1vud73ko5_1280.jpg'
})
sufjan = Artist.create({
   name: 'Sufjan Stevens',
   bio: 'coming soon',
   image_url: 'https://66.media.tumblr.com/759fc16a29c9677a64d59486ed57e508/tumblr_pqcbzbXTLl1vud73ko4_1280.jpg'
})
roots = Artist.create({
   name: 'The Roots',
   bio: 'coming soon',
   image_url: 'https://66.media.tumblr.com/01dc50d28983d4f5ce6ea504d66e2a36/tumblr_pqcbzbXTLl1vud73ko5_1280.jpg'
})
rhianna = Artist.create({
   name: 'Rhianna',
   bio: 'coming soon',
   image_url: 'https://66.media.tumblr.com/a448918ca0d1bb42625802356f2c66cf/tumblr_pqcbzbXTLl1vud73ko1_1280.jpg'
})
velvet = Artist.create({
   name: 'The Velvet Underground',
   bio: 'coming soon',
   image_url: 'https://66.media.tumblr.com/d2fc69b631461182f6fb5a3b081f5574/tumblr_pqccj70zl71vud73ko1_1280.jpg'
})
nirvana = Artist.create({
   name: 'Nirvana',
   bio: 'coming soon',
   image_url: 'https://66.media.tumblr.com/5205cb5cca11525bf08a7648c88c73fc/tumblr_pqcbxz2yiC1vud73ko7_1280.jpg'
})
gin = Artist.create({ 
  name: 'Gin Blossoms', 
  bio: 'coming soon', 
  image_url: 'https://66.media.tumblr.com/dae3748f1620bd923042d624fdebbc46/tumblr_pqcbwvDrs51vud73ko6_1280.jpg'
})
ladyinred = Artist.create({ 
  name: 'Chris de Burgh', 
  bio: 'coming soon', 
  image_url: 'https://66.media.tumblr.com/7ed041ba1cfa5e26e59f09f4824b89dc/tumblr_pqcbuxwbES1vud73ko9_1280.jpg'
})
ace = Artist.create({ 
  name: 'Ace of Base', 
  bio: 'coming soon', 
  image_url: 'https://66.media.tumblr.com/144abd42b704da7af0d1462e57adcb9b/tumblr_pqcbuxwbES1vud73ko1_1280.jpg'
})
jimi = Artist.create({ 
  name: 'Jimi Hendrix', 
  bio: 'coming soon', 
  image_url: 'https://66.media.tumblr.com/1eb34c81de2a872978d7972ea8fad8dd/tumblr_pqcbwvDrs51vud73ko9_1280.jpg'
})
kraft = Artist.create({ 
  name: 'Kraftwerk', 
  bio: 'coming soon', 
  image_url: 'https://66.media.tumblr.com/365bf60aa4aaaae4dabd7eeedf80654b/tumblr_pqcbxz2yiC1vud73ko1_1280.gif'
})
tlc = Artist.create({ 
  name: 'TLC', 
  bio: 'coming soon', 
  image_url: 'https://66.media.tumblr.com/69d14a43c0d977940785318d2f3b47f6/tumblr_pqcbzbXTLl1vud73ko6_1280.jpg'
})
vogue = Artist.create({ 
  name: 'En Vogue', 
  bio: 'coming soon', 
  image_url: 'https://66.media.tumblr.com/f2393f204b1e6c102f75958d9f1d8728/tumblr_pqcbzbXTLl1vud73ko9_1280.jpg'
})
celine = Artist.create({ 
  name: 'Celine Dion', 
  bio: 'coming soon', 
  image_url: 'https://66.media.tumblr.com/bdf724cf8497504a9e32902958847a1e/tumblr_pqcbuxwbES1vud73ko7_1280.jpg'
})
onda = Artist.create({ 
  name: 'Onda Vaga', 
  bio: 'coming soon', 
  image_url: 'https://66.media.tumblr.com/c065de27c9b33c111d1292692c275184/tumblr_pqcbxz2yiC1vud73ko8_1280.jpg'
})
blood = Artist.create({ 
  name: 'Blood Orange', 
  bio: 'coming soon', 
  image_url: 'https://66.media.tumblr.com/91a2aac79c055dd9452f01b05606d486/tumblr_pqcbuxwbES1vud73ko5_1280.jpg'
})
internet = Artist.create({ 
  name: 'The Internet', 
  bio: 'coming soon', 
  image_url: 'https://66.media.tumblr.com/6d90ec4174a6c7989338881d986b22c4/tumblr_pqcbwvDrs51vud73ko7_1280.jpg'
})
bomba = Artist.create({ 
  name: 'Bomba Estereo', 
  bio: 'coming soon', 
  image_url: 'https://66.media.tumblr.com/40bacfb8fc9419ce04031970f9e2ec0c/tumblr_pqcbuxwbES1vud73ko6_1280.jpg'
})
esteman = Artist.create({ 
  name: 'Esteman', 
  bio: 'coming soon', 
  image_url: 'https://66.media.tumblr.com/80194cda49201475f8256e9faff7b87c/tumblr_pqcbwvDrs51vud73ko5_1280.jpg'
})
kindness = Artist.create({ 
  name: 'Kindness', 
  bio: 'coming soon', 
  image_url: 'https://66.media.tumblr.com/e1298c52c1b16b35ba9984a48fdd29cf/tumblr_pqccksTKaf1vud73ko1_1280.jpg'
})
william = Artist.create({ 
  name: 'William Onyeabor', 
  bio: 'coming soon', 
  image_url: 'https://66.media.tumblr.com/28addf5b53a5721dbdb60383281c1a2d/tumblr_pqcbxz2yiC1vud73ko9_1280.jpg'
})
neworder = Artist.create({ 
  name: 'New Order', 
  bio: 'coming soon', 
  image_url: 'https://66.media.tumblr.com/17da8426d9bd2a4b16834f472af735de/tumblr_pqcbxz2yiC1vud73ko6_1280.jpg'
})
dylan = Artist.create({ 
  name: 'Bob Dylan', 
  bio: 'coming soon', 
  image_url: 'https://66.media.tumblr.com/07fd19d5684bad849dd719e4baf5464e/tumblr_pqcbwvDrs51vud73ko4_1280.jpg'
})
cure = Artist.create({ 
  name: 'The Cure', 
  bio: 'coming soon', 
  image_url: 'https://66.media.tumblr.com/754124b21dfdcb32fe5756d33071009c/tumblr_pqcbwvDrs51vud73ko2_1280.jpg'
})
amy = Artist.create({ 
  name: 'Amy Winehouse', 
  bio: 'coming soon', 
  image_url: 'https://66.media.tumblr.com/4a85ee4ee5fad709faf140163dcb28cd/tumblr_pqcbuxwbES1vud73ko2_1280.jpg'
})
gorillaz = Artist.create({ 
  name: 'Gorillaz', 
  bio: 'coming soon', 
  image_url: 'https://66.media.tumblr.com/2149ae4ddab556578a4ca32e761b1ebb/tumblr_pqcclyjAP11vud73ko1_1280.jpg'
})
madonna = Artist.create({ 
  name: 'Madonna', 
  bio: 'coming soon', 
  image_url: 'https://66.media.tumblr.com/ddbfd22b28a94e7e2a36559908b161c9/tumblr_pqcbxz2yiC1vud73ko3_1280.jpg'
})
britney = Artist.create({ 
  name: 'Britney Spears', 
  bio: 'coming soon', 
  image_url: 'https://66.media.tumblr.com/28053e69b7a3f017be9e7bcca8d599ba/tumblr_pqcbuxwbES1vud73ko8_1280.jpg'
})
cranberries = Artist.create({ 
  name: 'The Cranberries', 
  bio: 'coming soon', 
  image_url: 'https://66.media.tumblr.com/61f9abccdbe3b81f9cc4d4c91dae715b/tumblr_pqcbwvDrs51vud73ko1_1280.jpg'
})
yeah = Artist.create({ 
  name: 'Yeah Yeah Yeahs', 
  bio: 'coming soon', 
  image_url: 'https://66.media.tumblr.com/9ca19b2ac13eead8ac3ee112a05fa971/tumblr_pqcbzr4PUE1vud73ko2_1280.jpg'
})
dua = Artist.create({ 
  name: 'Dua Lipa', 
  bio: 'coming soon', 
  image_url: 'https://66.media.tumblr.com/798dc6fc69aa7022cad7f4be73e6ab97/tumblr_pqcbwvDrs51vud73ko3_1280.jpg'
})
ariana = Artist.create({ 
  name: 'Ariana Grande', 
  bio: 'coming soon', 
  image_url: 'https://66.media.tumblr.com/acc4a392af8bfba8dc3cd2c7f4cea272/tumblr_pqcbuxwbES1vud73ko3_1280.jpg'
})
beach = Artist.create({ 
  name: 'The Beach Boys', 
  bio: 'coming soon', 
  image_url: 'https://66.media.tumblr.com/c7962772e5b1b97fa0af3b3c428367ae/tumblr_pqcbuxwbES1vud73ko4_1280.jpg'
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
marilyn = Artist.create({ 
  name: 'Marilyn Manson', 
  bio: 'coming soon', 
  image_url: 'https://66.media.tumblr.com/2348bd93f0cdf70883ab2b5fcadca8a8/tumblr_pqcbxz2yiC1vud73ko4_1280.jpg'
})
shehim = Artist.create({ 
  name: 'She & Him', 
  bio: 'coming soon', 
  image_url: 'https://66.media.tumblr.com/88e2b09418dbd8c122984afa3e80ebc8/tumblr_pqccpf0CrU1vud73ko1_1280.jpg'
})

demo.followed_artists << can
demo.followed_artists << cure
demo.followed_artists << jimi
demo.followed_artists << sufjan
demo.followed_artists << neworder
demo.followed_artists << kindness
demo.followed_artists << blood

soul = james.albums.create({ 
  title: 'Soul on Top', 
  genre: 'Funk', 
  year: 1970,
  image_url: 'https://66.media.tumblr.com/b843696452ecb2dc67a829977232e4e0/tumblr_pqc3eb7DCZ1vud73ko9_640.png'
})
playa = caribe.albums.create({ 
  title: 'El Playaman', 
  genre: 'Latin', 
  year: 2014,
  image_url: 'https://66.media.tumblr.com/3515aa4fa3d87dff65cce208801cb864/tumblr_pqc3eb7DCZ1vud73ko8_500.jpg'
})
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
mala = devendra.albums.create({ 
  title: 'Mala', 
  genre: 'Acoustic', 
  year: 2013,
  image_url: 'https://66.media.tumblr.com/a311f4b82dfc7da995a3a8f091704e65/tumblr_pqc3eb7DCZ1vud73ko6_640.jpg'
})
ege = can.albums.create({ 
  title: 'Ege Bamyasi', 
  genre: 'Rock', 
  year: 1972,
  image_url: 'https://66.media.tumblr.com/123354f8dc18bf364a203dfda2ea3346/tumblr_pqc3eb7DCZ1vud73ko4_400.jpg'
})
blonde = frank.albums.create({ 
  title: 'Blonde', 
  genre: 'Hip-Hop', 
  year: 2016 ,
  image_url: 'https://66.media.tumblr.com/ef3756ed57dd995f2caabe87f59066b7/tumblr_pqc3eb7DCZ1vud73ko2_640.jpg'
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
  year: 1973,
  image_url: 'https://66.media.tumblr.com/977c66295149f4861a6ba132e1edd52e/tumblr_pqc3eb7DCZ1vud73ko3_1280.jpg'
})
atliens = outkast.albums.create({ 
  title: 'ATLiens', 
  genre: 'Hip-Hop', 
  year: 1996,
  image_url: 'https://66.media.tumblr.com/bd1de7bf21cc6fe76773bc4a1b0e7504/tumblr_pqc3eb7DCZ1vud73ko1_640.png'
})

demo.followed_albums << mala
demo.followed_albums << moon

soul.songs.create([
  { title: "That's My Desire", duration: '4:07' },
  { title: "Your Cheatin' Heart", duration: '2:56' },
  { title: 'What Kind Of Fool Am I?', duration: '3:02' },
  { title: "It's A Man's, Man's, Man's World", duration: '6:36' },
  { title: 'The Man In The Glass', duration: '5:52' },
  { title: "It's Magic", duration: '3:10' },
  { title: 'September Song', duration: '4:59' },
  { title: 'For Once In My Life', duration: '4:40' },
  { title: 'Everyday I Have The Blues', duration: '4:25' },
  { title: 'I Need Your Key (To Turn Me On)', duration: '3:43' },
  { title: "Papa's Got A Brand New Bag", duration: '4:38' },
  { title: 'There Was A Time', duration: '3:05' }
])

demo.followed_songs << soul.songs[3]

playa.songs.create([
  { title: 'El Playaman', duration: '4:10' },
  { title: 'Aguacero', duration: '3:51' },
  { title: 'Cirilo', duration: '3:12' },
  { title: 'Camina Maria', duration: '4:17' },
  { title: 'Cadencias', duration: '1:27' },
  { title: 'La Chamuyera', duration: '3:23' },
  { title: 'Musica', duration: '2:37' },
  { title: 'Fastidiado De Lo Bien', duration: '3:10' },
  { title: 'San Antonio Hd', duration: '3:17' }
])

demo.followed_songs << playa.songs[7]

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

chill.songs << asleep.songs[9]
demo.followed_songs << asleep.songs[5]

onandon.songs.create([
  { title: 'Times Like These', duration: '2:21' },
  { title: 'The Horizon Has Been Defeated', duration: '2:32' },
  { title: 'Traffic In The Sky', duration: '2:50' },
  { title: 'Taylor', duration: '3:59' },
  { title: 'Gone', duration: '2:08' },
  { title: 'Cupid', duration: '1:06' },
  { title: 'Wasting Time', duration: '3:50' },
  { title: 'Holes To Heaven', duration: '2:54' },
  { title: 'Dreams Be Dreams', duration: '2:13' },
  { title: 'Tomorrow Morning', duration: '2:50' },
  { title: 'Fall Line', duration: '1:34' },
  { title: 'Cookie Jar', duration: '2:56' },
  { title: 'Rodeo Clowns', duration: '2:37' },
  { title: 'Cocoon', duration: '4:11' },
  { title: 'Mediocre Bad Guys', duration: '3:00' },
  { title: 'Symbol In My Driveway', duration: '2:51' },
])

chill.songs << onandon.songs[7]

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

chill.songs << talkie.songs[5]

mala.songs.create([
  { title: 'Golden Girls', duration: '1:36' },
  { title: 'Daniel', duration: '3:06' },
  { title: 'Für Hildegard von Bingen', duration: '2:35' },
  { title: 'Never Seen Such Good Things', duration: '3:14' },
  { title: 'Mi Negrita', duration: '3:25' },
  { title: 'Your Fine Petting Duck', duration: '5:46' },
  { title: 'The Ballad of Keenan Milton', duration: '2:13' },
  { title: 'A Gain', duration: '1:35' },
  { title: 'Won''t You Come Over', duration: '3:35' },
  { title: 'Cristobal Risquez', duration: '2:28' },
  { title: 'Hatchet Wound', duration: '3:09' },
  { title: 'Mala', duration: '1:08' },
  { title: 'Won''t You Come Home', duration: '3:32' },
  { title: 'Taurobolium', duration: '3:16' }
])

chill.songs << mala.songs[3]

ege.songs.create([
  { title: 'Pinch', duration: '9:29' },
  { title: 'Sing Swan Song', duration: '4:49' },
  { title: 'One More Night', duration: '5:35' },
  { title: 'Vitamin C', duration: '3:34' },
  { title: 'Soup', duration: '10:32' },
  { title: 'I''m So Green', duration: '3:05' },
  { title: 'Spoon', duration: '3:06' }
])

chill.songs << ege.songs[2]

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

chill.songs << blonde.songs[6]
demo.followed_songs << blonde.songs[0]

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

chill.songs << either.songs[11]

moon.songs.create([
  { title: 'Speak to Me', duration: '1:05' },
  { title: 'Breath (In The Air)', duration: '2:50' },
  { title: 'On the Run', duration: '3:45' },
  { title: 'Time', duration: '6:54:' },
  { title: 'The Great Gig in the Sky', duration: '4:44' },
  { title: 'Money', duration: '6:23' },
  { title: 'Us and Them', duration: '7:49' },
  { title: 'Any Colour You Like', duration: '3:26' },
  { title: 'Brain Damage', duration: '3:47' },
  { title: 'Eclipse', duration: '2:10' }
])

chill.songs << moon.songs[6]

atliens.songs.create([
  { title: 'You May Die (Intro)', duration: '1:06' },
  { title: 'Two Dope Boyz (In a Cadillac)', duration: '2:42' },
  { title: 'ATLiens', duration: '3:51' },
  { title: 'Wheelz of Steel', duration: '4:03' },
  { title: 'Jazzy Belle', duration: '4:12' },
  { title: 'Elevators (Me & You)', duration: '4:25' },
  { title: 'Ova Da Wudz', duration: '3:48' },
  { title: 'Babylon', duration: '4:25' },
  { title: 'Wailin''', duration: '1:59' },
  { title: 'Mainstream', duration: '5:18' },
  { title: 'Decatur Psalm', duration: '3:58' },
  { title: 'Millennium', duration: '3:09' },
  { title: 'E.T. (Extraterrestrial)', duration: '3:07' },
  { title: '13th Floor / Growing Old', duration: '6:51' }
])

demo.followed_songs << atliens.songs[3]
