# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Season.destroy_all
Show.destroy_all
Genre.destroy_all
User.destroy_all
Video.destroy_all

u1 = User.create({username: 'username', email: "email", password: 'password'}),
#SHOWS#

sh1 = Show.create!(id:1,  name: "The Office", plot: "A mockumentary on a group of typical office workers, where the workday consists of ego clashes, inappropriate behavior, and tedium."),
sh2 = Show.create!(id:2,  name: "Brooklyn 99", plot: "'Brooklyn Nine-Nine' follows the exploits of hilarious Det. Jake Peralta and his diverse, lovable colleagues as they police the NYPD's 99th Precinct."),
sh3 = Show.create!(id:3,  name: "Avatar: The Last Airbender", plot: "In a war-torn world of elemental magic, a young boy reawakens to undertake a dangerous mystic quest to fulfill his destiny as the Avatar, and bring peace to the world."),
sh4 = Show.create!(id:4,  name: "Friends", plot: "Follows the personal and professional lives of six twenty to thirty-something-year-old friends living in Manhattan."),

#SEASONS#

se1 = Season.create!(id:1, name: "Four", show_id: sh1.id),
se2 = Season.create!(id:2, name: "Five", show_id: sh1.id),
se3 = Season.create!(id:3, name: "Six", show_id: sh1.id),
se4 = Season.create!(id:4, name: "Five", show_id: sh2.id),
se5 = Season.create!(id:5, name: "Six", show_id: sh2.id),
se6 = Season.create!(id:6, name: "One", show_id: sh3.id),
se7 = Season.create!(id:7, name: "Three", show_id: sh3.id),
se8 = Season.create!(id:8, name: "Five", show_id: sh4.id),
se9 = Season.create!(id:9, name: "Four", show_id: sh4.id),


	#VIDEOS#
                    
v1 = Video.create!({id: 1, director_name: "Christopher Nolan", year: 2020, description: "Armed with only one word -- Tenet -- and fighting for the survival of the entire world, the Protagonist journeys through a twilight world of international espionage on a mission that will unfold in something beyond real time.", title: "TENET", rating: "PG-13"}),
v1.url.attach(io: File.open("/Users/hiraquddus/Desktop/trailers/tenet.mp4"), filename: "tenet.mp4"),
v1.photo.attach(io: File.open("/Users/hiraquddus/Desktop/posters/tenet.png"), filename: "tenet.png"),

v2 = Video.create!({id: 2, director_name: "Cathy Yan", year: 2020, description: "After splitting with the Joker, Harley Quinn joins superheroes Black Canary, Huntress and Renee Montoya to save a young girl from an evil crime lord.", title: "Birds of Prey", rating: "R"}),
v2.url.attach(io: File.open("/Users/hiraquddus/Desktop/trailers/bop.mp4"), filename: "bop.mp4"),
v2.photo.attach(io: File.open("/Users/hiraquddus/Desktop/posters/bop.jpg"), filename: "bop.jpg"),


v3 = Video.create!({id: 3, director_name: "Gavin O’Connor", year: 2020, description: "Jack Cunningham was an HS basketball phenom who walked away from the game, forfeiting his future. Years later, when he reluctantly accepts a coaching job at his alma mater, he may get one last shot at redemption.", title: "THE WAY BACK", rating: "R"}),
v3.url.attach(io: File.open("/Users/hiraquddus/Desktop/trailers/twb.mp4"), filename: "twb.mp4"),
v3.photo.attach(io: File.open("/Users/hiraquddus/Desktop/posters/twb.jpg"), filename: "twb.jpg"),


