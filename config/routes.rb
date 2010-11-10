ActionController::Routing::Routes.draw do |map|
  map.root :controller => "welcome", :action => "index"
  map.about "/about_us" , :controller =>"welcome", :action => "about"
  
  map.connect ':controller/:action/:id'
  map.connect ':controller/:action/:id.:format'
end
