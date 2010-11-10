directory = "/Users/willyyunnal/sites/merapi/public/images/pics"

Dir.entries( directory ).each do |x|
  puts "'http://merapiDonation.com/images/pics/" + x + "',"
end 