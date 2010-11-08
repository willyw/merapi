# Be sure to restart your server when you modify this file.

# Your secret key for verifying cookie session data integrity.
# If you change this key, all old sessions will become invalid!
# Make sure the secret is at least 30 characters and all random, 
# no regular words or you'll be exposed to dictionary attacks.
ActionController::Base.session = {
  :key         => '_merapi_session',
  :secret      => 'ae5cc285a9dde37a362c6a65b3b4d474ff205dc3bf440be3c80e557bec204a810c5cbb4c05756a14e7022ca032607e2ae0744387290a3a3073dafb8d05bcd802'
}

# Use the database for sessions instead of the cookie-based default,
# which shouldn't be used to store highly confidential information
# (create the session table with "rake db:sessions:create")
# ActionController::Base.session_store = :active_record_store
