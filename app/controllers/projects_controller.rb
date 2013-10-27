class ProjectsController < ApplicationController
  def new
    @project = Project.new
  end

  def create
    @project = Project.new(params[:project])

    if @project.save
      flash[:notice]= "Your project was saved"
      redirect_to @project
    else
      flash[:error]= "Your project wasn't saved. Please try again"
      render :new
    end
  end

  def edit
  end

  def show
    @project = Project.find(params[:id])
    @comments = @project.comments
    @comment = Comment.new
  end

  def index
    @projects = Project.all
    @project = Project.new
  end
end
