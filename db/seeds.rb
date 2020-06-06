# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Video.destroy_all
u1 = User.create({username: 'username', email: "email", password: 'password'}),




	
                    
v1 = Video.create!({id: 1, director_name: "Christopher Nolan", year: 2020, description: "Armed with only one word 
    -- Tenet -- and fighting for the survival of the entire world, the Protagonist 
    journeys through a twilight world of international espionage on a mission that 
    will unfold in something beyond real time.", title: "TENET", rating: "PG-13", url: "https://www.youtube.com/watch?v=L3pk_TBkihU"}),
    # <iframe width="560" height="315" src="https://www.youtube.com/embed/L3pk_TBkihU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

v2 = Video.create!({id: 2, director_name: "Cathy Yan", year: 2020, description: "After splitting with the Joker, Harley Quinn joins superheroes Black Canary, Huntress and Renee Montoya to save a young girl from an evil crime lord.
", title: "Birds of Prey", rating: "R", url: "https://www.youtube.com/watch?v=kGM4uYZzfu0&list=PLVfin74Qx3tV8bgAhzbfDpnfPoGmJWAcn&index=2"}),


v3 = Video.create!({id: 3, director_name: "Gavin O’Connor", year: 2020, description: "Jack Cunningham was an HS basketball phenom who walked away from the game, 
    forfeiting his future. Years later, when he reluctantly accepts a coaching job at his alma mater, he may get one last shot at redemption.", title: "THE WAY BACK", rating: "R", url: "https://www.youtube.com/watch?v=VzNJVSsjE-I"}),

v4 = Video.create!({id: 4, director_name: "Tim Story ", year: 2019, description: "JJ Shaft, a cyber security expert with a 
    degree from MIT, enlists his family's help to uncover the truth behind his best friend's 
    untimely death.", title: "Shaft", rating: "R", url: "https://www.youtube.com/watch?v=lD41XdWcmbY&list=PLVfin74Qx3tV8bgAhzbfDpnfPoGmJWAcn&index=25"}),
v5 = Video.create!({id: 5, director_name: "Todd Philips ", year: 2019, description: "In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: the Joker.", title: "Joker", rating: "R", url: "https://www.youtube.com/watch?v=zAGVQLHvwOY&list=PLVfin74Qx3tV8bgAhzbfDpnfPoGmJWAcn&index=6"})