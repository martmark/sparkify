# require 'open-uri';

# # This file should contain all the record creation needed to seed the database with its default values.
# # The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
# #
# # Examples:
# #
# #   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
# #   Character.create(name: 'Luke', movie: movies.first)



# ### USERS

# martin = User.create({ username: 'martin', password: 'martinsparkify' })
# spark = User.create({ username: 'Sparkify', password: 'martinsparkify' })
# demo = User.create({ username: 'DemoUser', password: 'sparkifyonline' })


# ### ARTISTS

# frank = Artist.create({ 
#   name: 'Frank Ocean', 
#   bio: 'coming soon', 
#   image_url: 'https://sparkifyimages.s3.amazonaws.com/frank.jpg',
#   small_image_url: 'https://sparkifyimages.s3.amazonaws.com/frank-small.jpg'
# })

# jack = Artist.create({ 
#   name: 'Jack Johnson', 
#   bio: 'coming soon', 
#   image_url: 'https://sparkifyimages.s3.amazonaws.com/jack.jpg',
#   small_image_url: 'https://sparkifyimages.s3.amazonaws.com/jack-small.jpg'
# })

# tune = Artist.create({
#   name: 'tUnE-yArDs',
#   bio: 'coming',
#   image_url: 'https://sparkifyimages.s3.amazonaws.com/tune.jpg',
#   small_image_url: 'https://sparkifyimages.s3.amazonaws.com/tune-small.jpg'
# })

# air = Artist.create({ 
#   name: 'Air', 
#   bio: 'coming soon', 
#   image_url: 'https://sparkifyimages.s3.amazonaws.com/air.jpg',
#   small_image_url: 'https://sparkifyimages.s3.amazonaws.com/air-small.jpg'
# })

# can = Artist.create({ 
#   name: 'Can', 
#   bio: 'coming soon', 
#   image_url: 'https://sparkifyimages.s3.amazonaws.com/can.jpg',
#   small_image_url: 'https://sparkifyimages.s3.amazonaws.com/can-small.jpg'
# })

# elliott = Artist.create({ 
#   name: 'Elliott Smith', 
#   bio: 'coming soon', 
#   image_url: 'https://sparkifyimages.s3.amazonaws.com/elliott.jpg',
#   small_image_url: 'https://sparkifyimages.s3.amazonaws.com/elliott-small.jpg'
# })

# floyd = Artist.create({ 
#   name: 'Pink Floyd', 
#   bio: 'coming soon', 
#   image_url: 'https://sparkifyimages.s3.amazonaws.com/floyd.jpg',
#   small_image_url: 'https://sparkifyimages.s3.amazonaws.com/floyd-small.jpg'
# })

# billie = Artist.create({ 
#   name: 'Billie Eilish', 
#   bio: 'coming soon', 
#   image_url: 'https://sparkifyimages.s3.amazonaws.com/billie.jpg',
#   small_image_url: 'https://sparkifyimages.s3.amazonaws.com/billie-small.jpg'
# })

# regina = Artist.create({
#   name: 'Regina Spektor',
#   bio: "coming",
#   image_url: 'https://sparkifyimages.s3.amazonaws.com/regina.jpg',
#   small_image_url: 'https://sparkifyimages.s3.amazonaws.com/regina-small.jpg'
# })

# michael = Artist.create({
#    name: 'Michael Jackson',
#    bio: 'coming soon',
#    image_url: 'https://sparkifyimages.s3.amazonaws.com/michael.jpg',
#   small_image_url: 'https://sparkifyimages.s3.amazonaws.com/michael-small.jpg'
# })

# sufjan = Artist.create({
#    name: 'Sufjan Stevens',
#    bio: 'coming soon',
#    image_url: 'https://sparkifyimages.s3.amazonaws.com/sufjan.jpg',
#   small_image_url: 'https://sparkifyimages.s3.amazonaws.com/sufjan-small.jpg'
# })

# roots = Artist.create({
#    name: 'The Roots',
#    bio: 'coming soon',
#    image_url: 'https://sparkifyimages.s3.amazonaws.com/roots.jpg',
#   small_image_url: 'https://sparkifyimages.s3.amazonaws.com/roots-small.jpg'
# })

# rihanna = Artist.create({
#    name: 'Rihanna',
#    bio: 'coming soon',
#    image_url: 'https://sparkifyimages.s3.amazonaws.com/rihanna.jpg',
#   small_image_url: 'https://sparkifyimages.s3.amazonaws.com/rihanna-small.jpg'
# })

# smiths = Artist.create({
#   name: 'The Smiths',
#   bio: 'coming',
#   image_url: 'https://sparkifyimages.s3.amazonaws.com/smiths.jpg',
#   small_image_url: 'https://sparkifyimages.s3.amazonaws.com/smiths-small.jpg'
# })

# nirvana = Artist.create({
#    name: 'Nirvana',
#    bio: 'coming soon',
#    image_url: 'https://sparkifyimages.s3.amazonaws.com/nirvana.jpg',
#   small_image_url: 'https://sparkifyimages.s3.amazonaws.com/nirvana-small.jpg'
# })

# gin = Artist.create({ 
#   name: 'Gin Blossoms', 
#   bio: 'coming soon', 
#   image_url: 'https://sparkifyimages.s3.amazonaws.com/gin.jpg',
#   small_image_url: 'https://sparkifyimages.s3.amazonaws.com/gin-small.jpg'
# })

# jimi = Artist.create({ 
#   name: 'Jimi Hendrix', 
#   bio: 'coming soon', 
#   image_url: 'https://sparkifyimages.s3.amazonaws.com/jimi.jpg',
#   small_image_url: 'https://sparkifyimages.s3.amazonaws.com/jimi-small.jpg'
# })

# kraft = Artist.create({ 
#   name: 'Kraftwerk', 
#   bio: 'coming soon', 
#   image_url: 'https://sparkifyimages.s3.amazonaws.com/kraft.jpg',
#   small_image_url: 'https://sparkifyimages.s3.amazonaws.com/kraft-small.jpg'
# })

# vogue = Artist.create({ 
#   name: 'En Vogue', 
#   bio: 'coming soon', 
#   image_url: 'https://sparkifyimages.s3.amazonaws.com/vogue.jpg',
#   small_image_url: 'https://sparkifyimages.s3.amazonaws.com/vogue-small.jpg'
# })

# celine = Artist.create({ 
#   name: 'Celine Dion', 
#   bio: 'coming soon', 
#   image_url: 'https://sparkifyimages.s3.amazonaws.com/celine.jpg',
#   small_image_url: 'https://sparkifyimages.s3.amazonaws.com/celine-small.jpg'
# })

# blood = Artist.create({ 
#   name: 'Blood Orange', 
#   bio: 'coming soon', 
#   image_url: 'https://sparkifyimages.s3.amazonaws.com/blood.jpg',
#   small_image_url: 'https://sparkifyimages.s3.amazonaws.com/blood-small.jpg'
# })

# bomba = Artist.create({ 
#   name: 'Bomba Estereo', 
#   bio: 'coming soon', 
#   image_url: 'https://sparkifyimages.s3.amazonaws.com/bomba.jpg',
#   small_image_url: 'https://sparkifyimages.s3.amazonaws.com/bomba-small.jpg'
# })

# william = Artist.create({ 
#   name: 'William Onyeabor', 
#   bio: 'coming soon', 
#   image_url: 'https://sparkifyimages.s3.amazonaws.com/william.jpg',
#   small_image_url: 'https://sparkifyimages.s3.amazonaws.com/william-small.jpg'
# })

# dylan = Artist.create({ 
#   name: 'Bob Dylan', 
#   bio: 'coming soon', 
#   image_url: 'https://sparkifyimages.s3.amazonaws.com/dylan.jpg',
#   small_image_url: 'https://sparkifyimages.s3.amazonaws.com/dylan-small.jpg'
# })

# gogol = Artist.create({
#   name: 'Gogol Bordello',
#   bio: 'coming',
#   image_url: 'https://sparkifyimages.s3.amazonaws.com/gogol.jpg',
#   small_image_url: 'https://sparkifyimages.s3.amazonaws.com/gogol-small.jpg'
# })

# amy = Artist.create({ 
#   name: 'Amy Winehouse', 
#   bio: 'coming soon', 
#   image_url: 'https://sparkifyimages.s3.amazonaws.com/amy.jpg',
#   small_image_url: 'https://sparkifyimages.s3.amazonaws.com/amy-small.jpg'
# })

# brandy = Artist.create({
#   name: "Brandy",
#   bio: 'coming',
#   image_url: 'https://sparkifyimages.s3.amazonaws.com/brandy.jpg',
#   small_image_url: 'https://sparkifyimages.s3.amazonaws.com/brandy-small.jpg'
# })

# beatles = Artist.create({
#   name: 'The Beatles',
#   bio: 'coming soon',
#   image_url: 'https://sparkifyimages.s3.amazonaws.com/beatles.jpg',
#   small_image_url: 'https://sparkifyimages.s3.amazonaws.com/beatles-small.jpg'
# })

# madonna = Artist.create({ 
#   name: 'Madonna', 
#   bio: 'coming soon', 
#   image_url: 'https://sparkifyimages.s3.amazonaws.com/madonna.jpg',
#   small_image_url: 'https://sparkifyimages.s3.amazonaws.com/madonna-small.jpg'
# })

# britney = Artist.create({ 
#   name: 'Britney Spears', 
#   bio: 'coming soon', 
#   image_url: 'https://sparkifyimages.s3.amazonaws.com/britney.jpg',
#   small_image_url: 'https://sparkifyimages.s3.amazonaws.com/britney-small.jpg'
# })

# jayz = Artist.create({
#   name: 'Jay-Z',
#   bio: 'coming',
#   image_url: 'https://sparkifyimages.s3.amazonaws.com/jayz.jpg',
#   small_image_url: 'https://sparkifyimages.s3.amazonaws.com/jayz-small.jpg'
# })

# cranberries = Artist.create({ 
#   name: 'The Cranberries', 
#   bio: 'coming soon', 
#   image_url: 'https://sparkifyimages.s3.amazonaws.com/cranberries.jpg',
#   small_image_url: 'https://sparkifyimages.s3.amazonaws.com/cranberries-small.jpg'
# })

# devendra = Artist.create({
#   name: 'Devendra Banhart',
#   bio: 'coming',
#   image_url: 'https://sparkifyimages.s3.amazonaws.com/devendra.jpg',
#   small_image_url: 'https://sparkifyimages.s3.amazonaws.com/devendra-small.jpg'
# })

# dela = Artist.create({
#   name: 'De La Soul',
#   bio: 'coming',
#   image_url: 'https://sparkifyimages.s3.amazonaws.com/dela.jpg',
#   small_image_url: 'https://sparkifyimages.s3.amazonaws.com/dela-small.jpg'
# })

# yeah = Artist.create({ 
#   name: 'Yeah Yeah Yeahs', 
#   bio: 'coming soon', 
#   image_url: 'https://sparkifyimages.s3.amazonaws.com/yeah.jpg',
#   small_image_url: 'https://sparkifyimages.s3.amazonaws.com/yeah-small.jpg'
# })

# flaming = Artist.create({
#   name: 'Flaming Lips',
#   bio: 'coming',
#   image_url: 'https://sparkifyimages.s3.amazonaws.com/flaming.jpg',
#   small_image_url: 'https://sparkifyimages.s3.amazonaws.com/flaming-small.jpg'
# })

# pearl = Artist.create({
#   name: 'Pearl Jam',
#   bio: 'coming',
#   image_url: 'https://sparkifyimages.s3.amazonaws.com/pearl.jpg',
#   small_image_url: 'https://sparkifyimages.s3.amazonaws.com/pearl-small.jpg'
# })

# dua = Artist.create({ 
#   name: 'Dua Lipa', 
#   bio: 'coming soon', 
#   image_url: 'https://sparkifyimages.s3.amazonaws.com/dua.jpg',
#   small_image_url: 'https://sparkifyimages.s3.amazonaws.com/dua-small.jpg'
# })

# ariana = Artist.create({ 
#   name: 'Ariana Grande', 
#   bio: 'coming soon', 
#   image_url: 'https://sparkifyimages.s3.amazonaws.com/ariana.jpg',
#   small_image_url: 'https://sparkifyimages.s3.amazonaws.com/ariana-small.jpg'
# })

# gaga = Artist.create({
#   name: 'Lady Gaga',
#   bio: 'coming soon',
#   image_url: 'https://sparkifyimages.s3.amazonaws.com/gaga.jpg',
#   small_image_url: 'https://sparkifyimages.s3.amazonaws.com/gaga-small.jpg'
# })

# waits = Artist.create({ 
#   name: 'Tom Waits', 
#   bio: 'coming soon', 
#   image_url: 'https://sparkifyimages.s3.amazonaws.com/waits.jpg',
#   small_image_url: 'https://sparkifyimages.s3.amazonaws.com/waits-small.jpg'
# })

# toro = Artist.create({ 
#   name: 'Toro Y Moi', 
#   bio: 'coming soon', 
#   image_url: 'https://sparkifyimages.s3.amazonaws.com/toro.jpg',
#   small_image_url: 'https://sparkifyimages.s3.amazonaws.com/toro-small.jpg'
# })

# blake = Artist.create({ 
#   name: 'James Blake', 
#   bio: 'coming soon', 
#   image_url: 'https://sparkifyimages.s3.amazonaws.com/blake.jpg',
#   small_image_url: 'https://sparkifyimages.s3.amazonaws.com/blake-small.jpg'
# })

# miles = Artist.create({
#   name: 'Miles Davis',
#   bio: 'coming soon',
#   image_url: 'https://sparkifyimages.s3.amazonaws.com/miles.jpg',
#   small_image_url: 'https://sparkifyimages.s3.amazonaws.com/miles-small.jpg'
# })

# jbalvin = Artist.create({
#   name: 'J Balvin',
#   bio: 'coming',
#   image_url: 'https://sparkifyimages.s3.amazonaws.com/jbalvin.jpg',
#   small_image_url: 'https://sparkifyimages.s3.amazonaws.com/jbalvin-small.jpg'
# })

# marvin = Artist.create({
#   name: 'Marvin Gaye',
#   bio: 'coming',
#   image_url: 'https://sparkifyimages.s3.amazonaws.com/marvin.jpg',
#   small_image_url: 'https://sparkifyimages.s3.amazonaws.com/marvin-small.jpg'
# })

# maluma = Artist.create({
#   name: 'Maluma',
#   bio: 'coming',
#   image_url: 'https://sparkifyimages.s3.amazonaws.com/maluma.jpg',
#   small_image_url: 'https://sparkifyimages.s3.amazonaws.com/maluma-small.jpg'
# })

# metro = Artist.create({
#   name: 'Metronomy',
#   bio: 'coming',
#   image_url: 'https://sparkifyimages.s3.amazonaws.com/metro.jpg',
#   small_image_url: 'https://sparkifyimages.s3.amazonaws.com/metro-small.jpg'
# })