v4 = Video.create!({id: 4, director_name: "Tim Story ", year: 2019, description: "JJ Shaft, a cyber security expert with a degree from MIT, enlists his family's help to uncover the truth behind his best friend's untimely death.", title: "Shaft", rating: "R"}),
v4.url.attach(io: File.open("/Users/hiraquddus/Desktop/trailers/shaft.mp4"), filename: "shaft.mp4"),
v4.photo.attach(io: File.open("/Users/hiraquddus/Desktop/posters/shaft.jpg"), filename: "shaft.jpg"),

    		
v6 = Video.create!({id: 6, director_name: "Kenneth Branagh ", year: 2020, description: "Artemis Fowl, a young criminal prodigy, hunts down a secret society of fairies to find his missing father.", title: "Artemis Fowl", rating:'PG'}),
v6.url.attach(io: File.open("/Users/hiraquddus/Desktop/trailers/artf.mp4"), filename: "artf.mp4"),
v6.photo.attach(io: File.open("/Users/hiraquddus/Desktop/posters/artf.jpg"), filename: "artf.jpg"),


v7 = Video.create!({id: 7, director_name: "Byron Howard, Rich Moore ", year: 2016, description: "From the largest elephant to the smallest shrew, the city of Zootopia is a mammal metropolis where various animals live and thrive. When Judy Hopps (Ginnifer Goodwin) becomes the first rabbit to join the police force, she quickly learns how tough it is to enforce the law. Determined to prove herself, Judy jumps at the opportunity to solve a mysterious case. Unfortunately, that means working with Nick Wilde (Jason Bateman), a wily fox who makes her job even harder.", title: "Zootopia", rating: "PG"}),
v7.url.attach(io: File.open("/Users/hiraquddus/Desktop/trailers/zootopia.mp4"), filename: "zootopia.mp4"),
v7.photo.attach(io: File.open("/Users/hiraquddus/Desktop/posters/zootopia.jpg"), filename: "zootopia.jpg"),


v8 = Video.create!({id: 8, director_name: "Guy Ritchie", year: 2019, description: "Aladdin is a lovable street urchin who meets Princess Jasmine, the beautiful daughter of the sultan of Agrabah. While visiting her exotic palace, Aladdin stumbles upon a magic oil lamp that unleashes a powerful, wisecracking, larger-than-life genie. As Aladdin and the genie start to become friends, they must soon embark on a dangerous mission to stop the evil sorcerer, Jafar, from overthrowing young Jasmine's kingdom.", title: "Aladdin", rating: "PG"}),
v8.url.attach(io: File.open("/Users/hiraquddus/Desktop/trailers/aladdin.mp4"), filename: "aladdin.mp4"),
v8.photo.attach(io: File.open("/Users/hiraquddus/Desktop/posters/aladdin.jpg"), filename: "aladdin.jpg"),



v9 = Video.create!({id: 9, director_name: "Jon Favreau", year: 2019, description: "Simba idolizes his father, King Mufasa, and takes to heart his own royal destiny on the plains of Africa. But not everyone in the kingdom celebrates the new cub's arrival. Scar, Mufasa's brother -- and former heir to the throne -- has plans of his own. The battle for Pride Rock is soon ravaged with betrayal, tragedy and drama, ultimately resulting in Simba's exile. Now, with help from a curious pair of newfound friends, Simba must figure out how to grow up and take back what is rightfully his.", title: "The Lion King", rating: "PG"}),
v9.url.attach(io: File.open("/Users/hiraquddus/Desktop/trailers/tlk.mp4"), filename: "tlk.mp4"),
v9.photo.attach(io: File.open("/Users/hiraquddus/Desktop/posters/lionking.jpg"), filename: "lionking.jpg"),

v10 = Video.create!({id: 10, director_name: "Niki Caro", year: 2020, description: "To save her ailing father from serving in the Imperial Army, a fearless young woman disguises herself as a man to battle northern invaders in China.", title: "Mulan", rating: "PG"}),
v10.url.attach(io: File.open("/Users/hiraquddus/Desktop/trailers/mulan.mp4"), filename: "mulan.mp4"),
v10.photo.attach(io: File.open("/Users/hiraquddus/Desktop/posters/mulan.jpg"), filename: "mulan.jpg"),


