# leverages scaffolding
class VenuesController < ApplicationController
  before_action :set_venue, only: [:show, :update, :destroy]

  # GET /venues
  def index
    @venues = Venue.all

    render json: @venues
  end

  # GET /venues/1
  def show
    render json: @venue
  end

  # POST /venues
  def create
    @venue = Venue.new(venue_params)

    if @venue.save
      render json: @venue, status: :created, location: @venue
    else
      # this might be a place to add custom error handling for uniqueness i.e. a render json for the already existing object
      render json: @venue.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /venues/1
  def update
    if @venue.update(venue_params)
      render json: @venue
    else
      render json: @venue.errors, status: :unprocessable_entity
    end
  end

  # DELETE /venues/1
  def destroy
    @venue.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_venue
      @venue = Venue.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def venue_params
      params.require(:venue).permit(:name, :street, :latitude, :longitude, :placeId)
    end
end