# lauryn = Artist.create({
#   name: 'Lauryn Hill',
#   bio: 'coming',
#   image_url: 'https://sparkifyimages.s3.amazonaws.com/lauryn.jpg',
#   small_image_url: 'https://sparkifyimages.s3.amazonaws.com/lauryn-small.jpg'
# })

# leon = Artist.create({
#   name: 'Leon Bridges',
#   bio: 'coming',
#   image_url: 'https://sparkifyimages.s3.amazonaws.com/leon.jpg',
#   small_image_url: 'https://sparkifyimages.s3.amazonaws.com/leon-small.jpg'
# })

nico = Artist.create({
  name: "Nico",
  bio: "Coming",
  image_url: "https://sparkifyimages.s3.amazonaws.com/nico.jpg",
  small_image_url: 'https://sparkifyimages.s3.amazonaws.com/nico-small.jpg'
})

bob = Artist.create({
  name: "Bob Marley",
  bio: "Coming",
  image_url: "https://sparkifyimages.s3.amazonaws.com/bob.jpg",
  small_image_url: 'https://sparkifyimages.s3.amazonaws.com/bob-small.jpg'
})

janet = Artist.create({
  name: "Janet Jackson",
  bio: "Coming",
  image_url: "https://sparkifyimages.s3.amazonaws.com/janet.jpg",
  small_image_url: 'https://sparkifyimages.s3.amazonaws.com/janet-small.jpg'
})

wilco = Artist.create({
  name: "Wilco",
  bio: "Coming",
  image_url: "https://sparkifyimages.s3.amazonaws.com/wilco.jpg",
  small_image_url: 'https://sparkifyimages.s3.amazonaws.com/wilco-small.jpg'
})

# ## ALBUMS

# asleep = billie.albums.create({ 
#   title: 'WHEN WE ALL FALL ASLEEP, WHERE DO WE GO?', 
#   genre: 'Pop', year: 2019,
#   image_url: 'https://sparkifyimages.s3.amazonaws.com/asleep.jpg'
# })

# asleep_songs = [
#   { title: '!!!!!!!', duration: '0:14' },
#   { title: 'bad guy', duration: '3:14' },
#   { title: 'xanny', duration: '4:04' },
#   { title: 'you should see me in a crown', duration: '3:01' },
#   { title: 'all the good girls go to hell', duration: '2:49' },
#   { title: 'wish you were gay', duration: '3:42' },
#   { title: "when the party's over", duration: '3:16' },
#   { title: '8', duration: '2:53' },
#   { title: 'my strange addiction', duration: '3:00' },
#   { title: 'bury a friend', duration: '3:13' },
#   { title: 'ilomilo', duration: '2:36' },
#   { title: 'listen before i go', duration: '4:03' },
#   { title: 'i love you', duration: '4:52' },
#   { title: 'goodbye', duration: '1:59' }
# ]

# asleep_songs.each_with_index do |song, idx|
#   i = idx + 1
#   url = "https://s3.us-east-2.amazonaws.com/sparkify2019/asleep/#{i}.mp3"
#   title = song[:title]
#   duration = song[:duration]
#   asleep.songs.create({
#     title: "#{title}",
#     duration: "#{duration}",
#     track_url: "#{url}"
#   })
# end

# whatwill = devendra.albums.create({
#   title: 'What Will We Be',
#   genre: 'Folk',
#   year: 2009,
#   image_url: "https://sparkifyimages.s3.amazonaws.com/whatwill.jpg"
# })

# whatwill_songs = [
#   { title: "Can't Help But Smiling", duration: "2:24"},
#   { title: "Angelika", duration: "3:23"},
#   { title: "Baby", duration: "3:06"},
#   { title: "Goin' Back", duration: "3:44"},
#   { title: "First Song for B", duration: "3:00"},
#   { title: "Last Song for B", duration: "3:02"},
#   { title: "Chin Chin & Muck Muck", duration: "5:25"},
#   { title: "16th & Valencia, Roxy Music", duration: "3:00"},
#   { title: "Rats", duration: "5:08"},
#   { title: "Maria Lionza", duration: "5:50"},
#   { title: "Brindo", duration: "3:42"},
#   { title: "Meet Me at Lookout Point", duration: "3:40"},
#   { title: "Walilamdzi", duration: "2:11"},
#   { title: "Foolin'", duration: "2:43"}
# ]

# whatwill_songs.each_with_index do |song, idx|
#   i = idx + 1
#   url = "https://s3.us-east-2.amazonaws.com/sparkify2019/whatwill/#{i}.mp3"
#   title = song[:title]
#   duration = song[:duration]
#   whatwill.songs.create({
#     title: "#{title}",
#     duration: "#{duration}",
#     track_url: "#{url}"
#   })
# end

# threefeet = dela.albums.create({
#   title: '3 Feet High and Rising',
#   genre: 'Hip-Hop',
#   year: 1989,
#   image_url: "https://sparkifyimages.s3.amazonaws.com/threefeet.jpg"
# })

# threefeet_songs = [
#  { title: "Intro", duration: "1:42" },
#  { title: "The Magic Number", duration: "3:17" },
#  { title: "Change in Speak", duration: "2:33" },
#  { title: "Cool Breeze on the Rocks", duration: "0:48" },
#  { title: "Can U Keep a Secret", duration: "1:41" },
#  { title: "Jenifa Taught Me (Derwin's Revenge)", duration: "3:25" },
#  { title: "Ghetto Thang", duration: "3:36" },
#  { title: "Transmitting Live from Mars", duration: "1:12" },
#  { title: "Eye Know", duration: "4:13" },
#  { title: "Take It Off", duration: "1:53" },
#  { title: "A Little Bit of Soap", duration: "0:50" },
#  { title: "Tread Water", duration: "3:53" },
#  { title: "Potholes in My Lawn", duration: "3:50" },
#  { title: "Say No Go", duration: "4:20" },
#  { title: "Do as De La Does", duration: "2:06" },
#  { title: "Plug Tunin' (Last Chance to Comprehend)", duration: "4:13" },
#  { title: "De La Orgee", duration: "1:14" },
#  { title: "Buddy", duration: "4:55" },
#  { title: "Description", duration: "1:32" },
#  { title: "Me Myself and I", duration: "3:41" },
#  { title: "This Is a Recording 4 Living in a Fulltime Era (L.I.F.E.)", duration: "3:19" },
#  { title: "I Can Do Anything (Delacratic)", duration: "0:41" },
#  { title: "D.A.I.S.Y. Age", duration: "4:43" },
#  { title: "Plug Tunin' (Original 12\" Version)", duration: "3:44" }
# ]

# threefeet_songs.each_with_index do |song, idx|
#   i = idx + 1
#   url = "https://s3.us-east-2.amazonaws.com/sparkify2019/threefeet/#{i}.mp3"
#   title = song[:title]
#   duration = song[:duration]
#   threefeet.songs.create({
#     title: "#{title}",
#     duration: "#{duration}",
#     track_url: "#{url}"
#   })
# end

# mosaic = dela.albums.create({
#   title: "Art Official Intelligence: Mosaic Thump",
#   genre: "Hip-Hop",
#   year: 2000,
#   image_url: "https://sparkifyimages.s3.amazonaws.com/mosaic.jpg"
# })

# mosaic_songs = [
#   { title: "Spitkicker.com / Say R. (Intro)", duration: "1:20" },
#   { title: "U Can Do (Life)", duration: "4:24" },
#   { title: "My Writes", duration: "5:30" },
#   { title: "Oooh.", duration: "5:24" },
#   { title: "Thru Ya City", duration: "3:29" },
#   { title: "I.C. Y'All", duration: "3:22" },
#   { title: "View", duration: "4:19" },
#   { title: "Set The Mood", duration: "4:24" },
#   { title: "All Good?", duration: "4:59" },
#   { title: "Declaration", duration: "2:56" },
#   { title: "Squat!", duration: "4:15" },
#   { title: "Words From The Chief Rocker", duration: "1:02" },
#   { title: "With Me", duration: "4:51" },
#   { title: "Copa (Cabanga)", duration: "4:06" },
#   { title: "Foolin'", duration: "4:23" },
#   { title: "The Art of Getting Jumped", duration: "3:48" },
#   { title: "U Don't Wanna B.D.S.", duration: "4:14" }
# ]

# mosaic_songs.each_with_index do |song, idx|
#   i = idx + 1
#   url = "https://s3.us-east-2.amazonaws.com/sparkify2019/mosaic/#{i}.mp3"
#   title = song[:title]
#   duration = song[:duration]
#   mosaic.songs.create({
#     title: "#{title}",
#     duration: "#{duration}",
#     track_url: "#{url}"
#   })
# end

# brandyalbum = brandy.albums.create({
#   title: "Brandy",
#   genre: "R&B",
#   year: 1994,
#   image_url: "https://sparkifyimages.s3.amazonaws.com/brandyalbum.jpg"
# })

# brandyalbum_songs = [
#   { title: "Movin' On", duration: "4:28" },
#   { title: "Baby", duration: "5:13" },
#   { title: "Best Friend", duration: "4:49" },
#   { title: "I Wanna Be Down", duration: "4:52" },
#   { title: "I Dedicate (Part I)", duration: "1:29" },
#   { title: "Brokenhearted", duration: "5:55" },
#   { title: "I'm Yours", duration: "4:02" },
#   { title: "Sunny Day", duration: "4:30" },
#   { title: "As Long as You're Here", duration: "4:46" },
#   { title: "Always on My Mind", duration: "4:06" },
#   { title: "I Dedicate (Part II)", duration: "0:56" },
#   { title: "Love Is on My Side", duration: "5:10" },
#   { title: "Give Me You", duration: "4:26" },
#   { title: "I Dedicate (Part III)", duration: "1:02" }
# ]

# brandyalbum_songs.each_with_index do |song, idx|
#   i = idx + 1
#   url = "https://s3.us-east-2.amazonaws.com/sparkify2019/brandyalbum/#{i}.mp3"
#   title = song[:title]
#   duration = song[:duration]
#   brandyalbum.songs.create({
#     title: "#{title}",
#     duration: "#{duration}",
#     track_url: "#{url}"
#   })
# end

# mala = devendra.albums.create({
#   title: "Mala",
#   genre: "Alternative",
#   year: 2013,
#   image_url: "https://sparkifyimages.s3.amazonaws.com/mala.jpg"
# })

# mala_songs = [
#   { title: "Golden Girls", duration: "1:36" },
#   { title: "Daniel", duration: "3:06" },
#   { title: "Für Hildegard von Bingen", duration: "2:36" },
#   { title: "Never Seen Such Good Things", duration: "3:14" },
#   { title: "Mi Negrita", duration: "3:25" },
#   { title: "Your Fine Petting Duck", duration: "5:46" },
#   { title: "The Ballad of Keenan Milton", duration: "2:17" },
#   { title: "A Gain", duration: "1:35" },
#   { title: "Won't You Come Over", duration: "3:37" },
#   { title: "Cristobal Risquez", duration: "2:28" },
#   { title: "Hatchet Wound", duration: "3:10" },
#   { title: "Mala", duration: "1:08" },
#   { title: "Won't You Come Home", duration: "3:32" },
#   { title: "Taurobolium", duration: "3:17" }
# ]

# mala_songs.each_with_index do |song, idx|
#   i = idx + 1
#   url = "https://s3.us-east-2.amazonaws.com/sparkify2019/mala/#{i}.mp3"
#   title = song[:title]
#   duration = song[:duration]
#   mala.songs.create({
#     title: "#{title}",
#     duration: "#{duration}",
#     track_url: "#{url}"
#   })
# end

legend = bob.albums.create({
  title: 'Legend',
  genre: 'Reggae',
  year: 1984,
  image_url: "https://sparkifyimages.s3.amazonaws.com/legend.jpg"
})

legend_songs = [
  { title: "Is This Love", duration: "3:52"},
  { title: "No Woman, No Cry (Live)", duration: "7:09"},
  { title: "Could You Be Loved", duration: "3:58"},
  { title: "Three Little Birds", duration: "3:02"},
  { title: "Buffalo Soldier", duration: "4:19"},
  { title: "Get Up, Stand Up", duration: "3:20"},
  { title: "Stir It Up", duration: "5:35"},
  { title: "One Love / People Get Ready", duration: "2:54"},
  { title: "I Shot the Sheriff", duration: "4:42"},
  { title: "Waiting in Vain", duration: "4:17"},
  { title: "Redemption Song", duration: "3:48"},
  { title: "Satisfy My Soul", duration: "4:33"},
  { title: "Exodus", duration: "7:40"},
  { title: "Jamming", duration: "3:34"}
]

legend_songs.each_with_index do |song, idx|
  i = idx + 1
  url = "https://s3.us-east-2.amazonaws.com/sparkify2019/legend/#{i}.mp3"
  title = song[:title]
  duration = song[:duration]
  legend.songs.create({
    title: "#{title}",
    duration: "#{duration}",
    track_url: "#{url}"
  })
end

yankee = wilco.albums.create({
  title: 'Yankee Hotel Foxtrot',
  genre: 'Alternative',
  year: 2001,
  image_url: 'https://sparkifyimages.s3.amazonaws.com/yankee.jpg'
})

yankee_songs = [
  { title: "I Am Trying to Break Your Heart", duration: "6:58" },
  { title: "Kamera", duration: "3:30" },
  { title: "Radio Cure", duration: "5:09" },
  { title: "War on War", duration: "3:49" },
  { title: "Jesus, Etc.", duration: "3:52" },
  { title: "Ashes of American Flags", duration: "4:45" },
  { title: "Heavy Metal Drummer", duration: "3:09" },
  { title: "I'm the Man Who Loves You", duration: "3:56" },
  { title: "Pot Kettle Black", duration: "4:01" },
  { title: "Poor Places", duration: "5:18" },
  { title: "Reservations", duration: "7:23" }
]

yankee_songs.each_with_index do |song, idx|
  i = idx + 1
  url = "https://s3.us-east-2.amazonaws.com/sparkify2019/yankee/#{i}.mp3"
  title = song[:title]
  duration = song[:duration]
  yankee.songs.create({
    title: "#{title}",
    duration: "#{duration}",
    track_url: "#{url}"
  })
end

chelsea = nico.albums.create({
  title: "Chelsea Girl",
  genre: "Folk",
  year: 1967,
  image_url: 'https://sparkifyimages.s3.amazonaws.com/chelsea.jpg'
})

