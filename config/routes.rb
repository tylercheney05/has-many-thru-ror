Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  namespace :api do
    resources :simons do
      resources :dpls
    end
    get 'simonUsers/:id', to: 'simons#simonUsers'
    get 'dplUsers/:simon_id', to: 'dpls#dplUsers'
    get 'userSimons/:id', to: 'users#userSimons'
  end
end