# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Venue.destroy_all

Venue.create!(name: "Stan's Restaurant", street: "1029 Vermont Ave. NW", city: "Washington, DC")
Venue.create!(name: "Post Pub", street: "1422 L. St. NW", city: "Washington, DC")
Venue.create!(name: "Nellie's Sports Bar", street: "900 U St. NW", city: "Washington, DC")
Venue.create!(name: "Sax", street: "734 11th St. NW", city: "Washington, DC")
Venue.create!(name: "Clarendon Ballroom", street: "3185 Wilson Blvd.", city: "Arlington, VA")
Venue.create!(name: "Kabin Lounge", street: "1337 Connecticut Ave. NW", city: "Washington, DC")
Venue.create!(name: "The Codmother", street: "1334 U St. NW", city: "Washington, DC")
Venue.create!(name: "Midtown Lounge", street: "1219 Connecticut Ave. NW", city: "Washington, DC")
Venue.create!(name: "Lost Society", street: "2001 14th St. NW", city: "Washington, DC")
Venue.create!(name: "Chinese Disco", street: "3251 Prospect St. NW", city: "Washington, DC")
Venue.create!(name: "Stadium Club", street: "2127 Queens Chapel Rd. NE", city: "Washington, DC")
Venue.create!(name: "Mynt", street: "135 Calhoun St.", city: "Charleston, SC")
Venue.create!(name: "General Assembly", street: "1133 15th St. NW", city: "Washington, DC")
Venue.create!(name: "Old Brogue Irish Pub", street: "760 Walker Rd.", city: "Great Falls, VA")
Venue.create!(name: "The Palms", street: "101 W Nelson St.", city: "Lexington, VA")