chelsea_songs = [
  { title: "The Fairest of the Seasons", duration: "4:09" },
  { title: "These Days", duration: "3:33" },
  { title: "Little Sister", duration: "4:26" },
  { title: "Winter Song", duration: "3:21" },
  { title: "It Was a Pleasure Then", duration: "8:05" },
  { title: "Chelsea Girls", duration: "7:26" },
  { title: "I'll Keep It with Mine", duration: "3:20" },
  { title: "Somewhere There's a Feather", duration: "2:20" },
  { title: "Wrap Your Troubles in Dreams", duration: "5:10" },
  { title: "Eulogy to Lenny Bruce", duration: "3:46" }
]

chelsea_songs.each_with_index do |song, idx|
  i = idx + 1
  url = "https://s3.us-east-2.amazonaws.com/sparkify2019/chelsea/#{i}.mp3"
  title = song[:title]
  duration = song[:duration]
  chelsea.songs.create({
    title: "#{title}",
    duration: "#{duration}",
    track_url: "#{url}"
  })
end

janetalbum = janet.albums.create({
  title: "Janet",
  genre: "R&B",
  year: 1993,
  image_url: 'https://sparkifyimages.s3.amazonaws.com/janetalbum.jpg'
})

janetalbum_songs = [
  { title: "Morning", duration: "0:31" },
  { title: "That's the Way Love Goes", duration: "4:25" },
  { title: "You Know...", duration: "0:12" },
  { title: "You Want This", duration: "5:06" },
  { title: "Be a Good Boy...", duration: "0:08" },
  { title: "If", duration: "4:32" },
  { title: "Back", duration: "0:05" },
  { title: "This Time", duration: "6:59" },
  { title: "Go on Miss Janet", duration: "0:05" },
  { title: "Throb", duration: "4:36" },
  { title: "What'll I Do", duration: "4:05" },
  { title: "The Lounge", duration: "0:16" },
  { title: "Funky Big Band", duration: "5:23" },
  { title: "Racism", duration: "0:08" },
  { title: "New Agenda", duration: "4:01" },
  { title: "Love Pt. 2", duration: "0:12" },
  { title: "Because of Love", duration: "4:21" },
  { title: "Wind", duration: "0:11" },
  { title: "Again", duration: "3:47" },
  { title: "Another Lover", duration: "0:11" },
  { title: "Where Are You Now", duration: "5:47" },
  { title: "Hold on Baby", duration: "0:09" },
  { title: "The Body That Loves You", duration: "5:33" },
  { title: "Rain", duration: "0:19" },
  { title: "Any Time, Any Place", duration: "7:08" },
  { title: "Are You Still Up", duration: "1:37" },
  { title: "Sweet Dreams", duration: "5:35" }
]

janetalbum_songs.each_with_index do |song, idx|
  i = idx + 1
  url = "https://s3.us-east-2.amazonaws.com/sparkify2019/janetalbum/#{i}.mp3"
  title = song[:title]
  duration = song[:duration]
  janetalbum.songs.create({
    title: "#{title}",
    duration: "#{duration}",
    track_url: "#{url}"
  })
end

velvet = janet.albums.create({
  title: "The Velvet Rope",
  year: 1997,
  genre: "R&B",
  image_url: 'https://sparkifyimages.s3.amazonaws.com/velvet.jpg'
})

velvet_songs = [
  { title: "Interlude: Twisted Elegance", duration: "0:43" },
  { title: "Velvet Rope", duration: "4:56" },
  { title: "You", duration: "4:43" },
  { title: "Got 'til It's Gone", duration: "4:02" },
  { title: "Interlude: Speaker Phone", duration: "0:54" },
  { title: "My Need", duration: "3:44" },
  { title: "Interlude: Fasten Your Seatbelts", duration: "0:19" },
  { title: "Go Deep", duration: "4:42" },
  { title: "Free Xone", duration: "4:57" },
  { title: "Interlude: Memory", duration: "0:05" },
  { title: "Together Again", duration: "5:01" },
  { title: "Interlude: Online", duration: "0:19" },
  { title: "Empty", duration: "4:33" },
  { title: "Interlude: Full", duration: "0:13" },
  { title: "What About", duration: "4:24" },
  { title: "Every Time", duration: "4:17" },
  { title: "Tonight's the Night", duration: "5:08" },
  { title: "I Get Lonely", duration: "5:18" },
  { title: "Rope Burn", duration: "4:16" },
  { title: "Anything", duration: "4:55" },
  { title: "Interlude: Sad", duration: "0:11" },
  { title: "Special", duration: "7:56" }
]

velvet_songs.each_with_index do |song, idx|
  i = idx + 1
  url = "https://s3.us-east-2.amazonaws.com/sparkify2019/velvet/#{i}.mp3"
  title = song[:title]
  duration = song[:duration]
  velvet.songs.create({
    title: "#{title}",
    duration: "#{duration}",
    track_url: "#{url}"
  })
end

# onandon = jack.albums.create({ 
#   title: 'On and On', 
#   genre: 'Acoustic', 
#   year: 2003,
#   image_url: 'https://sparkifyimages.s3.amazonaws.com/onandon.jpg'
# })

# talkie = air.albums.create({ 
#   title: 'Talkie Walkie', 
#   genre: 'Electronic', 
#   year: 2004, 
#   image_url: 'https://sparkifyimages.s3.amazonaws.com/talkie.jpg'
# })

# ege = can.albums.create({ 
#   title: 'Ege Bamyasi', 
#   genre: 'Rock', 
#   year: 1972,
#   image_url: 'https://sparkifyimages.s3.amazonaws.com/ege.jpg'
# })

# blonde = frank.albums.create({ 
#   title: 'Blonde', 
#   genre: 'Hip-Hop', 
#   year: 2016 ,
#   image_url: 'https://sparkifyimages.s3.amazonaws.com/blonde.jpg'
# })

# vital = pearl.albums.create({
#   title: 'Vitalogy',
#   genre: 'Rock',
#   year: 1993,
#   image_url: 'https://sparkifyimages.s3.amazonaws.com/vital.jpg'
# })

# doubt = jayz.albums.create({
#   title: "Reasonable Doubt",
#   genre: "Hip-Hop",
#   year: 1995,
#   image_url: 'https://sparkifyimages.s3.amazonaws.com/doubt.jpg'
# })

# yoshimi = flaming.albums.create({
#   title: 'Yoshimi Battles the Pink Robots',
#   genre: 'Rock',
#   year: 2002,
#   image_url: 'https://sparkifyimages.s3.amazonaws.com/yoshimi.jpg'
# })

# puravida = gogol.albums.create({
#   title: 'Pura Vida Conspiracy',
#   genre: 'Alternative',
#   year: 2012,
#   image_url: 'https://sparkifyimages.s3.amazonaws.com/puravida.jpg'
# })

# either = elliott.albums.create({ 
#   title: 'Either/Or', 
#   genre: 'Acoustic', 
#   year: 1997,
#   image_url: 'https://sparkifyimages.s3.amazonaws.com/either.jpg'
# })

# moon = floyd.albums.create({ 
#   title: 'Dark Side of the Moon', 
#   genre: 'Rock', 
#   year: 1972,
#   image_url: 'https://sparkifyimages.s3.amazonaws.com/moon.jpg'
# })

# black = amy.albums.create({
#   title: 'Back To Black',
#   genre: 'Alternative',
#   year: 2006,
#   image_url: 'https://sparkifyimages.s3.amazonaws.com/black.jpg'
# })

# round = miles.albums.create({
#   title: "`Round About Midnight",
#   genre: 'Jazz',
#   year: 1957,
#   image_url: 'https://sparkifyimages.s3.amazonaws.com/round.jpg'
# })

# whois = william.albums.create({
#   title: "Who Is William Onyeabor?",
#   genre: "Funk",
#   year: 1992,
#   image_url: 'https://sparkifyimages.s3.amazonaws.com/whois.jpg'
# })

# rubber = beatles.albums.create({
#   title: "Rubber Soul",
#   genre: 'Rock',
#   year: 1964,
#   image_url: 'https://sparkifyimages.s3.amazonaws.com/rubber.jpg'
# })

# born = gaga.albums.create({
#   title: 'Born This Way',
#   genre: 'Pop',
#   year: 2010,
#   image_url: 'https://sparkifyimages.s3.amazonaws.com/born.jpg'
# })

# carrie = sufjan.albums.create({
#   title: "Carrie & Lowell",
#   genre: "Alternative",
#   year: 2014,
#   image_url: 'https://sparkifyimages.s3.amazonaws.com/carrie.jpg'
# })

# vibras = jbalvin.albums.create({
#   title: 'Vibras',
#   genre: 'Latin',
#   year: 2017,
#   image_url: 'https://sparkifyimages.s3.amazonaws.com/vibras.jpg'
# })

# aman = bomba.albums.create({
#   title: 'Amanecer',
#   genre: 'Latin',
#   year: 2014,
#   image_url: 'https://sparkifyimages.s3.amazonaws.com/aman.jpg'
# })

# badasme = waits.albums.create({
#   title: "Bad As Me",
#   genre: "Rock",
#   year: 2010,
#   image_url: 'https://sparkifyimages.s3.amazonaws.com/badasme.jpg'
# })

# letsget = marvin.albums.create({
#   title: "Let's Get It On",
#   genre: "Soul",
#   year: 1972,
#   image_url: 'https://sparkifyimages.s3.amazonaws.com/letsget.jpg'
# })

# figure = elliott.albums.create({
#   title: 'Figure 8',
#   genre: 'Alternative',
#   year: 1999,
#   image_url: 'https://sparkifyimages.s3.amazonaws.com/figure.jpg'
# })

# creep = tune.albums.create({
#   title: "I Can Feel You Creep Into My Private Life",
#   genre: 'Alternative',
#   year: 2017,
#   image_url: 'https://sparkifyimages.s3.amazonaws.com/creep.jpg'
# })

# cheap = regina.albums.create({
#   title: 'What We Saw From The Cheap Seats',
#   genre: 'Alternative',
#   year: 2011,
#   image_url: 'https://sparkifyimages.s3.amazonaws.com/cheap.jpg'
# })

# dua_album = dua.albums.create({
#   title: "Dua Lipa",
#   genre: 'Pop',
#   year: 2016,
#   image_url: 'https://sparkifyimages.s3.amazonaws.com/dua_album.jpg'
# })

# revolver = beatles.albums.create({
#   title: 'Revolver',
#   genre: 'Rock',
#   year: 1965,
#   image_url: 'https://sparkifyimages.s3.amazonaws.com/revolver.jpg'
# })

# joanne = gaga.albums.create({
#   title: 'Joanne',
#   genre: 'Pop',
#   year: 2015,
#   image_url: 'https://sparkifyimages.s3.amazonaws.com/joanne.jpg'
# })

# oops = britney.albums.create({
#   title: "Oops!... I Did It Again",
#   genre: "Pop",
#   year: 1999,
#   image_url: 'https://sparkifyimages.s3.amazonaws.com/oops.jpg'
# })

# sweet = ariana.albums.create({
#   title: "Sweetener",
#   genre: "Pop",
#   year: 2017,
#   image_url: 'https://sparkifyimages.s3.amazonaws.com/sweet.jpg'
# })

# argue = cranberries.albums.create({
#   title: "No Need To Argue",
#   genre: "Alternative",
#   year: 1993,
#   image_url: 'https://sparkifyimages.s3.amazonaws.com/argue.jpg'
# })

# thriller = michael.albums.create({
#   title: "Thriller",
#   genre: "Pop",
#   year: 1982,
#   image_url: 'https://sparkifyimages.s3.amazonaws.com/thriller.jpg'
# })

# ten = pearl.albums.create({
#   title: 'Ten',
#   genre: 'Rock',
#   year: 1990,
#   image_url: 'https://sparkifyimages.s3.amazonaws.com/ten.jpg'
# })

# unplugged = nirvana.albums.create({
#   title: "MTV Unplugged in New York",
#   genre: 'Alternative',
#   year: 1993,
#   image_url: 'https://sparkifyimages.s3.amazonaws.com/unplugged.jpg'
# })

# outer = toro.albums.create({
#   title: "Outer Peace",
#   genre: "Alternative",
#   year: 2018,
#   image_url: 'https://sparkifyimages.s3.amazonaws.com/outer.jpg'
# })

# smiths_album = smiths.albums.create({
#   title: 'The Smiths',
#   genre: 'Alternative',
#   year: 1983,
#   image_url: 'https://sparkifyimages.s3.amazonaws.com/smiths_album.jpg'
# })

# fame = maluma.albums.create({
#   title: 'F.A.M.E',
#   genre: 'Latin',
#   year: 2017,
#   image_url: 'https://sparkifyimages.s3.amazonaws.com/fame.jpg'
# })

# nevermind = nirvana.albums.create({
#   title: 'Nevermind',
#   genre: 'Alternative',
#   year: 1990,
#   image_url: 'https://sparkifyimages.s3.amazonaws.com/nevermind.jpg'
# })

# blueprint = jayz.albums.create({
#   title: 'The Blueprint',
#   genre: 'Hip-Hop',
#   year: 2000,
#   image_url: 'https://sparkifyimages.s3.amazonaws.com/blueprint.jpg'
# })

# nights = metro.albums.create({
#   title: 'Nights Out',
#   genre: 'Electronic',
#   year: 2008,
#   image_url: 'https://sparkifyimages.s3.amazonaws.com/nights.jpg'
# })

# english = metro.albums.create({
#   title: 'The English Riviera',
#   genre: 'Electronic',
#   year: 2010,
#   image_url: 'https://sparkifyimages.s3.amazonaws.com/english.jpg'
# })

# whatsgoing = marvin.albums.create({
#   title: "What's Going On",
#   genre: 'Soul',
#   year: 1970,
#   image_url: 'https://sparkifyimages.s3.amazonaws.com/whatsgoing.jpg'
# })

# whokill = tune.albums.create({
#   title: "W H O K I L L",
#   genre: 'Alternative',
#   year: 2010,
#   image_url: 'https://sparkifyimages.s3.amazonaws.com/whokill.jpg'
# })

# anti = rihanna.albums.create({
#   title: 'ANTI',
#   genre: 'R&B',
#   year: 2015,
#   image_url: 'https://sparkifyimages.s3.amazonaws.com/anti.jpg'
# })

# bestone = smiths.albums.create({
#   title: 'The Best Of... Vol. 1',
#   genre: 'Alternative',
#   year: 1991,
#   image_url: 'https://sparkifyimages.s3.amazonaws.com/bestone.jpg'
# })

# remember = regina.albums.create({
#   title: "Remember Us To Life",
#   genre: 'Alternative',
#   year: 2015,
#   image_url: 'https://sparkifyimages.s3.amazonaws.com/remember.jpg'
# })

# mised = lauryn.albums.create({
#   title: 'The Miseducation Of Lauryn Hill',
#   genre: "R&B",
#   year: 1997,
#   image_url: 'https://sparkifyimages.s3.amazonaws.com/mised.jpg'
# })

# queen = smiths.albums.create({
#   title: 'The Queen Is Dead',
#   genre: 'Rock',
#   year: 1985,
#   image_url: 'https://sparkifyimages.s3.amazonaws.com/queen.jpg'
# })

