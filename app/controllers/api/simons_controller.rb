class Api::SimonsController < ApplicationController
  before_action :set_simons, only: [:show, :update, :destroy]
  def index
    render json: Simon.all
  end
  def show
    render json: @simon
  end
  def create
    @simon = Simon.new(simon_params)
    if @simon.save
      render json: @simon
    else
      render json: { errors: @simon.errors }, status: :unprocessable_entity
    end
  end
  def update
    if @simon.update(simon_params)
      render json: @simon
    else
      render json: { errors: @simon.errors }, status: :unprocessable_entity
    end
  end
  def destroy
    @simon.destroy
    render json: { message: 'Simon is gone' }
  end
  def simonUsers
    render json: @simon.users
  end
  private 
    def set_simons
      @simon = Simon.find(params[:id])
    end
    def simon_params
      params.require(:simon).permit(:glasses, :four_out_of_five, :country_origin)
    end
end