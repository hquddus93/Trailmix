  json.extract! user, :id, :username, :password, :email
  json.myListVideoIds user.videos_on_list.pluck(:id)
  json.previousViewIds user.previously_viewed_videos.pluck(:id)


  #mylist ids and previous_views ids