# exper = jimi.albums.create({
#   title: 'Are You Experienced',
#   genre: 'Rock',
#   year: 1967,
#   image_url: 'https://sparkifyimages.s3.amazonaws.com/exper.jpg'
# })

# phren = roots.albums.create({
#   title: 'Phrenology',
#   genre: 'Hip-Hop',
#   year: 2001,
#   image_url: 'https://sparkifyimages.s3.amazonaws.com/phren.jpg'
# })

# blitz = yeah.albums.create({
#   title: "It's Blitz",
#   genre: 'Alternative',
#   year: 2008,
#   image_url: 'https://sparkifyimages.s3.amazonaws.com/blitz.jpg'
# })

# cominghome = leon.albums.create({
#   title: 'Coming Home',
#   genre: 'Soul',
#   year: 2015,
#   image_url: 'https://sparkifyimages.s3.amazonaws.com/cominghome.jpg'
# })

# trans = kraft.albums.create({
#   title: "Trans Europe Express",
#   genre: "Electronic",
#   year: 1976,
#   image_url: 'https://sparkifyimages.s3.amazonaws.com/trans.jpg'
# })

# outside = gin.albums.create({
#   title: "Outside Looking In: The Best Of The Gin Blossoms",
#   genre: 'Alternative',
#   year: 1998,
#   image_url: 'https://sparkifyimages.s3.amazonaws.com/outside.jpg'
# })

# falling = celine.albums.create({
#   title: "Falling Into You",
#   genre: "Pop",
#   year: 1995,
#   image_url: 'https://sparkifyimages.s3.amazonaws.com/falling.jpg'
# })

# electric = vogue.albums.create({
#   title: 'Electric Café',
#   genre: 'R&B',
#   year: 2017,
#   image_url: 'https://sparkifyimages.s3.amazonaws.com/electric.jpg'
# })

# prayer = madonna.albums.create({
#   title: 'Like A Prayer',
#   genre: 'Pop',
#   year: 1988,
#   image_url: 'https://sparkifyimages.s3.amazonaws.com/prayer.jpg'
# })

# channel = frank.albums.create({
#   title: 'channel ORANGE',
#   genre: 'R&B',
#   year: 2012,
#   image_url: 'https://sparkifyimages.s3.amazonaws.com/channel.jpg'
# })

# swan = blood.albums.create({
#   title: 'Negro Swan',
#   genre: 'R&B',
#   year: 2018,
#   image_url: 'https://sparkifyimages.s3.amazonaws.com/swan.jpg'
# })

# selfportrait = dylan.albums.create({
#   title: 'Self Portrait',
#   genre: 'Folk',
#   year: 1970,
#   image_url: 'https://sparkifyimages.s3.amazonaws.com/selfportrait.jpg'
# })

# overgrown = blake.albums.create({
#   title: 'Overgrown',
#   genre: 'Alternative',
#   year: 2013,
#   image_url: 'https://sparkifyimages.s3.amazonaws.com/overgrown.jpg'
# })

# ### SONGS


# yoshimi.songs.create([
#   {title: "Fight Test", duration: "4:05", track_url: "https://sparkify2019.s3.us-east-2.amazonaws.com/yoshimi/1.mp3"},
#   {title: "One More Robot/Sympathy 3000-21", duration: "5:00", track_url: "https://sparkify2019.s3.us-east-2.amazonaws.com/yoshimi/2.mp3"},
#   {title: "Yoshimi Battles the Pink Robots, Pt. 1", duration: "4:48", track_url: "https://sparkify2019.s3.us-east-2.amazonaws.com/yoshimi/3.mp3"},
#   {title: "Yoshimi Battles the Pink Robots, Pt. 2", duration: "2:58", track_url: "https://sparkify2019.s3.us-east-2.amazonaws.com/yoshimi/4.mp3"},
#   {title: "In the Morning of the Magicians", duration: "6:19", track_url: "https://sparkify2019.s3.us-east-2.amazonaws.com/yoshimi/5.mp3"},
#   {title: "Ego Tripping at the Gates of Hell", duration: "4:35", track_url: "https://sparkify2019.s3.us-east-2.amazonaws.com/yoshimi/6.mp3"},
#   {title: "Are You a Hypnotist??", duration: "4:44", track_url: "https://sparkify2019.s3.us-east-2.amazonaws.com/yoshimi/7.mp3"},
#   {title: "It's Summertime", duration: "4:20", track_url: "https://sparkify2019.s3.us-east-2.amazonaws.com/yoshimi/8.mp3"},
#   {title: "Do You Realize??", duration: "3:33", track_url: "https://sparkify2019.s3.us-east-2.amazonaws.com/yoshimi/9.mp3"},
#   {title: "All We Have Is Now", duration: "3:53", track_url: "https://sparkify2019.s3.us-east-2.amazonaws.com/yoshimi/10.mp3"},
#   {title: "Approaching Pavonis Mons by Balloon (Utopia Planitia)", duration: "3:09", track_url: "https://sparkify2019.s3.us-east-2.amazonaws.com/yoshimi/11.mp3"}
# ])


# doubt.songs.create([
#   {title: "Can't Knock The Hustle", duration: "5:17", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/doubt/1.mp3"},
#   {title: "Politics As Usual", duration: "3:41", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/doubt/2.mp3"},
#   {title: "Brooklyn's Finest", duration: "4:37", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/doubt/3.mp3"},
#   {title: "Dead Presidents II", duration: "4:27", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/doubt/4.mp3"},
#   {title: "Feelin' It", duration: "3:49", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/doubt/5.mp3"},
#   {title: "D' Evils", duration: "3:32", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/doubt/6.mp3"},
#   {title: "22 Two's", duration: "3:30", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/doubt/7.mp3"},
#   {title: "Can I Live", duration: "4:10", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/doubt/8.mp3"},
#   {title: "Ain't No N***a", duration: "4:04", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/doubt/9.mp3"},
#   {title: "Friend Or Foe", duration: "1:49", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/doubt/10.mp3"},
#   {title: "Coming Of Age", duration: "3:59", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/doubt/11.mp3"},
#   {title: "Cashmere Thoughts", duration: "2:57", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/doubt/12.mp3"},
#   {title: "Bring It On", duration: "5:01", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/doubt/13.mp3"},
#   {title: "Regrets", duration: "4:34", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/doubt/14.mp3"},
#   {title: "Can't Knock The Hustle (Fools Paradise Remix)", duration: "3:57", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/doubt/15.mp3"}
# ])

# onandon.songs.create([ 
#   { title: 'Times Like These', duration: '2:22', track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/onandon/1.mp3"},
#   { title: 'The Horizon Has Been Defeated', duration: '2:34', track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/onandon/2.mp3"},
#   { title: 'Traffic In The Sky', duration: '2:51', track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/onandon/3.mp3"},
#   { title: 'Taylor', duration: '3:59', track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/onandon/4.mp3"},
#   { title: 'Gone', duration: '2:10', track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/onandon/5.mp3"},
#   { title: 'Cupid', duration: '1:06', track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/onandon/6.mp3"},
#   { title: 'Wasting Time', duration: '3:50', track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/onandon/7.mp3"},
#   { title: 'Holes To Heaven', duration: '2:55', track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/onandon/8.mp3"},
#   { title: 'Dreams Be Dreams', duration: '2:13', track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/onandon/9.mp3"},
#   { title: 'Tomorrow Morning', duration: '2:51', track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/onandon/10.mp3"},
#   { title: 'Fall Line', duration: '1:36', track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/onandon/11.mp3"},
#   { title: 'Cookie Jar', duration: '2:57', track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/onandon/12.mp3"},
#   { title: 'Rodeo Clowns', duration: '2:38', track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/onandon/13.mp3"},
#   { title: 'Cocoon', duration: '4:11', track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/onandon/14.mp3"},
#   { title: 'Mediocre Bad Guys', duration: '3:00', track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/onandon/15.mp3"},
#   { title: 'Symbol In My Driveway', duration: '2:50', track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/onandon/16.mp3"}
# ])

# talkie.songs.create([
#   { title: 'Venus', duration: '4:05', track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/talkie/1.mp3"},
#   { title: 'Cherry Blossom Girl', duration: '3:40', track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/talkie/2.mp3"},
#   { title: 'Run', duration: '4:12', track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/talkie/3.mp3"},
#   { title: 'Universal Traveler', duration: '4:22', track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/talkie/4.mp3"},
#   { title: 'Mike Mills', duration: '4:27', track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/talkie/5.mp3"},
#   { title: 'Surfing on a Rocket', duration: '3:43', track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/talkie/6.mp3"},
#   { title: 'Another Day', duration: '3:21', track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/talkie/7.mp3"},
#   { title: 'Alpha Beta Gaga', duration: '4:40', track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/talkie/8.mp3"},
#   { title: 'Biological', duration: '6:05', track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/talkie/9.mp3"},
#   { title: 'Alone in Kyoto', duration: '4:51', track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/talkie/10.mp3"}
# ])

# nights.songs.create([
#   {title: "Nights Out", duration: "2:41", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/nights/1.mp3"},
#   {title: "The End Of You Too", duration: "3:45", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/nights/2.mp3"},
#   {title: "Radio Ladio", duration: "3:35", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/nights/3.mp3"},
#   {title: "My Heart Rate Rapid", duration: "4:11", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/nights/4.mp3"},
#   {title: "Heartbreaker", duration: "4:14", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/nights/5.mp3"},
#   {title: "On The Motorway", duration: "2:36", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/nights/6.mp3"},
#   {title: "Side 2", duration: "3:31", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/nights/7.mp3"},
#   {title: "Holiday", duration: "4:16", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/nights/8.mp3"},
#   {title: "A Thing For Me", duration: "3:30", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/nights/9.mp3"},
#   {title: "Back On The Motorway", duration: "3:56", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/nights/10.mp3"},
#   {title: "On Dancefloors", duration: "4:45", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/nights/11.mp3"},
#   {title: "Nights Outro", duration: "3:12", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/nights/12.mp3"}
# ])

# ege.songs.create([
#   { title: 'Pinch', duration: '9:29', track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/ege/1.mp3"},
#   { title: 'Sing Swan Song', duration: '4:49', track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/ege/2.mp3"},
#   { title: 'One More Night', duration: '5:35', track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/ege/3.mp3"},
#   { title: 'Vitamin C', duration: '3:34', track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/ege/4.mp3"},
#   { title: 'Soup', duration: '10:32', track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/ege/5.mp3"},
#   { title: "I'm So Green", duration: '3:05', track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/ege/6.mp3"},
#   { title: 'Spoon', duration: '3:06', track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/ege/7.mp3"}
# ])

# revolver.songs.create([
#   {title: "Taxman", duration: "2:39", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/revolver/1.mp3"},
#   {title: "Eleanor Rigby", duration: "2:07", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/revolver/2.mp3"},
#   {title: "I'm Only Sleeping", duration: "3:00", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/revolver/3.mp3"},
#   {title: "Love You To", duration: "3:00", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/revolver/4.mp3"},
#   {title: "Here, There And Everywhere", duration: "2:25", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/revolver/5.mp3"},
#   {title: "Yellow Submarine", duration: "2:39", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/revolver/6.mp3"},
#   {title: "She Said She Said", duration: "2:36", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/revolver/7.mp3"},
#   {title: "Good Day Sunshine", duration: "2:09", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/revolver/8.mp3"},
#   {title: "And Your Bird Can Sing", duration: "2:00", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/revolver/9.mp3"},
#   {title: "For No One", duration: "2:00", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/revolver/10.mp3"},
#   {title: "Doctor Robert", duration: "2:14", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/revolver/11.mp3"},
#   {title: "I Want To Tell You", duration: "2:28", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/revolver/12.mp3"},
#   {title: "Got To Get You Into My Life", duration: "2:29", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/revolver/13.mp3"},
#   {title: "Tomorrow Never Knows", duration: "3:02", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/revolver/14.mp3"}
# ])

# blonde.songs.create([  
#   { title: 'Nikes', duration: '5:14', track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/blonde/1.mp3"},
#   { title: 'Ivy', duration: '4:09', track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/blonde/2.mp3"},
#   { title: 'Pink + White', duration: '3:05', track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/blonde/3.mp3"},
#   { title: 'Be Yourself', duration: '1:27', track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/blonde/4.mp3"},
#   { title: 'Solo', duration: '4:17', track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/blonde/5.mp3"},
#   { title: 'Skyline To', duration: '3:05', track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/blonde/6.mp3"},
#   { title: 'Self Control', duration: '4:10', track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/blonde/7.mp3"},
#   { title: 'Good Guy', duration: '1:07', track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/blonde/8.mp3"},
#   { title: 'Nights', duration: '5:07', track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/blonde/9.mp3"},
#   { title: 'Solo (Reprise)', duration: '1:19', track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/blonde/10.mp3"},
#   { title: 'Pretty Sweet', duration: '2:38', track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/blonde/11.mp3"},
#   { title: 'Facebook Story', duration: '1:09', track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/blonde/12.mp3"},
#   { title: 'Close To You', duration: '1:26', track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/blonde/13.mp3"},
#   { title: 'White Ferrari', duration: '4:09', track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/blonde/14.mp3"},
#   { title: 'Seigfried', duration: '5:35', track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/blonde/15.mp3"},
#   { title: 'Godspeed', duration: '2:58', track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/blonde/16.mp3"},
#   { title: 'Futura Free', duration: '9:24', track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/blonde/17.mp3"}
# ])

# whokill.songs.create([
#   {title: "My Country", duration: "3:40", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/whokill/1.mp3"},
#   {title: "Es-So", duration: "3:30", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/whokill/2.mp3"},
#   {title: "Gangsta", duration: "3:59", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/whokill/3.mp3"},
#   {title: "Powa", duration: "5:04", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/whokill/4.mp3"},
#   {title: "Riotriot", duration: "4:13", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/whokill/5.mp3"},
#   {title: "Bizness", duration: "4:24", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/whokill/6.mp3"},
#   {title: "Doorstep", duration: "4:17", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/whokill/7.mp3"},
#   {title: "You Yes You", duration: "3:33", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/whokill/8.mp3"},
#   {title: "Wooly Wolly Gong", duration: "6:07", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/whokill/9.mp3"},
#   {title: "Killa", duration: "3:12", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/whokill/10.mp3"}
# ])