v11 = Video.create!({id: 11, director_name: "Josh Trank", year: 2020, description: "The 47-year old Al Capone, after 10 years in prison, starts suffering from dementia and comes to be haunted by his violent past.", title: "Capone", rating: "R"}),
v11.url.attach(io: File.open("/Users/hiraquddus/Desktop/trailers/capone.mp4"), filename: "capone.mp4"),
v11.photo.attach(io: File.open("/Users/hiraquddus/Desktop/posters/capone.jpg"), filename: "capone.jpg"),


v12 = Video.create!({id: 12, director_name: "Ryan Coogler", year: 2018, description: "After the death of his father, T'Challa returns home to the African nation of Wakanda to take his rightful place as king. When a powerful enemy suddenly reappears, T'Challa's mettle as king -- and as Black Panther -- gets tested when he's drawn into a conflict that puts the fate of Wakanda and the entire world at risk. Faced with treachery and danger, the young king must rally his allies and release the full power of Black Panther to defeat his foes and secure the safety of his people.", title: "Black Panther", rating: "PG-13"}),
v12.url.attach(io: File.open("/Users/hiraquddus/Desktop/trailers/blackpanther.mp4"), filename: "blackpanther.mp4"),
v12.photo.attach(io: File.open("/Users/hiraquddus/Desktop/posters/blackpanther.jpg"), filename: "blackpanther.jpg"),


v13 = Video.create!({id: 13, director_name: "Jon Watts", year: 2019, description: "Peter Parker's relaxing European vacation takes an unexpected turn when Nick Fury shows up in his hotel room to recruit him for a mission. The world is in danger as four massive elemental creatures -- each representing Earth, air, water and fire -- emerge from a hole torn in the universe. Parker soon finds himself donning the Spider-Man suit to help Fury and fellow superhero Mysterio stop the evil entities from wreaking havoc across the continent.", title: "Spider-Man: Far From Home", rating: "PG-13"}),
v13.url.attach(io: File.open("/Users/hiraquddus/Desktop/trailers/ffh.mp4"), filename: "ffh.mp4"),
v13.photo.attach(io: File.open("/Users/hiraquddus/Desktop/posters/ffh.jpg"), filename: "ffh.jpg"),


v14 = Video.create!({id: 14, director_name: "Jon Watts", year: 2017, description: "Thrilled by his experience with the Avengers, young Peter Parker returns home to live with his Aunt May. Under the watchful eye of mentor Tony Stark, Parker starts to embrace his newfound identity as Spider-Man. He also tries to return to his normal daily routine -- distracted by thoughts of proving himself to be more than just a friendly neighborhood superhero. Peter must soon put his powers to the test when the evil Vulture emerges to threaten everything that he holds dear.", title: "Spider-Man: Homecoming", rating: "PG-13"}),
v14.url.attach(io: File.open("/Users/hiraquddus/Desktop/trailers/homecoming.mp4"), filename: "homecoming.mp4"),
v14.photo.attach(io: File.open("/Users/hiraquddus/Desktop/posters/homecoming.jpg"), filename: "homecoming.jpg"),


v15 = Video.create!({id: 15, director_name: "Scott Derrickson", year: 2016, description: "DescriptionDr. Stephen Strange's (Benedict Cumberbatch) life changes after a car accident robs him of the use of his hands. When traditional medicine fails him, he looks for healing, and hope, in a mysterious enclave. He quickly learns that the enclave is at the front line of a battle against unseen dark forces bent on destroying reality. Before long, Strange is forced to choose between his life of fortune and status or leave it all behind to defend the world as the most powerful sorcerer in existence.", title: "Doctor Strange", rating: "PG-13"}),
v15.url.attach(io: File.open("/Users/hiraquddus/Desktop/trailers/drstrange.mp4"), filename: "drstrange.mp4"),
v15.photo.attach(io: File.open("/Users/hiraquddus/Desktop/posters/drstrange.jpg"), filename: "drstrange.jpg"),


