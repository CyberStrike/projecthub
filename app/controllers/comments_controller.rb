class CommentsController < ApplicationController
  
  def create
    @project = Project.find(params[:project_id])
    @comment = @project.comments.build(params[:comment])

    if @comment.save
      flash[:notice] = "Your comment was saved."
      redirect_to @project
    else
      flash[:error] = "Your comment wasn't saved. Please try again."
      render :new
      # SPINACH we do not know about this render
    end
  end

  def destroy
    @project = Project.find(params[:project_id])
    @comment = @project.comments.find(params[:id])

    if @comment.destroy
      flash[:notice] = "Your comment was deleted"
      redirect_to @project
    else
      flash[:error] = "Your comment wasn't deleted. Please try again."
      redirect_to @project
    end
  end

end