# either.songs.create([
#   { title: 'Speed Trials', duration: '3:01', track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/either/1.mp3"},
#   { title: 'Alameda', duration: '3:43', track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/either/2.mp3"},
#   { title: 'Ballad Of Big Nothing', duration: '2:48', track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/either/3.mp3"},
#   { title: 'Between the Bars', duration: '2:21', track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/either/4.mp3"},
#   { title: 'Pictores Of Me', duration: '3:47', track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/either/5.mp3"},
#   { title: 'No Name No. 5', duration: '3:43', track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/either/6.mp3"},
#   { title: 'Rose Parade', duration: '3:28', track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/either/7.mp3"},
#   { title: 'Punch And Judy', duration: '2:26', track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/either/8.mp3"},
#   { title: 'Angeles', duration: '2:57', track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/either/9.mp3"},
#   { title: "Cupid's Trick", duration: '3:05', track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/either/10.mp3"},
#   { title: '2:45 AM', duration: '3:19', track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/either/11.mp3"},
#   { title: 'Say Yes', duration: '2:19', track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/either/12.mp3"}
# ])

# queen.songs.create([
#   {title: "The Queen Is Dead (Take Me Back To Dear Old Blightly)", duration: "6:24", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/queen/1.mp3"},
#   {title: "Frankly, Mr Shankly", duration: "2:18", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/queen/2.mp3"},
#   {title: "I Know It's Over", duration: "5:48", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/queen/3.mp3"},
#   {title: "Never Had No One Ever", duration: "3:37", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/queen/4.mp3"},
#   {title: "Cemetry Gates", duration: "2:38", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/queen/5.mp3"},
#   {title: "Bigmouth Strikes Again", duration: "3:12", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/queen/6.mp3"},
#   {title: "The Boy With The Thorn In His Side", duration: "3:16", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/queen/7.mp3"},
#   {title: "Vicar In A Tutu", duration: "2:22", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/queen/8.mp3"},
#   {title: "There Is A Light That Never Goes Out", duration: "4:03", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/queen/9.mp3"},
#   {title: "Some Girls Are Bigger Than Others", duration: "3:16", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/queen/10.mp3"}
# ])

# letsget.songs.create([
#   {title: "Let's Get It On", duration: "4:51", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/letsget/1.mp3"},
#   {title: "Please Stay (Once You Go Away)", duration: "3:30", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/letsget/2.mp3"},
#   {title: "If I Should Die Tonight", duration: "4:00", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/letsget/3.mp3"},
#   {title: "Keep Gettin' It On", duration: "3:16", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/letsget/4.mp3"},
#   {title: "Come Get To This", duration: "2:41", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/letsget/5.mp3"},
#   {title: "Distant Lover", duration: "4:16", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/letsget/6.mp3"},
#   {title: "You Sure Love To Ball", duration: "4:44", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/letsget/7.mp3"},
#   {title: "Just To Keep You Satisfied", duration: "4:30", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/letsget/8.mp3"}
# ])

# remember.songs.create([
#   {title: "Bleeding Heart", duration: "3:59", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/remember/1.mp3"},
#   {title: "Older And Taller", duration: "3:56", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/remember/2.mp3"},
#   {title: "Grand Hotel", duration: "3:05", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/remember/3.mp3"},
#   {title: "Small Bill$", duration: "3:33", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/remember/4.mp3"},
#   {title: "Black And White", duration: "3:49", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/remember/5.mp3"},
#   {title: "The Light", duration: "4:57", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/remember/6.mp3"},
#   {title: "The Trapper And The Furrier", duration: "4:24", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/remember/7.mp3"},
#   {title: "Tornadoland", duration: "3:49", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/remember/8.mp3"},
#   {title: "Obsolete", duration: "6:37", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/remember/9.mp3"},
#   {title: "Sellers Of Flowers", duration: "4:01", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/remember/10.mp3"},
#   {title: "The Visit", duration: "4:24", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/remember/11.mp3"},
#   {title: "New Year", duration: "5:29", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/remember/12.mp3"},
#   {title: "The One Who Stayed And The One Who Left", duration: "4:59", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/remember/13.mp3"},
#   {title: "End Of Thought", duration: "3:20", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/remember/14.mp3"}
# ])

# born.songs.create([
#   {title: "Marry The Night", duration: "4:25", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/born/1.mp3"},
#   {title: "Born This Way", duration: "4:20", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/born/2.mp3"},
#   {title: "Government Hooker", duration: "4:14", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/born/3.mp3"},
#   {title: "Judas", duration: "4:09", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/born/4.mp3"},
#   {title: "Americano", duration: "4:06", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/born/5.mp3"},
#   {title: "Hair", duration: "5:08", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/born/6.mp3"},
#   {title: "Scheiße", duration: "3:45", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/born/7.mp3"},
#   {title: "Bloody Mary", duration: "4:05", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/born/8.mp3"},
#   {title: "Bad Kids", duration: "3:51", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/born/9.mp3"},
#   {title: "Highway Unicorn (Road To Love)", duration: "4:16", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/born/10.mp3"},
#   {title: "Heavy Metal Lover", duration: "4:13", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/born/11.mp3"},
#   {title: "Electric Chapel", duration: "4:13", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/born/12.mp3"},
#   {title: "Yoü And I", duration: "5:07", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/born/13.mp3"},
#   {title: "The Edge Of Glory", duration: "5:21", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/born/14.mp3"}
# ])

# figure.songs.create([
#   {title: "Son Of Sam", duration: "3:04", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/figure/1.mp3"},
#   {title: "Somebody That I Used To Know", duration: "2:09", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/figure/2.mp3"},
#   {title: "Junk Bond Trader", duration: "3:50", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/figure/3.mp3"},
#   {title: "Everything Reminds Me Of Her", duration: "2:38", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/figure/4.mp3"},
#   {title: "Everything Means Nothing To Me", duration: "2:24", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/figure/5.mp3"},
#   {title: "L.A.", duration: "3:14", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/figure/6.mp3"},
#   {title: "In The Lost And Found (Honky Back)/The Roost", duration: "4:33", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/figure/7.mp3"},
#   {title: "Stupidity Tries", duration: "4:24", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/figure/8.mp3"},
#   {title: "Easy Way Out", duration: "2:44", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/figure/9.mp3"},
#   {title: "Wouldn't Mama Be Proud", duration: "3:26", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/figure/10.mp3"},
#   {title: "Color Bars", duration: "2:20", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/figure/11.mp3"},
#   {title: "Happiness/The Gondola Man", duration: "5:04", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/figure/12.mp3"},
#   {title: "Pretty Mary K", duration: "2:36", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/figure/13.mp3"},
#   {title: "I Better Be Quiet Now", duration: "3:35", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/figure/14.mp3"},
#   {title: "Can't Make A Sound", duration: "4:19", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/figure/15.mp3"},
#   {title: "Bye", duration: "1:53", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/figure/16.mp3"}
# ])

# bestone.songs.create([
#   {title: "This Charming Man", duration: "2:42", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/bestone/1.mp3"},
#   {title: "William, It Was Really Nothing", duration: "2:10", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/bestone/2.mp3"},
#   {title: "What Difference Does It Make?", duration: "3:51", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/bestone/3.mp3"},
#   {title: "Stop Me If You Think You've Heard This One Before", duration: "3:34", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/bestone/4.mp3"},
#   {title: "Girlfriend In A Coma", duration: "2:04", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/bestone/5.mp3"},
#   {title: "Half A Person", duration: "3:36", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/bestone/6.mp3"},
#   {title: "Rubber Ring", duration: "3:50", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/bestone/7.mp3"},
#   {title: "How Soon Is Now?", duration: "6:47", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/bestone/8.mp3"},
#   {title: "Hand In Glove", duration: "3:25", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/bestone/9.mp3"},
#   {title: "Shoplifters Of The World Unite", duration: "3:00", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/bestone/10.mp3"},
#   {title: "Sheila Take A Bow", duration: "2:42", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/bestone/11.mp3"},
#   {title: "Some Girls Are Bigger Than Others", duration: "3:16", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/bestone/12.mp3"},
#   {title: "Panic", duration: "2:20", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/bestone/13.mp3"},
#   {title: "Please, Please, Please, Let Me Get What I Want", duration: "1:54", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/bestone/14.mp3"}
# ])

# moon.songs.create([  
#   { title: 'Speak to Me', duration: '1:07', track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/moon/1.mp3"},
#   { title: 'Breathe (In The Air)', duration: '2:50', track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/moon/2.mp3"},
#   { title: 'On The Run', duration: '3:45', track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/moon/3.mp3"},
#   { title: 'Time', duration: '6:53:', track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/moon/4.mp3"},
#   { title: 'The Great Gig In The Sky', duration: '4:44', track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/moon/5.mp3"},
#   { title: 'Money', duration: '6:23', track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/moon/6.mp3"},
#   { title: 'Us And Them', duration: '7:49', track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/moon/7.mp3"},
#   { title: 'Any Colour You Like', duration: '3:26', track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/moon/8.mp3"},
#   { title: 'Brain Damage', duration: '3:47', track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/moon/9.mp3"},
#   { title: 'Eclipse', duration: '2:13', track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/moon/10.mp3"}
# ])

# black.songs.create([
#   {title: 'Rehab', duration: '3:35', track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/black/1.mp3"},
#   {title: "You Know I'm No Good", duration: '4:17', track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/black/2.mp3"},
#   {title: "Me & Mr. Jones", duration: "2:33", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/black/3.mp3"},
#   {title: "Just Friends", duration: "3:13", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/black/4.mp3"},
#   {title: "Back To Black", duration: "4:01", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/black/5.mp3"},
#   {title: "Love Is A Losing Game", duration: "2:35", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/black/6.mp3"},
#   {title: "Tears Dry On Their Own", duration: "3:06", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/black/7.mp3"},
#   {title: "Wake Up Alone", duration: "3:42", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/black/8.mp3"},
#   {title: "Some Unholy War", duration: "2:23", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/black/9.mp3"},
#   {title: "He Can Only Hold Her", duration: "3:20", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/black/10.mp3"},
#   {title: "You Know I'm No Good [Remix]", duration: "3:23", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/black/11.mp3"}
# ])

# round.songs.create([ 
#   {title: "`Round Midnight", duration: "5:58", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/round/1.mp3"},
#   {title: "Ah-Leu-Cha", duration: "5:53", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/round/2.mp3"},
#   {title: "All Of You", duration: "7:03", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/round/3.mp3"},
#   {title: "Bye Bye Blackbird", duration: "7:57", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/round/4.mp3"},
#   {title: "Tadd's Delight", duration: "4:29", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/round/5.mp3"},
#   {title: "Dear Old Stockholm", duration: "7:52", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/round/6.mp3"},
#   {title: "Two Bass Hit", duration: "3:45", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/round/7.mp3"},
#   {title: "Little Melonae", duration: "7:22", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/round/8.mp3"},
#   {title: "Budo", duration: "4:17", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/round/9.mp3"},
#   {title: "Sweet Sue, Just You", duration: "3:40", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/round/10.mp3"}
# ])

# whois.songs.create([  
#   {title: "Body And Soul", duration: "10:09", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/whois/1.mp3"},
#   {title: "Atomic Bomb", duration: "8:00", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/whois/2.mp3"},
#   {title: "Good Name", duration: "10:06", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/whois/3.mp3"},
#   {title: "Something You Will Never Forget", duration: "10:08", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/whois/4.mp3"},
#   {title: "Why Go To War", duration: "9:04", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/whois/5.mp3"},
#   {title: "Love Is Blind", duration: "7:49", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/whois/6.mp3"},
#   {title: "Heaven And Hell", duration: "4:03", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/whois/7.mp3"},
#   {title: "Let's Fall In Love", duration: "7:19", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/whois/8.mp3"},
#   {title: "Fantastic Man", duration: "6:26", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/whois/9.mp3"}
# ])

# carrie.songs.create([
#   {title: "Death With Dignity", duration: "4:00", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/carrie/1.mp3"},
#   {title: "Should Have Known Better", duration: "5:08", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/carrie/2.mp3"},
#   {title: "All Of Me Wants All Of You", duration: "3:42", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/carrie/3.mp3"},
#   {title: "Drawn To The Blood", duration: "3:18", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/carrie/4.mp3"},
#   {title: "Eugene", duration: "2:27", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/carrie/5.mp3"},
#   {title: "Fourth Of July", duration: "4:39", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/carrie/6.mp3"},
#   {title: "The Only Thing", duration: "4:44", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/carrie/7.mp3"},
#   {title: "Carrie & Lowell", duration: "3:15", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/carrie/8.mp3"},
#   {title: "John My Beloved", duration: "5:05", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/carrie/9.mp3"},
#   {title: "No Shade In The Shadow Of The Cross", duration: "2:41", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/carrie/10.mp3"},
#   {title: "Blue Bucket Of Gold", duration: "4:44", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/carrie/11.mp3"}
# ])

# vibras.songs.create([
#   {title: "Vibras", duration: "1:06", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/vibras/1.mp3"},
#   {title: "Mi Gente", duration: "3:05", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/vibras/2.mp3"},
#   {title: "Ambiente", duration: "4:09", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/vibras/3.mp3"},
#   {title: "Cuando Tú Quieras", duration: "3:25", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/vibras/4.mp3"},
#   {title: "No Es Justo", duration: "4:11", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/vibras/5.mp3"},
#   {title: "Ahora", duration: "4:15", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/vibras/6.mp3"},
#   {title: "Brillo", duration: "2:40", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/vibras/7.mp3"},
#   {title: "En Mí (Interlude)", duration: "0:54", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/vibras/8.mp3"},
#   {title: "En Mí", duration: "3:16", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/vibras/9.mp3"},
#   {title: "Peligrosa", duration: "3:22", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/vibras/10.mp3"} ,
#   {title: "Noches Pasadas", duration: "3:42", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/vibras/11.mp3"},
#   {title: "Tu Verdad", duration: "3:25", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/vibras/12.mp3"},
#   {title: "Dónde Estarás", duration: "3:12", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/vibras/13.mp3"},
#   {title: "Machika", duration: "3:10", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/vibras/14.mp3"}
# ])

# aman.songs.create([
#   {title: "Amanecer", duration: "4:09", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/aman/1.mp3"},
#   {title: "Caderas", duration: "2:56", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/aman/2.mp3"},
#   {title: "Somos Dos", duration: "4:00", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/aman/3.mp3"},
#   {title: "Soy Yo", duration: "2:40", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/aman/4.mp3"},
#   {title: "Fiesta", duration: "3:39", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/aman/5.mp3"},
#   {title: "Voy", duration: "3:16", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/aman/6.mp3"},
#   {title: "Algo Está Cambiando", duration: "4:30", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/aman/7.mp3"},
#   {title: "Mar (Lo Que Siento)", duration: "3:50", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/aman/8.mp3"},
#   {title: "To My Love", duration: "4:00", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/aman/9.mp3"},
#   {title: "Sólo Tú", duration: "4:15", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/aman/10.mp3"},
#   {title: "Raíz", duration: "3:39", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/aman/11.mp3"}
# ])

