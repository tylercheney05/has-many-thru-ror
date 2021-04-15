class Api::DplsController < ApplicationController
  before_action :set_simon
  before_action :set_dpl, only: [:show, :update, :destroy]
  def index
    render json: @simon.dpls
  end
  def show
    render json: @dpl
  end
  def create 
    @dpl = @simon.dpls.new(dpl_params)
    if @dpl.save
      render json: @dpl
    else
      render json: { errors: @dpl.errors}, status: :unprocessable_entity
    end
  end
  def update 
    if @dpl.update(dpl_params)
      render json: @dpl
    else
      render json: { errors: @dpl.errors}, status: :unprocessable_entity
    end
  end
  def destroy
    @dpl.destroy
    render json: { message: 'dpl deleted' }
  end
  def dplUsers
    @users = User.all - @simon.users
    render json: @users
  end
  private
    def set_simon
      @simon = Simon.find(params[:simon_id])
    end
    def set_dpl
      @dpl = @simon.dpls.find(params[:id])
    end
    def dpl_params
      params.require(:dpl).permit(:location, :built, :capacity, :user_id)
    end
end