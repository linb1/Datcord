Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root "static_pages#root"
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show, :index]
    resource :session, only: [:create, :destroy]
    resources :servers, only: [:create, :show, :index, :destroy]
    resources :channels, only: [:create, :show, :index, :destroy]
    resources :direct_messages, only: [:create, :show, :index, :destroy]
    resources :memberships, only: [:create]
    resources :dmemberships, only: [:create]
    resources :friendships, only: [:create, :index]
    resources :messages, only: [:create, :show]
    delete '/memberships', to: 'memberships#destroy'
    delete '/dmemberships', to: 'memberships#destroy'
    delete '/friendships', to: 'friendships#destroy'

    mount ActionCable.server => '/cable'
  end
end