# badasme.songs.create([
#   {title: "Chicago", duration: "2:15", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/badasme/1.mp3"},
#   {title: "Raised Right Men", duration: "3:24", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/badasme/2.mp3"},
#   {title: "Talking At The Same Time", duration: "4:14", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/badasme/3.mp3"},
#   {title: "Get Lost", duration: "2:42", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/badasme/4.mp3"},
#   {title: "Face To The Highway", duration: "3:43", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/badasme/5.mp3"},
#   {title: "Pay Me", duration: "3:14", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/badasme/6.mp3"},
#   {title: "Back In The Crowd", duration: "2:49", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/badasme/7.mp3"},
#   {title: "Bad As Me", duration: "3:10", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/badasme/8.mp3"},
#   {title: "Kiss Me", duration: "3:41", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/badasme/9.mp3"},
#   {title: "Satisfied", duration: "4:05", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/badasme/10.mp3"},
#   {title: "Last Leaf", duration: "2:56", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/badasme/11.mp3"},
#   {title: "Hell Broke Luce", duration: "3:57", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/badasme/12.mp3"},
#   {title: "New Year's Eve", duration: "4:26", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/badasme/13.mp3"}
# ])

# vital.songs.create([
#   {title: "Last Exit", duration: "2:55", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/vital/1.mp3"},
#   {title: "Spin The Black Circle", duration: "2:48", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/vital/2.mp3"},
#   {title: "Not For You", duration: "5:53", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/vital/3.mp3"},
#   {title: "Tremor Christ", duration: "4:12", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/vital/4.mp3"},
#   {title: "Nothingman", duration: "4:36", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/vital/5.mp3"},
#   {title: "Whipping", duration: "2:34", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/vital/6.mp3"},
#   {title: "Pry, To", duration: "1:03", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/vital/7.mp3"},
#   {title: "Corduroy", duration: "4:38", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/vital/8.mp3"},
#   {title: "Bugs", duration: "2:45", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/vital/9.mp3"},
#   {title: "Satan's Bed", duration: "3:31", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/vital/10.mp3"},
#   {title: "Better Man", duration: "4:29", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/vital/11.mp3"},
#   {title: "Aya Davanita", duration: "2:58", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/vital/12.mp3"},
#   {title: "Immortality", duration: "5:29", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/vital/13.mp3"},
#   {title: "Stupidmop", duration: "7:28", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/vital/14.mp3"}
# ])

# whatsgoing.songs.create([
#   {title: "What's Going On", duration: "3:53", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/whatsgoing/1.mp3"},
#   {title: "What's Happening Brother", duration: "2:44", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/whatsgoing/2.mp3"},
#   {title: "Flyin' High (In The Friendly Sky)", duration: "3:50", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/whatsgoing/3.mp3"},
#   {title: "Save The Children", duration: "4:03", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/whatsgoing/4.mp3"},
#   {title: "God Is Love", duration: "1:42", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/whatsgoing/5.mp3"},
#   {title: "Mercy Mercy Me (The Ecology)", duration: "3:16", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/whatsgoing/6.mp3"},
#   {title: "Right On", duration: "7:32", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/whatsgoing/7.mp3"},
#   {title: "Wholy Holy", duration: "3:08", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/whatsgoing/8.mp3"},
#   {title: "Inner City Blues (Make Me Wanna Holler)", duration: "5:33", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/whatsgoing/9.mp3"}
# ])

# cheap.songs.create([
#   {title: "Small Town Moon", duration: "3:03", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/cheap/1.mp3"},
#   {title: "Oh Marcello", duration: "2:39", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/cheap/2.mp3"},
#   {title: "Don't Leave Me (Ne Me Quitte Pas)", duration: "3:40", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/cheap/3.mp3"},
#   {title: "Firewood", duration: "4:55", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/cheap/4.mp3"},
#   {title: "Patron Saint", duration: "3:40", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/cheap/5.mp3"},
#   {title: "How", duration: "4:48", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/cheap/6.mp3"},
#   {title: "All The Rowboats", duration: "3:35", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/cheap/7.mp3"},
#   {title: "Ballad Of A Politician", duration: "2:14", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/cheap/8.mp3"},
#   {title: "Open", duration: "4:31", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/cheap/9.mp3"},
#   {title: "The Party", duration: "2:28", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/cheap/10.mp3"},
#   {title: "Jessica", duration: "1:45", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/cheap/11.mp3"}
# ])

# dua_album.songs.create([
#   {title: "Genesis", duration: "3:27", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/dua_album/1.mp3"},
#   {title: "Lost In Your Light", duration: "3:24", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/dua_album/2.mp3"},
#   {title: "Hotter Than Hell", duration: "3:10", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/dua_album/3.mp3"},
#   {title: "Be The One", duration: "3:25", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/dua_album/4.mp3"},
#   {title: "IDGAF", duration: "3:38", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/dua_album/5.mp3"},
#   {title: "Blow Your Mind (Mwah)", duration: "2:59", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/dua_album/6.mp3"},
#   {title: "Garden", duration: "3:48", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/dua_album/7.mp3"},
#   {title: "No Goodbyes", duration: "3:36", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/dua_album/8.mp3"},
#   {title: "Thinking 'bout You", duration: "2:53", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/dua_album/9.mp3"},
#   {title: "New Rules", duration: "3:32", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/dua_album/10.mp3"},
#   {title: "Begging", duration: "3:14", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/dua_album/11.mp3"},
#   {title: "Homesick", duration: "3:50", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/dua_album/12.mp3"}
# ])

# ten.songs.create([
#   {title: "Once", duration: "3:52", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/ten/1.mp3"},
#   {title: "Even Flow", duration: "4:54", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/ten/2.mp3"},
#   {title: "Alive", duration: "5:41", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/ten/3.mp3"},
#   {title: "Why Go", duration: "3:20", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/ten/4.mp3"},
#   {title: "Black", duration: "5:44", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/ten/5.mp3"},
#   {title: "Jeremy", duration: "5:19", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/ten/6.mp3"},
#   {title: "Oceans", duration: "2:42", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/ten/7.mp3"},
#   {title: "Porch", duration: "3:31", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/ten/8.mp3"},
#   {title: "Garden", duration: "4:59", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/ten/9.mp3"},
#   {title: "Deep", duration: "4:18", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/ten/10.mp3"},
#   {title: "Release", duration: "9:06", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/ten/11.mp3"}
# ])

# joanne.songs.create([
#   {title: "Diamond Heart", duration: "3:30", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/joanne/1.mp3"},
#   {title: "A-YO", duration: "3:28", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/joanne/2.mp3"},
#   {title: "Joanne", duration: "3:17", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/joanne/3.mp3"},
#   {title: "John Wayne", duration: "2:54", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/joanne/4.mp3"},
#   {title: "Dancin' In Circles", duration: "3:27", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/joanne/5.mp3"},
#   {title: "Perfect Illusion", duration: "3:02", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/joanne/6.mp3"},
#   {title: "Million Reasons", duration: "3:25", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/joanne/7.mp3"},
#   {title: "Sinner's Prayer", duration: "3:43", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/joanne/8.mp3"},
#   {title: "Come To Mama", duration: "4:15", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/joanne/9.mp3"},
#   {title: "Hey Girl", duration: "4:15", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/joanne/10.mp3"},
#   {title: "Angel Down", duration: "3:49", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/joanne/11.mp3"},
#   {title: "Girgio Girls", duration: "3:00", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/joanne/12.mp3"},
#   {title: "Just Another Day", duration: "2:58", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/joanne/13.mp3"},
#   {title: "Angel Down (Work Tape)", duration: "2:20", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/joanne/14.mp3"}
# ])

# oops.songs.create([
#   {title: "Oops!... I Did It Again", duration: "3:31", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/oops/1.mp3"},
#   {title: "Stronger", duration: "3:23", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/oops/2.mp3"},
#   {title: "Don't Go Knockin' On My Door", duration: "3:44", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/oops/3.mp3"},
#   {title: "(I Can't Get No) Satisfaction", duration: "4:26", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/oops/4.mp3"},
#   {title: "Don't Let Me Be The Last To Know", duration: "3:51", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/oops/5.mp3"},
#   {title: "What U See (Is What U Get)", duration: "3:37", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/oops/6.mp3"},
#   {title: "Lucky", duration: "3:26", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/oops/7.mp3"},
#   {title: "One Kiss From You", duration: "3:26", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/oops/8.mp3"},
#   {title: "Where Are You Now", duration: "4:39", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/oops/9.mp3"},
#   {title: "Can't Make You Love Me", duration: "3:17", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/oops/10.mp3"},
#   {title: "When Your Eyes Say It", duration: "4:30", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/oops/11.mp3"},
#   {title: "Dear Diary", duration: "2:47", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/oops/12.mp3"}
# ])

# sweet.songs.create([
#   {title: "Raindrops (An Angel Cried)", duration: "0:38", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/sweet/1.mp3"},
#   {title: "Blazed", duration: "3:16", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/sweet/2.mp3"},
#   {title: "The Light Is Coming", duration: "3:48", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/sweet/3.mp3"},
#   {title: "R.E.M.", duration: "4:06", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/sweet/4.mp3"},
#   {title: "God Is A Woman", duration: "3:18", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/sweet/5.mp3"},
#   {title: "Sweetener", duration: "3:28", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/sweet/6.mp3"},
#   {title: "Successful", duration: "3:47", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/sweet/7.mp3"},
#   {title: "Everytime", duration: "2:52", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/sweet/8.mp3"},
#   {title: "Breathin", duration: "3:18", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/sweet/9.mp3"},
#   {title: "No Tears Left To Cry", duration: "3:26", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/sweet/10.mp3"},
#   {title: "Borderline", duration: "2:58", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/sweet/11.mp3"},
#   {title: "Better Off", duration: "2:51", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/sweet/12.mp3"},
#   {title: "Goodnight N Go", duration: "3:10", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/sweet/13.mp3"},
#   {title: "Pete Davidson", duration: "1:14", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/sweet/14.mp3"},
#   {title: "Get Well Soon", duration: "5:22", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/sweet/15.mp3"}
# ])

# argue.songs.create([
#   {title: "Ode To My Family", duration: "4:31", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/argue/1.mp3"},
#   {title: "I Can't Be With You", duration: "3:08", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/argue/2.mp3"},
#   {title: "Twenty One", duration: "3:08", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/argue/3.mp3"},
#   {title: "Zombie", duration: "5:06", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/argue/4.mp3"},
#   {title: "Empty", duration: "3:26", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/argue/5.mp3"},
#   {title: "Everytihng I Said", duration: "3:53", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/argue/6.mp3"},
#   {title: "The Icicle Melts", duration: "2:54", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/argue/7.mp3"},
#   {title: "Disappointment", duration: "4:15", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/argue/8.mp3"},
#   {title: "Ridiculous Thoughts", duration: "4:31", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/argue/9.mp3"},
#   {title: "Dreaming My Dreams", duration: "3:37", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/argue/10.mp3"},
#   {title: "Yeat's Grave", duration: "3:00", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/argue/11.mp3"},
#   {title: "Daffodil Lament", duration: "6:14", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/argue/12.mp3"},
#   {title: "No Need To Argue", duration: "2:55", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/argue/13.mp3"}
# ])

# thriller.songs.create([
#   {title: "Wanna Be Startin' Somethin'", duration: "6:01", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/thriller/1.mp3"},
#   {title: "Baby Be Mine", duration: "4:19", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/thriller/2.mp3"},
#   {title: "The Girl Is Mine", duration: "3:41", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/thriller/3.mp3"},
#   {title: "Thriller", duration: "5:56", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/thriller/4.mp3"},
#   {title: "Beat It", duration: "4:17", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/thriller/5.mp3"},
#   {title: "Billie Jean", duration: "4:53", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/thriller/6.mp3"},
#   {title: "Human Nature", duration: "4:04", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/thriller/7.mp3"},
#   {title: "P.Y.T. (Pretty Young Thing)", duration: "3:58", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/thriller/8.mp3"},
#   {title: "The Lady In My Life", duration: "4:58", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/thriller/9.mp3"},
#   {title: "Excerpt From Thriller Voiceover Session", duration: "0:24", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/thriller/10.mp3"}
# ])

# creep.songs.create([
#   {title: "Heart Attack", duration: "3:44", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/creep/1.mp3"},
#   {title: "Coast To Coast", duration: "3:56", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/creep/2.mp3"},
#   {title: "ABC 123", duration: "3:34", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/creep/3.mp3"},
#   {title: "Now As Then", duration: "3:52", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/creep/4.mp3"},
#   {title: "Honesty", duration: "3:39", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/creep/5.mp3"},
#   {title: "Colonizer", duration: "3:54", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/creep/6.mp3"},
#   {title: "Look At Your Hands", duration: "3:46", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/creep/7.mp3"},
#   {title: "Home", duration: "4:18", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/creep/8.mp3"},
#   {title: "Hammer", duration: "3:15", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/creep/9.mp3"},
#   {title: "Who Are You", duration: "3:18", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/creep/10.mp3"},
#   {title: "Private Life", duration: "3:20", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/creep/11.mp3"},
#   {title: "Free", duration: "3:42", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/creep/12.mp3"}
# ])

# rubber.songs.create([
#   {title: "Drive My Car", duration: "2:29", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/rubber/1.mp3"},
#   {title: "Norwegian Wood (This Bird Has Flown)", duration: "2:05", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/rubber/2.mp3"},
#   {title: "You Won't See Me", duration: "3:20", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/rubber/3.mp3"},
#   {title: "Nowhere Man", duration: "2:44", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/rubber/4.mp3"},
#   {title: "Think For Yourself", duration: "2:19", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/rubber/5.mp3"},
#   {title: "The Word", duration: "2:43", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/rubber/6.mp3"},
#   {title: "Michelle", duration: "2:42", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/rubber/7.mp3"},
#   {title: "What Goes On", duration: "2:49", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/rubber/8.mp3"},
#   {title: "Girl", duration: "2:32", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/rubber/9.mp3"},
#   {title: "I'm Looking Through You", duration: "2:26", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/rubber/10.mp3"},
#   {title: "In My Life", duration: "2:26", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/rubber/11.mp3"},
#   {title: "Wait", duration: "2:15", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/rubber/12.mp3"},
#   {title: "If I Needed Someone", duration: "2:22", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/rubber/13.mp3"},
#   {title: "Run For Your Life", duration: "2:23", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/rubber/14.mp3"}
# ])