v16 = Video.create!({id: 16, director_name: "James Gunn", year: 2014, description: "Brash space adventurer Peter Quill (Chris Pratt) finds himself the quarry of relentless bounty hunters after he steals an orb coveted by Ronan, a powerful villain. To evade Ronan, Quill is forced into an uneasy truce with four disparate misfits: gun-toting Rocket Raccoon, treelike-humanoid Groot, enigmatic Gamora, and vengeance-driven Drax the Destroyer. But when he discovers the orb's true power and the cosmic threat it poses, Quill must rally his ragtag group to save the universe.", title: "Guardians of the Galaxy", rating: "PG-13"}),
v16.url.attach(io: File.open("/Users/hiraquddus/Desktop/trailers/gg.mp4"), filename: "gg.mp4"),
v16.photo.attach(io: File.open("/Users/hiraquddus/Desktop/posters/gg.jpg"), filename: "gg.jpg"),


v17 = Video.create!({id: 17, director_name: "James Mangold", year: 2017, description: "Growing up in the early 1800s, P.T. Barnum displays a natural talent for publicity and promotion, selling lottery tickets by age 12. After trying his hands at various jobs, P.T. turns to show business to indulge his limitless imagination, rising from nothing to create the Barnum & Bailey circus. Featuring catchy musical numbers, exotic performers and daring acrobatic feats, Barnum's mesmerizing spectacle soon takes the world by storm to become the greatest show on Earth.", title: "The Greatest Showman", rating: "PG"}),
v17.url.attach(io: File.open("/Users/hiraquddus/Desktop/trailers/tgs.mp4"), filename: "tgs.mp4"),
v17.photo.attach(io: File.open("/Users/hiraquddus/Desktop/posters/tgs.jpg"), filename: "tgs.jpg"),


v18 = Video.create!({id: 18, director_name: "Christopher McQuarrie", year: 2018, description: "Ethan Hunt and the IMF team join forces with CIA assassin August Walker to prevent a disaster of epic proportions. Arms dealer John Lark and a group of terrorists known as the Apostles plan to use three plutonium cores for a simultaneous nuclear attack on the Vatican, Jerusalem and Mecca, Saudi Arabia. When the weapons go missing, Ethan and his crew find themselves in a desperate race against time to prevent them from falling into the wrong hands.", title: "Mission: Impossible - Fallout", rating: "PG-13"}),
v18.url.attach(io: File.open("/Users/hiraquddus/Desktop/trailers/mi.mp4"), filename: "mi.mp4"),
v18.photo.attach(io: File.open("/Users/hiraquddus/Desktop/posters/mifo.png"), filename: "mifo.png"),


v19 = Video.create!({id: 19, director_name: "Russo Brothers", year: 2018, description: "Iron Man, Thor, the Hulk and the rest of the Avengers unite to battle their most powerful enemy yet -- the evil Thanos. On a mission to collect all six Infinity Stones, Thanos plans to use the artifacts to inflict his twisted will on reality. The fate of the planet and existence itself has never been more uncertain as everything the Avengers have fought for has led up to this moment.", title: "Avengers: Infinity War", rating: "PG-13"}),
v19.url.attach(io: File.open("/Users/hiraquddus/Desktop/trailers/infinitywar.mp4"), filename: "infinitywar.mp4"),
v19.photo.attach(io: File.open("/Users/hiraquddus/Desktop/posters/infinitywar.jpg"), filename: "infinitywar.jpg"),


v20 = Video.create!({id: 20, director_name: "Russo Brothers", year: 2019, description: "Adrift in space with no food or water, Tony Stark sends a message to Pepper Potts as his oxygen supply starts to dwindle. Meanwhile, the remaining Avengers -- Thor, Black Widow, Captain America and Bruce Banner -- must figure out a way to bring back their vanquished allies for an epic showdown with Thanos -- the evil demigod who decimated the planet and the universe.", title: "Avengers: Endgame", rating: "PG-13"}),
v20.url.attach(io: File.open("/Users/hiraquddus/Desktop/trailers/endgame.mp4"), filename: "endgame.mp4"),
v20.photo.attach(io: File.open("/Users/hiraquddus/Desktop/posters/endgame.jpg"), filename: "endgame.jpg"),


