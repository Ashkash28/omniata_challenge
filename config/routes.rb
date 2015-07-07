Rails.application.routes.draw do
  root 'contacts#contacts_angular'
  resources :contacts do
    collection do
      get :contacts_angular
    end
  end
end