# unplugged.songs.create([
#   {title: "About A Girl", duration: "3:37", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/unplugged/1.mp3"},
#   {title: "Come As You Are", duration: "4:14", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/unplugged/2.mp3"},
#   {title: "Jesus Doesn't Want Me For A Sunbeam", duration: "4:37", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/unplugged/3.mp3"},
#   {title: "The Man Who Sold The World", duration: "4:21", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/unplugged/4.mp3"},
#   {title: "Pennyroyal Tea", duration: "3:41", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/unplugged/5.mp3"},
#   {title: "Dumb", duration: "2:53", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/unplugged/6.mp3"},
#   {title: "Polly", duration: "3:16", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/unplugged/7.mp3"},
#   {title: "On A Plain", duration: "3:45", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/unplugged/8.mp3"},
#   {title: "Something In The Way", duration: "4:02", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/unplugged/9.mp3"},
#   {title: "Plateau", duration: "3:38", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/unplugged/10.mp3"},
#   {title: "Oh, Me", duration: "3:26", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/unplugged/11.mp3"},
#   {title: "Lake Of Fire", duration: "2:56", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/unplugged/12.mp3"},
#   {title: "All Apologies", duration: "4:23", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/unplugged/13.mp3"},
#   {title: "Where Did You Sleep Last Night", duration: "5:06", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/unplugged/14.mp3"}
# ])

# outer.songs.create([
#   {title: "Fading", duration: "3:17", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/outer/1.mp3"},
#   {title: "Ordinary Pleasure", duration: "3:04", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/outer/2.mp3"},
#   {title: "Laws Of The Universe", duration: "2:49", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/outer/3.mp3"},
#   {title: "Miss Me", duration: "3:01", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/outer/4.mp3"},
#   {title: "New House", duration: "2:31", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/outer/5.mp3"},
#   {title: "Baby Drive It Down", duration: "3:08", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/outer/6.mp3"},
#   {title: "Freelance", duration: "3:46", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/outer/7.mp3"},
#   {title: "Who Am I", duration: "3:29", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/outer/8.mp3"},
#   {title: "Monte Carlo", duration: "2:05", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/outer/9.mp3"},
#   {title: "50-50", duration: "3:27", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/outer/10.mp3"}
# ])

# smiths_album.songs.create([
#   {title: "Reel Around The Fountain", duration: "5:56", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/smiths/1.mp3"},
#   {title: "You've Got Everything Now", duration: "4:00", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/smiths/2.mp3"},
#   {title: "Miserable Lie", duration: "4:28", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/smiths/3.mp3"},
#   {title: "Pretty Girls Make Graves", duration: "3:43", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/smiths/4.mp3"},
#   {title: "The Hand That Rocks The Cradle", duration: "4:38", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/smiths/5.mp3"},
#   {title: "This Charming Man", duration: "2:43", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/smiths/6.mp3"},
#   {title: "Still Ill", duration: "3:21", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/smiths/7.mp3"},
#   {title: "Hand In Glove", duration: "3:23", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/smiths/8.mp3"},
#   {title: "What Difference Does It Make?", duration: "3:50", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/smiths/9.mp3"},
#   {title: "I Don't Owe You Anything", duration: "4:05", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/smiths/10.mp3"},
#   {title: "Suffer Little Children", duration: "5:28", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/smiths/11.mp3"}
# ])

# fame.songs.create([
#   {title: "Intro - F.A.M.E.", duration: "1:40", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/fame/1.mp3"},
#   {title: "Corazón", duration: "3:05", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/fame/2.mp3"},
#   {title: "El Préstamo", duration: "3:40", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/fame/3.mp3"},
#   {title: "Cuenta A Saldo", duration: "3:17", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/fame/4.mp3"},
#   {title: "Hangover", duration: "4:02", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/fame/5.mp3"},
#   {title: "Mi Declaración", duration: "3:46", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/fame/6.mp3"},
#   {title: "How I Like It", duration: "2:51", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/fame/7.mp3"},
#   {title: "Marinero", duration: "3:09", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/fame/8.mp3"},
#   {title: "Delincuente", duration: "3:27", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/fame/9.mp3"},
#   {title: "Condena", duration: "3:30", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/fame/10.mp3"},
#   {title: "Ojos Que No Ven", duration: "3:40", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/fame/11.mp3"},
#   {title: "La Ex", duration: "3:12", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/fame/12.mp3"},
#   {title: "Unfollow", duration: "3:21", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/fame/13.mp3"},
#   {title: "Felices Los 4", duration: "3:50", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/fame/14.mp3"},
#   {title: "Felices Los 4 [Salsa Version]", duration: "4:02", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/fame/15.mp3"}
# ])

# nevermind.songs.create([
#   {title: "Smells Like Teen Spirit", duration: "5:02", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/nevermind/1.mp3"},
#   {title: "In Bloom", duration: "4:15", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/nevermind/2.mp3"},
#   {title: "Come As You Are", duration: "3:39", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/nevermind/3.mp3"},
#   {title: "Breed", duration: "3:04", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/nevermind/4.mp3"},
#   {title: "Lithium", duration: "4:17", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/nevermind/5.mp3"},
#   {title: "Polly", duration: "2:57", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/nevermind/6.mp3"},
#   {title: "Territorial Pissings", duration: "2:23", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/nevermind/7.mp3"},
#   {title: "Drain You", duration: "3:44", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/nevermind/8.mp3"},
#   {title: "Lounge Act", duration: "2:37", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/nevermind/9.mp3"},
#   {title: "Stay Away", duration: "3:32", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/nevermind/10.mp3"},
#   {title: "On A Plain", duration: "3:16", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/nevermind/11.mp3"},
#   {title: "Something In The Way / Endless, Nameless", duration: "11:02", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/nevermind/12.mp3"}
# ])

# english.songs.create([
#   {title: "The English Riviera", duration: "0:37", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/english/1.mp3"},
#   {title: "We Broke Free", duration: "4:06", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/english/2.mp3"},
#   {title: "Everything Goes My Way", duration: "3:30", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/english/3.mp3"},
#   {title: "The Look", duration: "4:38", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/english/4.mp3"},
#   {title: "She Wants", duration: "3:51", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/english/5.mp3"},
#   {title: "Trouble", duration: "4:46", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/english/6.mp3"},
#   {title: "The Bay", duration: "4:50", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/english/7.mp3"},
#   {title: "Loving Arm", duration: "3:31", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/english/8.mp3"},
#   {title: "Corinne", duration: "3:16", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/english/9.mp3"},
#   {title: "Some Written", duration: "6:03", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/english/10.mp3"},
#   {title: "Love Underlined", duration: "5:58", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/english/11.mp3"}
# ])

# anti.songs.create([
#   {title: "Consideration", duration: "2:41", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/anti/1.mp3"},
#   {title: "James Joint", duration: "1:12", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/anti/2.mp3"},
#   {title: "Kiss It Better", duration: "4:13", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/anti/3.mp3"},
#   {title: "Work", duration: "3:39", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/anti/4.mp3"},
#   {title: "Desperado", duration: "3:06", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/anti/5.mp3"},
#   {title: "Woo", duration: "3:56", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/anti/6.mp3"},
#   {title: "Needed Me", duration: "3:12", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/anti/7.mp3"},
#   {title: "Yeah, I Said It", duration: "2:13", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/anti/8.mp3"},
#   {title: "Some Ol' Mistakes", duration: "6:37", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/anti/9.mp3"},
#   {title: "Never Ending", duration: "3:23", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/anti/10.mp3"},
#   {title: "Love On The Brain", duration: "3:44", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/anti/11.mp3"},
#   {title: "Higher", duration: "2:01", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/anti/12.mp3"},
#   {title: "Close To You", duration: "3:43", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/anti/13.mp3"}
# ])

# mised.songs.create([
#   {title: "Intro", duration: "0:47", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/mised/1.mp3"},
#   {title: "Lose Ones", duration: "5:34", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/mised/2.mp3"},
#   {title: "Ex-Factor", duration: "5:27", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/mised/3.mp3"},
#   {title: "To Zion", duration: "6:09", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/mised/4.mp3"},
#   {title: "Doo Wop (That Thing)", duration: "5:20", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/mised/5.mp3"},
#   {title: "Superstar", duration: "4:57", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/mised/6.mp3"},
#   {title: "Final Hour", duration: "4:16", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/mised/7.mp3"},
#   {title: "When It Hurts So Bad", duration: "5:42", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/mised/8.mp3"},
#   {title: "I Used To Love Him", duration: "5:40", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/mised/9.mp3"},
#   {title: "Forgive Them Father", duration: "5:15", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/mised/10.mp3"},
#   {title: "Every Ghetto, Every City", duration: "5:15", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/mised/11.mp3"},
#   {title: "Nothing Even Matters", duration: "5:51", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/mised/12.mp3"},
#   {title: "Everything Is Everything", duration: "4:53", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/mised/13.mp3"},
#   {title: "The Miseducation Of Lauryn Hill", duration: "4:17", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/mised/14.mp3"},
#   {title: "Can't Take My Eyes Off Of You", duration: "3:41", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/mised/15.mp3"},
#   {title: "Tell Him", duration: "4:41", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/mised/16.mp3"}
# ])

# exper.songs.create([
#   {title: "Purple Haze", duration: "2:51", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/exper/1.mp3"},
#   {title: "Manic Depression", duration: "3:42", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/exper/2.mp3"},
#   {title: "Hey Joe", duration: "3:30", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/exper/3.mp3"},
#   {title: "Love Or Confusion", duration: "3:13", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/exper/4.mp3"},
#   {title: "May This Be Love", duration: "3:10", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/exper/5.mp3"},
#   {title: "I Don't Live Today", duration: "3:55", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/exper/6.mp3"},
#   {title: "The Wind Cries Mary", duration: "3:21", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/exper/7.mp3"},
#   {title: "Fire", duration: "2:44", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/exper/8.mp3"},
#   {title: "Third Stone From The Sun", duration: "6:44", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/exper/9.mp3"},
#   {title: "Foxey Lady", duration: "3:19", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/exper/10.mp3"},
#   {title: "Are You Experienced?", duration: "4:16", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/exper/11.mp3"},
#   {title: "Stone Free", duration: "3:36", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/exper/12.mp3"},
#   {title: "51st Anniversary", duration: "3:16", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/exper/13.mp3"},
#   {title: "Highway Chile", duration: "3:33", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/exper/14.mp3"},
#   {title: "Can You See Me", duration: "2:33", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/exper/15.mp3"},
#   {title: "Remember", duration: "2:49", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/exper/16.mp3"},
#   {title: "Red House", duration: "3:50", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/exper/17.mp3"}
# ])

# phren.songs.create([
#   {title: "Rock You", duration: "3:13", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/phren/1.mp3"},
#   {title: "!!!!!!!", duration: "0:25", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/phren/2.mp3"},
#   {title: "Sacrifice", duration: "4:45", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/phren/3.mp3"},
#   {title: "Rolling With Heat", duration: "3:42", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/phren/4.mp3"},
#   {title: "WAOK (Ay) Rollcall", duration: "1:00", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/phren/5.mp3"},
#   {title: "Thought @ Work", duration: "4:59", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/phren/6.mp3"},
#   {title: "The Seed (2.0)", duration: "4:28", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/phren/7.mp3"},
#   {title: "Break You Off", duration: "7:27", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/phren/8.mp3"},
#   {title: "Water", duration: "10:24", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/phren/9.mp3"},
#   {title: "Quills", duration: "4:22", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/phren/10.mp3"},
#   {title: "P***y Galore", duration: "4:29", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/phren/11.mp3"},
#   {title: "Complexity", duration: "4:48", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/phren/12.mp3"},
#   {title: "Something In The Way Of Things (In Town)", duration: "7:16", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/phren/13.mp3"}
# ])

# puravida.songs.create([
#   {title: "We Rise Again", duration: "3:42", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/puravida/1.mp3"},
#   {title: "Dig Deep Enough", duration: "3:43", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/puravida/2.mp3"},
#   {title: "Malandrino", duration: "3:33", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/puravida/3.mp3"},
#   {title: "Lost Innocent World", duration: "4:26", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/puravida/4.mp3"},
#   {title: "It Is The Way You Name Your Ship", duration: "3:38", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/puravida/5.mp3"},
#   {title: "The Other Side Of Rainbow", duration: "3:16", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/puravida/6.mp3"},
#   {title: "Amen", duration: "4:15", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/puravida/7.mp3"},
#   {title: "I Just Realized", duration: "3:27", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/puravida/8.mp3"},
#   {title: "My Gypsy Auto Pilot", duration: "3:48", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/puravida/9.mp3"},
#   {title: "Hieroglyph", duration: "3:49", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/puravida/10.mp3"},
#   {title: "John The Conqueror (Truth Is Always The Same)", duration: "3:30", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/puravida/11.mp3"},
#   {title: "We Shall Sail", duration: "10:06", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/puravida/12.mp3"}
# ])

# blitz.songs.create([
#   {title: "Zero", duration: "4:26", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/blitz/1.mp3"},
#   {title: "Heads Will Roll", duration: "3:42", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/blitz/2.mp3"},
#   {title: "Soft Shock", duration: "3:53", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/blitz/3.mp3"},
#   {title: "Skeletons", duration: "5:02", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/blitz/4.mp3"},
#   {title: "Dull Life", duration: "4:08", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/blitz/5.mp3"},
#   {title: "Shame And Fortune", duration: "3:31", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/blitz/6.mp3"},
#   {title: "Runaway", duration: "5:13", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/blitz/7.mp3"},
#   {title: "Dragon Queen", duration: "4:02", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/blitz/8.mp3"},
#   {title: "Hysteric", duration: "3:52", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/blitz/9.mp3"},
#   {title: "Little Shadow", duration: "3:57", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/blitz/10.mp3"}
# ])

# cominghome.songs.create([
#   {title: "Coming Home", duration: "3:26", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/cominghome/1.mp3"},
#   {title: "Better Man", duration: "2:21", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/cominghome/2.mp3"},
#   {title: "Brown Skin Girl", duration: "3:27", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/cominghome/3.mp3"},
#   {title: "Smooth Sailin'", duration: "3:07", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/cominghome/4.mp3"},
#   {title: "Shine", duration: "3:39", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/cominghome/5.mp3"},
#   {title: "Lisa Sawyer", duration: "4:05", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/cominghome/6.mp3"},
#   {title: "Flowers", duration: "2:57", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/cominghome/7.mp3"},
#   {title: "Pull Away", duration: "3:02", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/cominghome/8.mp3"},
#   {title: "Twistin' & Groovin'", duration: "4:14", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/cominghome/9.mp3"},
#   {title: "River", duration: "3:59", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/cominghome/10.mp3"}
# ])

# trans.songs.create([
#   {title: "Europe Endless", duration: "9:42", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/trans/1.mp3"},
#   {title: "The Hall Of Mirrors", duration: "7:57", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/trans/2.mp3"},
#   {title: "Showroom Dummies", duration: "6:15", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/trans/3.mp3"},
#   {title: "Trans Europe Express", duration: "6:36", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/trans/4.mp3"},
#   {title: "Metal On Metal", duration: "2:12", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/trans/5.mp3"},
#   {title: "Abzug", duration: "4:55", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/trans/6.mp3"},
#   {title: "Franz Schubert", duration: "4:26", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/trans/7.mp3"},
#   {title: "Endless Endless", duration: "0:57", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/trans/8.mp3"}
# ])

