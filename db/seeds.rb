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

james = Artist.create({ name: 'James Brown', bio: 'coming soon'})
caribe = Artist.create({ name: 'El Caribefunk', bio: 'coming soon'})
billie = Artist.create({ name: 'Billie Eilish', bio: 'coming soon'})
jack = Artist.create({ name: 'Jack Johnson', bio: 'coming soon'})
air = Artist.create({ name: 'Air', bio: 'coming soon'})
devendra = Artist.create({ name: 'Devendra Banhart', bio: 'coming soon'})
can = Artist.create({ name: 'Can', bio: 'coming soon'})
frank = Artist.create({ name: 'Frank', bio: 'coming soon'})
elliott = Artist.create({ name: 'Elliott Smith', bio: 'coming soon'})
floyd = Artist.create({ name: 'Pink Floyd', bio: 'coming soon'})
outkast = Artist.create({ name: 'OutKast', bio: 'coming soon'})
sufjan = Artist.create({ name: 'Sufjan Stevens', bio: 'coming soon'})

soul = james.albums.create({ title: 'Soul on Top', genre: 'Funk', year: 1970 })
playa = caribe.albums.create({ title: 'El Playaman', genre: 'Latin', year: 2014 })
asleep = billie.albums.create({ 
  title: 'WHEN WE ALL FALL ASLEEP, WHERE DO WE GO?', 
  genre: 'Pop', year: 2019
})
onandon = jack.albums.create({ title: 'On and On', genre: 'Acoustic', year: 2003 })
talkie = air.albums.create({ title: 'Talkie Walkie', genre: 'Electronic', year: 2004 })
mala = devendra.albums.create({ title: 'Mala', genre: 'Acoustic', year: 2013 })
ege = can.albums.create({ title: 'Ege Bamyasi', genre: 'Rock', year: 1972 })
blonde = frank.albums.create({ title: 'Blonde', genre: 'Hip-Hop', year: 2016 })
either = elliott.albums.create({ title: 'Either/Or', genre: 'Acoustic', year: 1997 })
moon = floyd.albums.create({ title: 'Dark Side of the Moon', genre: 'Rock', year: 1973 })
atliens = outkast.albums.create({ title: 'ATLiens', genre: 'Hip-Hop', year: 1996 })

soul.songs.create([
  { title: 'That''s My Desire', duration: '4:07' },
  { title: 'Your Cheatin'' Heart', duration: '2:56' },
  { title: 'What Kind Of Fool Am I?', duration: '3:02' },
  { title: 'It''s A Man''s, Man''s, Man''s World', duration: '6:36' },
  { title: 'The Man In The Glass', duration: '5:52' },
  { title: 'It''s Magic', duration: '3:10' },
  { title: 'September Song', duration: '4:59' },
  { title: 'For Once In My Life', duration: '4:40' },
  { title: 'Everyday I Have The Blues', duration: '4:25' },
  { title: 'I Need Your Key (To Turn Me On)', duration: '3:43' },
  { title: "Papa's Got A Brand New Bag", duration: '4:38' },
  { title: 'There Was A Time', duration: '3:05' }
])

playa.songs.create([
  { title: 'El Playaman', duration: '4:10' },
  { title: 'Aguacero', duration: '3:51' },
  { title: 'Cirilo', duration: '3:12' },
  { title: 'Camina Maria', duration: '4:17' },
  { title: 'Cadencias', duration: '1:27' },
  { title: 'La Chamuyera', duration: '3:23' },
  { title: 'Musica', duration: '2:37' },
  { title: 'Fastidiado De Lo Bienb', duration: '3:10' },
  { title: 'San Antonio Hd', duration: '3:17' }
])

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
