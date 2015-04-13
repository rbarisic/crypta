require 'rails_helper'

RSpec.describe "tasks/show", type: :view do
  before(:each) do
    @task = assign(:task, Task.create!(
      :command => "Command"
    ))
  end

  it "renders attributes in <p>" do
    render
    expect(rendered).to match(/Command/)
  end
end