# outside.songs.create([
#   {title: "Follow You Down", duration: "4:30", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/outside/1.mp3"},
#   {title: "Hey Jealousy", duration: "3:56", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/outside/2.mp3"},
#   {title: "Until I Fall Away", duration: "3:52", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/outside/3.mp3"},
#   {title: "Allison Road", duration: "3:19", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/outside/4.mp3"},
#   {title: "Mrs. Rita", duration: "4:26", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/outside/5.mp3"},
#   {title: "Found Out About You", duration: "3:54", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/outside/6.mp3"},
#   {title: "Not Only Numb", duration: "3:08", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/outside/7.mp3"},
#   {title: "Whitewash [Live]", duration: "3:19", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/outside/8.mp3"},
#   {title: "Cajun Song", duration: "2:58", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/outside/9.mp3"},
#   {title: "Just South Of Nowhere", duration: "3:27", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/outside/10.mp3"},
#   {title: "Pieces Of The Night", duration: "4:34", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/outside/11.mp3"},
#   {title: "As Long As It Matters", duration: "4:31", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/outside/12.mp3"},
#   {title: "Day Job", duration: "3:52", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/outside/13.mp3"},
#   {title: "Til I Hear It From You", duration: "3:51", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/outside/14.mp3"}
# ])

# falling.songs.create([
#   {title: "It's All Coming Back To Me Now", duration: "7:38", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/falling/1.mp3"},
#   {title: "Because You Loved Me", duration: "4:34", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/falling/2.mp3"},
#   {title: "Falling Into You", duration: "4:18", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/falling/3.mp3"},
#   {title: "Make You Happy", duration: "4:32", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/falling/4.mp3"},
#   {title: "Seduces Me", duration: "3:46", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/falling/5.mp3"},
#   {title: "All By Myself", duration: "5:13", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/falling/6.mp3"},
#   {title: "Declaration Of Love", duration: "4:21", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/falling/7.mp3"},
#   {title: "Dreamin' Of You", duration: "5:08", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/falling/8.mp3"},
#   {title: "I Love You", duration: "5:30", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/falling/9.mp3"},
#   {title: "If That's What It Takes", duration: "4:13", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/falling/10.mp3"},
#   {title: "I Don't Know", duration: "4:39", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/falling/11.mp3"},
#   {title: "River Deep, Mountain High", duration: "4:12", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/falling/12.mp3"},
#   {title: "Call The Man", duration: "6:08", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/falling/13.mp3"},
#   {title: "Fly", duration: "2:57", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/falling/14.mp3"}
# ])

# electric.songs.create([
#   {title: "Blue Skies", duration: "5:25", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/electric/1.mp3"},
#   {title: "Deja Vu", duration: "4:34", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/electric/2.mp3"},
#   {title: "Rocket", duration: "3:52", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/electric/3.mp3"},
#   {title: "Reach 4 Me", duration: "3:51", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/electric/4.mp3"},
#   {title: "Electic Café", duration: "4:34", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/electric/5.mp3"},
#   {title: "Life", duration: "4:09", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/electric/6.mp3"},
#   {title: "Love The Way", duration: "3:48", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/electric/7.mp3"},
#   {title: "Oceans Deep", duration: "3:18", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/electric/8.mp3"},
#   {title: "Have A Seat", duration: "3:50", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/electric/9.mp3"},
#   {title: "I'm Good", duration: "4:05", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/electric/10.mp3"},
#   {title: "So Serious", duration: "4:46", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/electric/11.mp3"}
# ])

# prayer.songs.create([
#   {title: "Like A Prayer", duration: "5:41", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/prayer/1.mp3"},
#   {title: "Express Yourself", duration: "4:39", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/prayer/2.mp3"},
#   {title: "Love Song", duration: "4:53", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/prayer/3.mp3"},
#   {title: "Till Death Do Us Part", duration: "5:18", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/prayer/4.mp3"},
#   {title: "Promise To Try", duration: "3:38", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/prayer/5.mp3"},
#   {title: "Cherish", duration: "5:04", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/prayer/6.mp3"},
#   {title: "Dear Jessie", duration: "4:21", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/prayer/7.mp3"},
#   {title: "Oh Father", duration: "4:59", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/prayer/8.mp3"},
#   {title: "Keep It Together", duration: "5:03", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/prayer/9.mp3"},
#   {title: "Spanish Eyes", duration: "5:18", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/prayer/10.mp3"},
#   {title: "Act Of Contrition", duration: "2:19", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/prayer/11.mp3"}
# ])

# channel.songs.create([
#   {title: "Start", duration: "0:45", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/channel/1.mp3"},
#   {title: "Thinkin Bout You", duration: "3:20", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/channel/2.mp3"},
#   {title: "Fertilizer", duration: "0:39", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/channel/3.mp3"},
#   {title: "Sierra Leone", duration: "2:28", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/channel/4.mp3"},
#   {title: "Sweet Life", duration: "4:22", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/channel/5.mp3"},
#   {title: "No! Just Money", duration: "0:59", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/channel/6.mp3"},
#   {title: "Super Rich Kids", duration: "5:04", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/channel/7.mp3"},
#   {title: "Pilot Jones", duration: "3:04", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/channel/8.mp3"},
#   {title: "Crack Rock", duration: "3:44", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/channel/9.mp3"},
#   {title: "Pyramids", duration: "9:53", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/channel/10.mp3"},
#   {title: "Lost", duration: "3:54", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/channel/11.mp3"},
#   {title: "White", duration: "1:16", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/channel/12.mp3"},
#   {title: "Monks", duration: "3:20", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/channel/13.mp3"},
#   {title: "Bad Religion", duration: "2:55", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/channel/14.mp3"},
#   {title: "Pink Matter", duration: "4:28", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/channel/15.mp3"},
#   {title: "Forrest Gump", duration: "3:14", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/channel/16.mp3"},
#   {title: "End", duration: "2:14", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/channel/17.mp3"}
# ])

# swan.songs.create([
#   {title: "Orlando", duration: "3:02", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/swan/1.mp3"},
#   {title: "Saint", duration: "3:12", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/swan/2.mp3"},
#   {title: "Take Your Time", duration: "2:51", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/swan/3.mp3"},
#   {title: "Hope", duration: "3:59", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/swan/4.mp3"},
#   {title: "Jewelry", duration: "4:32", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/swan/5.mp3"},
#   {title: "Family", duration: "0:41", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/swan/6.mp3"},
#   {title: "Charcoal Baby", duration: "4:02", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/swan/7.mp3"},
#   {title: "Vulture Baby", duration: "1:14", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/swan/8.mp3"},
#   {title: "Chewing Gum", duration: "4:23", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/swan/9.mp3"},
#   {title: "Holy Will", duration: "4:22", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/swan/10.mp3"},
#   {title: "Dagenham Dream", duration: "2:45", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/swan/11.mp3"},
#   {title: "Nappy Wonder", duration: "2:38", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/swan/12.mp3"},
#   {title: "Runnin'", duration: "3:55", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/swan/13.mp3"},
#   {title: "Out of Your League", duration: "2:20", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/swan/14.mp3"},
#   {title: "Minetta Creek", duration: "1:58", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/swan/15.mp3"},
#   {title: "Smoke", duration: "3:33", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/swan/16.mp3"}
# ])

# blueprint.songs.create([
#   {title: "The Ruler's Back", duration: "3:50", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/blueprint/1.mp3"},
#   {title: "Takeover", duration: "5:13", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/blueprint/2.mp3"},
#   {title: "Izzo (H.O.V.A.)", duration: "4:01", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/blueprint/3.mp3"},
#   {title: "Girls, Girls, Girls", duration: "4:35", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/blueprint/4.mp3"},
#   {title: "Jigga That N***a", duration: "3:24", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/blueprint/5.mp3"},
#   {title: "U Don't Know", duration: "3:19", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/blueprint/6.mp3"},
#   {title: "Hova' Hovito", duration: "4:33", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/blueprint/7.mp3"},
#   {title: "Heart Of The City (Ain't No Love)", duration: "3:43", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/blueprint/8.mp3"},
#   {title: "Never Change", duration: "3:59", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/blueprint/9.mp3"},
#   {title: "Song Cry", duration: "5:04", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/blueprint/10.mp3"},
#   {title: "All I Need", duration: "4:29", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/blueprint/11.mp3"},
#   {title: "Renegade", duration: "5:38", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/blueprint/12.mp3"},
#   {title: "Blueprint (Momma Loves Me)", duration: "12:08", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/blueprint/13.mp3"}
# ])

# selfportrait.songs.create([
#   {title: "All The Tired Horses", duration: "3:12", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/selfportrait/1.mp3"},
#   {title: "Alberta #1", duration: "2:57", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/selfportrait/2.mp3"},
#   {title: "I Forgot More Than You'll Ever Know", duration: "2:23", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/selfportrait/3.mp3"},
#   {title: "Days of `49`", duration: "5:27", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/selfportrait/4.mp3"},
#   {title: "Early Mornin' Rain", duration: "3:34", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/selfportrait/5.mp3"},
#   {title: "In Search of Little Sadie", duration: "2:27", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/selfportrait/6.mp3"},
#   {title: "Let It be Me", duration: "3:00", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/selfportrait/7.mp3"},
#   {title: "Little Sadie", duration: "2:00", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/selfportrait/8.mp3"},
#   {title: "Woogie Boogie", duration: "2:06", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/selfportrait/9.mp3"},
#   {title: "Belle Isle", duration: "2:30", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/selfportrait/10.mp3"},
#   {title: "Living the Blues", duration: "2:42", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/selfportrait/11.mp3"},
#   {title: "Like a Rolling Stone (Live)", duration: "5:18", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/selfportrait/12.mp3"},
#   {title: "Copper Kettle", duration: "3:34", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/selfportrait/13.mp3"},
#   {title: "Gotta Travel On", duration: "3:08", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/selfportrait/14.mp3"},
#   {title: "Blue Moon", duration: "2:29", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/selfportrait/15.mp3"},
#   {title: "The Boxer", duration: "2:48", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/selfportrait/16.mp3"},
#   {title: "(Quinn the Eskimo) The Mighty Quinn (Live)", duration: "2:48", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/selfportrait/17.mp3"},
#   {title: "Take Me as I Am (Or Let Me Go)", duration: "3:03", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/selfportrait/18.mp3"},
#   {title: "Take a Message to Mary", duration: "2:46", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/selfportrait/19.mp3"},
#   {title: "It Hurts Me Too", duration: "3:15", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/selfportrait/20.mp3"},
#   {title: "Minstrel Boy (Live)", duration: "3:32", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/selfportrait/21.mp3"},
#   {title: "She Belongs to Me (Live)", duration: "2:43", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/selfportrait/22.mp3"},
#   {title: "Wigwam", duration: "3:09", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/selfportrait/23.mp3"},
#   {title: "Alberta #2", duration: "3:12", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/selfportrait/24.mp3"}
# ])

# overgrown.songs.create([
#   {title: "Overgrown", duration: "5:00", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/overgrown/1.mp3"},
#   {title: "I Am Sold", duration: "4:04", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/overgrown/2.mp3"},
#   {title: "Life Round Here", duration: "3:37", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/overgrown/3.mp3"},
#   {title: "Take A Fall For Me", duration: "3:34", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/overgrown/4.mp3"},
#   {title: "Retrograde", duration: "3:43", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/overgrown/5.mp3"},
#   {title: "DLM", duration: "2:26", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/overgrown/6.mp3"},
#   {title: "Digital Lion", duration: "4:47", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/overgrown/7.mp3"},
#   {title: "Voyeur", duration: "4:17", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/overgrown/8.mp3"},
#   {title: "To The Last", duration: "4:19", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/overgrown/9.mp3"},
#   {title: "Our Love Comes Back", duration: "3:39", track_url: "https://s3.us-east-2.amazonaws.com/sparkify2019/overgrown/10.mp3"}
# ])


# #### SPARKIFY PLAYLISTS

# party = spark.playlists.create({title: 'Party Up!', image_url: 'https://sparkifyimages.s3.amazonaws.com/party.jpg'})
# chill = spark.playlists.create({title: 'Chill Hits', image_url: 'https://sparkifyimages.s3.amazonaws.com/chill.jpg'})
# bedroom = spark.playlists.create({title: 'Bedroom Jams', image_url: 'https://sparkifyimages.s3.amazonaws.com/bedroom.jpg'})
# work = spark.playlists.create({title: "Workday Lounge", image_url: 'https://sparkifyimages.s3.amazonaws.com/work.jpg'})

# party.songs << outer.songs[6]
# party.songs << mised.songs[4]
# party.songs << trans.songs[3]
# party.songs << blitz.songs[1]
# party.songs << thriller.songs[4]

# bedroom.songs << falling.songs[0]
# bedroom.songs << channel.songs[1]
# bedroom.songs << anti.songs[6]
# bedroom.songs << prayer.songs[0]
# bedroom.songs << cominghome.songs[3]

# chill.songs << onandon.songs[7]
# chill.songs << blonde.songs[6]
# chill.songs << prayer.songs[0]
# chill.songs << talkie.songs[3]
# chill.songs << asleep.songs[9]

# work.songs << onandon.songs[13]
# work.songs << overgrown.songs[0]
# work.songs << round.songs[0]
# work.songs << rubber.songs[2]

# #### DEMO USER PLAYLISTS

# study = demo.playlists.create({title: 'Study Music', image_url: 'https://sparkifyimages.s3.amazonaws.com/asleep.jpg'})
# demo.followed_playlists << study
# gym = demo.playlists.create({title: "Workout Music", image_url: 'https://sparkifyimages.s3.amazonaws.com/outer.jpg'})
# demo.followed_playlists << gym

# study.songs << asleep.songs[5]
# study.songs << phren.songs[12]
# study.songs << nevermind.songs[2]

# gym.songs << outer.songs[6]
# gym.songs << mised.songs[4]
# gym.songs << trans.songs[3]
# gym.songs << blitz.songs[1]
# gym.songs << thriller.songs[4]


# # #### DEMO USER FOLLOWS

# demo.followed_artists << roots
# demo.followed_artists << sufjan
# demo.followed_artists << devendra
# demo.followed_artists << waits
# demo.followed_artists << lauryn
# demo.followed_artists << regina
# demo.followed_artists << brandy
# demo.followed_artists << rihanna
# demo.followed_artists << marvin
# demo.followed_artists << madonna

# demo.followed_albums << yoshimi
# demo.followed_albums << outer
# demo.followed_albums << falling
# demo.followed_albums << vibras
# demo.followed_albums << blonde
# demo.followed_albums << sweet
# demo.followed_albums << round
# demo.followed_albums << threefeet
# demo.followed_albums << rubber
# demo.followed_albums << black


# demo.followed_songs << selfportrait.songs[14]
# demo.followed_songs << mised.songs[2]
# demo.followed_songs << outside.songs[2]
# demo.followed_songs << whois.songs[8]