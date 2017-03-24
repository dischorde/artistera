Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show, :edit]
    resource :session, only: [:create, :destroy]
    resources :courses, only: [:index, :show] do
      resources :assignments, only: [:show]
      resources :reviews, only: [:index, :create]
      resources :enrollments, only: [:create, :destroy]
    end
    resources :assignments, only: [:index] do
      resources :projects, only: [:update, :create]
    end
    resources :projects, only: [:index, :show, :destroy]
    resources :attachments, only: [:create, :destroy]
    resources :reviews, except: [:index, :create, :new, :edit]
  end
end