v21 = Video.create!({id: 21, director_name: "Dan Goor, Michael Schur", year: 2013, description: "Police line-up", title: "I Want it That Way", rating: "PG-13", season_id: se4.id}),
v21.url.attach(io: File.open("/Users/hiraquddus/Desktop/trailers/b99-lineup.mov"), filename: "b99-lineup.mov"),
v21.photo.attach(io: File.open("/Users/hiraquddus/Desktop/posters/b99.jpg"), filename: "b99.jpg"),

v22 = Video.create!({id: 22, director_name: "Dan Goor, Michael Schur", year: 2013, description: "Season 6 Trailer", title: "Season 6 Trailer", rating: "PG-13", season_id: se5.id}),
v22.url.attach(io: File.open("/Users/hiraquddus/Desktop/trailers/b99-season6.mov"), filename: "b99-season6.mov"),
v22.photo.attach(io: File.open("/Users/hiraquddus/Desktop/posters/b99.jpg"), filename: "b99.jpg"),

v23 = Video.create!({id: 23, director_name: "Greg Daniels", year: 2005, description: "Michael hits Meredith with his car", title: "Fun Run", rating: "PG-13", season_id: se1.id}),
v23.url.attach(io: File.open("/Users/hiraquddus/Desktop/trailers/office-car.mov"), filename: "office-car.mov"),
v23.photo.attach(io: File.open("/Users/hiraquddus/Desktop/posters/office.jpg"), filename: "office.jpg"),

v24 = Video.create!({id: 24, director_name: "Greg Daniels", year: 2005, description: "The Office learns Basic Life Support", title: "Stress Relief", rating: "PG-13", season_id: se2.id}),
v24.url.attach(io: File.open("/Users/hiraquddus/Desktop/trailers/office-cpr.mov"), filename: "office-cpr.mov"),
v24.photo.attach(io: File.open("/Users/hiraquddus/Desktop/posters/office.jpg"), filename: "office.jpg"),

v25 = Video.create!({id: 25, director_name: "Greg Daniels", year: 2005, description: "The Office gets a lesson in fire safety", title: "Fire Safety", rating: "PG-13", season_id: se3.id}),
v25.url.attach(io: File.open("/Users/hiraquddus/Desktop/trailers/office-fire.mov"), filename: "office-fire.mov"),
v25.photo.attach(io: File.open("/Users/hiraquddus/Desktop/posters/office.jpg"), filename: "office.jpg"),

v26 = Video.create!({id: 26, director_name: "James Burrows", year: 2004, description: "The friends haul a sofa up a narrow NYC staircase", title: "The one with the Cop", rating: "PG-13", season_id: se8.id}),
v26.url.attach(io: File.open("/Users/hiraquddus/Desktop/trailers/friends-pivot.mov"), filename: "friends-pivot.mov"),
v26.photo.attach(io: File.open("/Users/hiraquddus/Desktop/posters/friends.jpg"), filename: "friends.jpg"),

v27 = Video.create!({id: 27, director_name: "James Burrows", year: 2004, description: "Rachel gets a new pet", title: "The One with the Cat", rating: "PG-13", season_id: se9.id}),
v27.url.attach(io: File.open("/Users/hiraquddus/Desktop/trailers/friends-cat.mov"), filename: "friends-cat.mov"),
v27.photo.attach(io: File.open("/Users/hiraquddus/Desktop/posters/friends.jpg"), filename: "friends.jpg"),

