Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root "static_pages#root"
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy]
    resources :servers, only: [:create, :show, :index, :destroy]
    resources :channels, only: [:create, :show, :index, :destroy]
  end
end
