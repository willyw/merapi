ActionController::Routing::Routes.draw do |map|
  map.root :controller => "welcome", :action => "index"
  
  map.connect ':controller/:action/:id'
  map.connect ':controller/:action/:id.:format'
end
