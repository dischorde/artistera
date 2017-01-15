Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :courses, only: [:index, :show] do
      resources :assignments, only: [:show]
      resources :reviews, except: [:show, :new, :edit]
    end
    resources :assignments, only: [:index] do
      resources :projects, only: [:update, :create]
    end
    resources :projects, only: [:index, :show, :destroy]
    resources :attachments, only: [:create, :destroy]
  end
end