v28 = Video.create!({id: 28, director_name: "Michael Dante DiMartino, Bryan Konietzko", year: 2004, description: "Season 1 Trailer", title: "Book 1", rating: "PG", season_id: se6.id}),
v28.url.attach(io: File.open("/Users/hiraquddus/Desktop/trailers/avatars1.mov"), filename: "avatars1.mov"),
v28.photo.attach(io: File.open("/Users/hiraquddus/Desktop/posters/avatar2.jpg"), filename: "avatar2.jpg"),

v29 = Video.create!({id: 29, director_name: "Michael Dante DiMartino, Bryan Konietzko", year: 2004, description: "Season 3 Trailer", title: "Book 3", rating: "PG", season_id: se7.id}),
v29.url.attach(io: File.open("/Users/hiraquddus/Desktop/trailers/avatar-s3.mov"), filename: "avatar-s3.mov"),
v29.photo.attach(io: File.open("/Users/hiraquddus/Desktop/posters/avatar2.jpg"), filename: "avatar2.jpg"),



#GENRES#
g1 = Genre.create!({id:1, genre: 'Action', video_id: v1.id}),
g2 = Genre.create!({id:2, genre: 'Action', video_id: v2.id}),
g3 = Genre.create!({id:3, genre: 'Drama', video_id: v3.id}),
g4 = Genre.create!({id:4, genre: 'Drama', video_id: v4.id}),
g5 = Genre.create!({id:5, genre: 'Thriller', video_id: v1.id}),
g6 = Genre.create!({id:6, genre: 'Thriller', video_id: v6.id}),
g7 = Genre.create!({id:7, genre: 'Comedy', video_id: v7.id}),
g8 = Genre.create!({id:8, genre: 'Family', video_id: v7.id}),
g9 = Genre.create!({id:9, genre: 'Family', video_id: v8.id}),
g10 = Genre.create!({id:10, genre: 'Comedy', video_id: v8.id}),
g11 = Genre.create!({id:11, genre: 'Family', video_id: v9.id}),
g12 = Genre.create!({id:12, genre: 'Family', video_id: v10.id}),
g13 = Genre.create!({id:13, genre: 'Action', video_id: v10.id}),
g14 = Genre.create!({id:14, genre: 'Crime', video_id: v11.id}),
g15 = Genre.create!({id:15, genre: 'Drama', video_id: v11.id}),
g16 = Genre.create!({id:16, genre: 'Action', video_id: v12.id}),
g17 = Genre.create!({id:17, genre: 'Action', video_id: v13.id}),
g18 = Genre.create!({id:18, genre: 'Action', video_id: v14.id}),
g19 = Genre.create!({id:19, genre: 'Action', video_id: v15.id}),
g20 = Genre.create!({id:20, genre: 'Action', video_id: v16.id}),
g21 = Genre.create!({id:21, genre: 'Action', video_id: v17.id}),
g22 = Genre.create!({id:22, genre: 'Action', video_id: v18.id}),
g23 = Genre.create!({id:23, genre: 'Action', video_id: v19.id}),
g24 = Genre.create!({id:24, genre: 'Action', video_id: v20.id}),
g25 = Genre.create!({id:25, genre: 'Comedy', video_id: v21.id}),
g26 = Genre.create!({id:26, genre: 'Crime', video_id: v21.id}),
g27 = Genre.create!({id:27, genre: 'Crime', video_id: v22.id}),
g28 = Genre.create!({id:28, genre: 'Comedy', video_id: v22.id}),
g29 = Genre.create!({id:29, genre: 'Comedy', video_id: v23.id}),
g30 = Genre.create!({id:30, genre: 'Comedy', video_id: v24.id}),
g31 = Genre.create!({id:31, genre: 'Comedy', video_id: v25.id}),
g32 = Genre.create!({id:32, genre: 'Comedy', video_id: v26.id}),
g33 = Genre.create!({id:33, genre: 'Comedy', video_id: v27.id}),
g34 = Genre.create!({id:34, genre: 'Family', video_id: v28.id}),
g35 = Genre.create!({id:35, genre: 'Family', video_id: v29.id})








