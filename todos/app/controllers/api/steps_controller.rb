class Api::StepsController < ApplicationController
    def index
        @steps = Todo.all
        render json: @steps
    end    

    def show
        @step = Todo.find_by(id: params[:id])
        render json: @step
    end

    def create
        @step = Todo.new(step_params)
        if @step.save
            render json: @step
        else
            render json: @step.errors.full_messages, status: 422
        end
    end


    def update
        @step = Todo.find(params[:id])

        if @step.update(step_params)
            render json: @step
        else
            render json: @step.errors.full_messages, status: 422
        end
    end

    def destroy
        @step = Todo.find_by(id: params[:id])
        @step.destroy
    end

    def step_params
        params.require(:step).permit(:title, :body, :done)
    end
end