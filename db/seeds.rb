glass_arr = [true, false]
four_arr = [5,4,3,2,1]
countries = ['Canada', 'Van', 'USA', 'Backcountry']
# incr = 0
local_arr = ['Online', 'Utah', 'Vegas', 'San Diego', 'Reno']
years = (1999..2020).to_a

10.times do
  simon = Simon.create(
    glasses: glass_arr.sample,
    four_out_of_five: four_arr.sample,
    country_origin: countries.sample
  )

  4.times do |i|
    user = User.create(
      email: "test#{i}@email.com",
      password: 'password',
      name: Faker::Hacker::verb
    )

    Dpl.create(
      location: local_arr.sample,
      capacity: Faker::Number::digit,
      built: years.sample,
      user_id: user.id,
      simon_id: simon.id
    )
  end
end
