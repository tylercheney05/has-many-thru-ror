Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  namespace :api do
    resources :simons do
      resources :dpls
    end

    get 'simonUser', to: 'simons#simonUsers'
    get 'dplUser', to: 'dpls#dplUsers'
  end
end
