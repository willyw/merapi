ActionController::Routing::Routes.draw do |map|
  map.root :controller => "welcome", :action => "index"
  map.about "/donate" , :controller =>"welcome", :action => "donate"
  
  map.connect ':controller/:action/:id'
  map.connect ':controller/:action/:id.:format'
end
