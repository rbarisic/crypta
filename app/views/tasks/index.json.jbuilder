json.array!(@tasks) do |task|
  json.extract! task, :id, :command
  json.url task_url(task, format: :json)
end
