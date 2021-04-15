class Api::UsersController < ApplicationController

  def userSimons
    @user = User.find(params[:id])
    render json: @user.simons
  end
end
